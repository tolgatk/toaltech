import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ContactBanner from "@/components/ContactBanner";
import { WhatsAppIcon } from "@/components/Icons";
import { posts, getPost } from "@/lib/posts";
import { localServices } from "@/lib/localServices";
import { articleGraph } from "@/lib/schema";
import { abs } from "@/lib/seo";
import { site } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: abs(`/blog/${p.slug}`) },
    openGraph: { title: p.title, description: p.description, url: abs(`/blog/${p.slug}`), type: "article", publishedTime: p.date, modifiedTime: p.updated ?? p.date },
  };
}

const fmt = (d: string) => new Date(d).toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" });
const anchor = (i: number) => `bolum-${i + 1}`;

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const hub = localServices.find((s) => `/${s.slug}` === p.hub);
  // Aynı hizmete bağlı yazılar önce
  const related = posts.filter((x) => x.slug !== p.slug).sort((a, b) => Number(b.hub === p.hub) - Number(a.hub === p.hub)).slice(0, 5);

  return (
    <>
      <JsonLd data={articleGraph(p)} />
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <Container className="py-12">
          <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: p.h1, href: `/blog/${p.slug}` }]} />
          <h1 className="mt-6 max-w-3xl text-3xl font-extrabold leading-tight text-navy sm:text-5xl">{p.h1}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">{p.description}</p>
          <p className="mt-4 text-sm text-slate-500">
            ToalTech ekibi · Yayın: <time dateTime={p.date}>{fmt(p.date)}</time>
            {p.updated && <> · Güncelleme: <time dateTime={p.updated}>{fmt(p.updated)}</time></>}
          </p>
        </Container>
      </section>

      <Container className="grid gap-12 py-12 lg:grid-cols-[1fr_300px]">
        <article className="max-w-3xl">
          {/* İçindekiler */}
          <nav aria-label="İçindekiler" className="mb-10 rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">İçindekiler</p>
            <ol className="mt-3 space-y-1.5">
              {p.sections.map((s, i) => (
                <li key={s.h2}>
                  <a href={`#${anchor(i)}`} className="text-slate-700 hover:text-brand-500 hover:underline">{s.h2}</a>
                </li>
              ))}
              {p.faq && <li><a href="#sss" className="text-slate-700 hover:text-brand-500 hover:underline">Sık sorulan sorular</a></li>}
            </ol>
          </nav>

          {p.sections.map((s, i) => (
            <section key={s.h2} id={anchor(i)} className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">{s.h2}</h2>
              {s.p.map((t, j) => (
                <p key={j} className={`mt-4 text-[17px] leading-relaxed text-slate-700 ${i === 0 && j === 0 ? "rounded-2xl border-l-4 border-brand-500 bg-brand-50 p-5 font-medium" : ""}`}>{t}</p>
              ))}
              {s.list && (
                <ul className="mt-5 space-y-2.5">
                  {s.list.map((l) => (
                    <li key={l} className="flex items-start gap-3 text-slate-700">
                      <Check aria-hidden className="mt-1 h-4 w-4 shrink-0 text-brand-500" /> <span>{l}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {p.faq && (
            <section id="sss" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">Sık sorulan sorular</h2>
              <div className="mt-5 space-y-4">
                {p.faq.map((f) => (
                  <div key={f.q} className="rounded-2xl border border-slate-200 bg-white p-5">
                    <h3 className="font-bold text-navy">{f.q}</h3>
                    <p className="mt-2 leading-relaxed text-slate-700">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {hub && (
            <div className="rounded-3xl bg-navy p-7 text-white sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">İlgili hizmet</p>
              <p className="mt-2 text-2xl font-extrabold">İstanbul {hub.name}</p>
              <p className="mt-2 text-blue-100">{hub.intro}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={p.hub} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-brand-600 transition-colors duration-200 hover:bg-brand-50">
                  Hizmeti inceleyin <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 font-semibold text-white transition-colors duration-200 hover:bg-[#1fb955]">
                  <WhatsAppIcon className="h-5 w-5" /> Teklif alın
                </a>
              </div>
            </div>
          )}
        </article>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-bold text-navy">Diğer rehberler</p>
          <ul className="mt-4 space-y-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/blog/${r.slug}`} className="block rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 transition-colors duration-200 hover:border-brand-500 hover:text-brand-600">{r.h1}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </Container>
      <ContactBanner />
    </>
  );
}
