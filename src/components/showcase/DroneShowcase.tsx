import { droneReels } from "@/lib/portfolio";
import { VideoCard } from "./WorkShowcase";

/** Drone çekimi sayfaları: gerçek havadan çekimlerden bento video ızgarası. */
export default function DroneShowcase({
  title = "İşinize kuş bakışı bir hikâye",
  desc = "İstanbul'daki müşterilerimiz için yaptığımız drone çekimlerinden kesitler: mekân tanıtımı, gece çekimi, kuşbakışı ve FPV.",
  headingId = "drone-isler",
}: { title?: string; desc?: string; headingId?: string }) {
  return (
    <section aria-labelledby={headingId} className="relative overflow-hidden bg-navy-dark py-16 text-white sm:py-20">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-10 h-[26rem] w-[26rem] rounded-full bg-brand-500/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Drone Çekimlerimiz</p>
            <h2 id={headingId} className="mt-2 text-3xl font-extrabold sm:text-4xl">{title}</h2>
            <p className="mt-3 text-blue-100/80">{desc}</p>
          </div>
          <p className="hidden text-sm text-blue-200/60 lg:block">Oynatmak için videonun üzerine gelin</p>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {droneReels.map((r) => (
            <li key={r.slug}>
              <VideoCard reel={r} showTitle />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
