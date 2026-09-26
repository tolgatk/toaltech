import { ogImage, ogSize } from "@/lib/og";
import { getDistrict } from "@/lib/districts";
import { getSemt } from "@/lib/camTablo";
export const alt = "Cam Tablo";
export const size = ogSize;
export const contentType = "image/png";
export default async function Image({ params }: { params: Promise<{ ilce: string; semt: string }> }) {
  const { ilce, semt } = await params;
  const d = getDistrict(ilce);
  const s = getSemt(ilce, semt);
  return ogImage(`${d?.name ?? ""} · İstanbul`, `${s?.name ?? ""} Cam Tablo`, "1.800+ tasarım · 1.200 TL'den başlayan fiyatlar");
}
