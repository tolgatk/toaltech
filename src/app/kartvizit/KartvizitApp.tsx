"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AtSign, Check, Copy, Globe, Phone, Share2, Sparkles, Star, UserRoundPlus } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import { brands, kartvizit } from "@/lib/kartvizit";
import "./kartvizit.css";

type Platform = "ios" | "android" | "other";

const SAVE_HINT: Record<Platform, string> = {
  ios: "Kart indirildi. Safari'nin indirilenler simgesine dokunun, dosyayı açıp “Yeni Kişi Oluştur”u seçin.",
  android: "Kart indirildi. Bildirimlerden dosyaya dokunun, “Kişilere aktar”ı seçin.",
  other: "Kartvizit indirildi. Dosyayı açarak rehberinize ekleyebilirsiniz.",
};

/** Rehbere kaydetme ipucu cihaza göre değişir; yalnızca dokunma anında okunur. */
function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "other";
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/i.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "other";
}

/** Sıralı giriş animasyonu gecikmesi (CSS değişkeni olarak). */
const delay = (ms: number) => ({ "--kv-delay": `${ms}ms` }) as React.CSSProperties;

/** Desteklenen cihazlarda kısa titreşim – uygulama benzeri dokunma hissi. */
function buzz(ms = 8) {
  if (typeof navigator !== "undefined" && typeof navigator.vibrate === "function") navigator.vibrate(ms);
}

function ToalTechMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" className={className} aria-hidden>
      <path d="M4 10h30l-6 8H14l4 16L4 10z" fill="#3b82f6" />
      <path d="M22 14h18l-4 6h-8l-6 18-4-14 4-10z" fill="#e2e8f0" />
    </svg>
  );
}

export default function KartvizitApp() {
  const [toast, setToast] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const notify = useCallback((message: string) => {
    setToast(message);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 5000);
  }, []);

  const onSave = useCallback(() => {
    buzz(14);
    notify(SAVE_HINT[detectPlatform()]);
  }, [notify]);

  const onShare = useCallback(async () => {
    buzz();
    const url = typeof window !== "undefined" ? window.location.href : "https://toaltech.com/kartvizit";
    const data = { title: kartvizit.displayName, text: `${kartvizit.displayName} – dijital kartvizit`, url };
    try {
      if (navigator.share) {
        await navigator.share(data);
        return;
      }
      await navigator.clipboard.writeText(url);
      notify("Kartvizit bağlantısı kopyalandı.");
    } catch {
      /* Kullanıcı paylaşımı iptal etti – sessizce geç. */
    }
  }, [notify]);

  const onCopyPhone = useCallback(async () => {
    buzz();
    try {
      await navigator.clipboard.writeText(kartvizit.phoneTel);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      notify("Telefon numarası kopyalandı.");
    } catch {
      notify(`Numara: ${kartvizit.phoneDisplay}`);
    }
  }, [notify]);

  const quick = [
    { label: "Ara", href: `tel:${kartvizit.phoneTel}`, icon: <Phone className="h-5 w-5" />, ring: "from-blue-400/30 to-blue-600/10" },
    { label: "WhatsApp", href: kartvizit.whatsapp, external: true, icon: <WhatsAppIcon className="h-5 w-5" />, ring: "from-emerald-400/30 to-emerald-600/10" },
  ];

  return (
    <div className="kv-root">
      <div className="kv-bg" aria-hidden>
        <div className="kv-aurora kv-aurora-1" />
        <div className="kv-aurora kv-aurora-2" />
        <div className="kv-aurora kv-aurora-3" />
        <div className="kv-grid" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col">
        <main className="mx-auto w-full max-w-[440px] flex-1 px-5 pb-8 pt-[calc(20px+env(safe-area-inset-top))]">
          {/* Üst rozet */}
          <div className="kv-in flex justify-center" style={delay(40)}>
            <span className="kv-glass flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-100/90">
              <span className="kv-nfc flex items-end gap-[3px]" aria-hidden>
                <span />
                <span />
                <span />
              </span>
              NFC Dijital Kartvizit
            </span>
          </div>

          {/* Kimlik kartı */}
          <section className="kv-in kv-hero-glow mt-5 rounded-[30px]" style={delay(120)}>
            <div className="kv-glass kv-hero-face rounded-[29px] px-6 pb-6 pt-8 text-center">
              <div className="flex justify-center">
                <span className="kv-badge flex h-20 w-20 items-center justify-center rounded-[24px] bg-gradient-to-br from-[#1e3a8a] via-[#1d4ed8] to-[#0b1a3a]">
                  <ToalTechMark className="h-11 w-11" />
                </span>
              </div>

              <h1 className="mt-5 text-balance text-[25px] font-extrabold leading-[1.15] tracking-tight text-white">
                ToalTech <span className="text-blue-400">&amp;</span> ToBeCreative
              </h1>
              <p className="mt-2 text-[13px] leading-relaxed text-blue-100/70">{kartvizit.subtitle}</p>

              <div className="mt-4 grid grid-cols-2 gap-2">
                {kartvizit.services.map((s) => (
                  <span key={s} className="rounded-full border border-white/15 bg-white/[0.07] px-3 py-1.5 text-center text-[11px] font-medium text-blue-50/85">
                    {s}
                  </span>
                ))}
              </div>

              {/* Hızlı aksiyonlar */}
              <div className="mt-6 grid grid-cols-3 gap-2.5">
                {quick.map((q) => (
                  <a
                    key={q.label}
                    href={q.href}
                    target={q.external ? "_blank" : undefined}
                    rel={q.external ? "noopener noreferrer" : undefined}
                    onClick={() => buzz()}
                    className="kv-tap group flex flex-col items-center gap-1.5 focus:outline-none"
                  >
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br ${q.ring} text-white shadow-lg shadow-black/30 group-focus-visible:ring-2 group-focus-visible:ring-blue-300`}
                    >
                      {q.icon}
                    </span>
                    <span className="text-[10.5px] font-medium text-blue-100/70">{q.label}</span>
                  </a>
                ))}
                <button
                  type="button"
                  onClick={onShare}
                  aria-label="Kartviziti paylaş"
                  className="kv-tap group flex flex-col items-center gap-1.5 focus:outline-none"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-slate-300/25 to-slate-500/10 text-white shadow-lg shadow-black/30 group-focus-visible:ring-2 group-focus-visible:ring-blue-300">
                    <Share2 className="h-5 w-5" />
                  </span>
                  <span className="text-[10.5px] font-medium text-blue-100/70">Paylaş</span>
                </button>
              </div>
            </div>
          </section>

          {/* İletişim satırları */}
          <section className="mt-4 space-y-2.5" aria-label="İletişim bilgileri">
            <div className="kv-in kv-glass flex items-center gap-3 rounded-2xl p-3" style={delay(220)}>
              <a href={`tel:${kartvizit.phoneTel}`} onClick={() => buzz()} className="kv-tap flex min-w-0 flex-1 items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-200">
                  <Phone className="h-[18px] w-[18px]" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[10.5px] uppercase tracking-wider text-blue-100/50">Telefon</span>
                  <span className="block truncate text-[15px] font-semibold text-white">{kartvizit.phoneDisplay}</span>
                </span>
              </a>
              <button
                type="button"
                onClick={onCopyPhone}
                aria-label="Telefon numarasını kopyala"
                className="kv-tap flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/12 bg-white/[0.06] text-blue-100/80"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-300" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </section>

          {/* Markalar */}
          <section className="mt-6" aria-label="Markalarımız">
            <h2 className="kv-in mb-3 flex items-center gap-2 px-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-100/55" style={delay(320)}>
              <Sparkles className="h-3.5 w-3.5" />
              Markalarımız
            </h2>

            <div className="space-y-3.5">
              {brands.map((b, i) => (
                <article
                  key={b.key}
                  className="kv-in kv-glass overflow-hidden rounded-3xl p-4"
                  style={delay(360 + i * 80)}
                >
                  <div className="flex h-[62px] items-center">
                    {b.key === "toaltech" ? (
                      <span className="flex items-center gap-2.5">
                        <ToalTechMark className="h-9 w-9" />
                        <span className="text-[22px] font-extrabold leading-none tracking-tight text-white">
                          Toal<span className="text-blue-400">Tech</span>
                        </span>
                      </span>
                    ) : (
                      <Image
                        src="/marka/tobecreative-beyaz.png"
                        alt="ToBeCreative logosu"
                        width={900}
                        height={709}
                        sizes="180px"
                        className="h-[62px] w-auto object-contain object-left"
                      />
                    )}
                  </div>

                  <p className="mt-2.5 text-[12.5px] leading-relaxed text-blue-100/65">{b.tagline}</p>

                  <div className="mt-3.5 grid grid-cols-2 gap-2">
                    <a
                      href={b.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => buzz()}
                      className="kv-tap flex items-center gap-2 rounded-2xl border border-white/12 bg-white/[0.06] px-3 py-2.5 text-[12.5px] font-semibold text-white"
                    >
                      <Globe className="h-4 w-4 shrink-0 text-blue-300" />
                      <span className="truncate">{b.site}</span>
                    </a>
                    <a
                      href={b.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => buzz()}
                      className="kv-tap flex items-center gap-2 rounded-2xl border border-white/12 bg-gradient-to-r from-[#f9ce34]/15 via-[#ee2a7b]/20 to-[#6228d7]/20 px-3 py-2.5 text-[12.5px] font-semibold text-white"
                    >
                      <InstagramIcon className="h-4 w-4 shrink-0" />
                      <span className="truncate">{b.instagram.replace("@", "")}</span>
                    </a>

                    <a
                      href={b.reviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => buzz()}
                      className="kv-tap col-span-2 flex items-center justify-center gap-2 rounded-2xl border border-amber-300/25 bg-amber-400/[0.12] px-3 py-2.5 text-[12.5px] font-semibold text-amber-50"
                    >
                      <span className="flex items-center gap-[2px]" aria-hidden>
                        {[0, 1, 2, 3, 4].map((i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-amber-300 text-amber-300" />
                        ))}
                      </span>
                      <span>Google&apos;da Yorum Bırak</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <p className="kv-in mt-7 text-center text-[11px] leading-relaxed text-blue-100/40" style={delay(560)}>
            <AtSign className="mr-1 inline h-3 w-3 align-[-2px]" />
            toaltech.com · Kartı telefonunuza yaklaştırarak her an ulaşabilirsiniz.
          </p>
        </main>

        {/* Alt aksiyon çubuğu */}
        <div className="kv-dock">
          <div className="mx-auto flex w-full max-w-[440px] gap-2.5">
            <a
              href={kartvizit.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => buzz(12)}
              className="kv-tap flex h-[54px] flex-1 items-center justify-center gap-2 rounded-2xl bg-[#25D366] text-[15px] font-bold text-[#04310f] shadow-lg shadow-emerald-900/40"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </a>
            <a
              href={kartvizit.vcfPath}
              download={kartvizit.vcfFileName}
              onClick={onSave}
              className="kv-tap kv-shine flex h-[54px] flex-[1.35] items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#3b82f6] via-[#2563eb] to-[#6d28d9] text-[15px] font-bold text-white shadow-lg shadow-blue-900/50"
            >
              <UserRoundPlus className="h-5 w-5" />
              Rehbere Kaydet
            </a>
          </div>
        </div>
      </div>

      {/* Bildirim */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="kv-toast fixed bottom-[calc(86px+env(safe-area-inset-bottom))] left-1/2 z-50 w-[min(92vw,420px)] -translate-x-1/2 rounded-2xl border border-white/15 bg-[#0b1733]/95 px-4 py-3 text-[12.5px] leading-relaxed text-blue-50 shadow-2xl shadow-black/60 backdrop-blur"
        >
          <button type="button" onClick={() => setToast(null)} className="flex w-full items-start gap-2.5 text-left">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
            <span>{toast}</span>
          </button>
        </div>
      )}
    </div>
  );
}
