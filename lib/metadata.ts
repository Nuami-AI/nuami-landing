import type { Metadata } from "next";
import { site } from "@/content/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

export function pageMetadata({ title, description, path, type = "website" }: PageMetaInput): Metadata {
  const ready = Boolean(site.canonicalUrl);
  return {
    title,
    description,
    ...(ready ? { alternates: { canonical: path } } : {}),
    openGraph: {
      type,
      siteName: "뉴아미 Nuami",
      locale: "ko_KR",
      title,
      description,
      ...(ready ? { url: path, images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ready ? { images: ["/og-image.png"] } : {}),
    },
  };
}
