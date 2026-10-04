/**
 * Gerçek müşteri işleri. Videolar `public/videos/` altında iki sürümde durur:
 *  - `<slug>.mp4` + `<slug>.webp`: sessiz, ~10 sn, 480p önizleme (kayan şeritte otomatik oynar)
 */
export type Reel = {
  slug: string;
  brand: string;
  title: string;
  kind: string;          // "Reklam Filmi", "Reels", "Tanıtım Filmi"...
  description: string;
  uploadDate: string;    // ISO, VideoObject şeması için
  duration: string;      // ISO 8601 (önizleme süresi)
  instagram?: string;
};

export const reels: Reel[] = [
  {
    slug: "atak-reklam-filmi",
    brand: "Atak Fen Bilimleri",
    title: "Seslendirmeli kayıt dönemi reklam filmi",
    kind: "Reklam Filmi",
    description: "Çekmeköy Atak Fen Bilimleri için çekim, kurgu, altyazı ve seslendirmesi bize ait kayıt dönemi reklam filmi; Meta reklamlarında kreatif olarak kullanıldı.",
    uploadDate: "2026-10-03",
    duration: "PT10S",
  },
  {
    slug: "capsule-acilis-teaser",
    brand: "The Capsule",
    title: "“Ritmi hisset” açılış teaser'ı",
    kind: "Açılış Kampanyası",
    description: "Beylikdüzü Yaşam Marina'daki The Capsule için açılış öncesi geri sayım serisinin ritmik teaser videosu.",
    uploadDate: "2026-08-18",
    duration: "PT10S",
    instagram: "https://www.instagram.com/p/DcLiDFNCYuB/",
  },
  {
    slug: "atalar-davet-tanitim",
    brand: "Atalar Davet Evi",
    title: "Salon tanıtım filmi",
    kind: "Tanıtım Filmi",
    description: "Esenyurt Kıraç'taki Atalar Davet Evi için salon, dekor ve mutfak olanaklarını konum bilgisiyle anlatan tanıtım filmi.",
    uploadDate: "2026-09-29",
    duration: "PT10S",
  },
  {
    slug: "pratik-hafiza-egitim-icerigi",
    brand: "Pratik Hafıza",
    title: "Uzman anlatımlı eğitim içeriği",
    kind: "Eğitici Reels",
    description: "Sefaköy Pratik Hafıza için öğretmen anlatımlı, altyazılı ve LGS/YKS öğrencisine konuşan bilgilendirici reels.",
    uploadDate: "2026-07-29",
    duration: "PT10S",
    instagram: "https://www.instagram.com/p/DbYKEeWMmNV/",
  },
  {
    slug: "capsule-bar-reels",
    brand: "The Capsule",
    title: "Kahve & kokteyl bar reels'i",
    kind: "Ürün Reels",
    description: "The Capsule bar menüsünü espresso, matcha ve kokteyl çekimleriyle tanıtan ürün odaklı reels.",
    uploadDate: "2026-10-02",
    duration: "PT10S",
  },
  {
    slug: "atak-kurum-tanitim",
    brand: "Atak Fen Bilimleri",
    title: "4K kurum tanıtım videosu",
    kind: "Tanıtım Filmi",
    description: "Atak Fen Bilimleri'nin konumunu, binasını ve iç mekânını 4K çekimle tanıtan kurum videosu.",
    uploadDate: "2026-06-29",
    duration: "PT10S",
  },
  {
    slug: "atalar-speedramp",
    brand: "Atalar Davet Evi",
    title: "Speed ramp mekân reels'i",
    kind: "Reels",
    description: "Atalar Davet Evi salonunu hızlanıp yavaşlayan geçişlerle gezdiren kısa, dikkat çekici reels.",
    uploadDate: "2026-09-26",
    duration: "PT10S",
  },
  {
    slug: "capsule-santiyeden-acilisa",
    brand: "The Capsule",
    title: "Şantiyeden açılışa: süreç serisi",
    kind: "Açılış Kampanyası",
    description: "“Burası nasıl toparlanacak?” sorusuyla başlayan, mekânın şantiyeden açılışa dönüşümünü anlatan seri finali.",
    uploadDate: "2026-09-08",
    duration: "PT10S",
    instagram: "https://www.instagram.com/p/DdBoOQACRTE/",
  },
  {
    slug: "atak-kayit-kampanyasi",
    brand: "Atak Fen Bilimleri",
    title: "2026-27 kayıt kampanyası",
    kind: "Kampanya",
    description: "ToalTech × Atak Fen Bilimleri iş birliği duyurusu ve 2026-27 kayıt dönemi kampanya videosu.",
    uploadDate: "2026-08-05",
    duration: "PT10S",
    instagram: "https://www.instagram.com/p/DbrFl3uqBsX/",
  },
  {
    slug: "tobecreative-cam-tablo",
    brand: "ToBeCreative",
    title: "Cam tablo ürün reels'i",
    kind: "Ürün Reels",
    description: "ToBeCreative cam tablo koleksiyonunu showroom'da şövale üzerinde tanıtan ürün videosu.",
    uploadDate: "2026-09-25",
    duration: "PT10S",
  },
  {
    slug: "urun-cekimi-kamera-arkasi",
    brand: "ToalTech Stüdyo",
    title: "Ürün çekimi kamera arkası",
    kind: "Kamera Arkası",
    description: "Beyaz fonda kahve fincanı ürün çekiminin kamera arkası.",
    uploadDate: "2026-10-04",
    duration: "PT5S",
  },
];

export const getReel = (slug: string) => reels.find((r) => r.slug === slug);
export const previewSrc = (slug: string) => `/videos/${slug}.mp4`;
export const posterSrc = (slug: string) => `/videos/${slug}.webp`;
