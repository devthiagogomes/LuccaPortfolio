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

  return (
    <PortfolioShell projects={projects} settings={settings} about={about} />
  );
}
