import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, MapPin } from "lucide-react";
import { Container, ButtonLink } from "@/components/ui";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ContactBanner from "@/components/ContactBanner";
import { localServices, getLocalService } from "@/lib/localServices";
import { districts } from "@/lib/districts";
import { serviceHubGraph } from "@/lib/schema";
import { abs } from "@/lib/seo";
import { site } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return localServices.map((s) => ({ hizmet: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ hizmet: string }> }): Promise<Metadata> {
  const { hizmet } = await params;
  const s = getLocalService(hizmet);
  if (!s) return {};
  const title = `İstanbul ${s.name}`;
  return {
    title,
    description: s.metaDescription,
    alternates: { canonical: abs(`/${s.slug}`) },
    openGraph: { title: `${title} | ToalTech`, description: s.metaDescription, url: abs(`/${s.slug}`), type: "website" },
  };
}

export default async function Page({ params }: { params: Promise<{ hizmet: string }> }) {
  const { hizmet } = await params;
  const s = getLocalService(hizmet);
  if (!s) notFound();
  const byTier = [...districts].sort((a, b) => a.tier - b.tier || a.name.localeCompare(b.name, "tr"));
  const groups: { label: string; list: typeof districts }[] = [
    { label: "Avrupa Yakası", list: byTier.filter((d) => d.side === "Avrupa") },
    { label: "Anadolu Yakası", list: byTier.filter((d) => d.side === "Anadolu") },
  ];

  return (
    <>
      <JsonLd data={serviceHubGraph(s)} />
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <Container className="py-14">
          <Breadcrumbs items={[{ name: s.name, href: `/${s.slug}` }]} />
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">İstanbul · 39 İlçe</p>
          <h1 className="mt-2 text-4xl font-extrabold text-navy sm:text-5xl">İstanbul {s.name}</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">{s.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href={site.whatsapp} external>WhatsApp&apos;tan Teklif Al</ButtonLink>
            <ButtonLink href="/iletisim" variant="ghost">Ücretsiz İlk Görüşme</ButtonLink>
          </div>
        </Container>
      </section>

      <Container className="grid gap-10 py-12 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-navy">{s.name} Kapsamında Neler Var?</h2>
          <ul className="mt-5 space-y-3">
            {s.benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-slate-700">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" /> {b}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-navy">Nasıl Çalışıyoruz?</h2>
          <ol className="mt-5 space-y-3">
            {s.steps.map((st, i) => (
              <li key={st} className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500 font-bold text-white">{i + 1}</span>
                <span className="font-medium text-slate-700">{st}</span>
              </li>
            ))}
          </ol>
        </div>
      </Container>

      <Container className="py-8">
        <h2 className="text-2xl font-bold text-navy">Sık Sorulan Sorular</h2>
        <div className="mt-5 space-y-4">
          {s.faq.map((f) => (
            <details key={f.q} className="rounded-xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer font-semibold text-slate-800"><h3 className="inline">{f.q}</h3></summary>
              <p className="mt-3 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>

      <Container className="py-8">
        <h2 className="text-2xl font-bold text-navy">İstanbul&apos;da {s.name}: İlçeler</h2>
        <p className="mt-2 text-slate-600">İlçenize özel bilgi, sektörler ve sık sorulan sorular için ilçenizi seçin.</p>
        {groups.map((g) => (
          <div key={g.label} className="mt-8">
            <h3 className="font-semibold text-slate-800">{g.label}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {g.list.map((d) => (
                <li key={d.slug}>
                  <Link href={`/${s.slug}/${d.slug}`} className="inline-flex min-h-11 items-center gap-1 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-500 hover:text-brand-500">
                    <MapPin className="h-3.5 w-3.5" /> {d.name} {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <Container className="py-8">
        <h2 className="text-xl font-bold text-navy">Diğer Hizmetlerimiz</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {localServices.filter((o) => o.slug !== s.slug).map((o) => (
            <li key={o.slug}>
              <Link href={`/${o.slug}`} className="inline-flex min-h-11 items-center rounded-full bg-brand-50 px-4 py-2 text-sm font-medium text-brand-600 hover:bg-brand-100">{o.name}</Link>
            </li>
          ))}
        </ul>
      </Container>
      <ContactBanner />
    </>
  );
}
