type Props = {
  text?: string | null;
};

export function TextBlock({ text }: Props) {
  if (!text) return null;

  return (
    <section className="block block-text">
      <p>{text}</p>
    </section>
  );
}
