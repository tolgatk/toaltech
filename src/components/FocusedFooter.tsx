import Link from "next/link";
import { site } from "@/lib/site";

/** Cam tablo sayfalarının sade footer'ı */
export default function FocusedFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-slate-600 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>
          <Link href="/cam-tablo" className="font-semibold text-navy hover:text-brand-500">Cam Tablo</Link>
          {" · "}Tablolarımız{" "}
          <a href="https://tobecreative.net/?utm_source=toaltech&utm_medium=referral&utm_campaign=cam-tablo-footer" target="_blank" rel="noopener" className="font-medium text-brand-500 hover:underline">Tobecreative</a>
          {" "}markasıyla üretilir.
        </p>
        <p>
          <a href={`tel:${site.phoneTel}`} className="hover:text-brand-500">{site.phoneDisplay}</a>
          {" · "}
          <Link href="/kvkk-aydinlatma-metni" className="hover:text-brand-500">KVKK</Link>
          {" · "}© {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
