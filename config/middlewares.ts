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
            "openobserve-website-staging.s3.us-east-2.amazonaws.com",
            "openobserve-website-prod.s3.us-east-2.amazonaws.com",
            "openobserve-dev-website.s3.us-east-2.amazonaws.com",
            "openobserve.ai",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "openobserve-prod-website.s3.us-west-2.amazonaws.com",
            "openobserve-staging-website.s3.us-west-2.amazonaws.com",
            "openobserve-website-staging.s3.us-east-2.amazonaws.com",
            "openobserve-website-prod.s3.us-east-2.amazonaws.com",
            "openobserve-dev-website.s3.us-east-2.amazonaws.com",
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
  {
    name: "strapi::body",
    config: {
      jsonLimit: "200mb",
      formLimit: "200mb",
      textLimit: "200mb",
      formidable: {
        maxFileSize: 200 * 1024 * 1024, // 200MB
      },
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
