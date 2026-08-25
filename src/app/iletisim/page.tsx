import type { Metadata } from "next";
import { Phone, Mail, Clock } from "lucide-react";
import { Container, PageHero } from "@/components/ui";
import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import ContactForm from "./ContactForm";
import { site } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { contactGraph } from "@/lib/schema";

export const metadata: Metadata = { title: "İletişim: WhatsApp, Telefon, Teklif Formu", description: "ToalTech ile hemen iletişime geçin: WhatsApp 0535 515 22 37, telefon veya teklif formu. İstanbul genelinde yerinde görüşme, ücretsiz ilk analiz.", alternates: { canonical: "/iletisim" } };

export default function Page() {
  const cards = [
    { icon: <WhatsAppIcon className="h-6 w-6" />, title: "WhatsApp", value: "Hemen yazın", href: site.whatsapp, color: "bg-[#25D366]" },
    { icon: <Phone className="h-6 w-6" />, title: "Telefon", value: site.phoneDisplay, href: `tel:${site.phoneTel}`, color: "bg-brand-500" },
    { icon: <InstagramIcon className="h-6 w-6" />, title: "Instagram", value: site.instagramHandle, href: site.instagram, color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" },
    { icon: <Mail className="h-6 w-6" />, title: "E-posta", value: site.email, href: `mailto:${site.email}`, color: "bg-navy" },
  ];

  return (
    <>
      <JsonLd data={contactGraph} />
      <PageHero
        eyebrow="İletişim"
        title="Ücretsiz Danışmanlık Alın"
        desc="Projenizi anlatın, size en uygun çözümü birlikte planlayalım. WhatsApp, telefon veya form ile bize ulaşabilirsiniz."
      />
      <Container className="grid gap-10 py-12 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          {cards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-brand-500/40 hover:shadow-lg"
            >
              <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white ${c.color}`}>{c.icon}</span>
              <div>
                <p className="text-sm text-slate-500">{c.title}</p>
                <p className="font-semibold text-navy">{c.value}</p>
              </div>
            </a>
          ))}
          <div className="flex items-center gap-4 rounded-2xl bg-slate-100 p-5 text-sm text-slate-600">
            <Clock className="h-5 w-5 text-brand-500" />
            Hafta içi 09:00 – 19:00 · WhatsApp mesajlarına mesai dışında da dönüyoruz
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 lg:col-span-3">
          <h2 className="text-2xl font-bold text-navy">Bize Yazın</h2>
          <p className="mt-1 text-sm text-slate-600">Formu doldurun, en kısa sürede size dönüş yapalım.</p>
          <ContactForm />
        </div>
      </Container>
    </>
  );
}
