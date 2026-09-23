import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ContactBanner from "@/components/ContactBanner";
import { CamTabloFaq, CamTabloHero, CamTabloModels, CamTabloSizesAndRooms, CamTabloSteps } from "@/components/CamTablo";
import { districts, getDistrict } from "@/lib/districts";
import { camTabloFaq, camTabloIntro, semtler } from "@/lib/camTablo";
import { camTabloGraph } from "@/lib/schema";
import { abs } from "@/lib/seo";

const title = "İstanbul Cam Tablo: Modelleri, Ölçüleri ve Fiyatları";
const description = "İstanbul cam tablo: temperli cama UV baskı modern, 3'lü set, saatli ve kişiye özel fotoğraflı cam tablo modelleri. 39 ilçeye teslimat, ölçü ve fiyat için WhatsApp'tan yazın.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: abs("/cam-tablo") },
  openGraph: { title: `${title} | ToalTech`, description, url: abs("/cam-tablo"), type: "website" },
};

export default function Page() {
  const byTier = [...districts].sort((a, b) => a.tier - b.tier || a.name.localeCompare(b.name, "tr"));
  const groups = [
    { label: "Avrupa Yakası", list: byTier.filter((d) => d.side === "Avrupa") },
    { label: "Anadolu Yakası", list: byTier.filter((d) => d.side === "Anadolu") },
  ];

  return (
    <>
      <JsonLd data={camTabloGraph("/cam-tablo", "İstanbul Cam Tablo", description, { name: "İstanbul", type: "City" })} />
      <CamTabloHero
        eyebrow="İstanbul · 39 İlçe"
        title="İstanbul Cam Tablo"
        intro={camTabloIntro}
        alt="İstanbul cam tablo: modern salon duvarında büyük ölçülü, parlak yüzeyli cam tablo"
        breadcrumbs={<Breadcrumbs items={[{ name: "Cam Tablo", href: "/cam-tablo" }]} />}
      />

      <Container className="py-10">
        <h2 className="text-2xl font-bold text-navy">Cam Tablo Nedir, Neden Tercih Edilir?</h2>
        <div className="mt-4 grid gap-6 text-slate-600 lg:grid-cols-3">
          <p><strong className="text-slate-800">Canlı ve derin renkler.</strong> Görsel camın arka yüzüne basıldığı için cam, baskının önünde koruyucu ve parlatıcı bir katman oluşturur; renkler kanvasa ve posterlere göre çok daha canlı görünür.</p>
          <p><strong className="text-slate-800">Kolay temizlik, uzun ömür.</strong> Toz tutmaz, nemden ve mutfak buharından etkilenmez; nemli bir bezle silinir. Baskı cam arkasında kaldığı için çizilmez ve solmaya karşı dayanıklıdır.</p>
          <p><strong className="text-slate-800">Her mekâna uygun.</strong> Salon, yatak odası, mutfak, antre, ofis, klinik, kafe ve mağaza duvarlarında kullanılabilir; hazır modellerin yanı sıra kendi fotoğrafınızla kişiye özel üretilebilir.</p>
        </div>
      </Container>

      <CamTabloModels title="Cam Tablo Modelleri" />
      <CamTabloSizesAndRooms place="İstanbul'da" />
      <CamTabloSteps />
      <CamTabloFaq title="Cam Tablo Hakkında Sık Sorulan Sorular" faqs={camTabloFaq} />

      <Container className="py-8">
        <h2 className="text-2xl font-bold text-navy">İlçelere Göre Cam Tablo</h2>
        <p className="mt-2 text-slate-600">İstanbul&apos;un 39 ilçesine cam tablo teslimatı yapıyoruz. İlçenize özel model önerileri ve teslimat bilgisi için ilçenizi seçin.</p>
        {groups.map((g) => (
          <div key={g.label} className="mt-8">
            <h3 className="font-semibold text-slate-800">{g.label} Cam Tablo</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {g.list.map((d) => (
                <li key={d.slug}>
                  <Link href={`/cam-tablo/${d.slug}`} className="inline-flex min-h-11 items-center gap-1 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-500 hover:text-brand-500">
                    <MapPin className="h-3.5 w-3.5" /> {d.name} Cam Tablo
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <Container className="py-8">
        <h2 className="text-2xl font-bold text-navy">Semtlere Göre Cam Tablo</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {semtler.map((s) => (
            <li key={`${s.ilce}-${s.slug}`}>
              <Link href={`/cam-tablo/${s.ilce}/${s.slug}`} className="inline-flex min-h-11 items-center rounded-full bg-brand-50 px-4 py-2 text-sm font-medium text-brand-600 hover:bg-brand-100">
                {s.name} Cam Tablo <span className="ml-1 text-xs text-brand-500/70">({getDistrict(s.ilce)?.name})</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
      <ContactBanner />
    </>
  );
}
