import type { Metadata } from "next";
import { Container, PageHero, SectionTitle } from "@/components/ui";
import ContactBanner from "@/components/ContactBanner";
import { stats } from "@/lib/data";
import JsonLd from "@/components/JsonLd";
import { aboutGraph } from "@/lib/schema";

export const metadata: Metadata = { title: "Hakkımızda: İstanbul'daki Dijital Ekibiniz", description: "ToalTech, İstanbul merkezli web tasarım ve sosyal medya ekibidir. Tek muhatap, şeffaf raporlama, 39 ilçede yerinde hizmet. Nasıl çalıştığımızı okuyun.", alternates: { canonical: "/hakkimizda" } };

const steps = [
  { n: "01", t: "Tanışma & Analiz", d: "İşletmenizi, hedef kitlenizi ve rakiplerinizi analiz ediyoruz." },
  { n: "02", t: "Strateji", d: "Web ve sosyal medya için size özel bir yol haritası hazırlıyoruz." },
  { n: "03", t: "Uygulama", d: "Tasarım, içerik ve reklam çalışmalarını hayata geçiriyoruz." },
  { n: "04", t: "Ölçme & Geliştirme", d: "Sonuçları raporluyor, sürekli iyileştiriyoruz." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={aboutGraph} />
      <PageHero
        eyebrow="Hakkımızda"
        title="Dijitalde Gücünüzü Artırıyoruz"
        desc="ToalTech; işletmelerin web ve sosyal medya süreçlerini uçtan uca yöneten bir dijital danışmanlık ekibidir."
      />
      <Container className="grid gap-12 py-12 lg:grid-cols-2">
        <div className="space-y-4 text-slate-600">
          <h2 className="text-2xl font-bold text-navy">Biz Kimiz?</h2>
          <p>
            Küçük ve orta ölçekli işletmelerin dijitalde görünür olmasını, doğru müşteriye ulaşmasını ve
            satışlarını artırmasını sağlıyoruz. Web sitesi tasarımından sosyal medya içerik üretimine,
            reklam yönetiminden raporlamaya kadar tüm süreci biz yönetiyoruz.
          </p>
          <p>
            Karmaşık ajans süreçleri yerine tek muhatap, net fiyat ve düzenli iletişim sunuyoruz.
            Amacımız işinize odaklanmanız; dijital tarafı bize bırakmanız.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-slate-200 bg-white p-6">
              <s.icon className="h-8 w-8 text-brand-500" />
              <p className="mt-3 text-3xl font-bold text-navy">{s.value}</p>
              <p className="font-semibold text-slate-700">{s.label}</p>
            </div>
          ))}
        </div>
      </Container>

      <Container className="py-12">
        <SectionTitle eyebrow="Nasıl Çalışıyoruz?" title="4 Adımda Dijital Dönüşüm" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-slate-200 bg-white p-6">
              <span aria-hidden className="text-4xl font-extrabold text-brand-100">{s.n}</span>
              <h3 className="mt-3 text-lg font-bold text-navy">{s.t}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.d}</p>
            </div>
          ))}
        </div>
      </Container>
      <ContactBanner />
    </>
  );
}
