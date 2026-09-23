import Image from "next/image";
import { Check, Phone } from "lucide-react";
import { Container, ButtonLink } from "@/components/ui";
import { WhatsAppIcon } from "@/components/Icons";
import { site } from "@/lib/site";
import { camTabloImage, camTabloModels, camTabloRooms, camTabloSizes, camTabloSteps, camTabloWhatsapp } from "@/lib/camTablo";
import camTabloPhoto from "../../public/cam-tablo/istanbul-cam-tablo-salon-dekorasyon.jpg";

/** Hero: başlık + CTA solda, cam tablo fotoğrafı sağda */
export function CamTabloHero({ eyebrow, title, intro, yer, alt, breadcrumbs }: {
  eyebrow: string; title: string; intro: string; yer?: string; alt: string; breadcrumbs: React.ReactNode;
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
              <ButtonLink href={camTabloWhatsapp(yer)} external><WhatsAppIcon className="h-5 w-5" /> WhatsApp&apos;tan Fiyat Al</ButtonLink>
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
            <figcaption className="mt-2 text-xs text-slate-400">{camTabloImage.credit}</figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}

export function CamTabloModels({ title }: { title: string }) {
  return (
    <Container className="py-10">
      <h2 className="text-2xl font-bold text-navy">{title}</h2>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {camTabloModels.map((m) => (
          <li key={m.name} className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-800">{m.name}</h3>
            <p className="mt-2 text-sm text-slate-600">{m.desc}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export function CamTabloSizesAndRooms({ place }: { place: string }) {
  return (
    <Container className="grid gap-10 py-10 lg:grid-cols-2">
      <div>
        <h2 className="text-2xl font-bold text-navy">Cam Tablo Ölçüleri</h2>
        <p className="mt-2 text-slate-600">{place} en çok tercih edilen standart ölçüler. İstediğiniz özel ölçüde de üretim yapılır.</p>
        <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-700">
              <tr><th scope="col" className="px-4 py-3 font-semibold">Ölçü</th><th scope="col" className="px-4 py-3 font-semibold">Nereye uygun?</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white text-slate-600">
              {camTabloSizes.map((s) => (
                <tr key={s.size}><td className="whitespace-nowrap px-4 py-3 font-medium text-slate-800">{s.size}</td><td className="px-4 py-3">{s.use}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
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
      <h2 className="text-2xl font-bold text-navy">{title}</h2>
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
