"use client";

import { usePathname } from "next/navigation";
import FloatingButtons from "./FloatingButtons";
import { isBareRoute, isFocusedRoute } from "@/lib/routes";

/** Kartvizit gibi tam ekran rotalarda yüzen butonlar gösterilmez. */
export default function ConditionalFloatingButtons() {
  const pathname = usePathname();
  if (isBareRoute(pathname)) return null;
  return <FloatingButtons focused={isFocusedRoute(pathname)} />;
}
