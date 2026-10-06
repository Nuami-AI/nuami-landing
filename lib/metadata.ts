import type { Metadata } from "next";
import { ogLocale, siteName } from "@/components/SiteShell";
import { ogImage, site } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
  type?: "website" | "article";
};

export function pageMetadata({ title, description, path, locale = "ko", type = "website" }: PageMetaInput): Metadata {
  const ready = Boolean(site.canonicalUrl);
  const url = localePath(locale, path);
  return {
    title,
    description,
    ...(ready
      ? {
          alternates: {
            canonical: url,
            languages: { ko: localePath("ko", path), en: localePath("en", path), "x-default": localePath("ko", path) },
          },
        }
      : {}),
    openGraph: {
      type,
      siteName: siteName[locale],
      locale: ogLocale[locale],
      title,
      description,
      ...(ready ? { url, images: [{ ...ogImage, alt: title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ready ? { images: [ogImage.url] } : {}),
    },
  };
}
