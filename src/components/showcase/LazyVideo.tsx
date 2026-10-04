"use client";

import { useEffect, useRef } from "react";
import { posterSrc, previewSrc } from "@/lib/portfolio";

/**
 * Sessiz önizleme videosu. Kaynak yalnızca ekrana yaklaşınca yüklenir,
 * görünürken oynar, ekrandan çıkınca durur. Hareket azaltma veya veri
 * tasarrufu açıksa sadece kapak görseli gösterilir.
 */
export default function LazyVideo({ slug, className = "", label }: { slug: string; className?: string; label?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduce || saveData) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!v.getAttribute("src")) v.src = previewSrc(slug);
          v.play().catch(() => {});
        } else if (!v.paused) {
          v.pause();
        }
      },
      { rootMargin: "150px" },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [slug]);

  return (
    <video
      ref={ref}
      poster={posterSrc(slug)}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
