import type { MetadataRoute } from "next";
import { getPublishedNews } from "@/content/news";
import { nav, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.canonicalUrl) return [];
  const base = site.canonicalUrl.replace(/\/$/, "");
  return [
    { url: `${base}/` },
    ...nav.map((item) => ({ url: `${base}${item.href}` })),
    ...getPublishedNews().map((item) => ({ url: `${base}/news/${item.slug}` })),
  ];
}
