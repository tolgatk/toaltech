import type { Metadata } from "next";
import { Container, PageHero, ButtonLink } from "@/components/ui";
import ContactBanner from "@/components/ContactBanner";
import { sectors } from "@/lib/data";
import ClientMarquee from "@/components/ClientMarquee";
import SeoCallout from "@/components/SeoCallout";
import { Search, Bot, Check } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = { title: "Referanslarımız ve Çalıştığımız Sektörler", description: "Kafe-restoran, sağlık, perakende, emlak, eğitim ve sanayi sektörlerinde web tasarım, sosyal medya ve çekim çalışmalarımız.", alternates: { canonical: "/referanslar" } };

const shots = [
  { src: "/referanslar/fasilekibi/kadikoy-fasil-ekibi-kiralama-google-1-sira.png", w: 1366, h: 680, alt: "Google'da 'kadıköy fasıl ekibi kiralama' aramasında fasilekibi.org 1. sırada", caption: "\"kadıköy fasıl ekibi kiralama\" — Google 1. sıra" },
  { src: "/referanslar/fasilekibi/bursa-fasil-ekibi-kiralama-google-1-sira.png", w: 1416, h: 554, alt: "Google'da 'bursa fasıl ekibi kiralama' aramasında fasilekibi.org 1. sırada", caption: "\"bursa fasıl ekibi kiralama\" — Google 1. sıra" },
  { src: "/referanslar/fasilekibi/tekirdag-fasil-ekibi-kiralama-google-1-sira.png", w: 1518, h: 646, alt: "Google'da 'tekirdağ fasıl ekibi kiralama' aramasında fasilekibi.org 1. sırada", caption: "\"tekirdağ fasıl ekibi kiralama\" — Google 1. sıra" },
  { src: "/referanslar/fasilekibi/sakarya-fasil-ekibi-kiralama-google-1-sira.png", w: 1526, h: 714, alt: "Google'da 'sakarya fasıl ekibi kiralama' aramasında fasilekibi.org 1. sırada", caption: "\"sakarya fasıl ekibi kiralama\" — Google 1. sıra" },
];

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Referanslar" title="Birlikte Çalıştığımız Markalar" desc="Mobilyadan kuyumculuğa, dershaneden inşaata farklı sektörlerdeki işletmelerle web, sosyal medya ve çekim projeleri yürütüyoruz. Sektörünüze benzer örnek çalışmaları görmek için bize yazın." />
      <ClientMarquee title={null} />
      <Container className="py-12">
        <SeoCallout />
      </Container>
      <Container className="py-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Vaka Örneği</p>
        <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">fasilekibi.org — Google&apos;da 1. sıra ve yapay zeka önerisi</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Referansımız Uğur Sarar Müzik Organizasyonu için kurduğumuz şehir bazlı SEO yapısıyla site, hedeflenen aramalarda Google&apos;da ilk sırada çıkıyor ve Google AI Modu&apos;nda &quot;Büyükçekmece&apos;de bir fasıl ekibi önerebilir misin?&quot; sorusuna doğrudan öneri olarak veriliyor.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="flex items-center gap-2 font-bold text-navy"><Search className="h-5 w-5 text-brand-500" /> Google&apos;da 1. sıra</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {["kadıköy fasıl ekibi kiralama", "bursa fasıl ekibi kiralama", "tekirdağ fasıl ekibi kiralama", "sakarya fasıl ekibi kiralama"].map((k) => (
                <li key={k} className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> &quot;{k}&quot;</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="flex items-center gap-2 font-bold text-navy"><Bot className="h-5 w-5 text-brand-500" /> Google AI Modu&apos;nda öneriliyor</p>
            <p className="mt-3 text-sm text-slate-700">
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
      </Container>
      <Container className="grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {sectors.map((r) => (
          <div key={r.name} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold text-navy">{r.name}</h2>
            <p className="mt-2 text-sm text-slate-600">{r.desc}</p>
          </div>
        ))}
      </Container>
      <Container className="py-4">
        <div className="rounded-2xl bg-brand-50 p-8 text-center">
          <h2 className="text-xl font-bold text-navy">Örnek çalışmalarımızı görmek ister misiniz?</h2>
          <p className="mt-2 text-slate-600">Sektörünüze uygun önce/sonra örneklerini WhatsApp üzerinden paylaşıyoruz.</p>
          <div className="mt-5"><ButtonLink href="/iletisim">Örnek İş İsteyin</ButtonLink></div>
        </div>
      </Container>
      <ContactBanner />
    </>
  );
}
