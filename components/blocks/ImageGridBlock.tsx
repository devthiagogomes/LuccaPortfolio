type Props = {
  images?: (string | null)[] | null;
  columns?: number | null;
};

export function ImageGridBlock({ images, columns = 2 }: Props) {
  if (!images?.length) return null;

  return (
    <section
      className="block block-image-grid"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {images.map((image, index) =>
        image ? <img key={index} src={image} alt="" /> : null,
      )}
    </section>
  );
}
