import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function SectionTitle({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">{title}</h2>
      {desc && <p className="mt-3 text-slate-600">{desc}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div className="bg-dots pointer-events-none absolute inset-y-0 right-0 w-1/3 opacity-40" />
      <Container className="relative py-16 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">{eyebrow}</p>
        <h1 className="mt-2 text-4xl font-extrabold text-navy sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">{desc}</p>
      </Container>
    </section>
  );
}

export function ButtonLink({ href, children, variant = "primary", external = false }: {
  href: string; children: React.ReactNode; variant?: "primary" | "ghost" | "white"; external?: boolean;
}) {
  const styles = {
    primary: "bg-brand-500 text-white shadow-lg shadow-brand-500/30 hover:bg-brand-600",
    ghost: "text-brand-500 hover:bg-brand-50",
    white: "bg-white text-brand-600 hover:bg-brand-50",
  }[variant];
  const cls = `inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold transition ${styles}`;
  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
  }
  return <Link href={href} className={cls}>{children}{variant === "ghost" && <ArrowRight className="h-4 w-4" />}</Link>;
}
