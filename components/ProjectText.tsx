"use client";

import { TinaMarkdown } from "tinacms/dist/rich-text";

type Props = {
  content: any;
};

export function ProjectText({ content }: Props) {
  if (!content) {
    return null;
  }

  return (
    <div className="project-text">
      <TinaMarkdown content={content} />
    </div>
  );
}
