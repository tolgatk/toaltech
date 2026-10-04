"use client";

import { useEffect, useRef } from "react";
import { Clock, Phone, X } from "lucide-react";
import { WhatsAppIcon } from "./Icons";
import { site } from "@/lib/site";

const DELAY_MS = 3000;
const SEEN_KEY = "toaltech-contact-popup";

/**
 * Sayfaya girişten 3 sn sonra açılan iletişim penceresi. WhatsApp butonu hazır
 * mesajla açılır. Oturum başına bir kez gösterilir; çarpı, Esc veya dışarı
 * tıklamayla kapanır.
 */
export default function ContactPopup({ service }: { service: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const message = `Merhaba, ${service.toLocaleLowerCase("tr")} paketleriniz hakkında detaylı bilgi alabilir miyim?`;
  const whatsapp = `https://wa.me/${site.phoneTel.replace("+", "")}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return;
    } catch {}
    const t = setTimeout(() => {
      const el = dialog.current;
      if (!el || el.open || document.querySelector("dialog[open]")) return;
      el.showModal();
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {}
    }, DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  const close = () => dialog.current?.close();

  return (
    <dialog
      ref={dialog}
      aria-labelledby="popup-title"
      onClick={(e) => e.target === e.currentTarget && close()}
      className="contact-popup mb-0 mt-auto w-full max-w-none bg-transparent p-0 backdrop:bg-slate-950/60 backdrop:backdrop-blur-sm sm:m-auto sm:max-w-md"
    >
      <div className="relative overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl">
        <div className="relative bg-gradient-to-br from-navy-dark via-navy to-brand-700 px-6 pb-7 pt-8 text-white">
          <div aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-500/40 blur-3xl" />
          <button
            type="button"
            onClick={close}
            aria-label="Kapat"
            className="absolute right-3 top-3 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
          <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366] shadow-lg shadow-black/20">
            <WhatsAppIcon className="h-7 w-7" />
          </span>
          <h2 id="popup-title" className="relative mt-5 text-2xl font-extrabold leading-tight">
            Hemen bizimle iletişime geçin
          </h2>
          <p className="relative mt-2 text-blue-100">
            {service} paketlerimizi, fiyatları ve size uygun planı WhatsApp&apos;tan anlatalım. İlk görüşme ücretsiz.
          </p>
        </div>

        <div className="px-6 pb-6 pt-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Gönderilecek mesaj</p>
          <p className="mt-2 rounded-2xl rounded-tl-sm bg-[#e7fbe9] px-4 py-3 text-sm text-slate-800">{message}</p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 font-bold text-white shadow-lg shadow-[#25D366]/30 transition hover:bg-[#1fb955]"
          >
            <WhatsAppIcon className="h-5 w-5" /> WhatsApp&apos;tan Yaz
          </a>
          <a
            href={`tel:${site.phoneTel}`}
            className="mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 py-3 font-semibold text-navy transition hover:border-brand-500 hover:text-brand-500"
          >
            <Phone className="h-4 w-4" /> Hemen Ara: {site.phoneDisplay}
          </a>
          <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-500">
            <Clock className="h-3.5 w-3.5" /> Hafta içi 09:00–19:00 arası hızlı dönüş
          </p>
        </div>
      </div>
    </dialog>
  );
}
