export default ({ env }) => ({
  "strapi-v5-plugin-populate-deep": {
    config: {
      defaultDepth: 10, // Default is 5
    },
  },
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        rootPath: "assets",
        s3Options: {
          region: env("AWS_REGION"),
          params: {
            Bucket: env("AWS_BUCKET"),
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
