import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { seo, site } from "@/content/site";
import "./globals.css";

const pretendard = localFont({
  src: [
    { path: "./fonts/Pretendard-Regular.subset.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Pretendard-SemiBold.subset.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Pretendard-Bold.subset.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Pretendard-ExtraBold.subset.woff2", weight: "800", style: "normal" },
  ],
  display: "swap",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  ...(site.canonicalUrl ? { metadataBase: new URL(site.canonicalUrl), alternates: { canonical: "/" } } : {}),
  title: seo.title,
  description: seo.description,
  openGraph: {
    type: "website",
    siteName: "뉴아미 Nuami",
    locale: "ko_KR",
    title: seo.ogTitle,
    description: seo.description,
    ...(site.canonicalUrl ? { url: "/", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: seo.ogTitle }] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: seo.ogTitle,
    description: seo.description,
    ...(site.canonicalUrl ? { images: ["/og-image.png"] } : {}),
  },
};

export const viewport: Viewport = {
  themeColor: "#8651F2",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body>{children}</body>
    </html>
  );
}
