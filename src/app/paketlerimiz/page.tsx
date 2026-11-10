import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Minus } from "lucide-react";
import { Container, PageHero } from "@/components/ui";
import ContactBanner from "@/components/ContactBanner";
import JsonLd from "@/components/JsonLd";
import { WhatsAppIcon } from "@/components/Icons";
import { FaqSection } from "@/components/service/ServiceSections";
import { packages } from "@/lib/data";
import { getLocalService } from "@/lib/localServices";
import { serviceIcons } from "@/lib/serviceContent";
import { faqNode, itemListNode, pageGraph } from "@/lib/schema";
import { site } from "@/lib/site";

const TITLE = "Paketlerimiz: Web + Sosyal Medya Yönetimi Paketleri";
const DESC = "İstanbul'daki işletmeler için web sitesi ve sosyal medya yönetimi paketleri: Başlangıç, Profesyonel, Kurumsal. Kapsam karşılaştırması ve ek hizmetler.";

export const metadata: Metadata = { title: TITLE, description: DESC, alternates: { canonical: "/paketlerimiz" } };

/** Paket kartlarının altındaki "kimler için" açıklamaları */
const fit: Record<string, string> = {
  "Başlangıç": "Yeni açılan ya da dijitalde ilk kez düzenli görünmek isteyen işletmeler.",
  "Profesyonel": "Düzenli içerik ve reklamla müşteri talebini artırmak isteyen işletmeler.",
  "Kurumsal": "Birden fazla kanalı, kampanyayı ve ekibi tek elden yönetmek isteyen markalar.",
};

/** Karşılaştırma tablosu: paket verisindeki maddelerin satır satır dökümü */
const rows: { label: string; values: [string | boolean, string | boolean, string | boolean] }[] = [
  { label: "Web sitesi", values: ["Tek sayfa", "Kurumsal (5+ sayfa)", "Özel tasarım ya da e-ticaret"] },
  { label: "Aylık paylaşım", values: ["8 paylaşım", "16 paylaşım + hikâyeler", "Sınırsız içerik planı"] },
  { label: "Görsel tasarım", values: [true, true, true] },
  { label: "Reels ve video içerik", values: [false, true, true] },
  { label: "Reklam yönetimi", values: [false, "Meta reklamları", "Reklam + influencer yönetimi"] },
  { label: "Raporlama", values: ["Aylık rapor", "Aylık rapor + strateji toplantısı", "Haftalık rapor"] },
  { label: "Öncelikli destek", values: [false, false, true] },
];

const always = [
  { t: "Hesaplar sizin adınıza", d: "Sosyal medya hesapları, reklam hesabı, alan adı ve hosting işletmenize aittir; biz yetkili kullanıcı olarak çalışırız." },
  { t: "Yayından önce onay", d: "Aylık takvim ve hazırlanan içerikler paylaşılmadan önce onayınıza sunulur." },
  { t: "Yazılı kapsam", d: "Neyin dahil olduğu ve neyin olmadığı teklifte madde madde yazar; sonradan sürpriz kalem çıkmaz." },
  { t: "Reklam bütçesi ayrı", d: "Reklam bütçesi doğrudan platforma ödenir ve sizin kontrolünüzdedir; yönetim ücretine dahil değildir." },
  { t: "Tek muhatap", d: "Sürecin tamamında tek bir kişiyle konuşursunuz; WhatsApp üzerinden mesai içinde dönüş alırsınız." },
  { t: "İstanbul genelinde yerinde", d: "Toplantı ve çekim için İstanbul'un iki yakasında işletmenize geliyoruz." },
];

const addons = ["drone-cekimi", "urun-cekimi", "seo-hizmeti", "yazilim-danismanligi"];

const faqs = [
  { q: "Paket fiyatları neden sitede yazmıyor?", a: "Aynı paket, içerik adedi, çekim sıklığı ve web sitesinin kapsamına göre farklı emek gerektirir. Bu yüzden işletmenizi dinledikten sonra yazılı ve kalem kalem bir teklif veriyoruz. Piyasadaki aralıkları görmek isterseniz blogdaki fiyat yazılarımıza bakabilirsiniz." },
  { q: "Reklam bütçesi pakete dahil mi?", a: "Hayır. Reklam bütçesi doğrudan Meta ya da Google'a ödenir. Pakete dahil olan, reklamların kurulması, yönetilmesi ve raporlanmasıdır." },
  { q: "Minimum çalışma süresi var mı?", a: "Sosyal medyada kalıcı sonuç düzenlilik gerektirdiği için en az üç aylık çalışma öneriyoruz." },
  { q: "Paketi sonradan değiştirebilir miyim?", a: "Evet. İhtiyacınız değiştikçe kapsam güncellenir; örneğin Başlangıç ile başlayıp reklam ve video ihtiyacı doğduğunda Profesyonel kapsamına geçebilirsiniz." },
  { q: "Yalnızca web sitesi ya da yalnızca sosyal medya alabilir miyim?", a: "Evet. Paketler web ve sosyal medyayı birlikte planlayanlar içindir; tek bir hizmet için ilgili hizmet sayfasından ayrı teklif alabilirsiniz." },
  { q: "Drone ya da ürün çekimi paketlere eklenebilir mi?", a: "Evet. Drone çekimi, ürün çekimi, SEO ve yazılım danışmanlığı her pakete ek hizmet olarak eklenebilir." },
];

function Cell({ v }: { v: string | boolean }) {
  if (v === true) return <><Check aria-hidden className="mx-auto h-5 w-5 text-emerald-500" /><span className="sr-only">Dahil</span></>;
  if (v === false) return <><Minus aria-hidden className="mx-auto h-5 w-5 text-slate-300" /><span className="sr-only">Dahil değil</span></>;
  return <>{v}</>;
}

export default function Page() {
  const extras = addons.map((x) => getLocalService(x)).filter((x): x is NonNullable<typeof x> => !!x);
  return (
    <>
      <JsonLd
        data={pageGraph("/paketlerimiz", TITLE, DESC, "WebPage", [
          itemListNode("/paketlerimiz", "ToalTech paketleri", packages.map((p) => ({ name: `${p.name} paketi`, url: "/paketlerimiz" }))),
          faqNode("/paketlerimiz", faqs),
        ])}
      />
      <PageHero
        eyebrow="Paketlerimiz"
        title="Web ve sosyal medya, tek pakette"
        desc="Web sitenizi ve sosyal medya hesaplarınızı birlikte planlayan üç paket. Kapsam aşağıda açıkça yazıyor; fiyatı işletmenizi dinledikten sonra yazılı teklif olarak veriyoruz."
      />

      {/* Paket kartları */}
      <Container className="grid gap-6 py-12 lg:grid-cols-3 lg:items-stretch">
        {packages.map((p) => {
          const hot = p.name === "Profesyonel";
          return (
            <article
              key={p.name}
              className={`relative flex flex-col rounded-3xl border p-8 ${hot ? "border-brand-500 bg-navy text-white shadow-2xl shadow-brand-500/25 lg:-my-3" : "border-slate-200 bg-white"}`}
            >
              {hot && <p className="absolute -top-3 left-8 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">En çok tercih edilen</p>}
              <h2 className="text-2xl font-extrabold">{p.name}</h2>
              <p className={`mt-2 text-sm ${hot ? "text-blue-100" : "text-slate-600"}`}>{fit[p.name] ?? p.desc}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check aria-hidden className={`mt-0.5 h-4 w-4 shrink-0 ${hot ? "text-emerald-300" : "text-brand-500"}`} /> {f}
                  </li>
                ))}
              </ul>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold transition-colors duration-200 ${hot ? "bg-[#25D366] text-white hover:bg-[#1fb955]" : "bg-brand-500 text-white hover:bg-brand-600"}`}
              >
                <WhatsAppIcon className="h-5 w-5" /> {p.name} için teklif al
              </a>
            </article>
          );
        })}
      </Container>

      {/* Karşılaştırma */}
      <section aria-labelledby="karsilastirma" className="py-10 sm:py-14">
        <Container>
          <h2 id="karsilastirma" className="text-3xl font-extrabold text-navy sm:text-4xl">Paketleri karşılaştırın</h2>
          <p className="mt-3 max-w-2xl text-slate-600">Üç paketin kapsamı yan yana. Listede olmayan bir ihtiyacınız varsa paketi buna göre uyarlıyoruz.</p>
          <div className="relative mt-8 overflow-x-auto rounded-3xl border border-slate-200 bg-white">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="sr-only">Başlangıç, Profesyonel ve Kurumsal paketlerinin kapsam karşılaştırması</caption>
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th scope="col" className="px-5 py-4 font-semibold text-slate-600">Kapsam</th>
                  {packages.map((p) => (
                    <th key={p.name} scope="col" className={`px-5 py-4 text-center text-base font-extrabold ${p.name === "Profesyonel" ? "text-brand-600" : "text-navy"}`}>{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label} className="border-b border-slate-100 last:border-0">
                    <th scope="row" className="px-5 py-4 font-semibold text-navy">{r.label}</th>
                    {r.values.map((v, i) => (
                      <td key={i} className={`px-5 py-4 text-center text-slate-700 ${i === 1 ? "bg-brand-50/50" : ""}`}><Cell v={v} /></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Tüm paketlerde */}
      <section aria-labelledby="hepsinde" className="border-y border-slate-200 bg-white py-14 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Tüm paketlerde geçerli</p>
            <h2 id="hepsinde" className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">Paket ne olursa olsun değişmeyenler</h2>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {always.map((a) => (
              <li key={a.t} className="rounded-2xl bg-slate-50 p-6">
                <h3 className="flex items-center gap-2 text-lg font-bold text-navy"><Check aria-hidden className="h-5 w-5 text-emerald-500" /> {a.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{a.d}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Ek hizmetler */}
      <section aria-labelledby="ekler" className="py-14 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Ek hizmetler</p>
            <h2 id="ekler" className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">Paketinize ekleyebilecekleriniz</h2>
            <p className="mt-3 text-slate-600">Her pakete ayrı teklifle eklenebilen hizmetler:</p>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {extras.map((s) => {
              const Icon = serviceIcons[s.slug];
              return (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-xl hover:shadow-brand-500/10">
                    {Icon && <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-500"><Icon aria-hidden className="h-5 w-5" /></span>}
                    <h3 className="mt-4 text-lg font-bold text-navy">{s.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.benefits.slice(0, 2).join(" · ")}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-500">İncele <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" /></span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="mt-8 text-slate-600">
            Fiyat aralıkları hakkında fikir edinmek için: <Link href="/blog/sosyal-medya-yonetimi-fiyatlari-2026" className="font-semibold text-brand-500 hover:underline">Sosyal Medya Yönetimi Fiyatları 2026</Link> ve <Link href="/blog/drone-cekimi-fiyatlari-2026" className="font-semibold text-brand-500 hover:underline">Drone Çekimi Fiyatları 2026</Link>.
          </p>
        </Container>
      </section>

      <FaqSection title="Paketler hakkında sık sorulanlar" faqs={faqs} />
      <ContactBanner />
    </>
  );
}
