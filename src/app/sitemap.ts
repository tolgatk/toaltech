import type { MetadataRoute } from "next";
import { localServices } from "@/lib/localServices";
import { districts } from "@/lib/districts";
import { posts } from "@/lib/posts";
import { abs, CONTENT_UPDATED } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(CONTENT_UPDATED);
  const statics = ["/", "/hizmetlerimiz", "/paketlerimiz", "/hakkimizda", "/referanslar", "/iletisim", "/blog", "/kvkk-aydinlatma-metni"].map((p) => ({ url: abs(p), lastModified }));
  const hubs = localServices.map((s) => ({ url: abs(`/${s.slug}`), lastModified }));
  const locals = localServices.flatMap((s) => districts.map((d) => ({ url: abs(`/${s.slug}/${d.slug}`), lastModified })));
  const blog = posts.map((p) => ({ url: abs(`/blog/${p.slug}`), lastModified: new Date(p.date) }));
  return [...statics, ...hubs, ...blog, ...locals];
}
