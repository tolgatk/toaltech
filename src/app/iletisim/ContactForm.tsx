"use client";

import Link from "next/link";
import { useState } from "react";
import { Send } from "lucide-react";
import { site } from "@/lib/site";

const input =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10";
const label = "mb-1 block text-sm font-medium text-slate-700";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", service: "Web Tasarım", message: "", consent: false });
  const [sent, setSent] = useState(false);

  // Backend gelene kadar form WhatsApp'a yönlendiriyor.
  function submit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Merhaba, ben ${form.name}.\nTelefon: ${form.phone}\nİlgilendiğim hizmet: ${form.service}\n\n${form.message}`;
    window.open(`https://wa.me/${site.phoneTel.replace("+", "")}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  }

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value });

  return (
    <form onSubmit={submit} className="mt-6 grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className={label}>Adınız Soyadınız</label>
        <input id="name" name="name" autoComplete="name" required className={input} value={form.name} onChange={set("name")} />
      </div>
      <div>
        <label htmlFor="phone" className={label}>Telefon Numaranız</label>
        <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required className={input} value={form.phone} onChange={set("phone")} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="service" className={label}>İlgilendiğiniz Hizmet</label>
        <select id="service" name="service" className={input} value={form.service} onChange={set("service")}>
          <option>Web Tasarım</option>
          <option>SEO ve Yapay Zeka Optimizasyonu</option>
          <option>Sosyal Medya Yönetimi</option>
          <option>Sosyal Medya Danışmanlığı</option>
          <option>Reklam Danışmanlığı (Meta / Google)</option>
          <option>Ürün Çekimi</option>
          <option>Drone Çekimi</option>
          <option>Yazılım Danışmanlığı</option>
          <option>Hepsi / Karar veremedim</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className={label}>Projenizden kısaca bahsedin</label>
        <textarea id="message" name="message" required rows={5} className={input} value={form.message} onChange={set("message")} />
      </div>
      <label className="flex items-start gap-3 text-sm text-slate-600 sm:col-span-2">
        <input type="checkbox" required className="mt-1 h-4 w-4" checked={form.consent} onChange={set("consent")} />
        <span>
          <Link href="/kvkk-aydinlatma-metni" className="text-brand-500 underline">KVKK Aydınlatma Metni</Link>&apos;ni okudum; iletişim amacıyla bilgilerimin işlenmesini kabul ediyorum.
        </span>
      </label>
      <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600 sm:col-span-2">
        <Send className="h-4 w-4" /> WhatsApp ile Gönder
      </button>
      {sent && (
        <p role="status" className="rounded-xl bg-emerald-50 p-4 text-sm text-emerald-700 sm:col-span-2">
          WhatsApp açıldı. Açılmadıysa bizi doğrudan arayabilirsiniz: <a href={`tel:${site.phoneTel}`} className="font-semibold underline">{site.phoneDisplay}</a>
        </p>
      )}
    </form>
  );
}
