import client from "../tina/__generated__/client";

export async function getProjects() {
  const result = await client.queries.projectConnection();

  return (
    result.data.projectConnection.edges
      ?.map((edge) => edge?.node)
      .filter(Boolean) ?? []
  );
}

export async function getProjectBySlug(slug: string) {
  const projects = await getProjects();

  return projects.find((project) => project?.slug === slug);
}
