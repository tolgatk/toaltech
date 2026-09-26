import Link from "next/link";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./Icons";
import { site } from "@/lib/site";

/** Cam tablo sayfalarının sade başlığı: ajans menüsü yok, sadece sayfa içi bağlantılar ve iletişim */
export default function FocusedHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/cam-tablo" className="flex items-center gap-2.5">
          <svg width="36" height="36" viewBox="0 0 44 44" fill="none" aria-hidden>
            <path d="M4 10h30l-6 8H14l4 16L4 10z" fill="#2563eb" />
            <path d="M22 14h18l-4 6h-8l-6 18-4-14 4-10z" fill="#0f2a5a" />
          </svg>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight text-navy">Cam Tablo</span>
            <span className="block text-xs text-slate-500">4 mm temperli cam · 81 ile teslimat</span>
          </span>
        </Link>

        <nav aria-label="Cam tablo menüsü" className="hidden items-center gap-1 md:flex">
          <a href="#koleksiyonlar" className="px-4 py-2 text-[15px] font-medium text-slate-700 hover:text-brand-500">Modeller</a>
          <a href="#olculer" className="px-4 py-2 text-[15px] font-medium text-slate-700 hover:text-brand-500">Ölçü ve Fiyatlar</a>
          <a href="#sss" className="px-4 py-2 text-[15px] font-medium text-slate-700 hover:text-brand-500">Sık Sorulanlar</a>
        </nav>

        <div className="flex items-center gap-2">
          <a href={`tel:${site.phoneTel}`} aria-label="Telefonla ara" className="rounded-lg p-2 text-brand-500 hover:bg-brand-50 sm:hidden">
            <Phone className="h-5 w-5" />
          </a>
          <a
            href={site.camTabloWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-500/30 transition hover:bg-brand-600 sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Bilgi Al
          </a>
        </div>
      </div>
    </header>
  );
}
