export type ImageBlock = {
  type: "image";
  image: string;
};

export type TextBlock = {
  type: "text";
  text: string;
};

export type ImageGridBlock = {
  type: "imageGrid";
  images: string[];
  columns: 2 | 3;
};

export type Block = ImageBlock | TextBlock | ImageGridBlock;

export type Project = {
  title: string;
  slug: string;
  year: number;
  description?: string;
  blocks: Block[];
};
