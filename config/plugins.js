module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        rootPath: "assets",
        region: env("AWS_REGION"),
        params: {
          Bucket: env("AWS_BUCKET"),
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
