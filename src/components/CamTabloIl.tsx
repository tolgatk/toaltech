import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import { Container } from "@/components/ui";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { CamTabloCollections, CamTabloCta, CamTabloFaq, CamTabloHero, CamTabloSizesAndRooms, CamTabloSteps } from "@/components/CamTablo";
import { camTabloFaq } from "@/lib/camTablo";
import { bolgeKargoNote, illerOf, type Il } from "@/lib/iller";
import { camTabloGraph } from "@/lib/schema";
import { de, e, nin } from "@/lib/tr";
import { abs } from "@/lib/seo";

/** İl sayfaları /cam-tablo/[il]: İstanbul ilçeleriyle aynı dinamik segmenti paylaşır */

const describe = (il: Il) =>
  `${il.name} cam tablo: 1.800+ tasarım, 4 mm temperli cam, 35×50 cm 1.200 ₺'den başlayan fiyatlar. ${e(il.name)} kargo ${il.kargo} iş günü, hasarda ücretsiz yeniden üretim.`;

export function ilMetadata(il: Il): Metadata {
  const title = `${il.name} Cam Tablo: Modeller, Fiyatlar ve Teslimat`;
  const description = describe(il);
  const url = abs(`/cam-tablo/${il.slug}`);
  return { title, description, alternates: { canonical: url }, openGraph: { title: `${title} | ToalTech`, description, url, type: "website" } };
}

export default function CamTabloIlPage({ il }: { il: Il }) {
  const path = `/cam-tablo/${il.slug}`;
  const komsular = illerOf(il.bolge).filter((x) => x.slug !== il.slug);
  const ilceText = `${il.ilceler.slice(0, -1).join(", ")} ve ${il.ilceler[il.ilceler.length - 1]}`;
  const faqs = [
    { q: `${e(il.name)} cam tablo kaç günde gelir?`, a: `Tablolar sipariş üzerine İstanbul'da üretilir ve genellikle 3–7 iş günü içinde kargoya verilir. ${e(il.name)} kargo süresi ${il.kargo} iş günüdür; kargoya verildiğinde takip numarası size iletilir.` },
    { q: `${de(il.name)} mağazanız var mı?`, a: `${de(il.name)} fiziksel mağazamız yok; üretim ve gönderim İstanbul'dan yapılır. ${ilceText} dahil ${nin(il.name)} tüm ilçelerine kargoyla adrese teslim ediyoruz. Tablolar köpük ve ahşap korumayla paketlenir, taşımada hasar olursa ücretsiz yeniden üretilir.` },
    { q: `${de(il.name)} hangi cam tablo modelleri tercih ediliyor?`, a: il.note },
    ...camTabloFaq.slice(0, 3),
  ];

  return (
    <>
      <JsonLd data={camTabloGraph(path, `${il.name} Cam Tablo`, describe(il), { name: il.name, type: "AdministrativeArea", country: true })} />
      <CamTabloHero
        eyebrow={`${il.bolge} Bölgesi · ${il.plaka} ${il.name}`}
        title={`${il.name} Cam Tablo`}
        intro={`${il.name} cam tablo siparişleriniz İstanbul'da 4 mm temperli cama UV baskıyla üretilir ve ${nin(il.name)} tüm ilçelerine kargoyla gönderilir. 1.800+ hazır tasarım arasından seçebilir ya da kendi fotoğrafınızla kişiye özel cam tablo yaptırabilirsiniz.`}
        campaign={`cam-tablo-${il.slug}`}
        alt={`${il.name} cam tablo: modern salon duvarında parlak yüzeyli büyük cam tablo`}
        breadcrumbs={<Breadcrumbs items={[{ name: "Cam Tablo", href: "/cam-tablo" }, { name: il.name, href: path }]} />}
      />

      <Container className="py-10">
        <h2 className="text-2xl font-bold text-navy">{de(il.name)} Cam Tablo Tercihleri</h2>
        <p className="mt-3 max-w-3xl text-slate-600">{il.note}</p>

        <h2 className="mt-10 text-2xl font-bold text-navy">{e(il.name)} Cam Tablo Teslimatı</h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-3">
          <li className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5">
            <PackageCheck className="h-6 w-6 shrink-0 text-brand-500" />
            <span><strong className="block text-slate-800">3–7 iş günü</strong><span className="text-sm text-slate-600">Sipariş üzerine üretim ve kalite kontrol</span></span>
          </li>
          <li className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5">
            <Truck className="h-6 w-6 shrink-0 text-brand-500" />
            <span><strong className="block text-slate-800">{il.kargo} iş günü</strong><span className="text-sm text-slate-600">İstanbul&apos;dan {e(il.name)} kargo süresi</span></span>
          </li>
          <li className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5">
            <ShieldCheck className="h-6 w-6 shrink-0 text-brand-500" />
            <span><strong className="block text-slate-800">Ücretsiz yeniden üretim</strong><span className="text-sm text-slate-600">Taşımada hasar olursa fotoğrafını göndermeniz yeterli</span></span>
          </li>
        </ul>
        <p className="mt-4 max-w-3xl text-slate-600">
          {bolgeKargoNote[il.bolge]} {ilceText} dahil {nin(il.name)} tüm ilçelerine adrese teslim ediyoruz.
        </p>
      </Container>

      <CamTabloCollections title={`${il.name} Cam Tablo Modelleri`} place={de(il.name)} campaign={`cam-tablo-${il.slug}`} />
      <CamTabloSizesAndRooms place={de(il.name)} />
      <CamTabloSteps />
      <CamTabloFaq title={`${il.name} Cam Tablo — Sık Sorulan Sorular`} faqs={faqs} />

      <Container className="py-8">
        <h2 className="text-xl font-bold text-navy">{il.bolge} Bölgesinde Diğer İller</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {komsular.map((k) => (
            <li key={k.slug}>
              <Link href={`/cam-tablo/${k.slug}`} className="inline-flex min-h-11 items-center gap-1 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-brand-500 hover:text-brand-500">
                <MapPin className="h-3.5 w-3.5" /> {k.name} Cam Tablo
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-slate-600">
          <Link href="/cam-tablo#iller" className="font-medium text-brand-500 hover:underline">Tüm iller</Link>
          {" · "}
          <Link href="/cam-tablo" className="font-medium text-brand-500 hover:underline">İstanbul Cam Tablo</Link>
        </p>
      </Container>
      <CamTabloCta campaign={`cam-tablo-${il.slug}`} />
    </>
  );
}
