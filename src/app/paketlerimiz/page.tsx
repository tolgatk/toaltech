import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container, PageHero, ButtonLink } from "@/components/ui";
import ContactBanner from "@/components/ContactBanner";
import { packages } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Paketlerimiz: Başlangıç, Profesyonel, Kurumsal", description: "İstanbul sosyal medya yönetimi ve web tasarım paketleri: kapsam, paylaşım adetleri ve ek hizmetler. Size uygun paketi seçin, WhatsApp'tan teklif alın.", alternates: { canonical: "/paketlerimiz" } };

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Paketlerimiz"
        title="Size Uygun Paketi Seçin"
        desc="Her ölçekten işletme için hazırladığımız paketlerimizi inceleyin; ihtiyacınıza göre özelleştirelim."
      />
      <Container className="grid gap-6 py-12 lg:grid-cols-3">
        {packages.map((p) => (
          <div
            key={p.name}
            className={`relative flex flex-col rounded-3xl border p-8 ${
              p.highlight
                ? "border-brand-500 bg-navy text-white shadow-2xl shadow-brand-500/30"
                : "border-slate-200 bg-white"
            }`}
          >
            <h2 className="text-2xl font-bold">{p.name}</h2>
            <p className={`mt-2 text-sm ${p.highlight ? "text-blue-100" : "text-slate-600"}`}>{p.desc}</p>
            <p className="mt-6 text-3xl font-extrabold">{p.price}</p>
            <ul className="mt-6 flex-1 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.highlight ? "text-emerald-300" : "text-brand-500"}`} /> {f}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink href={site.whatsapp} external variant={p.highlight ? "white" : "primary"}>
                WhatsApp&apos;tan Teklif Al
              </ButtonLink>
            </div>
          </div>
        ))}
      </Container>
      <ContactBanner />
    </>
  );
}
