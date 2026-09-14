/**
 * Fills the naive `eventDate` / `eventTime` fields from the legacy datetime
 * columns, so deploying the schema populates existing content instead of
 * leaving editors to retype every entry.
 *
 * Runs from bootstrap, after Strapi has synced the schema, and is safe to run on
 * every boot: it only ever touches rows where the new column is still NULL, so
 * it never overwrites anything an editor has since changed.
 *
 * Controlled by BACKFILL_EVENT_TIMES:
 *   report (default) — log what it would write, change nothing
 *   apply            — write the values
 *   off              — skip entirely
 *
 * It defaults to `report` on purpose. The one thing that cannot be verified from
 * outside the database is how the driver renders the stored timestamp, so the
 * first deploy should print its plan and have it eyeballed against the REST API
 * before anyone flips it to `apply`.
 */

const TIMEZONE_LABELS: Record<string, string> = {
  ET: "America/New_York",
  CT: "America/Chicago",
  MT: "America/Denver",
  PT: "America/Los_Angeles",
  IST: "Asia/Kolkata",
  GMT: "Etc/GMT",
};
const DEFAULT_LABEL = "ET";

type Mode = "wallclock" | "instant";

type Target = {
  table: string;
  start: string;
  end: string | null;
  /**
   * wallclock — the stored digits are already the event's local time, so they
   *   are copied across verbatim (this is exactly what the site renders today).
   * instant — the stored value is a real UTC moment (webinars), so it is
   *   converted into the entry's own timeZone first: 15:00Z + ET is 11:00.
   */
  mode: Mode;
};

const TARGETS: Target[] = [
  { table: "webinar_posts", start: "date", end: null, mode: "instant" },
  {
    table: "components_elements_event_card_items",
    start: "event_start_date",
    end: "event_end_date",
    mode: "wallclock",
  },
  {
    table: "components_landing_page_component_event_hero_simples",
    start: "date",
    end: "end_date",
    mode: "wallclock",
  },
  {
    table: "components_landing_page_component_event_dinner_heroes",
    start: "date",
    end: "end_date",
    mode: "wallclock",
  },
];

/**
 * Renders a timestamp column as a plain "YYYY-MM-DD HH:MM" string in the
 * database itself, so the value never passes through a JS Date and cannot be
 * shifted by the driver's or the server's timezone.
 */
function naiveExpression(client: string, column: string): string {
  if (client.includes("postgres")) return `to_char("${column}", 'YYYY-MM-DD HH24:MI')`;
  if (client.includes("mysql")) return `date_format(\`${column}\`, '%Y-%m-%d %H:%i')`;
  return `strftime('%Y-%m-%d %H:%M', "${column}")`; // sqlite
}

/** "2025-09-24 15:00" -> { date: "2025-09-24", time: "15:00" | null } */
function splitNaive(raw: string | null) {
  if (!raw) return { date: null, time: null };
  const [date, clock] = raw.trim().split(/[ T]/);
  if (!date) return { date: null, time: null };
  const time = !clock || clock.startsWith("00:00") ? null : clock.slice(0, 5);
  return { date, time };
}

/** The same instant expressed as a wall clock in `label`'s zone. */
function toZone(raw: string, label: string) {
  const zone = TIMEZONE_LABELS[label] ?? TIMEZONE_LABELS[DEFAULT_LABEL];
  const instant = new Date(`${raw.trim().replace(" ", "T")}:00Z`);
  if (Number.isNaN(instant.getTime())) return { date: null, time: null };

  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: zone,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).formatToParts(instant);

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const hour = get("hour") === "24" ? "00" : get("hour");
  const time = `${hour}:${get("minute")}`;

  return {
    date: `${get("year")}-${get("month")}-${get("day")}`,
    time: time === "00:00" ? null : time,
  };
}

export async function backfillEventTimes(strapi: any) {
  const setting = (process.env.BACKFILL_EVENT_TIMES ?? "report").toLowerCase();
  if (setting === "off") return;
  const apply = setting === "apply";

  const knex = strapi.db.connection;
  const client: string = knex.client?.config?.client ?? "postgres";
  const log = (msg: string) => strapi.log.info(`[event-times] ${msg}`);

  for (const target of TARGETS) {
    try {
      if (!(await knex.schema.hasTable(target.table))) continue;
      // The new columns only exist once the schema change has deployed.
      if (!(await knex.schema.hasColumn(target.table, "event_date"))) {
        log(`${target.table}: event_date not present yet, skipping`);
        continue;
      }

      const hasTz = await knex.schema.hasColumn(target.table, "time_zone");
      const hasEnd =
        target.end && (await knex.schema.hasColumn(target.table, "event_ends_on"));

      const select: any = {
        id: "id",
        start: knex.raw(naiveExpression(client, target.start)),
      };
      if (hasEnd) select.end = knex.raw(naiveExpression(client, target.end!));
      if (hasTz) select.tz = "time_zone";

      const rows = await knex(target.table)
        .select(select)
        .whereNull("event_date")
        .whereNotNull(target.start);

      if (!rows.length) {
        log(`${target.table}: nothing to backfill`);
        continue;
      }

      let written = 0;
      for (const row of rows) {
        const label = (row.tz ?? DEFAULT_LABEL).toString().trim().toUpperCase();
        const from =
          target.mode === "instant"
            ? toZone(row.start, label)
            : splitNaive(row.start);
        if (!from.date) continue;

        const update: Record<string, unknown> = {
          event_date: from.date,
          event_time: from.time ? `${from.time}:00.000` : null,
        };
        if (hasEnd) update.event_ends_on = splitNaive(row.end).date;

        if (apply) {
          await knex(target.table).where({ id: row.id }).update(update);
          written += 1;
        } else {
          log(
            `  would set #${row.id}: ${row.start} (${label}) -> ` +
              `eventDate=${update.event_date} eventTime=${update.event_time ?? "-"}` +
              (hasEnd ? ` eventEndsOn=${update.event_ends_on ?? "-"}` : ""),
          );
        }
      }

      log(
        apply
          ? `${target.table}: backfilled ${written} row(s)`
          : `${target.table}: ${rows.length} row(s) would be backfilled (report mode)`,
      );
    } catch (error: any) {
      // Never block startup over a convenience backfill.
      strapi.log.error(
        `[event-times] ${target.table} skipped: ${error?.message ?? error}`,
      );
    }
  }
}
