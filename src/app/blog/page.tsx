import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, PageHero } from "@/components/ui";
import { posts } from "@/lib/posts";

export const metadata: Metadata = { title: "Blog: Fiyatlar, Rehberler ve İpuçları", description: "Sosyal medya yönetimi fiyatları, Instagram reklam bütçesi, drone çekimi izni ve restoran sosyal medyası hakkında net cevaplar.", alternates: { canonical: "/blog" } };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Blog" title="Rehberler ve Fiyat Yazıları" desc="İşletmelerin en çok sorduğu sorulara kısa ve net cevaplar." />
      <Container className="grid gap-6 py-12 md:grid-cols-2">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-brand-500/40 hover:shadow-lg">
            <time dateTime={p.date} className="text-xs text-slate-500">{new Date(p.date).toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })}</time>
            <h2 className="mt-2 text-xl font-bold text-navy">{p.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{p.description}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-500">Oku <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
          </Link>
        ))}
      </Container>
    </>
  );
}
