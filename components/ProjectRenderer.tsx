import { TextBlock } from "./blocks/TextBlock";
import { ImageBlock } from "./blocks/ImageBlock";
import { ImageGridBlock } from "./blocks/ImageGridBlock";

type ProjectRendererProps = {
  blocks:
    | Array<
        | {
            __typename: "ProjectBlocksText";
            text?: string | null;
          }
        | {
            __typename: "ProjectBlocksImage";
            image?: string | null;
          }
        | {
            __typename: "ProjectBlocksImageGrid";
            images?: (string | null)[] | null;
            columns?: number | null;
          }
        | null
      >
    | null
    | undefined;
};

export function ProjectRenderer({ blocks }: ProjectRendererProps) {
  if (!blocks) return null;

  return (
    <>
      {blocks.map((block, index) => {
        if (!block) return null;

        switch (block.__typename) {
          case "ProjectBlocksText":
            return <TextBlock key={index} text={block.text} />;

          case "ProjectBlocksImage":
            return <ImageBlock key={index} image={block.image} />;

          case "ProjectBlocksImageGrid":
            return (
              <ImageGridBlock
                key={index}
                images={block.images}
                columns={block.columns}
              />
            );

          default:
            return null;
        }
      })}
    </>
  );
}
