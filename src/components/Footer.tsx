import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import { InstagramIcon, WhatsAppIcon } from "./Icons";
import { nav, site } from "@/lib/site";
import { localServices } from "@/lib/localServices";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-slate-600">
            Web tasarım, sosyal medya yönetimi ve dijital reklam çözümleriyle
            markanızı büyütüyoruz.
          </p>
        </div>
        <div>
          <p className="font-semibold text-navy">Sayfalar</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-brand-500">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-navy">İstanbul Hizmetlerimiz</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {localServices.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="hover:text-brand-500">İstanbul {s.name}</Link>
              </li>
            ))}
            <li>
              <Link href="/cam-tablo" className="hover:text-brand-500">İstanbul Cam Tablo</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-navy">İletişim</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>
              <a href={`tel:${site.phoneTel}`} className="flex items-center gap-2 hover:text-brand-500">
                <Phone className="h-4 w-4" /> {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-500">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-500">
                <InstagramIcon className="h-4 w-4" /> {site.instagramHandle}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-brand-500">
                <Mail className="h-4 w-4" /> {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-5 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır. · <Link href="/kvkk-aydinlatma-metni" className="hover:text-brand-500">KVKK Aydınlatma Metni</Link> · <Link href="/blog" className="hover:text-brand-500">Blog</Link>
      </div>
    </footer>
  );
}
