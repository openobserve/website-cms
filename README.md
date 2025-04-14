# Getting started with Strapi

Strapi comes with a full-featured [Command Line Interface](https://docs.strapi.io/dev-docs/installation/cli) (CLI) which lets you set up a project.

## Develop

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

## Build

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## Start

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

## Making Changes After Deployment

After deploying your Strapi application, you may need to add new content types, update existing ones, or introduce new components. Here’s how to handle such changes effectively:

### Adding a New Page (Single Type or Collection Type)

#### Single Type (e.g., About Page, Homepage, Settings Page)
1. Log in to the Strapi Admin Panel.
2. Navigate to **Content-Type Builder**.
3. Click **Create a new Single Type**.
4. Define the structure by adding necessary fields.
5. Save the changes and restart the server if required.
6. Populate content from the **Content Manager**.
7. Deploy the updated API and ensure the frontend consumes the new endpoint.

#### Collection Type (e.g., Blog Posts, Products, Services)
1. Go to **Content-Type Builder**.
2. Click **Create a new Collection Type**.
3. Add relevant fields like title, description, images, etc.
4. Save and restart the server if necessary.
5. Add entries in **Content Manager**.
6. Verify API endpoints and update the frontend accordingly.

### Creating a New Component
1. Go to **Content-Type Builder** > **Components**.
2. Click **Create a new Component**.
3. Add fields required for the component (e.g., text, images, relations, etc.).
4. Save the component.
5. Attach the component to a relevant content type.
6. Restart Strapi if required.
