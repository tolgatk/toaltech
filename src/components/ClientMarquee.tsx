import { clients } from "@/lib/clients";

const item = "mx-8 inline-flex items-center whitespace-nowrap text-lg font-extrabold tracking-tight text-navy sm:text-xl";

function Item({ name, url }: { name: string; url?: string }) {
  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener" className={item}>
        {name}
      </a>
    );
  }
  return <span className={item}>{name}</span>;
}

export default function ClientMarquee({ title = "Referanslarımız" }: { title?: string | null }) {
  const list = [...clients, ...clients];
  return (
    <section aria-label="Referanslarımız" className="overflow-hidden border-y border-slate-200 bg-white py-5">
      {title && <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-brand-500">{title}</p>}
      <div className="marquee flex w-max">
        {list.map((c, i) => (
          <span key={i} className="flex items-center">
            <Item {...c} />
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          </span>
        ))}
      </div>
    </section>
  );
}
