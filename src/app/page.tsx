import Link from "next/link";
import { Rocket } from "lucide-react";
import { ButtonLink } from "@/components/ui";
import { services } from "@/lib/data";
import ClientMarquee from "@/components/ClientMarquee";
import SeoCallout from "@/components/SeoCallout";
import JsonLd from "@/components/JsonLd";
import { homeGraph, reelVideoNodes } from "@/lib/schema";
import PhoneStack from "@/components/showcase/PhoneStack";
import ReelsMarquee from "@/components/showcase/ReelsMarquee";
import type { Metadata } from "next";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
    <JsonLd data={{ ...homeGraph, "@graph": [...homeGraph["@graph"], ...reelVideoNodes()] }} />
    <div className="flex flex-col lg:h-[calc(100dvh-5rem)]">
    <section className="relative flex flex-1 overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white py-12 sm:py-16 lg:py-0">
      <div className="bg-dots pointer-events-none absolute -left-10 top-10 h-64 w-64 opacity-40" />
      <div className="bg-dots pointer-events-none absolute -right-10 top-40 h-96 w-72 opacity-40" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
            İstanbul Web Tasarım &amp; Sosyal Medya Yönetimi
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-navy sm:text-5xl xl:text-6xl">
            İstanbul&apos;da Web Tasarım ve
            <span className="block text-brand-500">Sosyal Medya ile Daha Fazla Müşteri</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-600">
            Web tasarım, sosyal medya yönetimi ve reklam çözümlerimizle işinizi
            büyütmeye odaklanın, dijitalde fark yaratın.
          </p>

          <ul className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={s.href}
                  className="flex items-center gap-2 rounded-lg text-sm font-medium text-slate-700 transition hover:text-brand-500"
                >
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${s.color}`}>
                    <s.icon className="h-4 w-4" />
                  </span>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink href="/iletisim">
              <Rocket className="h-5 w-5" /> Ücretsiz Danışmanlık Alın
            </ButtonLink>
            <ButtonLink href="/hizmetlerimiz" variant="ghost">Hizmetlerimizi İnceleyin</ButtonLink>
          </div>
        </div>

        {/* Gerçek müşteri videoları */}
        <PhoneStack slugs={["capsule-bar-reels", "atak-reklam-filmi", "atalar-speedramp"]} className="max-w-[420px] sm:max-w-[520px] lg:max-w-[560px]" />
      </div>
    </section>
    <ClientMarquee />
    <SeoCallout compact />
    </div>

    <ReelsMarquee
      eyebrow="Öne Çıkan İşler"
      title="Strateji, çekim, reklam: hepsi tek ekipte"
      desc="Markaların sosyal medyasını nasıl kurduğumuzu, hangi kampanyaları yürüttüğümüzü kendi videolarıyla anlatıyoruz."
     
    />
    </>
  );
}
