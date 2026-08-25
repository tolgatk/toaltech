import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, ButtonLink } from "@/components/ui";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ContactBanner from "@/components/ContactBanner";
import { posts, getPost } from "@/lib/posts";
import { localServices } from "@/lib/localServices";
import { articleGraph } from "@/lib/schema";
import { abs } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return { title: p.title, description: p.description, alternates: { canonical: abs(`/blog/${p.slug}`) }, openGraph: { title: p.title, description: p.description, url: abs(`/blog/${p.slug}`), type: "article", publishedTime: p.date } };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const hub = localServices.find((s) => `/${s.slug}` === p.hub);
  const related = posts.filter((x) => x.slug !== p.slug);

  return (
    <>
      <JsonLd data={articleGraph(p)} />
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <Container className="py-12">
          <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: p.title, href: `/blog/${p.slug}` }]} />
          <h1 className="mt-6 max-w-3xl text-3xl font-extrabold text-navy sm:text-5xl">{p.h1}</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">{p.description}</p>
          <p className="mt-3 text-sm text-slate-500">Yayın: <time dateTime={p.date}>{new Date(p.date).toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })}</time> · ToalTech ekibi</p>
        </Container>
      </section>
      <Container className="grid gap-10 py-12 lg:grid-cols-3">
        <article className="max-w-3xl lg:col-span-2">
          {p.sections.map((s) => (
            <section key={s.h2} className="mb-8">
              <h2 className="text-2xl font-bold text-navy">{s.h2}</h2>
              {s.p.map((t, i) => (
                <p key={i} className="mt-3 leading-relaxed text-slate-700">{t}</p>
              ))}
            </section>
          ))}
          {hub && (
            <div className="rounded-2xl bg-brand-50 p-6">
              <p className="font-semibold text-navy">İlgili hizmet: İstanbul {hub.name}</p>
              <p className="mt-1 text-sm text-slate-600">{hub.intro}</p>
              <div className="mt-4"><ButtonLink href={p.hub} variant="ghost">Hizmeti İncele</ButtonLink></div>
            </div>
          )}
        </article>
        <aside>
          <p className="font-semibold text-navy">Diğer yazılar</p>
          <ul className="mt-3 space-y-3">
            {related.map((r) => (
              <li key={r.slug}><Link href={`/blog/${r.slug}`} className="text-sm text-slate-700 hover:text-brand-500">{r.title}</Link></li>
            ))}
          </ul>
        </aside>
      </Container>
      <ContactBanner />
    </>
  );
}
