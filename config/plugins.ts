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
        baseUrl: "https://openobserve.ai",
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

      // Custom filename sanitizer without slugify
      sanitizeFilename: (file: { name: string; hash: string; ext: string }) => {
        // Remove the extension
        const originalName = file.name.replace(/\.[^/.]+$/, "");

        // Replace spaces with dash (optional)
        const sanitizedBase = originalName.replace(/ /g, "-");

        // Append hash to ensure uniqueness
        return `${sanitizedBase}_${file.hash}${file.ext}`;
      },
    },
  },
});
