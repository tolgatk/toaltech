import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Bot, Check, Search } from "lucide-react";
import { Container, PageHero, ButtonLink } from "@/components/ui";
import ContactBanner from "@/components/ContactBanner";
import JsonLd from "@/components/JsonLd";
import SeoCallout from "@/components/SeoCallout";
import ClientMarquee from "@/components/ClientMarquee";
import { VideoBento } from "@/components/showcase/WorkShowcase";
import { sectors } from "@/lib/data";
import { pageGraph, reelVideoNodes } from "@/lib/schema";

const TITLE = "Referanslar: Birlikte Çalıştığımız Markalar ve İşler";
const DESC = "ToalTech referansları: eğitim, kafe-restoran, konaklama, mücevher ve inşaat sektörlerindeki markalar için çektiğimiz videolar, kampanyalar ve SEO çalışması.";

export const metadata: Metadata = { title: TITLE, description: DESC, alternates: { canonical: "/referanslar" } };

const shots = [
  { src: "/referanslar/fasilekibi/kadikoy-fasil-ekibi-kiralama-google-1-sira.png", w: 1366, h: 680, alt: "Google'da 'kadıköy fasıl ekibi kiralama' aramasında fasilekibi.org 1. sırada", caption: "\"kadıköy fasıl ekibi kiralama\": Google 1. sıra" },
  { src: "/referanslar/fasilekibi/bursa-fasil-ekibi-kiralama-google-1-sira.png", w: 1416, h: 554, alt: "Google'da 'bursa fasıl ekibi kiralama' aramasında fasilekibi.org 1. sırada", caption: "\"bursa fasıl ekibi kiralama\": Google 1. sıra" },
  { src: "/referanslar/fasilekibi/tekirdag-fasil-ekibi-kiralama-google-1-sira.png", w: 1518, h: 646, alt: "Google'da 'tekirdağ fasıl ekibi kiralama' aramasında fasilekibi.org 1. sırada", caption: "\"tekirdağ fasıl ekibi kiralama\": Google 1. sıra" },
  { src: "/referanslar/fasilekibi/sakarya-fasil-ekibi-kiralama-google-1-sira.png", w: 1526, h: 714, alt: "Google'da 'sakarya fasıl ekibi kiralama' aramasında fasilekibi.org 1. sırada", caption: "\"sakarya fasıl ekibi kiralama\": Google 1. sıra" },
];

export default function Page() {
  return (
    <>
      <JsonLd data={pageGraph("/referanslar", TITLE, DESC, "CollectionPage", reelVideoNodes())} />
      <PageHero
        eyebrow="Referanslar"
        title="Birlikte çalıştığımız markalar"
        desc="Dershaneden restorana, bungalov tesisinden mücevhere: İstanbul'un iki yakasındaki işletmeler için çektiğimiz videolar, yürüttüğümüz kampanyalar ve arama sonuçlarındaki işimiz. Bu sayfadaki her video ve ekran görüntüsü gerçek bir işe aittir."
      />

      {/* Markalar: kayan şerit */}
      <ClientMarquee title={null} />

      {/* Videolar */}
      <section aria-label="Video işlerimiz" className="relative overflow-hidden bg-navy-dark pb-16 text-white sm:pb-24">
        <div aria-hidden className="pointer-events-none absolute -left-40 top-20 h-[28rem] w-[28rem] rounded-full bg-brand-500/25 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <VideoBento />
        </div>
      </section>

      {/* SEO vaka örneği */}
      <Container className="py-14 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Vaka Örneği · SEO</p>
        <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">fasilekibi.org: Google&apos;da 1. sıra ve yapay zeka önerisi</h2>
        <p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-slate-700">
          Referansımız Uğur Sarar Müzik Organizasyonu için kurduğumuz şehir bazlı SEO yapısıyla site, hedeflenen aramalarda Google&apos;da ilk sırada çıkıyor ve Google AI Modu&apos;nda &quot;Büyükçekmece&apos;de bir fasıl ekibi önerebilir misin?&quot; sorusuna doğrudan öneri olarak veriliyor.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="flex items-center gap-2 font-bold text-navy"><Search aria-hidden className="h-5 w-5 text-brand-500" /> Google&apos;da 1. sıra</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {["kadıköy fasıl ekibi kiralama", "bursa fasıl ekibi kiralama", "tekirdağ fasıl ekibi kiralama", "sakarya fasıl ekibi kiralama"].map((k) => (
                <li key={k} className="flex items-center gap-2"><Check aria-hidden className="h-4 w-4 text-emerald-500" /> &quot;{k}&quot;</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="flex items-center gap-2 font-bold text-navy"><Bot aria-hidden className="h-5 w-5 text-brand-500" /> Google AI Modu&apos;nda öneriliyor</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Kullanıcı &quot;Bana Büyükçekmece&apos;de bir fasıl ekibi önerebilir misin?&quot; diye sorduğunda yapay zeka, ilçeye özel hizmet sayfasını kaynak göstererek işletmeyi ilk seçenek olarak sunuyor.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {shots.map((sh) => (
            <figure key={sh.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <Image src={sh.src} alt={sh.alt} width={sh.w} height={sh.h} sizes="(min-width: 768px) 50vw, 100vw" className="h-auto w-full" />
              <figcaption className="px-4 py-3 text-sm text-slate-600">{sh.caption}</figcaption>
            </figure>
          ))}
          <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white md:col-span-2">
            <Image src="/referanslar/fasilekibi/google-ai-modu-fasil-ekibi-onerisi.png" alt="Google AI Modu: 'Bana Büyükçekmece'de bir fasıl ekibi önerebilir misin?' sorusuna fasilekibi.org kaynaklı Uğur Sarar Müzik Organizasyonu önerisi" width={1554} height={1588} sizes="(min-width: 1024px) 900px, 100vw" className="mx-auto h-auto w-full max-w-3xl" />
            <figcaption className="px-4 py-3 text-sm text-slate-600">Google AI Modu, Büyükçekmece için sorulan soruya fasilekibi.org&apos;u kaynak göstererek işletmeyi ilk sırada öneriyor.</figcaption>
          </figure>
        </div>
        <div className="mt-10"><SeoCallout /></div>
      </Container>

      {/* Sektörler */}
      <section aria-labelledby="sektorler" className="border-y border-slate-200 bg-white py-14 sm:py-20">
        <Container>
          <h2 id="sektorler" className="text-3xl font-extrabold text-navy sm:text-4xl">Çalıştığımız sektörler</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((r) => (
              <li key={r.name} className="rounded-2xl bg-slate-50 p-6">
                <h3 className="text-lg font-bold text-navy">{r.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.desc}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl bg-brand-50 p-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-extrabold text-navy">Sektörünüzden örnek görmek ister misiniz?</h2>
              <p className="mt-1 text-slate-600">İşletmenize en yakın örnek işleri ilk görüşmede gösteriyoruz. Hangi hizmetin size uyduğuna <Link href="/hizmetlerimiz" className="font-semibold text-brand-500 hover:underline">hizmetlerimiz</Link> sayfasından bakabilirsiniz.</p>
            </div>
            <ButtonLink href="/iletisim">Örnek İş İsteyin</ButtonLink>
          </div>
        </Container>
      </section>
      <ContactBanner />
    </>
  );
}
