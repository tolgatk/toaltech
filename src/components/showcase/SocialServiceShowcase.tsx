import Link from "next/link";
import { ArrowDown, ArrowUpRight, BarChart3, CalendarDays, Clapperboard, Compass, Crosshair, MapPin, MessageCircle, Play, SearchCheck, Target, Users, type LucideIcon } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WhatsAppIcon } from "@/components/Icons";
import { clients } from "@/lib/clients";
import { site } from "@/lib/site";
import type { LocalService } from "@/lib/localServices";
import PhoneStack from "./PhoneStack";
import ReelCard from "./ReelCard";
import ReelsMarquee from "./ReelsMarquee";
import Reveal from "./Reveal";

const benefitIcons: LucideIcon[] = [Compass, CalendarDays, Clapperboard, Users, SearchCheck, BarChart3];

const adSteps = [
  { icon: Target, title: "Hedef ve bütçe", text: "Kayıt, rezervasyon, mesaj ya da mağaza ziyareti: önce neyi ölçeceğimizi, sonra günlük bütçeyi belirliyoruz." },
  { icon: Clapperboard, title: "Reklama özel kreatif", text: "İlk 3 saniyede durduran dikey videolar çekiyor, altyazı ve seslendirmeyle sessiz izleyene de anlatıyoruz." },
  { icon: Crosshair, title: "Bölgesel hedefleme", text: "Reklamı ilçenize, mahallenize hatta işletmenizin birkaç kilometre çevresine göre daraltıyoruz." },
  { icon: MessageCircle, title: "Dönüşüm ve rapor", text: "Reklamı WhatsApp'a, DM'e veya forma bağlıyor, gelen her mesajı ve maliyetini raporluyoruz." },
];

/** Sosyal medya hizmet sayfalarının (danışmanlık / yönetim) video ağırlıklı gövdesi. */
export default function SocialServiceShowcase({ s }: { s: LocalService }) {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div aria-hidden className="bg-dots pointer-events-none absolute -right-10 top-10 h-96 w-72 opacity-40" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Breadcrumbs items={[{ name: s.name, href: `/${s.slug}` }]} />
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">İstanbul · 39 İlçe · Yerinde Çekim</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-[1.1] text-navy sm:text-5xl xl:text-6xl">
              İstanbul {s.name}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">{s.intro}</p>
            <p className="mt-3 max-w-xl font-medium text-navy">
              Bu sayfadaki videoların hepsi gerçek müşterilerimiz için ürettiğimiz işler.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600">
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp&apos;tan Teklif Al
              </a>
              <a href="#isler" className="inline-flex min-h-12 items-center gap-2 rounded-xl px-5 py-3.5 font-semibold text-brand-500 transition hover:bg-brand-50">
                <Play className="h-4 w-4 fill-current" /> İşlerimizi İzleyin <ArrowDown className="h-4 w-4" />
              </a>
            </div>
            <dl className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { v: "300+", l: "referans marka" },
                { v: "Reels", l: "çekim ve kurgu" },
                { v: "39", l: "ilçede yerinde çekim" },
                { v: "1 ekip", l: "çekimden rapora" },
              ].map((x) => (
                <div key={x.l} className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 backdrop-blur">
                  <dt className="sr-only">{x.l}</dt>
                  <dd className="text-xl font-extrabold text-navy">{x.v}</dd>
                  <dd className="text-xs font-medium text-slate-500">{x.l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <PhoneStack slugs={["capsule-acilis-teaser", "atak-reklam-filmi", "atalar-davet-tanitim"]} className="max-w-[420px] sm:max-w-[540px]" />
        </div>
      </section>

      {/* VİDEO ŞERİDİ */}
      <ReelsMarquee
        eyebrow="Ürettiğimiz İçerikler"
        title="Reels, reklam filmi, tanıtım: hepsi bizden"
        desc="Senaryo, çekim, kurgu, altyazı ve yayın. Aşağıdaki videolar eğitim kurumlarından kafelere, davet salonlarından ürün markalarına kadar İstanbul'daki müşterilerimiz için üretildi."
      />

      {/* KAPSAM */}
      <section aria-labelledby="kapsam" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Kapsam</p>
            <h2 id="kapsam" className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">{s.name} kapsamında neler var?</h2>
            <p className="mt-3 text-slate-600">Strateji kâğıtta kalmasın diye planı yazmakla kalmıyor, uygulamaya ve ölçmeye kadar yanınızda oluyoruz.</p>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {s.benefits.map((b, i) => {
              const Icon = benefitIcons[i % benefitIcons.length];
              return (
                <li key={b}>
                  <Reveal delay={i * 60} className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-xl hover:shadow-brand-500/10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500 transition group-hover:bg-brand-500 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <p className="mt-4 text-lg font-bold text-navy">{b}</p>
                  </Reveal>
                </li>
              );
            })}
            <li>
              <Reveal delay={s.benefits.length * 60} className="flex h-full flex-col justify-between rounded-2xl bg-navy p-6 text-white">
                <p className="text-lg font-bold">Hesabınıza ücretsiz bakalım</p>
                <p className="mt-2 text-sm text-blue-100">Instagram hesabınızı ve rakiplerinizi inceleyip ilk görüşmede somut önerilerle gelelim.</p>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 self-start rounded-xl bg-[#25D366] px-5 py-3 font-semibold text-white hover:bg-[#1fb955]">
                  <WhatsAppIcon className="h-5 w-5" /> Analiz İste
                </a>
              </Reveal>
            </li>
          </ul>
        </div>
      </section>

      {/* REKLAM KAMPANYALARI */}
      <section aria-labelledby="reklam" className="relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-brand-700 py-16 text-white sm:py-20">
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Reklam Kampanyaları</p>
              <h2 id="reklam" className="mt-2 text-3xl font-extrabold sm:text-4xl">Takipçi değil, müşteri getiren reklam</h2>
              <p className="mt-3 max-w-2xl text-blue-100/85">
                Instagram ve Facebook reklamlarını içerikle birlikte kurguluyoruz: reklamın videosunu da biz çekiyoruz. Atak Fen Bilimleri&apos;nin 2026-27 kayıt kampanyasında seslendirmeli reklam filmini çekip Meta reklamlarıyla Çekmeköy ve çevresindeki velilere ulaştırdık.
              </p>
            </Reveal>
            <ol className="mt-10 grid gap-4 sm:grid-cols-2">
              {adSteps.map((x, i) => (
                <li key={x.title}>
                  <Reveal delay={i * 80} className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-blue-200"><x.icon className="h-5 w-5" /></span>
                      <span className="text-xs font-bold text-blue-300">0{i + 1}</span>
                    </div>
                    <p className="mt-4 font-bold">{x.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-blue-100/80">{x.text}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
            <Link href="/reklam-danismanligi" className="mt-8 inline-flex min-h-11 items-center gap-2 font-semibold text-blue-200 hover:text-white">
              Reklam danışmanlığını inceleyin <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <Reveal className="mx-auto w-full max-w-[300px]">
            <ReelCard slug="atak-reklam-filmi" />
            <p className="mt-3 text-center text-sm text-blue-200">Kampanya kreatifi: kayıt dönemi reklam filmi</p>
          </Reveal>
        </div>
      </section>

      {/* SÜREÇ */}
      <section aria-labelledby="surec" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Süreç</p>
            <h2 id="surec" className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">Nasıl çalışıyoruz?</h2>
          </Reveal>
          <ol className="relative mt-10 grid gap-6 md:grid-cols-4">
            <span aria-hidden className="absolute left-0 right-0 top-6 hidden h-0.5 bg-gradient-to-r from-brand-500 via-brand-100 to-brand-500/20 md:block" />
            {s.steps.map((st, i) => (
              <li key={st} className="relative">
                <Reveal delay={i * 100}>
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-lg font-extrabold text-white shadow-lg shadow-brand-500/30 ring-8 ring-white">{i + 1}</span>
                  <p className="mt-4 text-lg font-bold text-navy">{st}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* REFERANSLAR */}
      <section aria-labelledby="referanslar" className="border-y border-slate-200 bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Referanslarımız</p>
            <h2 id="referanslar" className="mt-2 text-2xl font-extrabold text-navy sm:text-3xl">Birlikte çalıştığımız markalar</h2>
          </Reveal>
        </div>
        {/* Marka adları yavaşça kayar; ikinci kopya kesintisiz döngü için */}
        <div className="client-track-wrap mt-8 overflow-hidden">
          <ul className="client-track flex w-max">
            {[...clients, ...clients].map((c, i) => (
              <li key={i} aria-hidden={i >= clients.length || undefined} className="flex shrink-0 items-center">
                <span className="whitespace-nowrap px-6 text-xl font-extrabold tracking-tight text-navy sm:px-10 sm:text-3xl">{c.name}</span>
                <span aria-hidden className="h-2 w-2 rounded-full bg-brand-500" />
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mt-6 text-center text-sm text-slate-500">
            <MapPin className="mr-1 inline h-4 w-4 text-brand-500" />
            Çekmeköy&apos;den Beylikdüzü&apos;ne, Esenyurt&apos;tan Sefaköy&apos;e İstanbul&apos;un iki yakasında.{" "}
            <Link href="/referanslar" className="font-semibold text-brand-500 hover:underline">Tüm referanslar</Link>
          </p>
        </div>
      </section>
    </>
  );
}
