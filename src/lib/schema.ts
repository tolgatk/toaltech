import { SITE_URL, abs } from "@/lib/seo";
import { site } from "@/lib/site";
import { districts } from "@/lib/districts";

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
  description: "İstanbul geneli web tasarım, sosyal medya yönetimi, reklam danışmanlığı, ürün ve drone çekimi.",
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
  knowsAbout: ["Web tasarım", "Sosyal medya yönetimi", "Meta Ads", "Google Ads", "Ürün çekimi", "Drone çekimi"],
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
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORG_ID },
});

export const homeGraph = { "@context": CTX, "@graph": [organizationNode, websiteNode, webPage("/", "ToalTech | İstanbul Web Tasarım & Sosyal Medya Yönetimi", organizationNode.description)] };

type S = { slug: string; name: string; intro: string };
type D = { slug: string; name: string };

export const serviceHubGraph = (s: S) => ({
  "@context": CTX,
  "@graph": [
    webPage(`/${s.slug}`, `İstanbul ${s.name}`, s.intro, "CollectionPage"),
    {
      "@type": "Service",
      "@id": `${abs(`/${s.slug}`)}#service`,
      name: `İstanbul ${s.name}`,
      serviceType: s.name,
      description: s.intro,
      url: abs(`/${s.slug}`),
      provider: { "@id": ORG_ID },
      areaServed: istanbulAreaServed,
      availableChannel: { "@type": "ServiceChannel", serviceUrl: abs("/iletisim"), servicePhone: { "@type": "ContactPoint", telephone: site.phoneTel } },
    },
  ],
});

export const serviceDistrictGraph = (s: S, d: D) => {
  const path = `/${s.slug}/${d.slug}`;
  return {
    "@context": CTX,
    "@graph": [
      webPage(path, `${d.name} ${s.name}`, s.intro),
      {
        "@type": "Service",
        "@id": `${abs(path)}#service`,
        name: `${d.name} ${s.name}`,
        serviceType: s.name,
        description: s.intro,
        url: abs(path),
        provider: { "@id": ORG_ID },
        isRelatedTo: { "@id": `${abs(`/${s.slug}`)}#service` },
        areaServed: { "@type": "AdministrativeArea", name: d.name, containedInPlace: { "@type": "City", name: "İstanbul" } },
      },
    ],
  };
};

export const contactGraph = {
  "@context": CTX,
  "@graph": [webPage("/iletisim", "İletişim | ToalTech", "ToalTech ile WhatsApp, telefon veya form üzerinden iletişime geçin.", "ContactPage")],
};
export const aboutGraph = {
  "@context": CTX,
  "@graph": [webPage("/hakkimizda", "Hakkımızda | ToalTech", "ToalTech: İstanbul merkezli web tasarım ve sosyal medya ekibi.", "AboutPage")],
};

export const articleGraph = (a: { slug: string; title: string; description: string; date: string }) => ({
  "@context": CTX,
  "@graph": [
    webPage(`/blog/${a.slug}`, a.title, a.description),
    {
      "@type": "Article",
      "@id": `${abs(`/blog/${a.slug}`)}#article`,
      headline: a.title,
      description: a.description,
      datePublished: a.date,
      dateModified: a.date,
      inLanguage: "tr-TR",
      author: { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
      mainEntityOfPage: { "@id": `${abs(`/blog/${a.slug}`)}#webpage` },
    },
  ],
});
