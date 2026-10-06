import type { Metadata } from "next";
import Link from "next/link";
import { FontHtml } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "404, 뉴아미 Nuami",
};

export default function GlobalNotFound() {
  return (
    <FontHtml locale="ko">
      <body>
        <main id="main" className="container-x flex min-h-screen flex-col items-start justify-center py-20">
          <p className="eyebrow">404</p>
          <h1 className="h2 mt-4">찾으시는 페이지가 없어요.</h1>
          <p className="mt-4 text-muted">주소가 바뀌었거나 더 이상 공개되지 않는 페이지입니다.</p>
          <p lang="en" className="mt-2 text-muted">
            We couldn&apos;t find that page.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/" className="btn btn-primary">
              뉴아미 홈으로
            </Link>
            <Link href="/en" lang="en" hrefLang="en" className="btn btn-outline">
              Nuami home (English)
            </Link>
          </div>
        </main>
      </body>
    </FontHtml>
  );
}
