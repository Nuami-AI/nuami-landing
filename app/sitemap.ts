import type { MetadataRoute } from "next";
import { getPublishedNews } from "@/content/news";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.canonicalUrl) return [];
  const base = site.canonicalUrl.replace(/\/$/, "");
  return [{ url: `${base}/` }, ...getPublishedNews().map((item) => ({ url: `${base}/news/${item.slug}` }))];
}
