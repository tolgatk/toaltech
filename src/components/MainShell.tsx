"use client";

import { usePathname } from "next/navigation";
import { isBareRoute } from "@/lib/routes";

/** Tam ekran rotalarda (kartvizit) alt boşluğu kaldırır. */
export default function MainShell({ children }: { children: React.ReactNode }) {
  const bare = isBareRoute(usePathname());
  return (
    <main id="icerik" className={bare ? "flex-1" : "flex-1 pb-24 sm:pb-0"}>
      {children}
    </main>
  );
}
