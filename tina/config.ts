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
            type: "object",
            name: "blocks",
            label: "Content",
            list: true,

            templates: [
              {
                name: "text",
                label: "Text",
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Text",
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },

              {
                name: "image",
                label: "Image",
                fields: [
                  {
                    type: "image",
                    name: "image",
                    label: "Image",
                  },
                ],
              },

              {
                name: "imageGrid",
                label: "Image Grid",
                fields: [
                  {
                    type: "image",
                    name: "images",
                    label: "Images",
                    list: true,
                  },

                  {
                    type: "number",
                    name: "columns",
                    label: "Columns",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
