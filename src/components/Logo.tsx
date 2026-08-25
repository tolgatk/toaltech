import Link from "next/link";
import { site } from "@/lib/site";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden>
        <path d="M4 10h30l-6 8H14l4 16L4 10z" fill="#2563eb" />
        <path d="M22 14h18l-4 6h-8l-6 18-4-14 4-10z" fill="#0f2a5a" />
      </svg>
      <span className="leading-tight">
        <span className="block text-2xl font-extrabold tracking-tight">
          <span className="text-navy">Toal</span>
          <span className="text-brand-500">Tech</span>
        </span>
        <span className="block text-xs text-slate-500">{site.tagline}</span>
      </span>
    </Link>
  );
}
