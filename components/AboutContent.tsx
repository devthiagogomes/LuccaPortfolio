"use client";

import { TinaMarkdown } from "tinacms/dist/rich-text";

type Props = {
  content: any;
};

export function AboutContent({ content }: Props) {
  if (!content) {
    return null;
  }

  return <TinaMarkdown content={content} />;
}
