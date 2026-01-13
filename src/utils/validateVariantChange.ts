import { errors } from "@strapi/utils";
const { ValidationError } = errors;

// Type definitions
interface Change {
  type: "text" | "style" | "html" | "image";
  selector?: string;
  value?: string;
  style?: string;
  html?: string;
  image?: any;
}

interface Variant {
  changes?: Change[];
}

interface Goal {
  type: "Time On Page" | "Scroll Depth" | "Click" | "Page View";
  value?: string | number;
}

interface ValidationData {
  data?: {
    variants?: Variant[];
    targetingRules?: {
      goal?: Goal;
    };
  };
}

// Type for params from Strapi middleware
type StrapiParams = Record<string, any>;

// Mapping of change types to their required fields
const CHANGE_TYPE_REQUIREMENTS: Record<
  string,
  { field: string; label: string }
> = {
  text: { field: "value", label: "Value" },
  style: { field: "style", label: "Style" },
  html: { field: "html", label: "HTML" },
  image: { field: "image", label: "Image" },
};

// Goal types that require a value
const GOAL_TYPES_REQUIRING_VALUE = ["Time On Page", "Scroll Depth"];

export function validateVariantChanges(data: StrapiParams): void {
  const variants = data?.data?.variants;

  if (!Array.isArray(variants) || variants.length === 0) {
    return;
  }

  variants.forEach((variant, variantIndex) => {
    const changes = variant?.changes;

    if (!Array.isArray(changes)) {
      return;
    }

    changes.forEach((change, changeIndex) => {
      const { type, selector } = change;

      // Validate selector is present
      if (!selector || selector.trim() === "") {
        throw new ValidationError(
          `AB Experiment Validation Error: Selector is required for Variant ${variantIndex + 1}, Change ${changeIndex + 1}`
        );
      }

      // Validate type-specific required fields
      const requirement = CHANGE_TYPE_REQUIREMENTS[type];
      if (requirement) {
        const fieldValue = change[requirement.field as keyof Change];

        if (
          !fieldValue ||
          (typeof fieldValue === "string" && fieldValue.trim() === "")
        ) {
          throw new ValidationError(
            `AB Experiment Validation Error: ${requirement.label} is required for change type "${type}" in Variant ${variantIndex + 1}, Change ${changeIndex + 1}`
          );
        }
      }
    });
  });
}

export function validateGoalType(data: StrapiParams): void {
  const goal = data?.data?.targetingRules?.goal;

  if (!goal || !goal.type) {
    return;
  }

  const { type, value } = goal;

  // Check if this goal type requires a value
  if (GOAL_TYPES_REQUIRING_VALUE.includes(type)) {
    if (!value || (typeof value === "string" && value.trim() === "")) {
      throw new ValidationError(
        `AB Experiment Validation Error: Goal value is required for goal type "${type}"`
      );
    }

    // Additional validation for numeric values
    if (type === "Scroll Depth") {
      const numericValue =
        typeof value === "string" ? parseFloat(value) : value;
      if (isNaN(numericValue) || numericValue < 0 || numericValue > 100) {
        throw new ValidationError(
          `AB Experiment Validation Error: Scroll Depth value must be a number between 0 and 100 (received: ${value})`
        );
      }
    }

    if (type === "Time On Page") {
      const numericValue =
        typeof value === "string" ? parseFloat(value) : value;
      if (isNaN(numericValue) || numericValue <= 0) {
        throw new ValidationError(
          `AB Experiment Validation Error: Time On Page value must be a positive number (received: ${value})`
        );
      }
    }
  }
}
