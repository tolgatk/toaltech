import { ogImage, ogSize } from "@/lib/og";
export const alt = "İstanbul Cam Tablo";
export const size = ogSize;
export const contentType = "image/png";
export default function Image() {
  return ogImage("İstanbul · 39 İlçe · 81 İl", "Cam Tablo", "1.800+ tasarım · 1.200 TL'den başlayan fiyatlar");
}
