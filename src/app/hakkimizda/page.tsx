import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, Camera, Clock, Code, FileText, KeyRound, Megaphone, MessageCircle, PenTool, Phone, Search, UserRound, Mail } from "lucide-react";
import { Container, PageHero } from "@/components/ui";
import ContactBanner from "@/components/ContactBanner";
import JsonLd from "@/components/JsonLd";
import ClientMarquee from "@/components/ClientMarquee";
import PhoneStack from "@/components/showcase/PhoneStack";
import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import { aboutGraph } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda: İstanbul'daki Dijital Ekibiniz",
  description: "ToalTech; çekim, kurgu, tasarım, yazılım ve reklamı tek ekipte yürüten İstanbul merkezli dijital ajanstır. Nasıl çalıştığımızı ve ilkelerimizi okuyun.",
  alternates: { canonical: "/hakkimizda" },
};

const inhouse = [
  { icon: Camera, t: "Çekim ve kurgu", d: "Reels, reklam filmi, ürün çekimi ve drone çekimini kendi ekibimizle yapıyor, kurguyu içeride tamamlıyoruz.", href: "/drone-cekimi", link: "Drone çekimi" },
  { icon: PenTool, t: "İçerik ve tasarım", d: "Aylık içerik takvimi, gönderi tasarımı, metin ve hikâye planı aynı masada hazırlanıyor.", href: "/sosyal-medya-yonetimi", link: "Sosyal medya yönetimi" },
  { icon: Code, t: "Web ve yazılım", d: "Bu site dahil geliştirdiğimiz siteleri Next.js ve React ile kendimiz yazıyoruz; hazır altyapı gerektiğinde onu da kuruyoruz.", href: "/yazilim-danismanligi", link: "Yazılım danışmanlığı" },
  { icon: Megaphone, t: "Reklam", d: "Meta ve Google reklamlarını, reklamın videosunu çeken ekip yönetiyor; kreatif ile hedefleme birbirinden kopmuyor.", href: "/reklam-danismanligi", link: "Reklam danışmanlığı" },
  { icon: Search, t: "SEO ve yapay zeka aramaları", d: "İlçe ve şehir bazlı sayfa yapısı, teknik SEO ve yapay zeka asistanlarının kaynak göstereceği içerik.", href: "/seo-hizmeti", link: "SEO hizmeti" },
  { icon: BarChart3, t: "Ölçme ve rapor", d: "Her ay ne yapıldığını ve ne kazanıldığını tek sayfada yazıyor, bir sonraki ayı buna göre planlıyoruz.", href: "/paketlerimiz", link: "Paketler" },
];

const principles = [
  { icon: UserRound, t: "Tek muhatap", d: "Satışta bir kişi, uygulamada başka biri yok. İlk görüşmede konuştuğunuz kişiyle işin sonuna kadar çalışırsınız." },
  { icon: KeyRound, t: "Hesaplar sizin", d: "Sosyal medya hesabı, reklam hesabı, alan adı, hosting ve kaynak kod işletmenizin adına açılır. Ayrılırsanız hiçbir şey bizde kalmaz." },
  { icon: FileText, t: "Yazılı kapsam", d: "Teklifte neyin dahil olduğu ve neyin olmadığı madde madde yazar. Sözlü vaatle iş yapmıyoruz." },
  { icon: Camera, t: "Gerçek görüntü", d: "Stok fotoğraf ve hazır şablon kullanmıyoruz. İçeriği işletmenize gelip kendimiz çekiyoruz." },
  { icon: BarChart3, t: "Ölçülebilir sonuç", d: "Başarıyı takipçi sayısıyla değil; gelen mesaj, rezervasyon, kayıt ve satışla ölçüyoruz." },
  { icon: MessageCircle, t: "Açık konuşma", d: "İşinize yaramayacak bir hizmeti satmıyoruz. Hazır ve ucuz bir çözüm yetiyorsa bunu söylüyoruz." },
];

const steps = [
  { n: "01", t: "Tanışma ve analiz", d: "İşletmenizi, hedef kitlenizi ve bölgenizdeki rakipleri inceliyoruz. İlk görüşme ücretsizdir." },
  { n: "02", t: "Plan ve teklif", d: "Öncelik sırasını, kapsamı ve fiyatı içeren yazılı bir teklif sunuyoruz." },
  { n: "03", t: "Üretim", d: "Çekim, tasarım, yazılım ve reklam çalışmalarını onayınızla hayata geçiriyoruz." },
  { n: "04", t: "Ölçme ve geliştirme", d: "Sonuçları her ay raporluyor, işe yarayanı artırıp yaramayanı değiştiriyoruz." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={aboutGraph} />
      <PageHero
        eyebrow="Hakkımızda"
        title="Dijitalde gücünüzü artırıyoruz"
        desc="ToalTech; çekim, kurgu, tasarım, yazılım ve reklamı aynı ekipte yürüten İstanbul merkezli bir dijital ajanstır. İşinize odaklanın, dijital tarafı biz yönetelim."
      />

      {/* Biz kimiz */}
      <section aria-labelledby="biz-kimiz" className="py-14 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Biz kimiz?</p>
            <h2 id="biz-kimiz" className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">Ajans karmaşası olmadan, tek ekip</h2>
            <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-slate-700">
              <p>
                İstanbul&apos;daki küçük ve orta ölçekli işletmelerin dijitalde görünür olmasını, doğru müşteriye ulaşmasını ve satışlarını artırmasını sağlıyoruz. Dershaneden restorana, bungalov tesisinden mücevher markasına farklı sektörlerde çalışıyoruz.
              </p>
              <p>
                Çoğu işletme web sitesini bir firmaya, sosyal medyayı ikinciye, çekimi üçüncüye, reklamı dördüncüye veriyor; sonuçta kimse bütüne bakmıyor. Biz bu işlerin hepsini aynı ekipte topluyoruz: reklamın videosunu çeken ekip reklamı da yönetiyor, siteyi yazan ekip aramadaki sıralamayı da takip ediyor.
              </p>
              <p>
                Çalışma şeklimiz basit: tek muhatap, yazılı kapsam ve düzenli rapor. Toplantı ve çekim için İstanbul&apos;un iki yakasında işletmenize geliyoruz.
              </p>
            </div>
          </div>
          <div>
            <PhoneStack slugs={["capsule-bar-reels", "efendy-yaz-sezonu", "atalar-speedramp"]} className="max-w-[420px] sm:max-w-[500px]" />
            <p className="mt-4 text-center text-sm text-slate-500">Müşterilerimiz için çektiğimiz videolardan</p>
          </div>
        </Container>
      </section>

      <ClientMarquee />

      {/* Kendi ekibimizle */}
      <section aria-labelledby="ekip" className="py-14 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Kendi ekibimizle</p>
            <h2 id="ekip" className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">Dışarıya vermeden yaptığımız işler</h2>
            <p className="mt-3 text-slate-600">Bir işin kalitesini, o işi yapan kişiye ne kadar yakın olduğunuz belirler. Aşağıdaki altı alanın tamamı içeride yürütülür.</p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {inhouse.map((x) => (
              <li key={x.t} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500"><x.icon aria-hidden className="h-6 w-6" /></span>
                <h3 className="mt-4 text-lg font-bold text-navy">{x.t}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{x.d}</p>
                <Link href={x.href} className="mt-4 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-brand-500 hover:underline">
                  {x.link} <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* İlkeler */}
      <section aria-labelledby="ilkeler" className="relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-brand-700 py-14 text-white sm:py-20">
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl" />
        <Container className="relative">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Çalışma ilkelerimiz</p>
            <h2 id="ilkeler" className="mt-2 text-3xl font-extrabold sm:text-4xl">Söz verdiğimiz altı şey</h2>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((x) => (
              <li key={x.t} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-blue-200"><x.icon aria-hidden className="h-5 w-5" /></span>
                <h3 className="mt-4 text-lg font-bold">{x.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-100/80">{x.d}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Süreç */}
      <section aria-labelledby="surec" className="py-14 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Nasıl çalışıyoruz?</p>
            <h2 id="surec" className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">İlk görüşmeden rapora dört adım</h2>
          </div>
          <ol className="relative mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.n} className="rounded-2xl border border-slate-200 bg-white p-6">
                <span aria-hidden className="text-4xl font-extrabold text-brand-100">{s.n}</span>
                <h3 className="mt-3 text-lg font-bold text-navy">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.d}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* İletişim bilgileri */}
      <section aria-labelledby="kunye" className="pb-6">
        <Container>
          <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10">
            <h2 id="kunye" className="text-2xl font-extrabold text-navy">ToalTech künye</h2>
            <dl className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <dt className="flex items-center gap-2 text-sm font-semibold text-slate-500"><Phone aria-hidden className="h-4 w-4 text-brand-500" /> Telefon</dt>
                <dd className="mt-1 font-semibold text-navy"><a href={`tel:${site.phoneTel}`} className="hover:text-brand-500">{site.phoneDisplay}</a></dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-sm font-semibold text-slate-500"><Mail aria-hidden className="h-4 w-4 text-brand-500" /> E-posta</dt>
                <dd className="mt-1 font-semibold text-navy"><a href={`mailto:${site.email}`} className="hover:text-brand-500">{site.email}</a></dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-sm font-semibold text-slate-500"><Clock aria-hidden className="h-4 w-4 text-brand-500" /> Çalışma saatleri</dt>
                <dd className="mt-1 font-semibold text-navy">Hafta içi 09:00 - 19:00</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-slate-500">Hizmet bölgesi</dt>
                <dd className="mt-1 font-semibold text-navy">İstanbul, Avrupa ve Anadolu Yakası</dd>
              </div>
            </dl>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 font-semibold text-white transition-colors duration-200 hover:bg-[#1fb955]">
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp
              </a>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 font-semibold text-navy transition-colors duration-200 hover:border-brand-500">
                <InstagramIcon className="h-5 w-5" /> {site.instagramHandle}
              </a>
              <Link href="/referanslar" className="inline-flex min-h-11 items-center gap-1 rounded-xl px-5 py-3 font-semibold text-brand-500 transition-colors duration-200 hover:bg-brand-50">
                Referanslarımız <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <ContactBanner />
    </>
  );
}
