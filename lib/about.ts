import client from "@/tina/__generated__/client";

export async function getAbout() {
  const result = await client.queries.aboutConnection();

  return result.data.aboutConnection.edges?.[0]?.node ?? null;
}
