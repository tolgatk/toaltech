import { getReel } from "@/lib/portfolio";
import LazyVideo from "./LazyVideo";

/** Sessiz, kendi kendine oynayan dikey video kartı. Tıklanmaz, büyütülmez. */
export default function ReelCard({ slug, className = "" }: { slug: string; className?: string }) {
  const reel = getReel(slug);
  if (!reel) return null;
  return (
    <div className={`pointer-events-none relative block aspect-[9/16] select-none overflow-hidden rounded-2xl bg-slate-800 shadow-xl ring-1 ring-white/10 ${className}`}>
      <LazyVideo slug={slug} label={`${reel.brand}: ${reel.title}`} />
    </div>
  );
}
