import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n";

const copy = {
  ko: {
    title: "찾으시는 페이지가 없어요.",
    description: "주소가 바뀌었거나 더 이상 공개되지 않는 페이지입니다.",
    home: "뉴아미 홈으로",
    news: "뉴스 보기",
  },
  en: {
    title: "We couldn't find that page.",
    description: "The address may have changed, or the page is no longer available.",
    home: "Go to Nuami home",
    news: "See news",
  },
};

export default function NotFoundView({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="eyebrow">404</p>
      <h1 className="h2 mt-4">{t.title}</h1>
      <p className="mt-4 text-muted">{t.description}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href={localePath(locale, "/")} className="btn btn-primary">
          {t.home}
        </Link>
        <Link href={localePath(locale, "/news")} className="btn btn-outline">
          {t.news}
        </Link>
      </div>
    </section>
  );
}
