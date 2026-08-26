type Props = {
  images?: (string | null)[] | null;
};

export function ProjectGallery({ images }: Props) {
  if (!images?.length) {
    return null;
  }

  return (
    <div className="project-gallery">
      {images.map((image, index) =>
        image ? <img key={index} src={image} alt="" /> : null,
      )}
    </div>
  );
}
