/**
 * Hayali markalar için hazırlanmış örnek Instagram profil maketleri.
 * Gerçek müşteri değildir; sitede "örnek" ibaresiyle gösterilir.
 * Görseller `public/ornek-profiller/<slug>.webp` (900 px yükseklik).
 */
export type SampleProfile = { slug: string; sector: string; width: number };

export const sampleProfiles: SampleProfile[] = [
  { slug: "narli-ocakbasi", sector: "Restoran", width: 356 },
  { slug: "gulus-dis", sector: "Diş kliniği", width: 508 },
  { slug: "nuans-parfum", sector: "Parfüm & kozmetik", width: 508 },
  { slug: "sefer-rent-a-car", sector: "Araç kiralama", width: 508 },
  { slug: "kuytu-kahve", sector: "Kafe", width: 508 },
  { slug: "lumen-pirlanta", sector: "Pırlanta", width: 508 },
  { slug: "bosphera-health", sector: "Sağlık turizmi", width: 508 },
  { slug: "forma-gym", sector: "Spor salonu", width: 508 },
  { slug: "mavera-men", sector: "Erkek giyim", width: 508 },
  { slug: "kuzey-gayrimenkul", sector: "Emlak", width: 508 },
  { slug: "hamur-firin", sector: "Fırın", width: 508 },
];

export const PROFILE_HEIGHT = 900;
export const profileSrc = (slug: string) => `/ornek-profiller/${slug}.webp`;
