"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import FocusedFooter from "./FocusedFooter";
import { isBareRoute, isFocusedRoute } from "@/lib/routes";

export default function ConditionalFooter() {
  const pathname = usePathname();
  if (pathname === "/" || isBareRoute(pathname)) return null;
  if (isFocusedRoute(pathname)) return <FocusedFooter />;
  return <Footer />;
}
