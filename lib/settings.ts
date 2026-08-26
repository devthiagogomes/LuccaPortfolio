import client from "../tina/__generated__/client";

export async function getSiteSettings() {
  const result = await client.queries.siteSettingsConnection();

  return result.data.siteSettingsConnection.edges?.[0]?.node ?? null;
}
