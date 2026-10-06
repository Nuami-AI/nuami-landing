import type { Metadata } from "next";
import { seo } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import AboutView from "@/views/AboutView";

export const metadata: Metadata = pageMetadata({ ...seo.en.about, path: "/about", locale: "en" });

export default function AboutPage() {
  return <AboutView locale="en" />;
}
