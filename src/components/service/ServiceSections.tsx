import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Lightbulb } from "lucide-react";
import { WhatsAppIcon } from "@/components/Icons";
import Reveal from "@/components/showcase/Reveal";
import { site } from "@/lib/site";
import { posts } from "@/lib/posts";
import type { LocalService } from "@/lib/localServices";
import type { ServiceContent } from "@/lib/serviceContent";

const wrap = "mx-auto max-w-7xl px-4 sm:px-6";
const eyebrow = "text-sm font-semibold uppercase tracking-[0.2em] text-brand-500";
const h2 = "mt-2 text-3xl font-extrabold text-navy sm:text-4xl";

const slugify = (t: string) =>
  t.toLocaleLowerCase("tr").replace(/ç/g, "c").replace(/ğ/g, "g").replace(/ı/g, "i").replace(/ö/g, "o").replace(/ş/g, "s").replace(/ü/g, "u").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** "Kısaca": soruya doğrudan cevap veren paragraf */
export function AnswerBox({ s, c }: { s: LocalService; c: ServiceContent }) {
  return (
    <section aria-labelledby="kisaca" className="py-10 sm:py-12">
      <div className={wrap}>
        <div className="flex gap-4 rounded-3xl border border-brand-100 bg-white p-6 shadow-sm sm:gap-6 sm:p-8">
          <span aria-hidden className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-500 sm:flex">
            <Lightbulb className="h-6 w-6" />
          </span>
          <div>
            <h2 id="kisaca" className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Kısaca: {s.name}</h2>
            <p className="mt-2 max-w-4xl text-lg leading-relaxed text-slate-700">{c.answer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Kullanım alanları / kimler için */
export function UseCases({ c, items, title, lead }: { c: ServiceContent; items?: ServiceContent["useCases"]; title?: string; lead?: string }) {
  const list = items ?? c.useCases;
  const four = list.length % 4 === 0;
  return (
    <section id="kullanim" aria-labelledby="kullanim-baslik" className="scroll-mt-24 py-14 sm:py-20">
      <div className={wrap}>
        <Reveal className="max-w-2xl">
          <p className={eyebrow}>Kullanım Alanları</p>
          <h2 id="kullanim-baslik" className={h2}>{title ?? c.useCasesTitle}</h2>
          <p className="mt-3 text-slate-600">{lead ?? c.useCasesLead}</p>
        </Reveal>
        <ul className={`mt-10 grid gap-4 sm:grid-cols-2 ${four ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {list.map((u, i) => (
            <li key={u.title}>
              <Reveal delay={(i % 4) * 60} className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-xl hover:shadow-brand-500/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                  <u.icon aria-hidden className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy">{u.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{u.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Kapsam listesi + adım adım süreç */
export function ScopeAndProcess({ s, c }: { s: LocalService; c?: ServiceContent }) {
  return (
    <section aria-labelledby="kapsam" className="border-y border-slate-200 bg-white py-14 sm:py-20">
      <div className={`${wrap} grid gap-12 lg:grid-cols-[1fr_1.15fr]`}>
        <div>
          <p className={eyebrow}>Kapsam</p>
          <h2 id="kapsam" className={h2}>{s.name} kapsamında neler var?</h2>
          <ul className="mt-8 space-y-3">
            {s.benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 font-medium text-slate-700">
                <span aria-hidden className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white"><Check className="h-3.5 w-3.5" /></span>
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className={eyebrow}>Süreç</p>
          <h2 className={h2}>Nasıl çalışıyoruz?</h2>
          <ol className="relative mt-8 space-y-6 before:absolute before:bottom-3 before:left-5 before:top-3 before:w-px before:bg-brand-100">
            {s.steps.map((st, i) => (
              <li key={st} className="relative flex gap-5">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-500 font-extrabold text-white shadow-lg shadow-brand-500/30 ring-4 ring-white">{i + 1}</span>
                <div className="pt-1.5">
                  <h3 className="text-lg font-bold text-navy">{st}</h3>
                  {c?.stepDetails[i] && <p className="mt-1 leading-relaxed text-slate-600">{c.stepDetails[i]}</p>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/** Uzun anlatım: solda yapışkan içindekiler, sağda bölümler */
export function Longform({ s, c }: { s: LocalService; c: ServiceContent }) {
  return (
    <section aria-label={`${s.name} rehberi`} className="py-14 sm:py-20">
      <div className={`${wrap} grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16`}>
        <nav aria-label="Bu sayfada" className="hidden lg:block">
          <div className="sticky top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Bu sayfada</p>
            <ul className="mt-4 space-y-1 border-l border-slate-200">
              {c.sections.map((x) => (
                <li key={x.h2}>
                  <a href={`#${slugify(x.h2)}`} className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-slate-600 transition-colors duration-200 hover:border-brand-500 hover:text-brand-600">{x.h2}</a>
                </li>
              ))}
              <li><a href="#fiyat" className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-slate-600 transition-colors duration-200 hover:border-brand-500 hover:text-brand-600">{c.priceTitle}</a></li>
              <li><a href="#sss" className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-slate-600 transition-colors duration-200 hover:border-brand-500 hover:text-brand-600">Sık sorulan sorular</a></li>
            </ul>
          </div>
        </nav>
        <div className="max-w-3xl space-y-14">
          {c.sections.map((x) => (
            <article key={x.h2} id={slugify(x.h2)} className="scroll-mt-28">
              <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">{x.h2}</h2>
              {x.p.map((t, i) => (
                <p key={i} className="mt-4 text-[17px] leading-relaxed text-slate-700">{t}</p>
              ))}
              {x.list && (
                <ul className="mt-5 space-y-2.5">
                  {x.list.map((l) => (
                    <li key={l} className="flex items-start gap-3 text-slate-700">
                      <Check aria-hidden className="mt-1 h-4 w-4 shrink-0 text-brand-500" /> <span>{l}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Fiyatı belirleyen etkenler (rakam yok) + teklif çağrısı */
export function PriceFactors({ s, c, title }: { s: LocalService; c: ServiceContent; title?: string }) {
  return (
    <section id="fiyat" aria-labelledby="fiyat-baslik" className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-brand-700 py-14 text-white sm:py-20">
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl" />
      <div className={`${wrap} relative`}>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Fiyatlandırma</p>
          <h2 id="fiyat-baslik" className="mt-2 text-3xl font-extrabold sm:text-4xl">{title ?? c.priceTitle}</h2>
          <p className="mt-3 text-blue-100/85">Hazır bir fiyat listesi yerine işinizin kapsamına göre teklif veriyoruz. Teklifi şu altı etken belirler:</p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {c.priceFactors.map((f, i) => (
            <li key={f.t} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <span className="text-xs font-bold text-blue-300">0{i + 1}</span>
              <h3 className="mt-2 font-bold">{f.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-blue-100/80">{f.d}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl bg-white p-6 text-navy sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="text-xl font-extrabold">{s.name} için net teklif alın</p>
            <p className="mt-1 text-slate-600">İhtiyacınızı iki cümleyle yazın, aynı gün kapsam ve fiyatla dönelim.</p>
          </div>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 font-semibold text-white transition-colors duration-200 hover:bg-[#1fb955]">
            <WhatsAppIcon className="h-5 w-5" /> WhatsApp&apos;tan Yazın
          </a>
        </div>
      </div>
    </section>
  );
}

/** Sık sorulan sorular: açılır liste */
export function FaqSection({ title, faqs }: { title: string; faqs: { q: string; a: string }[] }) {
  return (
    <section id="sss" aria-labelledby="sss-baslik" className="scroll-mt-24 py-14 sm:py-20">
      <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16`}>
        <div>
          <p className={eyebrow}>Sık Sorulan Sorular</p>
          <h2 id="sss-baslik" className={h2}>{title}</h2>
          <p className="mt-3 text-slate-600">Aradığınız cevap burada yoksa WhatsApp&apos;tan sorun; mesai içinde yanıtlıyoruz.</p>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 font-semibold text-white shadow-lg shadow-brand-500/30 transition-colors duration-200 hover:bg-brand-600">
            <WhatsAppIcon className="h-5 w-5" /> Sorunuzu Yazın
          </a>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0} className="group rounded-2xl border border-slate-200 bg-white transition-colors duration-200 open:border-brand-500/40">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-slate-800 [&::-webkit-details-marker]:hidden">
                <h3 className="text-base sm:text-lg">{f.q}</h3>
                <ChevronDown aria-hidden className="h-5 w-5 shrink-0 text-brand-500 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/** İlgili blog yazıları */
export function RelatedPosts({ slugs }: { slugs: string[] }) {
  const list = slugs.map((x) => posts.find((p) => p.slug === x)).filter((p): p is (typeof posts)[number] => !!p);
  if (!list.length) return null;
  return (
    <section aria-labelledby="rehberler" className="border-t border-slate-200 bg-white py-14">
      <div className={wrap}>
        <p className={eyebrow}>Rehberler</p>
        <h2 id="rehberler" className="mt-2 text-2xl font-extrabold text-navy sm:text-3xl">Karar vermeden önce okuyun</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:bg-white hover:shadow-xl hover:shadow-brand-500/10">
                <h3 className="text-lg font-bold text-navy">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{p.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-500">Yazıyı oku <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" /></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
