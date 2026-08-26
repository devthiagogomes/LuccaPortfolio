"use client";

import { AboutContent } from "./AboutContent";
import { ProjectGallery } from "./ProjectGallery";
import { ProjectText } from "./ProjectText";
import { HeaderNav } from "./HeaderNav";
import { useEffect, useRef, useState } from "react";

type Project = {
  id: string;
  slug?: string | null;
  title?: string | null;
  description?: string | null;
  year?: number | null;
  body?: any;
  images?: (string | null)[] | null;
};

type Props = {
  projects: Project[];
  settings: {
    name?: string | null;
    logo?: string | null;
  } | null;
  about: {
    body?: any;
  } | null;
};

export function PortfolioShell({ projects, settings, about }: Props) {
  const rightSideRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState("about");

  const projectsByYear = projects.reduce<Record<number, Project[]>>(
    (acc, project) => {
      if (!project.year) return acc;

      if (!acc[project.year]) {
        acc[project.year] = [];
      }

      acc[project.year].push(project);

      return acc;
    },
    {},
  );

  useEffect(() => {
    const container = rightSideRef.current;

    if (!container) return;

    const handleScroll = () => {
      const sections =
        container.querySelectorAll<HTMLElement>("[data-section]");

      let currentSection = "about";

      sections.forEach((section) => {
        const containerTop = container.getBoundingClientRect().top;
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= containerTop + 20) {
          currentSection = section.dataset.section ?? "about";
        }
      });

      setActiveSection(currentSection);
    };

    container.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const years = Object.keys(projectsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  const orderedProjects = years.flatMap((year) => projectsByYear[year]);

  function scrollToSection(id: string) {
    const container = rightSideRef.current;

    if (!container) return;

    const element = container.querySelector(
      `[data-section="${id}"]`,
    ) as HTMLElement | null;

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <main className="portfolio">
      <section className="left-side">
        <div className="top-nav">
          <HeaderNav name={settings?.name ?? ""} logo={settings?.logo} />

          <button
            type="button"
            className="about-link"
            onClick={() => scrollToSection("about")}
          >
            sobre
          </button>
        </div>

        <nav className="project-list">
          {years.map((year) => (
            <div className="project-year-group" key={year}>
              <div className="project-year">{year}</div>

              <div className="project-links">
                {projectsByYear[year].map((project) => {
                  if (!project.slug) return null;

                  return (
                    <button
                      type="button"
                      key={project.id}
                      className={
                        activeSection === project.slug
                          ? "project-link active"
                          : "project-link"
                      }
                      onClick={() => scrollToSection(project.slug!)}
                    >
                      <span>{project.title}</span>
                      <span>{project.description}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </section>

      <section ref={rightSideRef} className="right-side">
        <section data-section="about">
          <AboutContent content={about?.body} />
        </section>

        {orderedProjects.map((project) => {
          if (!project.slug) return null;

          return (
            <section key={project.id} data-section={project.slug}>
              <ProjectText content={project.body} />
              <ProjectGallery images={project.images} />
            </section>
          );
        })}
      </section>
    </main>
  );
}
