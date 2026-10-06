import type { Metadata, Viewport } from "next";
import SiteShell, { rootMetadata } from "@/components/SiteShell";

export const metadata: Metadata = rootMetadata("en");

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
