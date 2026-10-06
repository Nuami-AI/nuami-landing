import type { Metadata } from "next";
import { seo } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import InquireView from "@/views/InquireView";

export const metadata: Metadata = pageMetadata({ ...seo.ko.inquire, path: "/inquire_all", locale: "ko" });

export default function InquirePage() {
  return <InquireView locale="ko" />;
}
