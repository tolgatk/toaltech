import { SITE_URL, abs, CONTENT_UPDATED } from "@/lib/seo";
import { site } from "@/lib/site";
import { districts } from "@/lib/districts";
import { reels, previewSrc, posterSrc, type Reel } from "@/lib/portfolio";

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
const CTX = "https://schema.org";

export const istanbulAreaServed = [
  { "@type": "City", name: "İstanbul" },
  ...districts.map((d) => ({ "@type": "AdministrativeArea", name: d.name, containedInPlace: { "@type": "City", name: "İstanbul" } })),
];

export const organizationNode = {
  "@type": ["ProfessionalService", "Organization"],
  "@id": ORG_ID,
  name: site.name,
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: abs("/icon.svg") },
  image: abs("/opengraph-image"),
  description: "İstanbul genelinde sosyal medya yönetimi, drone ve ürün çekimi, web tasarım, yazılım danışmanlığı, SEO ve reklam danışmanlığı veren dijital ajans.",
  slogan: site.tagline,
  telephone: site.phoneTel,
  email: site.email,
  address: { "@type": "PostalAddress", addressLocality: "İstanbul", addressCountry: "TR" },
  areaServed: istanbulAreaServed,
  priceRange: "₺₺",
  currenciesAccepted: "TRY",
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "19:00" },
  ],
  contactPoint: [{ "@type": "ContactPoint", contactType: "customer service", telephone: site.phoneTel, email: site.email, availableLanguage: ["tr"], areaServed: "TR" }],
  sameAs: [site.instagram],
  knowsAbout: ["Sosyal medya yönetimi", "Sosyal medya danışmanlığı", "Drone çekimi", "Havadan video ve fotoğraf", "Yazılım danışmanlığı", "Web tasarım", "SEO", "Yapay zeka arama optimizasyonu (GEO)", "Meta Ads", "Google Ads", "Ürün çekimi", "Reels ve reklam filmi prodüksiyonu"],
};

export const websiteNode = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: site.name,
  inLanguage: "tr-TR",
  publisher: { "@id": ORG_ID },
};

export const webPage = (path: string, name: string, description: string, type = "WebPage") => ({
  "@type": type,
  "@id": `${abs(path)}#webpage`,
  url: abs(path),
  name,
  description,
  inLanguage: "tr-TR",
  dateModified: CONTENT_UPDATED,
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORG_ID },
});

type Faq = { q: string; a: string };
/** Sayfada görünen soru-cevapların yapısal verisi (yapay zeka aramaları için) */
export const faqNode = (path: string, faqs: Faq[]) => ({
  "@type": "FAQPage",
  "@id": `${abs(path)}#faq`,
  isPartOf: { "@id": `${abs(path)}#webpage` },
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const homeGraph = { "@context": CTX, "@graph": [organizationNode, websiteNode, webPage("/", "ToalTech | İstanbul Sosyal Medya, Drone Çekimi, Web ve Yazılım", organizationNode.description)] };

type S = { slug: string; name: string; intro: string; metaDescription: string; benefits: string[] };
type D = { slug: string; name: string };

const offerCatalog = (s: S) => ({
  "@type": "OfferCatalog",
  name: `${s.name} kapsamı`,
  itemListElement: s.benefits.map((b) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: b } })),
});

export const serviceHubGraph = (s: S, faqs: Faq[] = []) => ({
  "@context": CTX,
  "@graph": [
    webPage(`/${s.slug}`, `İstanbul ${s.name}`, s.metaDescription),
    {
      "@type": "Service",
      "@id": `${abs(`/${s.slug}`)}#service`,
      name: `İstanbul ${s.name}`,
      serviceType: s.name,
      description: s.intro,
      url: abs(`/${s.slug}`),
      provider: { "@id": ORG_ID },
      areaServed: istanbulAreaServed,
      hasOfferCatalog: offerCatalog(s),
      availableChannel: { "@type": "ServiceChannel", serviceUrl: abs("/iletisim"), servicePhone: { "@type": "ContactPoint", telephone: site.phoneTel } },
    },
    ...(faqs.length ? [faqNode(`/${s.slug}`, faqs)] : []),
  ],
});

export const serviceDistrictGraph = (s: S, d: D, faqs: Faq[] = [], description?: string) => {
  const path = `/${s.slug}/${d.slug}`;
  return {
    "@context": CTX,
    "@graph": [
      webPage(path, `${d.name} ${s.name}`, description ?? s.intro),
      {
        "@type": "Service",
        "@id": `${abs(path)}#service`,
        name: `${d.name} ${s.name}`,
        serviceType: s.name,
        description: description ?? s.intro,
        url: abs(path),
        provider: { "@id": ORG_ID },
        isRelatedTo: { "@id": `${abs(`/${s.slug}`)}#service` },
        areaServed: { "@type": "AdministrativeArea", name: d.name, containedInPlace: { "@type": "City", name: "İstanbul" } },
      },
      ...(faqs.length ? [faqNode(path, faqs)] : []),
    ],
  };
};

/** Liste sayfaları (hizmetler, paketler): ItemList düğümü */
export const itemListNode = (path: string, name: string, items: { name: string; url: string }[]) => ({
  "@type": "ItemList",
  "@id": `${abs(path)}#list`,
  name,
  itemListElement: items.map((x, i) => ({ "@type": "ListItem", position: i + 1, name: x.name, url: abs(x.url) })),
});

export const pageGraph = (path: string, name: string, description: string, type = "WebPage", extra: Record<string, unknown>[] = []) => ({
  "@context": CTX,
  "@graph": [webPage(path, name, description, type), ...extra],
});

export const contactGraph = {
  "@context": CTX,
  "@graph": [webPage("/iletisim", "İletişim | ToalTech", "ToalTech ile WhatsApp, telefon veya form üzerinden iletişime geçin.", "ContactPage")],
};
export const aboutGraph = {
  "@context": CTX,
  "@graph": [{ ...webPage("/hakkimizda", "Hakkımızda | ToalTech", "ToalTech: çekim, kurgu, tasarım, yazılım ve reklamı tek ekipte yürüten İstanbul merkezli dijital ajans.", "AboutPage"), mainEntity: { "@id": ORG_ID } }],
};

export const articleGraph = (a: { slug: string; title: string; description: string; date: string; updated?: string; faq?: Faq[] }) => ({
  "@context": CTX,
  "@graph": [
    webPage(`/blog/${a.slug}`, a.title, a.description),
    {
      "@type": "Article",
      "@id": `${abs(`/blog/${a.slug}`)}#article`,
      headline: a.title,
      description: a.description,
      datePublished: a.date,
      dateModified: a.updated ?? a.date,
      inLanguage: "tr-TR",
      author: { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
      mainEntityOfPage: { "@id": `${abs(`/blog/${a.slug}`)}#webpage` },
    },
    ...(a.faq?.length ? [faqNode(`/blog/${a.slug}`, a.faq)] : []),
  ],
});

/** Cam tablo sayfaları: WebPage + Service, sayfanın ana görseli ile */
/** area.country: il sayfaları (Türkiye'nin ili); yoksa İstanbul ilçe/semt varsayılır */
export const camTabloGraph = (path: string, name: string, description: string, area: { name: string; type: "City" | "AdministrativeArea" | "Place"; within?: string; country?: boolean }) => ({
  "@context": CTX,
  "@graph": [
    {
      ...webPage(path, name, description, path === "/cam-tablo" ? "CollectionPage" : "WebPage"),
      primaryImageOfPage: { "@type": "ImageObject", url: abs("/cam-tablo/cam-tablo-salon-dekorasyon.webp"), width: 2560, height: 1429 },
    },
    {
      "@type": "Service",
      "@id": `${abs(path)}#service`,
      name,
      serviceType: "Cam tablo baskı ve satışı",
      description,
      url: abs(path),
      provider: { "@id": ORG_ID },
      ...(path === "/cam-tablo" ? {} : { isRelatedTo: { "@id": `${abs("/cam-tablo")}#service` } }),
      areaServed:
        area.type === "City"
          ? [...istanbulAreaServed, { "@type": "Country", name: "Türkiye" }]
          : area.country
          ? { "@type": "AdministrativeArea", name: area.name, containedInPlace: { "@type": "Country", name: "Türkiye" } }
          : { "@type": area.type, name: area.name, containedInPlace: area.within ? { "@type": "AdministrativeArea", name: area.within, containedInPlace: { "@type": "City", name: "İstanbul" } } : { "@type": "City", name: "İstanbul" } },
    },
  ],
});

/** Gerçek müşteri videoları: video sonuçlarında görünmek için VideoObject düğümleri */
export const reelVideoNodes = (slugs?: string[], list: Reel[] = reels) =>
  list
    .filter((r) => !slugs || slugs.includes(r.slug))
    .map((r) => ({
      "@type": "VideoObject",
      "@id": `${abs(previewSrc(r.slug))}#video`,
      name: `${r.brand} — ${r.title}`,
      description: r.description,
      thumbnailUrl: abs(posterSrc(r.slug)),
      contentUrl: abs(previewSrc(r.slug)),
      uploadDate: `${r.uploadDate}T12:00:00+03:00`,
      duration: r.duration,
      inLanguage: "tr-TR",
      creator: { "@id": ORG_ID },
    }));
