import { ogImage, ogSize } from "@/lib/og";
export const alt = "ToalTech – İstanbul Web Tasarım & Sosyal Medya Yönetimi";
export const size = ogSize;
export const contentType = "image/png";
export default function Image() {
  return ogImage("İstanbul", "Web Tasarım & Sosyal Medya Yönetimi", "39 ilçede yerinde hizmet · Ücretsiz ilk görüşme");
}
