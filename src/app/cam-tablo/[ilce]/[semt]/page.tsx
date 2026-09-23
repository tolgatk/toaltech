import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ContactBanner from "@/components/ContactBanner";
import { CamTabloFaq, CamTabloHero, CamTabloModels, CamTabloSizesAndRooms, CamTabloSteps } from "@/components/CamTablo";
import { getDistrict } from "@/lib/districts";
import { camTabloFaq, getSemt, semtler, semtlerOf } from "@/lib/camTablo";
import { camTabloGraph } from "@/lib/schema";
import { nin } from "@/lib/tr";
import { abs } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return semtler.map((s) => ({ ilce: s.ilce, semt: s.slug }));
}

type Params = Promise<{ ilce: string; semt: string }>;

const describe = (semt: string, ilce: string) =>
  `${semt} cam tablo (${ilce}): modern, büyük ölçülü, 3'lü set ve kişiye özel fotoğraflı cam tablo modelleri. ${semt} adresinize teslimat; ölçü ve fiyat için WhatsApp'tan yazın.`;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { ilce, semt } = await params;
  const s = getSemt(ilce, semt);
  const d = getDistrict(ilce);
  if (!s || !d) return {};
  const title = `${s.name} Cam Tablo | ${d.name} Cam Tablo Modelleri`;
  const description = describe(s.name, d.name);
  const url = abs(`/cam-tablo/${d.slug}/${s.slug}`);
  return { title, description, alternates: { canonical: url }, openGraph: { title: `${title} | ToalTech`, description, url, type: "website" } };
}

export default async function Page({ params }: { params: Params }) {
  const { ilce, semt } = await params;
  const s = getSemt(ilce, semt);
  const d = getDistrict(ilce);
  if (!s || !d) notFound();

  const path = `/cam-tablo/${d.slug}/${s.slug}`;
  const siblings = semtlerOf(d.slug).filter((x) => x.slug !== s.slug);
  const faqs = [
    { q: `${s.name} cam tablo teslimatı yapıyor musunuz?`, a: `Evet. ${s.name} ve ${nin(d.name)} tüm mahallelerine cam tablo teslimatı yapıyoruz. Teslim süresi ölçüye ve kişiye özel tasarım olup olmadığına göre değişir; siparişte net tarihi bildiriyoruz.` },
    { q: `${s.name} için hangi cam tablo modelleri uygun?`, a: s.note },
    ...camTabloFaq.slice(0, 4),
  ];

  return (
    <>
      <JsonLd data={camTabloGraph(path, `${s.name} Cam Tablo`, describe(s.name, d.name), { name: s.name, type: "Place", within: d.name })} />
      <CamTabloHero
        eyebrow={`${d.name} · ${s.name}`}
        title={`${s.name} Cam Tablo`}
        intro={`${s.name} cam tablo siparişleriniz için hazır modellerden seçim yapabilir ya da kendi fotoğrafınızla kişiye özel cam tablo yaptırabilirsiniz. Temperli cama UV baskı, askı aparatıyla ${s.name} adresinize teslim.`}
        yer={s.name}
        alt={`${s.name} (${d.name}) cam tablo: salon duvarına asılmış modern cam tablo`}
        breadcrumbs={<Breadcrumbs items={[{ name: "Cam Tablo", href: "/cam-tablo" }, { name: d.name, href: `/cam-tablo/${d.slug}` }, { name: s.name, href: path }]} />}
      />

      <Container className="py-10">
        <h2 className="text-2xl font-bold text-navy">{s.name} Cam Tablo Tercihleri</h2>
        <p className="mt-3 max-w-3xl text-slate-600">{s.note}</p>
      </Container>

      <CamTabloModels title={`${s.name} Cam Tablo Modelleri`} />
      <CamTabloSizesAndRooms place={`${s.name} ve çevresinde`} />
      <CamTabloSteps />
      <CamTabloFaq title={`${s.name} Cam Tablo — Sık Sorulan Sorular`} faqs={faqs} />

      <Container className="py-8">
        {siblings.length > 0 && (
          <>
            <h2 className="text-xl font-bold text-navy">{nin(d.name)} Diğer Semtlerinde Cam Tablo</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {siblings.map((x) => (
                <li key={x.slug}>
                  <Link href={`/cam-tablo/${d.slug}/${x.slug}`} className="inline-flex min-h-11 items-center rounded-full bg-brand-50 px-4 py-2 text-sm font-medium text-brand-600 hover:bg-brand-100">{x.name} Cam Tablo</Link>
                </li>
              ))}
            </ul>
          </>
        )}
        <p className="mt-6 text-sm text-slate-600">
          <Link href={`/cam-tablo/${d.slug}`} className="font-medium text-brand-500 hover:underline">{d.name} Cam Tablo</Link>
          {" · "}
          <Link href="/cam-tablo" className="font-medium text-brand-500 hover:underline">İstanbul Cam Tablo</Link>
        </p>
      </Container>
      <ContactBanner />
    </>
  );
}
