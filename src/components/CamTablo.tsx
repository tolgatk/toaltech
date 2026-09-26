import Image from "next/image";
import { ArrowUpRight, Check, Images, LayoutGrid, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/Icons";
import { Container } from "@/components/ui";
import { site } from "@/lib/site";
import { camTabloCollections, camTabloPricesAsOf, camTabloRooms, camTabloSizes, camTabloSteps, camTabloStore, storeUrl } from "@/lib/camTablo";
import camTabloPhoto from "../../public/cam-tablo/cam-tablo-salon-dekorasyon.webp";

/** Hero: başlık + CTA solda, cam tablo fotoğrafı sağda */
export function CamTabloHero({ eyebrow, title, intro, campaign, alt, breadcrumbs }: {
  eyebrow: string; title: string; intro: string; campaign: string; alt: string; breadcrumbs: React.ReactNode;
}) {
  return (
    <section className="bg-gradient-to-b from-brand-50 to-white">
      <Container className="py-14">
        {breadcrumbs}
        <div className="mt-6 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">{eyebrow}</p>
            <h1 className="mt-2 text-4xl font-extrabold text-navy sm:text-5xl">{title}</h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">{intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#koleksiyonlar" className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600">
                <Images className="h-5 w-5" /> Modelleri Görüntüle
              </a>
              <a href={storeUrl("/cam-tablo", campaign)} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-navy hover:border-brand-500">
                <LayoutGrid className="h-5 w-5" /> Kategorileri Gözden Geçir
              </a>
              <a href={`tel:${site.phoneTel}`} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-navy hover:border-brand-500">
                <Phone className="h-5 w-5" /> {site.phoneDisplay}
              </a>
            </div>
          </div>
          <figure>
            <Image
              src={camTabloPhoto}
              alt={alt}
              sizes="(min-width: 1024px) 600px, 100vw"
              loading="eager"
              fetchPriority="high"
              placeholder="blur"
              className="h-auto w-full rounded-2xl shadow-xl shadow-navy/10"
            />
          </figure>
        </div>
      </Container>
    </section>
  );
}

/** Koleksiyon galerisi: her görsel tobecreative.net'teki ilgili koleksiyona gider (yeni sekme, takip edilen link) */
export function CamTabloCollections({ title, place, campaign }: { title: string; place: string; campaign: string }) {
  return (
    <section id="koleksiyonlar" className="scroll-mt-24">
      <Container className="py-10">
        <h2 className="text-2xl font-bold text-navy">{title}</h2>
        <p className="mt-2 max-w-3xl text-slate-600">
          Tablolarımız <strong className="text-slate-800">{camTabloStore.name}</strong> markasıyla üretilir. {place} en çok tercih edilen koleksiyonlar aşağıda;
          görsele tıklayarak o koleksiyondaki tüm tasarımları, ölçüleri ve fiyatları görebilirsiniz.
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {camTabloCollections.map((c) => (
            <li key={c.slug}>
              <a href={storeUrl(c.href, campaign)} target="_blank" rel="noopener" className="group block h-full overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:border-brand-500 hover:shadow-lg hover:shadow-navy/10">
                <div className="relative aspect-square overflow-hidden bg-slate-100">
                  <Image
                    src={c.img}
                    alt={`${c.name} cam tablo modeli`}
                    width={800}
                    height={800}
                    sizes="(min-width: 1024px) 280px, (min-width: 640px) 33vw, 50vw"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="flex items-start justify-between gap-2 font-semibold text-slate-800 group-hover:text-brand-600">
                    {c.name} <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 group-hover:text-brand-500" />
                  </h3>
                  <p className="mt-1 hidden text-sm text-slate-600 sm:block">{c.desc}</p>
                </div>
              </a>
            </li>
          ))}
          <li>
            <a href={storeUrl("/cam-tablo", campaign)} target="_blank" rel="noopener" className="flex h-full min-h-48 flex-col justify-center rounded-2xl bg-navy p-6 text-white transition hover:bg-brand-600">
              <Images className="h-8 w-8 text-brand-300" />
              <span className="mt-4 text-lg font-bold">Tüm cam tablo koleksiyonu</span>
              <span className="mt-1 text-sm text-white/70">1.800+ tasarım, 6 standart ölçü ve özel ölçü seçeneği</span>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold">{camTabloStore.url.replace("https://", "")} <ArrowUpRight className="h-4 w-4" /></span>
            </a>
          </li>
        </ul>
      </Container>
    </section>
  );
}

export function CamTabloSizesAndRooms({ place }: { place: string }) {
  return (
    <Container className="grid gap-10 py-10 lg:grid-cols-2">
      <div id="olculer" className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-navy">Cam Tablo Ölçüleri ve Fiyatları</h2>
        <p className="mt-2 text-slate-600">{place} en çok tercih edilen standart ölçüler ve fiyatları. İstediğiniz özel ölçüde de üretim yapılır.</p>
        <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-700">
              <tr><th scope="col" className="px-4 py-3 font-semibold">Ölçü</th><th scope="col" className="px-4 py-3 font-semibold">Fiyat</th><th scope="col" className="px-4 py-3 font-semibold">Nereye uygun?</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white text-slate-600">
              {camTabloSizes.map((s) => (
                <tr key={s.size}><td className="whitespace-nowrap px-4 py-3 font-medium text-slate-800">{s.size}</td><td className="whitespace-nowrap px-4 py-3 font-semibold text-brand-600">{s.price}</td><td className="px-4 py-3">{s.use}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">{camTabloPricesAsOf} fiyatlarıdır, KDV dahildir. Özel ölçü fiyatı için WhatsApp&apos;tan yazın.</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-navy">Odaya Göre Cam Tablo Seçimi</h2>
        <ul className="mt-5 space-y-3">
          {camTabloRooms.map((r) => (
            <li key={r.room} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-slate-700">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
              <span><strong className="text-slate-800">{r.room}:</strong> {r.tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export function CamTabloSteps() {
  return (
    <Container className="py-10">
      <h2 className="text-2xl font-bold text-navy">Cam Tablo Siparişi Nasıl Verilir?</h2>
      <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {camTabloSteps.map((st, i) => (
          <li key={st} className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500 font-bold text-white">{i + 1}</span>
            <span className="font-medium text-slate-700">{st}</span>
          </li>
        ))}
      </ol>
    </Container>
  );
}

export function CamTabloFaq({ title, faqs }: { title: string; faqs: { q: string; a: string }[] }) {
  return (
    <Container className="py-8">
      <h2 id="sss" className="scroll-mt-24 text-2xl font-bold text-navy">{title}</h2>
      <div className="mt-5 space-y-4">
        {faqs.map((f) => (
          <details key={f.q} className="rounded-xl border border-slate-200 bg-white p-5">
            <summary className="cursor-pointer font-semibold text-slate-800"><h3 className="inline">{f.q}</h3></summary>
            <p className="mt-3 text-slate-600">{f.a}</p>
          </details>
        ))}
      </div>
    </Container>
  );
}

/** Sayfa sonu çağrısı: ajansın genel ContactBanner'ı yerine cam tabloya özel */
export function CamTabloCta({ campaign }: { campaign: string }) {
  return (
    <Container className="mt-8">
      <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-navy px-6 py-8 text-white shadow-xl shadow-navy/20 md:flex-row md:px-10">
        <div>
          <p className="text-xl font-bold">Duvarınıza uygun cam tabloyu seçin</p>
          <p className="mt-1 text-sm text-white/70">1.800+ tasarım, 6 standart ölçü, kendi fotoğrafınızla özel üretim.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <a href={storeUrl("/cam-tablo", campaign)} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-navy hover:bg-brand-50">
            <LayoutGrid className="h-5 w-5" /> Tüm Modelleri Görüntüle
          </a>
          <a href={site.camTabloWhatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 font-semibold text-white hover:bg-[#1fb955]">
            <WhatsAppIcon className="h-5 w-5" /> Özel Ölçü Sor
          </a>
        </div>
      </div>
    </Container>
  );
}
