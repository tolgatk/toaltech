"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import { isBareRoute } from "@/lib/routes";

export default function ConditionalFooter() {
  const pathname = usePathname();
  if (pathname === "/" || isBareRoute(pathname)) return null;
  return <Footer />;
}
