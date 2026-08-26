import { getProjects } from "@/lib/project";
import { getSiteSettings } from "@/lib/settings";
import { getAbout } from "@/lib/about";
import { PortfolioShell } from "@/components/PortfolioShell";

export default async function AboutPage() {
  const [projects, settings, about] = await Promise.all([
    getProjects(),
    getSiteSettings(),
    getAbout(),
  ]);

  const validProjects = projects.filter(
    (project): project is NonNullable<typeof project> => project != null,
  );

  return (
    <PortfolioShell
      projects={validProjects}
      settings={settings}
      about={about}
    />
  );
}
