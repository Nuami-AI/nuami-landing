import type { Metadata } from "next";
import { seo } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import NuamiView from "@/views/NuamiView";

export const metadata: Metadata = pageMetadata({ ...seo.ko.nuami, path: "/nuami", locale: "ko" });

export default function NuamiPage() {
  return <NuamiView locale="ko" />;
}
