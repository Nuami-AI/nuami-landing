import type { Metadata } from "next";
import { seo } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import AboutView from "@/views/AboutView";

export const metadata: Metadata = pageMetadata({ ...seo.ko.about, path: "/about", locale: "ko" });

export default function AboutPage() {
  return <AboutView locale="ko" />;
}
