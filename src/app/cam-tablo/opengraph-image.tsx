import { ogImage, ogSize } from "@/lib/og";
export const alt = "İstanbul Cam Tablo";
export const size = ogSize;
export const contentType = "image/png";
export default function Image() {
  return ogImage("İstanbul · 39 İlçe", "İstanbul Cam Tablo", "Modern, 3'lü set ve kişiye özel cam tablo");
}
