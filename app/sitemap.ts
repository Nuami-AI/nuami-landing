import type { MetadataRoute } from "next";
import { getPublishedNews } from "@/content/news";
import { nav, site } from "@/content/site";
import { localePath, locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.canonicalUrl) return [];
  const base = site.canonicalUrl.replace(/\/$/, "");
  const paths = ["/", ...nav.map((item) => item.href), ...getPublishedNews("ko").map((item) => `/news/${item.slug}`)];
  return paths.flatMap((path) => {
    const languages = { ko: `${base}${localePath("ko", path)}`, en: `${base}${localePath("en", path)}` };
    return locales.map((locale) => ({ url: languages[locale], alternates: { languages } }));
  });
}
