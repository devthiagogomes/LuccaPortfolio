import { Project } from "@/types/project";

export const project: Project = {
  title: "AW 2014",
  slug: "aw2014",
  year: 2014,
  description: "Uma coleção experimental.",
  blocks: [
    { type: "text", text: "Primeiro texto." },
    { type: "text", text: "Segundo texto." },
    { type: "image", image: "/images/test.jpg" },
    { type: "text", text: "Terceiro texto." },
  ],
};
