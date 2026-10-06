import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import ExhibitionBar from "@/components/ExhibitionBar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/Header";
import { ogImage, seo, site } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import "@/app/globals.css";

const pretendard = localFont({
  src: [
    { path: "../app/fonts/Pretendard-Regular.subset.woff2", weight: "400", style: "normal" },
    { path: "../app/fonts/Pretendard-SemiBold.subset.woff2", weight: "600", style: "normal" },
    { path: "../app/fonts/Pretendard-Bold.subset.woff2", weight: "700", style: "normal" },
    { path: "../app/fonts/Pretendard-ExtraBold.subset.woff2", weight: "800", style: "normal" },
  ],
  display: "swap",
  variable: "--font-pretendard",
});

export const siteName = { ko: "뉴아미 Nuami", en: "Nuami" } as const;
export const ogLocale = { ko: "ko_KR", en: "en_US" } as const;

export function rootMetadata(locale: Locale): Metadata {
  const home = seo[locale].home;
  return {
    ...(site.canonicalUrl ? { metadataBase: new URL(site.canonicalUrl) } : {}),
    title: home.title,
    description: home.description,
    openGraph: {
      type: "website",
      siteName: siteName[locale],
      locale: ogLocale[locale],
      title: home.title,
      description: home.description,
      ...(site.canonicalUrl ? { images: [{ ...ogImage, alt: home.title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: home.title,
      description: home.description,
      ...(site.canonicalUrl ? { images: [ogImage.url] } : {}),
    },
  };
}

export function FontHtml({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={locale} className={pretendard.variable}>
      {children}
    </html>
  );
}

export default function SiteShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <FontHtml locale={locale}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2.5 focus:font-bold focus:text-brand-deep focus:shadow"
        >
          {locale === "en" ? "Skip to content" : "본문 바로가기"}
        </a>
        <ExhibitionBar locale={locale} />
        <Header locale={locale} />
        <main id="main">{children}</main>
        <Footer locale={locale} />
        <GoogleAnalytics />
        <Script id="beusable-rum" strategy="afterInteractive">
          {`(function(w, d, a){
    w.__beusablerumclient__ = {
        load : function(src){
            var b = d.createElement("script");
            b.src = src; b.async=true; b.type = "text/javascript";
            d.getElementsByTagName("head")[0].appendChild(b);
        }
    };w.__beusablerumclient__.load(a + "?url=" + encodeURIComponent(d.URL));
})(window, document, "//rum.beusable.net/load/b260927e125309u083");`}
        </Script>
      </body>
    </FontHtml>
  );
}
