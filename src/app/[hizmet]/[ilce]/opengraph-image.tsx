import { ogImage, ogSize } from "@/lib/og";
import { getLocalService } from "@/lib/localServices";
import { getDistrict } from "@/lib/districts";
export const alt = "ToalTech";
export const size = ogSize;
export const contentType = "image/png";
export default async function Image({ params }: { params: Promise<{ hizmet: string; ilce: string }> }) {
  const { hizmet, ilce } = await params;
  const s = getLocalService(hizmet);
  const d = getDistrict(ilce);
  return ogImage(`İstanbul ${d?.side ?? ""} Yakası`, `${d?.name ?? ""} ${s?.name ?? ""}`, "Yerinde hizmet · Ücretsiz ilk görüşme");
}
