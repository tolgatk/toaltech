/**
 * /kartvizit – NFC dijital kartvizit verisi.
 * Hem sayfa hem de vCard (/kartvizit/vcf) bu tek kaynaktan beslenir.
 */

export const kartvizit = {
  /** Kartın üzerinde görünen ad. */
  displayName: "ToalTech & ToBeCreative",
  /** Rehbere bu isimle kaydedilir. */
  fullName: "Toaltech Tolga Bey",
  firstName: "Toaltech Tolga",
  lastName: "Bey",
  title: "Kurucu & Dijital Pazarlama Danışmanı",
  /** Kart üzerindeki alt başlık. */
  subtitle: "Dijital pazarlama ve cam tablo dekorasyonu",
  services: ["Web Tasarım", "Sosyal Medya", "SEO", "Cam Tablo"],
  org: "ToalTech & ToBeCreative",
  phoneDisplay: "0535 515 22 37",
  phoneTel: "+905355152237",
  whatsapp: "https://wa.me/905355152237?text=Merhaba%2C%20kartvizitinizden%20ula%C5%9F%C4%B1yorum.",
  vcfPath: "/kartvizit/vcf",
  vcfFileName: "Toaltech-Tolga-Bey.vcf",
  note: "ToalTech: web tasarım, SEO, sosyal medya ve reklam yönetimi. ToBeCreative: cam tablo üretimi ve duvar dekorasyonu.",
} as const;

export type Brand = {
  key: "toaltech" | "tobecreative";
  name: string;
  tagline: string;
  site: string;
  siteUrl: string;
  instagram: string;
  instagramUrl: string;
  /** Google işletme profilinde yorum bırakma bağlantısı. */
  reviewUrl: string;
};

export const brands: Brand[] = [
  {
    key: "toaltech",
    name: "ToalTech",
    tagline: "Web tasarım · SEO · Reklam yönetimi",
    site: "toaltech.com",
    siteUrl: "https://toaltech.com",
    instagram: "@toaltechcom",
    instagramUrl: "https://instagram.com/toaltechcom",
    reviewUrl: "https://g.page/r/CbeXP1vPCDCTEAE/review",
  },
  {
    key: "tobecreative",
    name: "ToBeCreative",
    tagline: "Cam tablo üretimi · Duvar dekorasyonu",
    site: "tobecreative.net",
    siteUrl: "https://tobecreative.net",
    instagram: "@tobecreatives",
    instagramUrl: "https://instagram.com/tobecreatives",
    reviewUrl: "https://g.page/r/CasFDTcjkT6SECE/review",
  },
];
