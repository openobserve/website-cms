import type { Core } from '@strapi/strapi';
import {
  validateVariantChanges,
  validateGoalType,
} from "./utils/validateVariantChange";

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
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},
};
