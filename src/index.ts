import type { Core } from '@strapi/strapi';
import {
  validateVariantChanges,
  validateGoalType,
} from "./utils/validateVariantChange";
import { backfillEventTimes } from "./utils/backfillEventTimes";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register( { strapi }: { strapi: Core.Strapi } ) {
    // Registering a custom service
    strapi.documents.use(async (context, next) => {
      const { uid, action, params } = context;
      // Only apply to your content type
      if (uid === "api::ab-experiment.ab-experiment") {
        // Intercept create & update operations
        if (["create", "update"].includes(action)) {
          validateVariantChanges(params);
          validateGoalType(params);
        }
      }
      return next();
    });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap() {
     strapi.server.httpServer.requestTimeout = 5 * 60 * 1000;

     // Populates the naive eventDate/eventTime fields from the legacy datetime
     // columns. Reports by default; set BACKFILL_EVENT_TIMES=apply to write.
     await backfillEventTimes(strapi);
  },
};
