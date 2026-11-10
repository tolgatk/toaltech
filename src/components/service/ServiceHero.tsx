import { ArrowDown, Check, Phone, Play } from "lucide-react";
import Breadcrumbs, { type Crumb } from "@/components/Breadcrumbs";
import { WhatsAppIcon } from "@/components/Icons";
import ReelCard from "@/components/showcase/ReelCard";
import { site } from "@/lib/site";
import type { LocalService } from "@/lib/localServices";
import type { ServiceContent } from "@/lib/serviceContent";
import type { District } from "@/lib/districts";

type Props = {
  s: LocalService;
  c?: ServiceContent;
  /** İlçe sayfasında verilir: başlık, yol ve giriş metni ilçeye göre kurulur */
  d?: District;
  /** Giriş paragrafı (verilmezse hizmetin genel tanıtımı) */
  lead?: string;
};

const waBtn =
  "inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-500/20 transition-colors duration-200 hover:bg-[#1fb955] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500";

const crumbs = (s: LocalService, d?: District): Crumb[] =>
  d ? [{ name: s.name, href: `/${s.slug}` }, { name: d.name, href: `/${s.slug}/${d.slug}` }] : [{ name: s.name, href: `/${s.slug}` }];
const heading = (s: LocalService, d?: District) => `${d ? d.name : "İstanbul"} ${s.name}`;
const eyebrowText = (c?: ServiceContent, d?: District) =>
  d ? `İstanbul ${d.side} Yakası · ${d.name} · Yerinde hizmet` : c?.eyebrow ?? "İstanbul genelinde yerinde hizmet";

/** Hizmet sayfası girişi. Drone ve yazılım için özel görsel, diğerleri için sade düzen. */
export default function ServiceHero(props: Props) {
  if (props.s.slug === "drone-cekimi") return <DroneHero {...props} />;
  if (props.s.slug === "yazilim-danismanligi") return <SoftwareHero {...props} />;
  return <DefaultHero {...props} />;
}

function Highlights({ items, dark = false }: { items: ServiceContent["highlights"]; dark?: boolean }) {
  return (
    <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
      {items.map((x) => (
        <div key={x.v} className={`rounded-2xl px-4 py-3 backdrop-blur ${dark ? "border border-white/10 bg-white/5" : "border border-slate-200 bg-white/80"}`}>
          <dt className={`text-lg font-extrabold ${dark ? "text-white" : "text-navy"}`}>{x.v}</dt>
          <dd className={`mt-0.5 text-xs font-medium leading-snug ${dark ? "text-blue-100/70" : "text-slate-500"}`}>{x.l}</dd>
        </div>
      ))}
    </dl>
  );
}

function PhoneLink({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href={`tel:${site.phoneTel}`}
      className={`inline-flex min-h-12 items-center gap-2 rounded-xl px-5 py-3.5 font-semibold transition-colors duration-200 ${
        dark ? "border border-white/20 text-white hover:bg-white/10" : "border border-slate-200 bg-white text-navy hover:border-brand-500"
      }`}
    >
      <Phone aria-hidden className="h-5 w-5" /> {site.phoneDisplay}
    </a>
  );
}

/* ---------------- Drone ---------------- */

function Viewfinder({ slug, label, className }: { slug: string; label: string; className: string }) {
  const corner = "absolute h-5 w-5 border-white/80";
  return (
    <div className={className}>
      <div className="relative">
        <ReelCard slug={slug} className="rounded-3xl" />
        <span aria-hidden className={`${corner} left-3 top-3 rounded-tl-md border-l-2 border-t-2`} />
        <span aria-hidden className={`${corner} right-3 top-3 rounded-tr-md border-r-2 border-t-2`} />
        <span aria-hidden className={`${corner} bottom-3 left-3 rounded-bl-md border-b-2 border-l-2`} />
        <span aria-hidden className={`${corner} bottom-3 right-3 rounded-br-md border-b-2 border-r-2`} />
        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/55 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur">{label}</span>
      </div>
    </div>
  );
}

function DroneHero({ s, c, d, lead }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy-dark text-white">
      <div aria-hidden className="pointer-events-none absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-brand-500/30 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-cyan-400/15 blur-3xl" />
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_1fr] lg:py-20">
        <div>
          <Breadcrumbs dark items={crumbs(s, d)} />
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{eyebrowText(c, d)}</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.08] sm:text-5xl xl:text-6xl">
            {heading(s, d)}
            <span className="mt-2 block text-2xl font-bold text-blue-200 sm:text-3xl">Emlak, tesis ve mekânlar için 4K havadan çekim</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-blue-100/85">{lead ?? s.intro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className={waBtn}>
              <WhatsAppIcon className="h-5 w-5" /> WhatsApp&apos;tan Teklif Al
            </a>
            {d ? (
              <PhoneLink dark />
            ) : (
              <a href="#drone-isler" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/20 px-5 py-3.5 font-semibold text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <Play aria-hidden className="h-4 w-4 fill-current" /> Çekimleri İzleyin <ArrowDown aria-hidden className="h-4 w-4" />
              </a>
            )}
          </div>
          {c && <Highlights dark items={c.highlights} />}
        </div>

        {/* Videolar sabit durur: çekimin kendi hareketi yeterli */}
        <div className="relative mx-auto grid w-full max-w-md grid-cols-3 items-center gap-3 pb-10 sm:gap-4 lg:max-w-none">
          <Viewfinder slug="drone-gunbatimi" label="Gün batımı" className="translate-y-6" />
          <Viewfinder slug="drone-gece" label="Gece" className="-translate-y-2" />
          <Viewfinder slug="drone-gunduz" label="Gündüz" className="translate-y-10" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Yazılım ---------------- */

const roadmap = [
  { t: "İhtiyaç analizi", d: "Asıl sorun ne, kim kullanacak?" },
  { t: "Seçenekler", d: "Hazır ürün · uyarlama · özel yazılım" },
  { t: "Maliyet, süre, risk", d: "Yazılı ve karşılaştırılabilir" },
  { t: "Geliştirme ve takip", d: "Haftalık ilerleme" },
  { t: "Test, devir, destek", d: "Kod ve hesaplar sizde" },
];

function SoftwareHero({ s, c, d, lead }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div aria-hidden className="bg-dots pointer-events-none absolute -right-10 top-10 h-96 w-72 opacity-40" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_1fr] lg:py-20">
        <div>
          <Breadcrumbs items={crumbs(s, d)} />
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">{eyebrowText(c, d)}</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.08] text-navy sm:text-5xl xl:text-6xl">
            {heading(s, d)}
            <span className="mt-2 block text-2xl font-bold text-brand-500 sm:text-3xl">Yanlış yazılıma para harcamadan önce</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">{lead ?? s.intro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className={waBtn}>
              <WhatsAppIcon className="h-5 w-5" /> Ücretsiz İlk Görüşme
            </a>
            {d ? (
              <PhoneLink />
            ) : (
              <a href="#kullanim" className="inline-flex min-h-12 items-center gap-2 rounded-xl px-5 py-3.5 font-semibold text-brand-500 transition-colors duration-200 hover:bg-brand-50">
                Ne zaman gerekir? <ArrowDown aria-hidden className="h-4 w-4" />
              </a>
            )}
          </div>
          {c && <Highlights items={c.highlights} />}
        </div>

        {/* Yol haritası paneli */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div aria-hidden className="absolute inset-6 rounded-full bg-brand-500/25 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 shadow-2xl shadow-slate-900/30 ring-1 ring-slate-800">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
              <span aria-hidden className="h-3 w-3 rounded-full bg-rose-400/80" />
              <span aria-hidden className="h-3 w-3 rounded-full bg-amber-300/80" />
              <span aria-hidden className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <span className="ml-3 font-mono text-xs text-slate-400">yol-haritasi.md</span>
            </div>
            <ol className="space-y-1 p-5 sm:p-6">
              {roadmap.map((r, i) => (
                <li key={r.t} className="flex items-start gap-4 rounded-xl px-3 py-3 transition-colors duration-200 hover:bg-white/5">
                  <span className="font-mono text-sm text-slate-500">0{i + 1}</span>
                  <span className="flex-1">
                    <span className="block font-semibold text-white">{r.t}</span>
                    <span className="block text-sm text-slate-400">{r.d}</span>
                  </span>
                  <Check aria-hidden className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />
                </li>
              ))}
            </ol>
            <div className="flex flex-wrap gap-2 border-t border-white/10 px-5 py-4 sm:px-6">
              {["Next.js", "React", "Node.js", "WordPress", "E-ticaret", "API entegrasyonu"].map((t) => (
                <span key={t} className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-blue-200 ring-1 ring-white/10">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Varsayılan ---------------- */

function DefaultHero({ s, c, d, lead }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div aria-hidden className="bg-dots pointer-events-none absolute inset-y-0 right-0 w-1/3 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <Breadcrumbs items={crumbs(s, d)} />
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">{eyebrowText(c, d)}</p>
        <h1 className="mt-2 text-4xl font-extrabold text-navy sm:text-5xl">{heading(s, d)}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">{lead ?? s.intro}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className={waBtn}>
            <WhatsAppIcon className="h-5 w-5" /> WhatsApp&apos;tan Teklif Al
          </a>
          <PhoneLink />
        </div>
        {c && <Highlights items={c.highlights} />}
      </div>
    </section>
  );
}
