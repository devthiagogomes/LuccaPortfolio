import client from "@/tina/__generated__/client";
import Link from "next/link";

export default async function Home() {
  const result = await client.queries.projectConnection();

  const projects =
    result.data.projectConnection.edges
      ?.map((edge) => edge?.node)
      .filter(Boolean) ?? [];

  return (
    <main>
      <h1>Projects</h1>

      <ul>
        {projects.map((project) => {
          if (!project?.slug) return null;

          return (
            <li key={project.id}>
              <Link href={`/${project.slug}`}>{project.title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
