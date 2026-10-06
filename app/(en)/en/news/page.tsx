import type { Metadata } from "next";
import { seo } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { NewsListView } from "@/views/NewsViews";

export const metadata: Metadata = pageMetadata({ ...seo.en.news, path: "/news", locale: "en" });

export default function NewsPage() {
  return <NewsListView locale="en" />;
}
