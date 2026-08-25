import { ogImage, ogSize } from "@/lib/og";
import { getLocalService } from "@/lib/localServices";
export const alt = "ToalTech";
export const size = ogSize;
export const contentType = "image/png";
export default async function Image({ params }: { params: Promise<{ hizmet: string }> }) {
  const { hizmet } = await params;
  const s = getLocalService(hizmet);
  return ogImage("İstanbul", s?.name ?? "ToalTech", "39 ilçede yerinde hizmet · Ücretsiz ilk görüşme");
}
