"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  name: string;
  logo?: string | null;
};

export function HeaderNav({ name, logo }: Props) {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link href="/" className="site-logo">
        {logo ? <img src={logo} alt={name} /> : name}
      </Link>
    </header>
  );
}
