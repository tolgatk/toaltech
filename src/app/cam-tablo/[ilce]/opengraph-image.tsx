import { ogImage, ogSize } from "@/lib/og";
import { getDistrict } from "@/lib/districts";
export const alt = "Cam Tablo";
export const size = ogSize;
export const contentType = "image/png";
export default async function Image({ params }: { params: Promise<{ ilce: string }> }) {
  const { ilce } = await params;
  const d = getDistrict(ilce);
  return ogImage(`İstanbul ${d?.side ?? ""} Yakası`, `${d?.name ?? ""} Cam Tablo`, "Modern, 3'lü set ve kişiye özel cam tablo");
}
