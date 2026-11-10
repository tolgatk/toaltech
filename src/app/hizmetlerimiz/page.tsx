import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container, PageHero } from "@/components/ui";
import ContactBanner from "@/components/ContactBanner";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/showcase/Reveal";
import { FaqSection } from "@/components/service/ServiceSections";
import { sectors } from "@/lib/data";
import { getLocalService, type LocalService } from "@/lib/localServices";
import { serviceIcons } from "@/lib/serviceContent";
import { faqNode, itemListNode, pageGraph } from "@/lib/schema";

const TITLE = "Hizmetlerimiz: Sosyal Medya, Drone, Web, Yazılım";
const DESC = "İstanbul'da sosyal medya yönetimi, drone ve ürün çekimi, web tasarım, yazılım danışmanlığı, SEO ve reklam. On hizmet, tek ekip: kapsam ve süreçleri inceleyin.";

export const metadata: Metadata = { title: TITLE, description: DESC, alternates: { canonical: "/hizmetlerimiz" } };

const groups: { id: string; title: string; lead: string; slugs: string[] }[] = [
  {
    id: "icerik",
    title: "Sosyal medya ve içerik",
    lead: "Planlama, çekim, kurgu ve paylaşım. İşi tamamen devredebilir ya da yalnızca strateji desteği alabilirsiniz.",
    slugs: ["sosyal-medya-yonetimi", "sosyal-medya-danismanligi", "cafe-sosyal-medya-danismanligi", "restoran-sosyal-medya-danismanligi"],
  },
  {
    id: "cekim",
    title: "Çekim ve prodüksiyon",
    lead: "Havadan ve yerden profesyonel çekim; web siteniz, ilanlarınız ve reklamlarınız için kullanıma hazır teslim.",
    slugs: ["drone-cekimi", "urun-cekimi"],
  },
  {
    id: "web",
    title: "Web, yazılım ve arama",
    lead: "Hızlı açılan siteler, işinize uygun yazılım kararları ve Google ile yapay zeka aramalarında görünürlük.",
    slugs: ["web-tasarim", "yazilim-danismanligi", "seo-hizmeti"],
  },
  {
    id: "reklam",
    title: "Reklam",
    lead: "Bütçenizi ilçenize ve hedef kitlenize göre yöneten, sonucu mesaj ve satışla ölçen reklam yönetimi.",
    slugs: ["reklam-danismanligi"],
  },
];

const faqs = [
  { q: "Birden fazla hizmeti aynı anda alabilir miyim?", a: "Evet. Çekim, içerik, web, yazılım ve reklam aynı ekipte olduğu için hizmetler tek plan altında birleştirilir; örneğin drone çekiminden çıkan görüntüler hem web sitenizde hem reklamlarınızda kullanılır." },
  { q: "Hangi hizmetle başlamalıyım?", a: "İşletmenizin durumuna göre değişir. İlk görüşmede mevcut web sitenizi, sosyal medya hesaplarınızı ve hedefinizi dinleyip öncelik sırası öneriyoruz; ilk görüşme ücretsizdir." },
  { q: "İstanbul'un her ilçesine geliyor musunuz?", a: "Evet. Toplantı ve çekim için İstanbul'un iki yakasındaki tüm ilçelerde işletmenize geliyoruz; süreç WhatsApp ve online araçlarla devam ediyor." },
  { q: "Fiyatlar nasıl belirleniyor?", a: "Her işin kapsamı farklı olduğu için hazır fiyat listesi yerine yazılı teklif veriyoruz. Teklifte neyin dahil olduğu ve neyin olmadığı açıkça belirtilir." },
];

function ServiceCard({ s, i }: { s: LocalService; i: number }) {
  const Icon = serviceIcons[s.slug];
  return (
    <Reveal delay={(i % 3) * 60} className="h-full">
      <Link
        href={`/${s.slug}`}
        className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-xl hover:shadow-brand-500/10"
      >
        {Icon && (
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
            <Icon aria-hidden className="h-6 w-6" />
          </span>
        )}
        <h3 className="mt-5 text-xl font-bold text-navy">{s.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.intro}</p>
        <ul className="mt-5 flex-1 space-y-2">
          {s.benefits.slice(0, 3).map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
              <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" /> {b}
            </li>
          ))}
        </ul>
        <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-500">
          İstanbul {s.name} <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </Link>
    </Reveal>
  );
}

export default function Page() {
  const all = groups.flatMap((g) => g.slugs).map((x) => getLocalService(x)).filter((x): x is LocalService => !!x);
  return (
    <>
      <JsonLd
        data={pageGraph("/hizmetlerimiz", TITLE, DESC, "CollectionPage", [
          itemListNode("/hizmetlerimiz", "ToalTech hizmetleri", all.map((s) => ({ name: `İstanbul ${s.name}`, url: `/${s.slug}` }))),
          faqNode("/hizmetlerimiz", faqs),
        ])}
      />
      <PageHero
        eyebrow="Hizmetlerimiz"
        title="On hizmet, tek ekip"
        desc="Sosyal medya yönetiminden drone çekimine, web tasarımdan yazılım danışmanlığına: İstanbul'daki işletmenizin dijitalde ihtiyaç duyduğu işleri aynı ekip planlar, üretir ve raporlar."
      />

      {/* Hızlı geçiş */}
      <nav aria-label="Hizmet grupları" className="sticky top-16 z-30 border-y border-slate-200 bg-white/90 backdrop-blur lg:top-20">
        <Container className="flex gap-2 overflow-x-auto py-3">
          {groups.map((g) => (
            <a key={g.id} href={`#${g.id}`} className="inline-flex min-h-11 shrink-0 items-center rounded-full border border-slate-200 px-4 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-brand-500 hover:text-brand-600">
              {g.title}
            </a>
          ))}
        </Container>
      </nav>

      {groups.map((g) => {
        const list = g.slugs.map((x) => getLocalService(x)).filter((x): x is LocalService => !!x);
        return (
          <section key={g.id} id={g.id} aria-labelledby={`${g.id}-baslik`} className="scroll-mt-36 pt-14 sm:pt-20">
            <Container>
              <div className="max-w-2xl">
                <h2 id={`${g.id}-baslik`} className="text-3xl font-extrabold text-navy sm:text-4xl">{g.title}</h2>
                <p className="mt-3 text-slate-600">{g.lead}</p>
              </div>
              <div className={`mt-8 grid gap-5 md:grid-cols-2 ${list.length === 1 ? "lg:grid-cols-2" : list.length % 2 === 0 && list.length < 5 ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
                {list.map((s, i) => (
                  <ServiceCard key={s.slug} s={s} i={i} />
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      {/* Sektörler */}
      <section aria-labelledby="sektorler" className="mt-14 border-y border-slate-200 bg-white py-14 sm:mt-20 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Sektörler</p>
            <h2 id="sektorler" className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">Hangi sektörde ne yapıyoruz?</h2>
            <p className="mt-3 text-slate-600">Aynı hizmet her sektörde farklı uygulanır. En sık çalıştığımız alanlar ve o alanlarda öne çıkan işler:</p>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((r) => (
              <li key={r.name} className="rounded-2xl bg-slate-50 p-6">
                <h3 className="text-lg font-bold text-navy">{r.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.desc}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-slate-600">
            Paket halinde çalışmak isterseniz <Link href="/paketlerimiz" className="font-semibold text-brand-500 hover:underline">paketlerimizi</Link>, yaptığımız işleri görmek isterseniz <Link href="/referanslar" className="font-semibold text-brand-500 hover:underline">referanslarımızı</Link> inceleyin.
          </p>
        </Container>
      </section>

      <FaqSection title="Hizmetler hakkında sık sorulanlar" faqs={faqs} />
      <ContactBanner />
    </>
  );
}
