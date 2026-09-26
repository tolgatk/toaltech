import { ogImage, ogSize } from "@/lib/og";
import { getDistrict } from "@/lib/districts";
import { getIl } from "@/lib/iller";
export const alt = "Cam Tablo";
export const size = ogSize;
export const contentType = "image/png";
export default async function Image({ params }: { params: Promise<{ ilce: string }> }) {
  const { ilce } = await params;
  const il = getIl(ilce);
  if (il) return ogImage(`${il.bolge} Bölgesi · ${il.plaka}`, `${il.name} Cam Tablo`, "1.800+ tasarım · 1.200 TL'den başlayan fiyatlar");
  const d = getDistrict(ilce);
  return ogImage(`İstanbul ${d?.side ?? ""} Yakası`, `${d?.name ?? ""} Cam Tablo`, "1.800+ tasarım · 1.200 TL'den başlayan fiyatlar");
}
