import Link from "next/link";
import { Rocket, MessageCircle, BarChart3, Target } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/Icons";
import { ButtonLink } from "@/components/ui";
import { services } from "@/lib/data";
import ClientMarquee from "@/components/ClientMarquee";
import SeoCallout from "@/components/SeoCallout";
import JsonLd from "@/components/JsonLd";
import { homeGraph } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
    <JsonLd data={homeGraph} />
    <div className="flex h-[calc(100dvh-4rem)] flex-col lg:h-[calc(100dvh-5rem)]">
    <section className="relative flex flex-1 overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
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

        {/* Visual */}
        <div className="relative mx-auto hidden w-full max-w-lg lg:block">
          <FloatIcon className="-left-4 top-0 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"><InstagramIcon /></FloatIcon>
          <FloatIcon className="-left-2 top-40 bg-[#1877F2]"><FacebookIcon /></FloatIcon>
          <FloatIcon className="-right-2 top-10 bg-brand-500"><MessageCircle /></FloatIcon>
          <FloatIcon className="-right-4 top-44 bg-navy"><BarChart3 /></FloatIcon>
          <FloatIcon className="right-6 bottom-0 bg-emerald-500"><Target /></FloatIcon>

          <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-brand-500/20">
            <div className="flex items-center gap-1.5 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-navy-dark via-navy to-brand-700 p-8 text-white">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-500/40 blur-3xl" />
              <p className="text-xs font-semibold text-blue-200">ToalTech</p>
              <p className="mt-4 text-2xl font-bold leading-snug">Markanızı<br />Dijitale Taşıyoruz</p>
              <p className="mt-3 max-w-xs text-sm text-blue-100">
                Modern web siteleri ve etkili dijital çözümlerle işinizi büyütüyoruz.
              </p>
              <span className="mt-6 inline-block rounded-lg bg-brand-500 px-4 py-2 text-xs font-semibold">
                Hemen İletişime Geçin
              </span>
              <div className="mt-8 grid grid-cols-3 gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-16 rounded-lg bg-white/10" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ClientMarquee />
    <SeoCallout compact />
    </div>
    </>
  );
}

function FloatIcon({ children, className }: { children: React.ReactNode; className: string }) {
  return (
    <span className={`absolute z-10 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg ${className}`}>
      {children}
    </span>
  );
}
