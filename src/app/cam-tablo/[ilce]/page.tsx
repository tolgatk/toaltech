import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ContactBanner from "@/components/ContactBanner";
import { CamTabloFaq, CamTabloHero, CamTabloModels, CamTabloSizesAndRooms, CamTabloSteps } from "@/components/CamTablo";
import { districts, getDistrict } from "@/lib/districts";
import { camTabloFaq, ilceDecorNotes, ilceFaq, ilceIntro, nearbyDistricts, otherNeighborhoods, semtlerOf } from "@/lib/camTablo";
import { camTabloGraph } from "@/lib/schema";
import { de, nin } from "@/lib/tr";
import { abs } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return districts.map((d) => ({ ilce: d.slug }));
}

type Params = Promise<{ ilce: string }>;

const describe = (name: string, areas: string[]) =>
  `${name} cam tablo: ${areas.slice(0, 2).join(", ")} dahil ${nin(name)} tüm mahalleleri için modern, 3'lü set, saatli ve kişiye özel fotoğraflı cam tablo modelleri. Ölçü ve fiyat için WhatsApp'tan yazın.`;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { ilce } = await params;
  const d = getDistrict(ilce);
  if (!d) return {};
  const title = `${d.name} Cam Tablo: Modern ve Kişiye Özel Modeller`;
  const description = describe(d.name, [...semtlerOf(d.slug).map((s) => s.name), ...otherNeighborhoods(d)]);
  const url = abs(`/cam-tablo/${d.slug}`);
  return { title, description, alternates: { canonical: url }, openGraph: { title: `${title} | ToalTech`, description, url, type: "website" } };
}

export default async function Page({ params }: { params: Params }) {
  const { ilce } = await params;
  const d = getDistrict(ilce);
  if (!d) notFound();

  const semts = semtlerOf(d.slug);
  const others = otherNeighborhoods(d);
  const path = `/cam-tablo/${d.slug}`;

  return (
    <>
      <JsonLd data={camTabloGraph(path, `${d.name} Cam Tablo`, describe(d.name, [...semts.map((s) => s.name), ...others]), { name: d.name, type: "AdministrativeArea" })} />
      <CamTabloHero
        eyebrow={`İstanbul ${d.side} Yakası · ${d.name}`}
        title={`${d.name} Cam Tablo`}
        intro={ilceIntro(d)}
        yer={d.name}
        alt={`${d.name} cam tablo: modern salon duvarında parlak yüzeyli büyük cam tablo`}
        breadcrumbs={<Breadcrumbs items={[{ name: "Cam Tablo", href: "/cam-tablo" }, { name: d.name, href: path }]} />}
      />

      <Container className="py-10">
        <h2 className="text-2xl font-bold text-navy">{de(d.name)} Cam Tablo Tercihleri</h2>
        <p className="mt-3 max-w-3xl text-slate-600">{ilceDecorNotes[d.slug]}</p>

        <h2 className="mt-10 text-2xl font-bold text-navy">{nin(d.name)} Semtlerinde Cam Tablo</h2>
        {semts.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {semts.map((s) => (
              <li key={s.slug}>
                <Link href={`${path}/${s.slug}`} className="inline-flex min-h-11 items-center gap-1 rounded-full bg-brand-50 px-4 py-2 text-sm font-medium text-brand-600 hover:bg-brand-100">
                  <MapPin className="h-3.5 w-3.5" /> {s.name} Cam Tablo
                </Link>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-4 text-slate-600">
          {others.length > 0 ? `${others.map((n) => `${n} cam tablo`).join(", ")} siparişleri dahil ` : ""}
          {nin(d.name)} tüm mahallelerine cam tablo teslimatı yapıyoruz.
        </p>
      </Container>

      <CamTabloModels title={`${d.name} Cam Tablo Modelleri`} />
      <CamTabloSizesAndRooms place={de(d.name)} />
      <CamTabloSteps />
      <CamTabloFaq title={`${d.name} Cam Tablo — Sık Sorulan Sorular`} faqs={[...ilceFaq(d), ...camTabloFaq.slice(0, 4)]} />

      <Container className="py-8">
        <h2 className="text-xl font-bold text-navy">Yakın İlçelerde Cam Tablo</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {nearbyDistricts(d).map((n) => (
            <li key={n.slug}>
              <Link href={`/cam-tablo/${n.slug}`} className="inline-flex min-h-11 items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-brand-500 hover:text-brand-500">{n.name} Cam Tablo</Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-slate-600">
          Tüm ilçeler: <Link href="/cam-tablo" className="font-medium text-brand-500 hover:underline">İstanbul Cam Tablo</Link>
        </p>
      </Container>
      <ContactBanner />
    </>
  );
}
