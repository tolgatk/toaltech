import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/showcase/Reveal";
import { FaqSection } from "@/components/service/ServiceSections";
import { stats } from "@/lib/data";
import { getLocalService, type LocalService } from "@/lib/localServices";
import { serviceIcons } from "@/lib/serviceContent";
import { posts } from "@/lib/posts";

const wrap = "mx-auto max-w-7xl px-4 sm:px-6";

/** Ana sayfada öne çıkan hizmetler, öncelik sırasıyla */
const featured = ["sosyal-medya-yonetimi", "drone-cekimi", "yazilim-danismanligi", "web-tasarim", "sosyal-medya-danismanligi", "seo-hizmeti", "reklam-danismanligi", "urun-cekimi"]
  .map((x) => getLocalService(x))
  .filter((x): x is LocalService => !!x);

/** Ana sayfa SSS'leri: sayfada görünür ve yapısal veriye de girer */
export const homeFaqs = [
  { q: "ToalTech hangi hizmetleri veriyor?", a: "İstanbul'daki işletmeler için sosyal medya yönetimi ve danışmanlığı, drone ve ürün çekimi, web tasarım, yazılım danışmanlığı, SEO ve Meta ile Google reklam danışmanlığı veriyoruz. Çekim, kurgu, tasarım, yazılım ve reklam aynı ekipte yürütülür." },
  { q: "İstanbul'un hangi ilçelerinde hizmet veriyorsunuz?", a: "Avrupa ve Anadolu Yakası'ndaki tüm ilçelerde. Toplantı ve çekim için işletmenize geliyoruz; sonraki süreç WhatsApp ve online araçlarla ilerliyor." },
  { q: "İlk görüşme ücretli mi?", a: "Hayır. İlk görüşmede işletmenizi ve hedefinizi dinliyor, mevcut web sitenize ve sosyal medya hesaplarınıza bakıp öncelik sırası öneriyoruz." },
  { q: "Fiyat nasıl öğrenebilirim?", a: "İhtiyacınızı WhatsApp'tan iki cümleyle yazmanız yeterli; aynı gün kapsamı ve fiyatı içeren yazılı bir teklifle dönüyoruz." },
  { q: "Sosyal medya hesaplarım ve web sitem kime ait olur?", a: "Size. Hesaplar, reklam hesabı, alan adı, hosting ve kaynak kod işletmenizin adına açılır; biz yetkili kullanıcı olarak çalışırız." },
];

/** Tüm hizmetler: simgeli kart ızgarası */
export function HomeServices() {
  return (
    <section aria-labelledby="hizmetler" className="py-16 sm:py-24">
      <div className={wrap}>
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Hizmetlerimiz</p>
            <h2 id="hizmetler" className="mt-2 text-3xl font-extrabold text-navy sm:text-5xl">İstanbul&apos;da dijitalin tamamı, tek ekipte</h2>
            <p className="mt-3 text-slate-600">Çekimi yapan, siteyi yazan ve reklamı yöneten ekip aynı. Hangi işe ihtiyacınız varsa oradan başlayın.</p>
          </div>
          <Link href="/hizmetlerimiz" className="inline-flex min-h-11 items-center gap-1 font-semibold text-brand-500 hover:underline">
            Tüm hizmetler <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((s, i) => {
            const Icon = serviceIcons[s.slug];
            return (
              <li key={s.slug}>
                <Reveal delay={(i % 4) * 60} className="h-full">
                  <Link href={`/${s.slug}`} className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-xl hover:shadow-brand-500/10">
                    {Icon && (
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                        <Icon aria-hidden className="h-6 w-6" />
                      </span>
                    )}
                    <h3 className="mt-4 text-lg font-bold text-navy">{s.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.benefits.slice(0, 2).join(" · ")}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-500">İncele <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" /></span>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/** Neden ToalTech: dört somut söz */
export function HomeWhy() {
  return (
    <section aria-labelledby="neden" className="border-y border-slate-200 bg-white py-16 sm:py-20">
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]`}>
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Neden ToalTech?</p>
          <h2 id="neden" className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">Ajans karmaşası yok, sonuç var</h2>
          <p className="mt-3 text-slate-600">Web sitesini bir firmaya, çekimi başkasına, reklamı bir üçüncüye vermek zorunda değilsiniz. Tek ekip, tek plan, tek rapor.</p>
          <Link href="/hakkimizda" className="mt-5 inline-flex min-h-11 items-center gap-1 font-semibold text-brand-500 hover:underline">
            Nasıl çalıştığımızı okuyun <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </Reveal>
        <ul className="grid gap-4 sm:grid-cols-2">
          {stats.map((s, i) => (
            <li key={s.label}>
              <Reveal delay={i * 60} className="h-full rounded-2xl bg-slate-50 p-6">
                <s.icon aria-hidden className="h-7 w-7 text-brand-500" />
                <p className="mt-3 text-2xl font-extrabold text-navy">{s.value}</p>
                <h3 className="font-semibold text-slate-700">{s.label}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Son rehber yazıları */
export function HomeGuides() {
  return (
    <section aria-labelledby="rehberler" className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className={wrap}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Rehberler</p>
            <h2 id="rehberler" className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">Karar vermeden önce okuyun</h2>
          </div>
          <Link href="/blog" className="inline-flex min-h-11 items-center gap-1 font-semibold text-brand-500 hover:underline">
            Tüm yazılar <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>
        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {posts.slice(0, 4).map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:bg-white hover:shadow-xl hover:shadow-brand-500/10">
                <h3 className="text-lg font-bold leading-snug text-navy">{p.h1}</h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">{p.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-500">Yazıyı oku <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" /></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HomeFaq() {
  return <FaqSection title="İlk görüşmeden önce merak edilenler" faqs={homeFaqs} />;
}
