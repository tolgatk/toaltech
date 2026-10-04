import ReelCard from "./ReelCard";

/**
 * Hero görseli: yelpaze gibi açılmış üç telefon, içlerinde gerçek müşteri videoları.
 * Ortadaki öndedir; yanlardakiler arkada ve hafif döndürülmüş.
 */
export default function PhoneStack({ slugs, className = "max-w-[560px]" }: { slugs: [string, string, string]; className?: string }) {
  const [left, center, right] = slugs;
  return (
    <div className={`relative mx-auto aspect-[5/4] w-full ${className}`}>
      <div aria-hidden className="absolute inset-[12%] rounded-full bg-brand-500/30 blur-3xl" />

      <Phone className="phone-float-b absolute left-[2%] top-[14%] z-0 w-[34%] -rotate-[9deg]">
        <ReelCard slug={left} className="rounded-[1.4rem]" />
      </Phone>
      <Phone className="phone-float-c absolute right-[2%] top-[14%] z-0 w-[34%] rotate-[9deg]">
        <ReelCard slug={right} className="rounded-[1.4rem]" />
      </Phone>
      <Phone className="phone-float-a absolute left-[30%] top-0 z-10 w-[40%]">
        <ReelCard slug={center} className="rounded-[1.6rem]" />
      </Phone>
    </div>
  );
}

function Phone({ children, className }: { children: React.ReactNode; className: string }) {
  return (
    <div className={className}>
      <div className="rounded-[2rem] bg-slate-900 p-[6px] shadow-2xl shadow-slate-900/40 ring-1 ring-slate-700">
        <div className="relative">
          <span aria-hidden className="absolute left-1/2 top-2 z-10 h-1.5 w-12 -translate-x-1/2 rounded-full bg-slate-900/80" />
          {children}
        </div>
      </div>
    </div>
  );
}
