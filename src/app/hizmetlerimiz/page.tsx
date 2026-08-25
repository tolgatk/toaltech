import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container, PageHero, ButtonLink } from "@/components/ui";
import ContactBanner from "@/components/ContactBanner";
import { services } from "@/lib/data";
import { localServices } from "@/lib/localServices";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Hizmetlerimiz: Web Tasarım, Sosyal Medya, Reklam, Çekim", description: "İstanbul'da web tasarım, sosyal medya yönetimi, Meta & Google reklam, ürün ve drone çekimi. Tüm hizmetlerimizi ve 39 ilçe için yerel sayfalarımızı inceleyin.", alternates: { canonical: "/hizmetlerimiz" } };

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetlerimiz"
        title="İşinizi Büyütecek Dijital Çözümler"
        desc="Web tasarımdan sosyal medya yönetimine, reklamdan raporlamaya kadar ihtiyacınız olan her şey tek çatı altında."
      />
      <Container className="space-y-8 py-12">
        {services.map((s, i) => (
          <article
            id={s.slug}
            key={s.slug}
            className={`grid scroll-mt-28 items-center gap-8 rounded-3xl border border-slate-200 bg-white p-8 lg:grid-cols-2 lg:p-12 ${
              i % 2 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div>
              <span className={`flex h-16 w-16 items-center justify-center rounded-2xl ${s.color}`}>
                <s.icon className="h-8 w-8" />
              </span>
              <h2 className="mt-5 text-2xl font-bold text-navy sm:text-3xl">{s.title}</h2>
              <p className="mt-3 text-slate-600">{s.desc}</p>
              <div className="mt-6">
                <ButtonLink href={s.href} variant="ghost">Detaylı Bilgi</ButtonLink>
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                  <Check className="h-4 w-4 shrink-0 text-brand-500" /> {b}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </Container>
      <Container className="py-8">
        <h2 className="text-2xl font-bold text-navy sm:text-3xl">İstanbul Geneli Hizmetlerimiz</h2>
        <p className="mt-2 text-slate-600">39 ilçede yerinde hizmet. İlçenize özel sayfalar için hizmeti seçin.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {localServices.map((s) => (
            <Link key={s.slug} href={`/${s.slug}`} className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-brand-500/40 hover:shadow-lg">
              <h3 className="font-bold text-navy">{s.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.metaDescription.split(":")[1]?.split(".")[0] ?? s.intro}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-500">İncele <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </Container>
      <ContactBanner />
    </>
  );
}
