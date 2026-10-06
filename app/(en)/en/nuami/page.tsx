import type { Metadata } from "next";
import { seo } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import NuamiView from "@/views/NuamiView";

export const metadata: Metadata = pageMetadata({ ...seo.en.nuami, path: "/nuami", locale: "en" });

export default function NuamiPage() {
  return <NuamiView locale="en" />;
}
