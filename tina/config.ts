import { defineConfig } from "tinacms";

export default defineConfig({
  branch:
    process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    "main",

  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "project",
        label: "Projects",
        path: "content/projects",

        fields: [
          {
            type: "number",
            name: "order",
            label: "Order",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true,
            ui: {
              parse: (value) => {
                return value
                  ?.toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .replace(/[^a-z0-9-]+/g, "-")
                  .replace(/-+/g, "-");
              },
            },
          },
          {
            type: "number",
            name: "year",
            label: "Year",
          },

          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },

          {
            type: "rich-text",
            name: "body",
            label: "Text",
          },
          {
            type: "image",
            name: "images",
            label: "Images",
            list: true,
          },
        ],
      },
      {
        name: "siteSettings",
        label: "Site Settings",
        path: "content/settings",
        format: "md",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Site Name",
            required: true,
          },
          {
            type: "image",
            name: "logo",
            label: "Logo",
          },
        ],
      },
      {
        name: "about",
        label: "About",
        path: "content/about",
        format: "md",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "About text",
            isBody: true,
          },
        ],
      },
    ],
  },
});
