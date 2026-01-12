import { errors } from "@strapi/utils";
const { ValidationError } = errors;

export function validateVariantChanges(data: any) {
  const variants = data?.data?.variants;
  if (!Array.isArray(variants)) return;

  variants?.forEach((changes, index) => {
    changes?.changes?.forEach((change: any) => {
      const { type, value, style, html, image } = change;
      switch (type) {
        case "text":
          if (!value) {
            throw new ValidationError(
              `Value is required when you select type is text in the changes of variant`
            );
          }
          break;
        case "style":
          if (!style) {
            throw new ValidationError(
              `Style is required when you select type is style in the changes of variant`
            );
          }
          break;
        case "html":
          if (!html) {
            throw new ValidationError(
              `Html is required when you select type is html in the changes of variant`
            );
          }
          break;
        case "image":
          if (!image) {
            throw new ValidationError(
              `Image is required when you select type is image in the changes of variant`
            );
          }
          break;
      }
    });
  });
}

export function validateGoalType(data: any) {
  const goal = data?.data?.targetingRules?.goal;
  if (!goal) return;

  const { type, value } = goal;
  switch (type) {
    case "Time On Page":
      if (!value) {
        throw new ValidationError(
          `Value is required when you select goal type is Time On Page in the targetingRules`
        );
      }
      break;
    case "Scroll Depth":
      if (!value) {
        throw new ValidationError(
          `Value is required when you select goal type is Scroll Depth in the targetingRules`
        );
      }
      break;
  }
}