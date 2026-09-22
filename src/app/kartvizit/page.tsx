import type { Metadata, Viewport } from "next";
import JsonLd from "@/components/JsonLd";
import { brands, kartvizit } from "@/lib/kartvizit";
import KartvizitApp from "./KartvizitApp";

export const metadata: Metadata = {
  title: "Dijital Kartvizit | ToalTech & ToBeCreative",
  description:
    "ToalTech ve ToBeCreative dijital kartviziti. Tek dokunuşla rehberinize kaydedin, WhatsApp'tan yazın, web sitelerimize ve Instagram hesaplarımıza ulaşın.",
  alternates: { canonical: "/kartvizit" },
  manifest: "/kartvizit/site-manifest",
  icons: { icon: "/marka/toaltech-logo.png", apple: "/marka/toaltech-logo.png" },
  appleWebApp: { capable: true, title: "Kartvizit", statusBarStyle: "black-translucent" },
  formatDetection: { telephone: false },
  openGraph: {
    title: "ToalTech & ToBeCreative – Dijital Kartvizit",
    description: "Rehbere kaydet, WhatsApp'tan yaz, sitelerimizi ve Instagram hesaplarımızı gez.",
    url: "/kartvizit",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#060f26",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function Page() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": brands.map((b) => ({
      "@type": "Organization",
      "@id": `${b.siteUrl}#organization`,
      name: b.name,
      description: b.tagline,
      url: b.siteUrl,
      telephone: kartvizit.phoneTel,
      sameAs: [b.instagramUrl],
    })),
  };

  return (
    <>
      <JsonLd data={graph} />
      <KartvizitApp />
    </>
  );
}
