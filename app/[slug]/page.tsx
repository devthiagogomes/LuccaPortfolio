import { notFound } from "next/navigation";
import Link from "next/link";

import { getProjectBySlug, getProjects } from "@/lib/project";
import { getSiteSettings } from "@/lib/settings";
import { HeaderNav } from "@/components/HeaderNav";
import { ProjectText } from "@/components/ProjectText";
import { ProjectGallery } from "@/components/ProjectGallery";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const [project, projects, settings] = await Promise.all([
    getProjectBySlug(slug),
    getProjects(),
    getSiteSettings(),
  ]);

  if (!project) {
    notFound();
  }

  const projectsByYear = projects.reduce<Record<number, typeof projects>>(
    (acc, item) => {
      if (!item?.year) return acc;

      if (!acc[item.year]) {
        acc[item.year] = [];
      }

      acc[item.year].push(item);

      return acc;
    },
    {},
  );

  const years = Object.keys(projectsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <main className="portfolio">
      <section className="left-side">
        <HeaderNav name={settings?.name ?? ""} logo={settings?.logo} />

        <nav className="project-list">
          {years.map((year) => (
            <div className="project-year-group" key={year}>
              <div className="project-year">{year}</div>

              <div className="project-links">
                {projectsByYear[year].map((item) => {
                  if (!item?.slug) return null;

                  return (
                    <Link
                      href={`/${item.slug}`}
                      key={item.id}
                      className={
                        item.slug === slug
                          ? "project-link active"
                          : "project-link"
                      }
                    >
                      <span className="project-title">{item.title}</span>

                      <span className="project-description">
                        {item.description}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </section>

      <section className="right-side">
        <ProjectText content={project.body} />
        <ProjectGallery images={project.images} />
      </section>
    </main>
  );
}
