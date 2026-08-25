type Props = {
  image?: string | null;
};

export function ImageBlock({ image }: Props) {
  if (!image) return null;

  return (
    <figure className="block block-image">
      <img src={image} alt="" />
    </figure>
  );
}
