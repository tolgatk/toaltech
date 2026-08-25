"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import Logo from "./Logo";
import { WhatsAppIcon } from "./Icons";
import { nav, site } from "@/lib/site";
import { localServices } from "@/lib/localServices";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20">
        <Logo />

        <nav aria-label="Ana menü" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            const isServices = item.href === "/hizmetlerimiz";
            return (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`relative flex items-center gap-1 px-4 py-2 text-[15px] font-medium transition ${active ? "text-brand-500" : "text-slate-700 hover:text-brand-500"}`}
                >
                  {item.label}
                  {isServices && <ChevronDown className="h-4 w-4" />}
                  {active && <span className="absolute inset-x-4 -bottom-1 h-0.5 rounded bg-brand-500" />}
                </Link>
                {isServices && (
                  <div className="invisible absolute left-0 top-full z-50 w-72 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                      {localServices.map((s) => (
                        <li key={s.slug}>
                          <Link href={`/${s.slug}`} className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600">
                            İstanbul {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a href={`tel:${site.phoneTel}`} aria-label="Telefonla ara" className="rounded-lg p-2 text-brand-500 hover:bg-brand-50 sm:hidden">
            <Phone className="h-5 w-5" />
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-500/30 transition hover:bg-brand-600 sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Bize Ulaşın
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label="Menü"
            aria-expanded={open}
            aria-controls="mobil-menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobil-menu" aria-label="Mobil menü" className="max-h-[80vh] overflow-y-auto border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={`rounded-lg px-3 py-3 font-medium ${pathname === item.href ? "bg-brand-50 text-brand-500" : "text-slate-700"}`}>
                {item.label}
              </Link>
            ))}
            <p className="mt-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">İstanbul Hizmetleri</p>
            {localServices.map((s) => (
              <Link key={s.slug} href={`/${s.slug}`} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-slate-700">
                {s.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
