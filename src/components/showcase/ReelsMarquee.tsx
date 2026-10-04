import { reels } from "@/lib/portfolio";
import ReelCard from "./ReelCard";
import Reveal from "./Reveal";

/**
 * Gerçek müşteri videolarının sonsuz kayan şeridi (koyu bölüm).
 * Videolar sessiz oynar, tıklanmaz; hareket azaltma açıksa yatay kaydırmaya döner.
 */
export default function ReelsMarquee({
  eyebrow = "Ürettiğimiz İçerikler",
  title = "Sunum dosyası değil, gerçek işler",
  desc = "İstanbul'daki işletmeler için çektiğimiz, kurguladığımız ve yayınladığımız videolardan bir seçki.",
  headingId = "isler",
}: { eyebrow?: string; title?: string; desc?: string; headingId?: string }) {
  const card = "mr-3 w-[130px] shrink-0 sm:mr-4 sm:w-[165px]";
  return (
    <section aria-labelledby={headingId} className="relative overflow-hidden bg-navy-dark py-16 text-white sm:py-20">
      <div aria-hidden className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-500/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl" />

      <Reveal className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">{eyebrow}</p>
          <h2 id={headingId} className="mt-2 text-3xl font-extrabold sm:text-4xl">{title}</h2>
          <p className="mt-3 text-blue-100/80">{desc}</p>
        </div>
      </Reveal>

      <div className="reel-track-wrap relative mt-8">
        <div className="reel-track flex w-max">
          {reels.map((r) => (
            <ReelCard key={r.slug} slug={r.slug} className={card} />
          ))}
          <div aria-hidden className="reel-dup contents">
            {reels.map((r) => (
              <ReelCard key={`dup-${r.slug}`} slug={r.slug} className={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
