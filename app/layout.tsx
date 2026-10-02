import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import ExhibitionBar from "@/components/ExhibitionBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
  ...(site.canonicalUrl ? { metadataBase: new URL(site.canonicalUrl) } : {}),
  title: seo.home.title,
  description: seo.home.description,
  openGraph: {
    type: "website",
    siteName: "뉴아미 Nuami",
    locale: "ko_KR",
    title: seo.home.title,
    description: seo.home.description,
    ...(site.canonicalUrl ? { images: [{ url: "/og-image.png", width: 1200, height: 630, alt: seo.home.title }] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: seo.home.title,
    description: seo.home.description,
    ...(site.canonicalUrl ? { images: ["/og-image.png"] } : {}),
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2.5 focus:font-bold focus:text-brand-deep focus:shadow"
        >
          본문 바로가기
        </a>
        <ExhibitionBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
