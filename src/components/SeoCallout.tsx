import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "./Icons";
import { site } from "@/lib/site";

export default function SeoCallout({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="bg-navy text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-3 sm:flex-row sm:px-6">
          <p className="flex items-center gap-2 text-center text-sm sm:text-left">
            <Sparkles className="h-4 w-4 shrink-0 text-blue-300" />
            <span><strong>SEO düşündüğünüzden çok daha önemli.</strong> Google&apos;da ve yapay zeka aramalarında (AI Modu, ChatGPT) bulunmak için bize ulaşın.</span>
          </p>
          <div className="flex shrink-0 gap-2">
            <Link href="/seo-hizmeti" className="inline-flex items-center gap-1 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20">SEO Hizmeti <ArrowRight className="h-4 w-4" /></Link>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-lg bg-[#25D366] px-4 py-2 text-sm font-semibold hover:bg-[#1fb955]"><WhatsAppIcon className="h-4 w-4" /> Yazın</a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="rounded-3xl bg-navy p-8 text-white md:p-10">
      <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300"><Sparkles className="h-4 w-4" /> SEO &amp; Yapay Zeka Optimizasyonu</p>
      <h2 className="mt-3 text-2xl font-bold sm:text-3xl">SEO düşündüğünüzden çok daha önemli.</h2>
      <p className="mt-3 max-w-2xl text-blue-100">
        Müşterileriniz artık sadece Google&apos;a yazmıyor; Google AI Modu&apos;na ve ChatGPT&apos;ye &quot;bana ... öner&quot; diyor. Doğru kurulmuş bir site hem klasik aramada ilk sırada çıkıyor hem de yapay zeka cevaplarında öneriliyor. Aşağıdaki referansımızda bunun kanıtı var.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/seo-hizmeti" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-brand-600 hover:bg-brand-50">SEO Hizmetimizi İnceleyin <ArrowRight className="h-4 w-4" /></Link>
        <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 font-semibold text-white hover:bg-[#1fb955]"><WhatsAppIcon className="h-5 w-5" /> WhatsApp&apos;tan Ulaşın</a>
      </div>
    </div>
  );
}
