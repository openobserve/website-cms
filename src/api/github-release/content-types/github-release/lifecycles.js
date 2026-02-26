'use strict';

module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;
    if (data.isLatest === true) {
      await strapi.db.query('api::github-release.github-release').updateMany({
        where: {
          isLatest: true,
          type: data.type.toUpperCase(),
        },
        data: {
          isLatest: false,
        },
      });
    }
  },
};
