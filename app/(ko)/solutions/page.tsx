import type { Metadata } from "next";
import { seo } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import SolutionsView from "@/views/SolutionsView";

export const metadata: Metadata = pageMetadata({ ...seo.ko.solutions, path: "/solutions", locale: "ko" });

export default function SolutionsPage() {
  return <SolutionsView locale="ko" />;
}
