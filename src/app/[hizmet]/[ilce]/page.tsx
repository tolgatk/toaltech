import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Phone, MapPin } from "lucide-react";
import { Container, ButtonLink } from "@/components/ui";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ContactBanner from "@/components/ContactBanner";
import { WhatsAppIcon } from "@/components/Icons";
import { localServices, getLocalService } from "@/lib/localServices";
import { districts, getDistrict } from "@/lib/districts";
import { localFaq, localNote, matchedSectors } from "@/lib/localContent";
import { de, nin } from "@/lib/tr";
import { serviceDistrictGraph } from "@/lib/schema";
import { abs } from "@/lib/seo";
import { site } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return localServices.flatMap((s) => districts.map((d) => ({ hizmet: s.slug, ilce: d.slug })));
}

type Params = Promise<{ hizmet: string; ilce: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { hizmet, ilce } = await params;
  const s = getLocalService(hizmet);
  const d = getDistrict(ilce);
  if (!s || !d) return {};
  const title = `${d.name} ${s.name}`;
  const secs = matchedSectors(s, d).slice(0, 2).join(" ve ");
  const description = `${d.name} ${s.keyword}: ${d.neighborhoods.slice(0, 2).join(", ")} dahil tüm ${de(d.name)} ${secs} işletmelerine yerinde hizmet. Ücretsiz ilk görüşme, WhatsApp: ${site.phoneDisplay}.`;
  const url = abs(`/${s.slug}/${d.slug}`);
  return { title, description, alternates: { canonical: url }, openGraph: { title: `${title} | ToalTech`, description, url, type: "website" } };
}

export default async function Page({ params }: { params: Params }) {
  const { hizmet, ilce } = await params;
  const s = getLocalService(hizmet);
  const d = getDistrict(ilce);
  if (!s || !d) notFound();

  const secs = matchedSectors(s, d);
  const faqs = [...s.faq.slice(0, 2), ...localFaq(s, d)];
  const nearby = districts.filter((x) => x.side === d.side && x.slug !== d.slug).sort((a, b) => a.tier - b.tier).slice(0, 8);
  const others = localServices.filter((o) => o.slug !== s.slug).slice(0, 5);

  return (
    <>
      <JsonLd data={serviceDistrictGraph(s, d)} />
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <Container className="py-14">
          <Breadcrumbs items={[{ name: s.name, href: `/${s.slug}` }, { name: d.name, href: `/${s.slug}/${d.slug}` }]} />
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">İstanbul {d.side} Yakası · {d.name}</p>
          <h1 className="mt-2 text-4xl font-extrabold text-navy sm:text-5xl">{d.name} {s.name}</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">{localNote(s, d)}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href={site.whatsapp} external><WhatsAppIcon className="h-5 w-5" /> WhatsApp&apos;tan Yazın</ButtonLink>
            <a href={`tel:${site.phoneTel}`} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-navy hover:border-brand-500">
              <Phone className="h-5 w-5" /> {site.phoneDisplay}
            </a>
          </div>
        </Container>
      </section>

      <Container className="py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-navy">{de(d.name)} {s.name} Neden Önemli?</h2>
            <p className="mt-3 text-slate-600">{d.character}</p>
            <p className="mt-3 text-slate-600">
              Bu yapı içinde {secs.slice(0, 3).join(", ")} gibi alanlardaki işletmeler için {s.keyword} doğrudan müşteri kazanımına dönüşüyor. {s.intro}
            </p>
            <h2 className="mt-10 text-2xl font-bold text-navy">{de(d.name)} Kimlere Hizmet Veriyoruz?</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {secs.map((x) => (
                <li key={x} className="rounded-full bg-brand-50 px-4 py-2 text-sm font-medium capitalize text-brand-600">{x}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-600">
              <MapPin className="mr-1 inline h-4 w-4 text-brand-500" />
              Hizmet verdiğimiz bölgeler: {d.neighborhoods.join(", ")} ve {nin(d.name)} tüm mahalleleri.
            </p>
          </div>
          <div className="rounded-2xl bg-navy p-6 text-white">
            <p className="text-lg font-bold">Neden ToalTech?</p>
            <ul className="mt-3 space-y-2 text-sm text-blue-100">
              <li>• {d.name} dahil İstanbul geneli yerinde hizmet</li>
              <li>• Tek muhatap, WhatsApp&apos;tan hızlı iletişim</li>
              <li>• Şeffaf aylık raporlama</li>
              <li>• Net fiyat, gizli maliyet yok</li>
            </ul>
            <div className="mt-5"><ButtonLink href="/iletisim" variant="white">Ücretsiz İlk Görüşme</ButtonLink></div>
          </div>
        </div>
      </Container>

      <Container className="grid gap-10 py-6 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-navy">{s.name} Kapsamı</h2>
          <ul className="mt-5 space-y-3">
            {s.benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-slate-700">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" /> {b}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-navy">Süreç</h2>
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
        <h2 className="text-2xl font-bold text-navy">{d.name} {s.name} — Sık Sorulan Sorular</h2>
        <div className="mt-5 space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer font-semibold text-slate-800"><h3 className="inline">{f.q}</h3></summary>
              <p className="mt-3 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>

      <Container className="py-8">
        <h2 className="text-xl font-bold text-navy">{de(d.name)} Diğer Hizmetlerimiz</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={`/${o.slug}/${d.slug}`} className="inline-flex min-h-11 items-center rounded-full bg-brand-50 px-4 py-2 text-sm font-medium text-brand-600 hover:bg-brand-100">{d.name} {o.name}</Link>
            </li>
          ))}
        </ul>
        <h2 className="mt-10 text-xl font-bold text-navy">Yakın İlçelerde {s.name}</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {nearby.map((n) => (
            <li key={n.slug}>
              <Link href={`/${s.slug}/${n.slug}`} className="inline-flex min-h-11 items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-brand-500 hover:text-brand-500">{n.name}</Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-slate-600">
          Tüm ilçeler: <Link href={`/${s.slug}`} className="font-medium text-brand-500 hover:underline">İstanbul {s.name}</Link>
        </p>
      </Container>
      <ContactBanner />
    </>
  );
}
