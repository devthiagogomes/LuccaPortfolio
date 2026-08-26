import type { Metadata } from "next";
import { getSiteSettings } from "@/lib/settings";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();

  return {
    title: "lucca reis / arte e pesquisa",

    icons: settings?.logo
      ? {
          icon: settings.logo,
        }
      : undefined,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
