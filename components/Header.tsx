import { getSiteSettings } from "../lib/settings";
import { HeaderNav } from "./HeaderNav";

export async function Header() {
  const settings = await getSiteSettings();

  return (
    <header className="site-header">
      <HeaderNav name={settings?.name ?? ""} logo={settings?.logo} />
    </header>
  );
}
