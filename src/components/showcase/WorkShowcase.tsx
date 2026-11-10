"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { reels, getReel, type Reel } from "@/lib/portfolio";
import { sampleProfiles, profileSrc, PROFILE_HEIGHT } from "@/lib/sampleProfiles";
import LazyVideo from "./LazyVideo";

const FEATURED = "efendy-yaz-sezonu";
const BENTO_COUNT = 6; // öne çıkan (2×2) + 6 küçük kart: geniş ekranda tam iki satır
const ROTATE_MS = 4000;

/**
 * İşler vitrini: üstte sektör seçmeli örnek profil gösterimi, altta bento video ızgarası.
 * Sayfada aynı anda tek bir öğe kendiliğinden hareket eder (profil geçişi).
 */
export default function WorkShowcase({ headingId = "isler" }: { headingId?: string }) {
  return (
    <section aria-labelledby={headingId} className="relative overflow-hidden bg-navy-dark py-16 text-white sm:py-24">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-20 h-[28rem] w-[28rem] rounded-full bg-brand-500/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">İşlerimiz</p>
          <h2 id={headingId} className="mt-2 text-3xl font-extrabold sm:text-5xl">
            Hesabınız böyle görünür,<br className="hidden sm:block" /> içerikleriniz böyle üretilir.
          </h2>
        </div>

        <ProfileShowcase />
        <VideoBento />
      </div>
    </section>
  );
}

/* ---------------- Örnek profiller ---------------- */

const REDUCED = "(prefers-reduced-motion: reduce)";
const subscribeReducedMotion = (cb: () => void) => {
  const mq = window.matchMedia(REDUCED);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const getReducedMotion = () => window.matchMedia(REDUCED).matches;

function ProfileShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false);

  useEffect(() => {
    if (paused || reduce) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % sampleProfiles.length), ROTATE_MS);
    return () => window.clearInterval(id);
  }, [paused, reduce]);

  const current = sampleProfiles[active];

  return (
    <div
      className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div>
        <h3 className="text-xl font-bold sm:text-2xl">Sektörünüze özel Instagram kurgusu</h3>
        <p className="mt-2 max-w-xl text-blue-100/80">
          Hayali markalarla hazırladığımız örnek profiller: renk, yazı dili, grid düzeni ve paylaşım ritmi her sektörde farklı kurulur. Sektörünüzü seçin.
        </p>

        <div role="tablist" aria-label="Sektör seçin" className="mt-6 flex flex-wrap gap-2">
          {sampleProfiles.map((p, i) => {
            const on = i === active;
            return (
              <button
                key={p.slug}
                type="button"
                role="tab"
                aria-selected={on}
                aria-controls="profile-preview"
                onClick={() => {
                  setActive(i);
                  setPaused(true);
                }}
                className={`relative min-h-11 cursor-pointer overflow-hidden rounded-full px-4 text-sm font-semibold ring-1 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 ${
                  on ? "bg-white text-navy ring-white" : "bg-white/5 text-blue-100 ring-white/15 hover:bg-white/10 hover:text-white"
                }`}
              >
                {p.sector}
                {on && !paused && !reduce && (
                  <span key={active} aria-hidden className="profile-progress absolute bottom-0 left-0 h-0.5 bg-brand-500" style={{ animationDuration: `${ROTATE_MS}ms` }} />
                )}
              </button>
            );
          })}
        </div>
        <p className="mt-4 text-xs text-blue-200/60">Görseller örnek tasarımdır; gösterilen markalar hayalidir.</p>
      </div>

      {/* Telefon */}
      <div id="profile-preview" role="tabpanel" aria-live="polite" className="mx-auto w-[min(80vw,340px)] sm:w-[380px]">
        <div className="relative rounded-[2.6rem] bg-slate-950 p-2.5 shadow-2xl shadow-black/50 ring-1 ring-white/15">
          <span aria-hidden className="absolute left-1/2 top-4 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-slate-950" />
          <div className="relative aspect-[9/16] overflow-hidden rounded-[2.1rem] bg-white">
            {sampleProfiles.map((p, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={p.slug}
                src={profileSrc(p.slug)}
                width={p.width}
                height={PROFILE_HEIGHT}
                alt={i === active ? `${p.sector} sektörü için örnek Instagram profil tasarımı` : ""}
                aria-hidden={i !== active}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                draggable={false}
                className={`absolute inset-0 h-full w-full select-none object-cover object-top transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>
        </div>
        <p className="mt-4 text-center text-sm font-semibold text-blue-100">{current.sector}</p>
      </div>
    </div>
  );
}

/* ---------------- Videolar ---------------- */

export function VideoBento() {
  const [all, setAll] = useState(false);
  const featured = getReel(FEATURED)!;
  const rest = reels.filter((r) => r.slug !== FEATURED);
  const shown = all ? rest : rest.slice(0, BENTO_COUNT);

  return (
    <div className="mt-20 sm:mt-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold sm:text-2xl">Reels, reklam filmi, tanıtım</h3>
          <p className="mt-2 max-w-xl text-blue-100/80">İstanbul&apos;daki müşterilerimiz için çektiğimiz ve kurguladığımız videolardan bir seçki.</p>
        </div>
        <p className="hidden text-sm text-blue-200/60 lg:block">Oynatmak için videonun üzerine gelin</p>
      </div>

      <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
        <li className="col-span-2 sm:row-span-2">
          <VideoCard reel={featured} featured />
        </li>
        {shown.map((r) => (
          <li key={r.slug}>
            <VideoCard reel={r} />
          </li>
        ))}
      </ul>

      {!all && rest.length > BENTO_COUNT && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setAll(true)}
            className="min-h-11 cursor-pointer rounded-full border border-white/20 px-6 text-sm font-semibold transition-colors duration-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
          >
            Tüm videoları göster ({reels.length})
          </button>
        </div>
      )}
    </div>
  );
}

export function VideoCard({ reel, featured = false, showTitle = false }: { reel: Reel; featured?: boolean; showTitle?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  return (
    <figure
      ref={ref}
      className={`relative h-full overflow-hidden rounded-2xl bg-slate-800 shadow-xl ring-1 ring-white/10 transition-transform duration-300 ${
        featured ? "aspect-[4/5] sm:aspect-auto" : "aspect-[9/16] hover:-translate-y-1"
      }`}
    >
      {/* Öne çıkan video ekrandayken oynar; küçükler fareli cihazda üzerine gelince */}
      <LazyVideo slug={reel.slug} label={`${reel.brand}: ${reel.title}`} hoverTarget={featured ? undefined : ref} />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/75 to-transparent" />
      <figcaption className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
        <span className={`block font-bold leading-tight ${featured ? "text-lg sm:text-xl" : "text-sm"}`}>{reel.brand}</span>
        <span className={`block text-blue-100/80 ${featured ? "text-sm" : "text-xs"}`}>{featured || showTitle ? reel.title : reel.kind}</span>
      </figcaption>
    </figure>
  );
}
