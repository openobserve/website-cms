export default [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:", "blob:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "openobserve-prod-website.s3.us-west-2.amazonaws.com",
            "openobserve-staging-website.s3.us-west-2.amazonaws.com",
            "openobserve.ai",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "openobserve-prod-website.s3.us-west-2.amazonaws.com",
            "openobserve-staging-website.s3.us-west-2.amazonaws.com",
            "openobserve.ai",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
