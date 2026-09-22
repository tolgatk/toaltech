"use client";

import { usePathname } from "next/navigation";
import FloatingButtons from "./FloatingButtons";
import { isBareRoute } from "@/lib/routes";

/** Kartvizit gibi tam ekran rotalarda yüzen butonlar gösterilmez. */
export default function ConditionalFloatingButtons() {
  if (isBareRoute(usePathname())) return null;
  return <FloatingButtons />;
}
