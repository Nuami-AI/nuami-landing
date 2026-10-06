import type { Metadata } from "next";
import { seo } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import HomeView from "@/views/HomeView";

export const metadata: Metadata = pageMetadata({ ...seo.ko.home, path: "/", locale: "ko" });

export default function HomePage() {
  return <HomeView locale="ko" />;
}
