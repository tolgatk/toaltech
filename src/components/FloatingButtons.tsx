import { Phone } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "./Icons";
import { site } from "@/lib/site";

const base =
  "group flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-4";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={site.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        title="Instagram"
        className={`${base} bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] focus:ring-pink-300`}
      >
        <InstagramIcon className="h-7 w-7" />
      </a>
      <a
        href={`tel:${site.phoneTel}`}
        aria-label="Telefonla Ara"
        title={site.phoneDisplay}
        className={`${base} bg-brand-500 focus:ring-blue-300`}
      >
        <Phone className="h-6 w-6" />
      </a>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        title="WhatsApp'tan Yazın"
        className={`${base} bg-[#25D366] focus:ring-green-300`}
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
