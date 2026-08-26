import client from "../tina/__generated__/client";

export async function getProjects() {
  const result = await client.queries.projectConnection();

  const projects = [];

  for (const edge of result.data.projectConnection.edges ?? []) {
    const project = edge?.node;

    if (project) {
      projects.push(project);
    }
  }

  return projects.sort((a, b) => {
    return (a.order ?? 999) - (b.order ?? 999);
  });
}

export async function getProjectBySlug(slug: string) {
  const projects = await getProjects();

  return projects.find((project) => project?.slug === slug);
}
