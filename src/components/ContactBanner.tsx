import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./Icons";
import { Container } from "./ui";
import { site } from "@/lib/site";

export default function ContactBanner() {
  return (
    <Container className="mt-8">
      <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-brand-500 px-6 py-8 text-white shadow-xl shadow-brand-500/30 md:flex-row md:px-10">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]">
            <WhatsAppIcon className="h-7 w-7" />
          </span>
          <div>
            <p className="text-xl font-bold">Hemen İletişime Geçin!</p>
            <p className="text-sm text-blue-100">Size özel dijital çözümler için ücretsiz danışmanlık alın.</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <a href={`tel:${site.phoneTel}`} className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-brand-600 hover:bg-brand-50">
            <Phone className="h-5 w-5" /> {site.phoneDisplay}
          </a>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 font-semibold text-white hover:bg-[#1fb955]">
            <WhatsAppIcon className="h-5 w-5" /> WhatsApp&apos;tan Yazın
          </a>
        </div>
      </div>
    </Container>
  );
}
