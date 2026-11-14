import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ui";
import JsonLd from "@/components/JsonLd";
import ContactBanner from "@/components/ContactBanner";
import ContactPopup from "@/components/ContactPopup";
import ReelsMarquee from "@/components/showcase/ReelsMarquee";
import DroneShowcase from "@/components/showcase/DroneShowcase";
import ServiceHero from "@/components/service/ServiceHero";
import { FaqSection, PriceFactors, RelatedPosts, ScopeAndProcess, UseCases } from "@/components/service/ServiceSections";
import { localServices, getLocalService, hasDistrictPage } from "@/lib/localServices";
import { getServiceContent, serviceIcons } from "@/lib/serviceContent";
import { districts, getDistrict } from "@/lib/districts";
import { localFaq, localNote, localUseCases, matchedSectors } from "@/lib/localContent";
import { droneReels } from "@/lib/portfolio";
import { de, deki, nin } from "@/lib/tr";
import { reelVideoNodes, serviceDistrictGraph } from "@/lib/schema";
import { abs } from "@/lib/seo";
import { site } from "@/lib/site";

/** Gerçek video işlerinin gösterildiği hizmetler */
const SHOWS_REELS = new Set(["sosyal-medya-danismanligi", "sosyal-medya-yonetimi", "reklam-danismanligi", "reklam-ajansi", "cafe-sosyal-medya-danismanligi", "restoran-sosyal-medya-danismanligi"]);

export const dynamicParams = false;
export function generateStaticParams() {
  return localServices.flatMap((s) => districts.filter((d) => hasDistrictPage(s, d.slug)).map((d) => ({ hizmet: s.slug, ilce: d.slug })));
}

type Params = Promise<{ hizmet: string; ilce: string }>;

const describe = (s: NonNullable<ReturnType<typeof getLocalService>>, d: NonNullable<ReturnType<typeof getDistrict>>) => {
  const secs = matchedSectors(s, d).slice(0, 2).join(" ve ");
  return `${d.name} ${s.keyword}: ${d.neighborhoods.slice(0, 2).join(", ")} dahil tüm ${de(d.name)} ${secs} işletmelerine yerinde hizmet. WhatsApp: ${site.phoneDisplay}.`;
};

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { hizmet, ilce } = await params;
  const s = getLocalService(hizmet);
  const d = getDistrict(ilce);
  if (!s || !d) return {};
  // Hizmetin başlığındaki açıklayıcı kısım ("4K Havadan Video ve Fotoğraf") ilçe başlığına da eklenir
  const tail = getServiceContent(s.slug)?.title.split(": ")[1];
  const title = tail ? `${d.name} ${s.name}: ${tail}` : `${d.name} ${s.name}`;
  const description = describe(s, d);
  const url = abs(`/${s.slug}/${d.slug}`);
  return { title, description, alternates: { canonical: url }, openGraph: { title: `${title} | ToalTech`, description, url, type: "website" } };
}

export default async function Page({ params }: { params: Params }) {
  const { hizmet, ilce } = await params;
  const s = getLocalService(hizmet);
  const d = getDistrict(ilce);
  if (!s || !d || !hasDistrictPage(s, d.slug)) notFound();

  const c = getServiceContent(s.slug);
  const drone = s.slug === "drone-cekimi";
  const reelsStrip = SHOWS_REELS.has(s.slug);
  const secs = matchedSectors(s, d);
  // İlçeye özel sorular önce, ardından hizmetin genel soruları
  const faqs = [...localFaq(s, d), ...(c?.faq.slice(0, 4) ?? []), ...s.faq.slice(0, 2)].filter((f, i, all) => all.findIndex((x) => x.q === f.q) === i);
  // Yalnızca birkaç ilçede sayfası olan hizmetlerde yaka ayrımı yapılmaz
  const nearby = districts
    .filter((x) => x.slug !== d.slug && hasDistrictPage(s, x.slug) && (s.districts || x.side === d.side))
    .sort((a, b) => a.tier - b.tier)
    .slice(0, 10);
  const others = localServices.filter((o) => o.slug !== s.slug && hasDistrictPage(o, d.slug)).slice(0, 6);

  const graph = serviceDistrictGraph(s, d, faqs, describe(s, d));
  const videos = drone ? reelVideoNodes(undefined, droneReels) : [];

  return (
    <>
      <JsonLd data={{ ...graph, "@graph": [...graph["@graph"], ...videos] }} />
      <ServiceHero s={s} c={c} d={d} lead={localNote(s, d)} />

      {drone && (
        <DroneShowcase desc={`İstanbul'daki müşterilerimiz için yaptığımız drone çekimlerinden kesitler. ${deki(d.name)} mekânınız, projeniz veya tesisiniz için de aynı ekip uçuyor.`} />
      )}
      {reelsStrip && (
        <ReelsMarquee
          title="İstanbul'daki müşterilerimiz için ürettiklerimiz"
          desc={`${deki(d.name)} işletmeniz için de aynı ekip çekiyor, kurguluyor ve yayınlıyor.`}
        />
      )}

      {/* İlçe bağlamı */}
      <section aria-labelledby="ilce-baslik" className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">{d.name} · İstanbul {d.side} Yakası</p>
            <h2 id="ilce-baslik" className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">{de(d.name)} {s.keyword} neden önemli?</h2>
            <p className="mt-5 text-[17px] leading-relaxed text-slate-700">{d.character}</p>
            <p className="mt-4 text-[17px] leading-relaxed text-slate-700">
              Bu yapı içinde {secs.slice(0, 3).join(", ")} gibi alanlardaki işletmeler için {s.keyword} doğrudan müşteri kazanımına dönüşüyor. {s.intro}
            </p>

            <h3 className="mt-10 text-xl font-bold text-navy">{de(d.name)} kimlerle çalışıyoruz?</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {secs.map((x) => (
                <li key={x} className="rounded-full bg-brand-50 px-4 py-2 text-sm font-medium capitalize text-brand-600">{x}</li>
              ))}
            </ul>

            <h3 className="mt-8 text-xl font-bold text-navy">{de(d.name)} hizmet verdiğimiz bölgeler</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {d.neighborhoods.map((n) => (
                <li key={n} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                  <MapPin aria-hidden className="h-3.5 w-3.5 text-brand-500" /> {n}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-slate-600">ve {nin(d.name)} tüm mahalleleri.</p>
          </div>

          <aside className="self-start rounded-3xl bg-navy p-7 text-white lg:sticky lg:top-28">
            <p className="text-xl font-extrabold">Neden ToalTech?</p>
            <ul className="mt-5 space-y-3 text-blue-100">
              {[
                `${d.name} dahil İstanbul genelinde yerinde hizmet`,
                "Çekim, kurgu, yazılım ve reklam aynı ekipte",
                "Tek muhatap, WhatsApp'tan hızlı iletişim",
                "Yazılı kapsam, net fiyat, gizli maliyet yok",
              ].map((x) => (
                <li key={x} className="flex items-start gap-3">
                  <Check aria-hidden className="mt-1 h-4 w-4 shrink-0 text-emerald-300" /> <span>{x}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7"><ButtonLink href="/iletisim" variant="white">Ücretsiz İlk Görüşme</ButtonLink></div>
          </aside>
        </div>
      </section>

      {c && (
        <UseCases
          c={c}
          items={localUseCases(c, d)}
          title={`${de(d.name)} ${s.keyword} hangi işlerde kullanılır?`}
          lead={`${nin(d.name)} iş dokusuna göre en sık karşılaştığımız ihtiyaçlar:`}
        />
      )}

      <ScopeAndProcess s={s} c={c} />
      {c && <PriceFactors s={s} c={c} title={`${de(d.name)} ${s.keyword} fiyatı neye göre belirlenir?`} />}

      <FaqSection title={`${d.name} ${s.name}: sık sorulan sorular`} faqs={faqs} />
      {c && <RelatedPosts slugs={c.posts} />}

      {/* İç bağlantılar */}
      <section aria-label="İlgili sayfalar" className="py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-navy">Yakın ilçelerde {s.name}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {nearby.map((n) => (
                <li key={n.slug}>
                  <Link href={`/${s.slug}/${n.slug}`} className="inline-flex min-h-11 items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:border-brand-500 hover:bg-white hover:text-brand-600">{n.name} {s.name}</Link>
                </li>
              ))}
            </ul>
            <Link href={`/${s.slug}`} className="mt-5 inline-flex items-center gap-1 font-semibold text-brand-500 hover:underline">
              İstanbul {s.name}: tüm ilçeler <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-navy">{de(d.name)} diğer hizmetlerimiz</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {others.map((o) => {
                const Icon = serviceIcons[o.slug];
                return (
                  <li key={o.slug}>
                    <Link href={`/${o.slug}/${d.slug}`} className="flex min-h-11 items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-brand-50 hover:text-brand-600">
                      {Icon && <Icon aria-hidden className="h-4 w-4 shrink-0 text-brand-500" />} {d.name} {o.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <ContactBanner />
      {reelsStrip && <ContactPopup service={s.name} />}
    </>
  );
}
