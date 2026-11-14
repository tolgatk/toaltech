import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import ContactBanner from "@/components/ContactBanner";
import ContactPopup from "@/components/ContactPopup";
import SocialServiceShowcase from "@/components/showcase/SocialServiceShowcase";
import DroneShowcase from "@/components/showcase/DroneShowcase";
import ServiceHero from "@/components/service/ServiceHero";
import { AnswerBox, FaqSection, Longform, PriceFactors, RelatedPosts, ScopeAndProcess, UseCases } from "@/components/service/ServiceSections";
import ReelsMarquee from "@/components/showcase/ReelsMarquee";
import { localServices, getLocalService, hasDistrictPage } from "@/lib/localServices";
import { getServiceContent, serviceIcons } from "@/lib/serviceContent";
import { districts } from "@/lib/districts";
import { droneReels } from "@/lib/portfolio";
import { serviceHubGraph, reelVideoNodes } from "@/lib/schema";
import { abs } from "@/lib/seo";

/** Gerçek video işleriyle zenginleştirilmiş vitrin düzenini kullanan hizmetler */
const SHOWCASE = new Set(["sosyal-medya-danismanligi", "sosyal-medya-yonetimi"]);

/** Hero'nun altında gerçek işlerden kayan video şeridi gösterilen hizmetler */
const REELS_STRIP = new Set(["reklam-ajansi", "reklam-filmi-cekimi"]);

export const dynamicParams = false;
export function generateStaticParams() {
  return localServices.map((s) => ({ hizmet: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ hizmet: string }> }): Promise<Metadata> {
  const { hizmet } = await params;
  const s = getLocalService(hizmet);
  if (!s) return {};
  const title = getServiceContent(s.slug)?.title ?? `İstanbul ${s.name}`;
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
  const c = getServiceContent(s.slug);
  const showcase = SHOWCASE.has(s.slug);
  const drone = s.slug === "drone-cekimi";
  const faqs = [...(c?.faq ?? []), ...s.faq].filter((f, i, all) => all.findIndex((x) => x.q === f.q) === i);

  const byTier = districts.filter((d) => hasDistrictPage(s, d.slug)).sort((a, b) => a.tier - b.tier || a.name.localeCompare(b.name, "tr"));
  const groups = [
    { label: "Avrupa Yakası", list: byTier.filter((d) => d.side === "Avrupa") },
    { label: "Anadolu Yakası", list: byTier.filter((d) => d.side === "Anadolu") },
  ].filter((g) => g.list.length > 0);
  const others = c ? c.related.map((x) => getLocalService(x)).filter((x): x is NonNullable<typeof x> => !!x) : [];
  const rest = localServices.filter((o) => o.slug !== s.slug && !others.includes(o));

  const graph = serviceHubGraph(s, faqs);
  const videos = showcase ? reelVideoNodes() : drone ? reelVideoNodes(undefined, droneReels) : [];

  return (
    <>
      <JsonLd data={{ ...graph, "@graph": [...graph["@graph"], ...videos] }} />

      {showcase ? (
        <>
          <SocialServiceShowcase s={s} />
          {c && <AnswerBox s={s} c={c} />}
        </>
      ) : (
        <>
          <ServiceHero s={s} c={c} />
          {c && <AnswerBox s={s} c={c} />}
          {drone && <DroneShowcase />}
          {REELS_STRIP.has(s.slug) && (
            <ReelsMarquee title="İstanbul'daki müşterilerimiz için çektiklerimiz" desc="Reklam filmi, tanıtım filmi ve Reels işlerimizden kesitler; çekim ve kurgu ekibimize ait." />
          )}
          {c && <UseCases c={c} />}
          <ScopeAndProcess s={s} c={c} />
        </>
      )}

      {c && (
        <>
          {showcase && <UseCases c={c} />}
          <Longform s={s} c={c} />
          <PriceFactors s={s} c={c} />
        </>
      )}

      <FaqSection title={`${s.name} hakkında merak edilenler`} faqs={faqs} />
      {c && <RelatedPosts slugs={c.posts} />}

      {/* İlçe sayfaları */}
      {groups.length > 0 && (
      <section aria-labelledby="ilceler" className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Hizmet Bölgeleri</p>
          <h2 id="ilceler" className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">İstanbul&apos;da {s.name}: ilçeler</h2>
          <p className="mt-3 max-w-2xl text-slate-600">İstanbul&apos;un iki yakasında yerinde hizmet veriyoruz. İlçenize özel bilgi, çalıştığımız sektörler ve sık sorulan sorular için ilçenizi seçin.</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {groups.map((g) => (
              <div key={g.label} className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
                <h3 className="flex items-center gap-2 text-lg font-bold text-navy"><MapPin aria-hidden className="h-5 w-5 text-brand-500" /> {g.label}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.list.map((d) => (
                    <li key={d.slug}>
                      <Link href={`/${s.slug}/${d.slug}`} className="inline-flex min-h-11 items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:border-brand-500 hover:bg-white hover:text-brand-600">
                        {d.name} {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Diğer hizmetler */}
      <section aria-labelledby="diger" className="pb-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 id="diger" className="text-2xl font-extrabold text-navy">{others.length ? "Birlikte en çok alınan hizmetler" : "Diğer hizmetlerimiz"}</h2>
          {others.length > 0 && (
            <ul className="mt-6 grid gap-4 md:grid-cols-3">
              {others.map((o) => {
                const Icon = serviceIcons[o.slug];
                return (
                  <li key={o.slug}>
                    <Link href={`/${o.slug}`} className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-xl hover:shadow-brand-500/10">
                      {Icon && <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-500"><Icon aria-hidden className="h-5 w-5" /></span>}
                      <h3 className="mt-4 text-lg font-bold text-navy">İstanbul {o.name}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{o.intro}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-500">İncele <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" /></span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
          <ul className="mt-6 flex flex-wrap gap-2">
            {rest.map((o) => (
              <li key={o.slug}>
                <Link href={`/${o.slug}`} className="inline-flex min-h-11 items-center rounded-full bg-brand-50 px-4 py-2 text-sm font-medium text-brand-600 transition-colors duration-200 hover:bg-brand-100">{o.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactBanner />
      {showcase && <ContactPopup service={s.name} />}
    </>
  );
}
