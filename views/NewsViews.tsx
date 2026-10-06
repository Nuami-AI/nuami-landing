import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import InquiryCTA from "@/components/InquiryCTA";
import NewsBoard from "@/components/NewsBoard";
import NewsCard from "@/components/NewsCard";
import NewsThumb from "@/components/NewsThumb";
import PageHeading from "@/components/PageHeading";
import { categoryLabels, getNewsBySlug, getPublishedNews, getSafeExternalUrl } from "@/content/news";
import { localePath, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

const copy = {
  ko: {
    pageName: "뉴스",
    title: "뉴아미의 새로운 발걸음.",
    description: "수상과 선정, 제품과 협업에 관한 소식을 전합니다.",
    listLabel: "뉴스 목록",
    titleSuffix: ", 뉴아미 Nuami",
    backToList: "뉴스 목록으로",
    original: "기사 원문 보기",
    newWindow: "(새 창)",
    related: "관련 소식",
    returnToList: "목록으로 돌아가기",
  },
  en: {
    pageName: "News",
    title: "Nuami's latest steps.",
    description: "News on awards, program selections, our product and partnerships.",
    listLabel: "News list",
    titleSuffix: ", Nuami",
    backToList: "Back to news",
    original: "Read the original article",
    newWindow: "(opens in a new window)",
    related: "Related news",
    returnToList: "Back to the list",
  },
};

export function NewsListView({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <>
      <PageHeading eyebrow="NEWS" pageName={t.pageName} image="city" title={t.title} description={t.description} />
      <section aria-label={t.listLabel} className="bg-white pt-10 pb-20 md:pt-14 md:pb-28">
        <div className="container-x">
          <NewsBoard items={getPublishedNews(locale)} locale={locale} />
        </div>
      </section>
    </>
  );
}

export function newsStaticParams() {
  return getPublishedNews().map((item) => ({ slug: item.slug }));
}

export function newsDetailMetadata(slug: string, locale: Locale): Metadata {
  const item = getNewsBySlug(slug, locale);
  if (!item) return {};
  return pageMetadata({
    title: `${item.title}${copy[locale].titleSuffix}`,
    description: item.excerpt,
    path: `/news/${item.slug}`,
    locale,
    type: "article",
  });
}

export function NewsDetailView({ slug, locale }: { slug: string; locale: Locale }) {
  const t = copy[locale];
  const item = getNewsBySlug(slug, locale);
  if (!item) notFound();

  const newsHref = localePath(locale, "/news");
  const externalUrl = getSafeExternalUrl(item);
  const related = getPublishedNews(locale)
    .filter((n) => n.slug !== item.slug)
    .slice(0, 3);

  return (
    <>
      <article className="bg-white">
        <div className="container-x pt-8 pb-16 md:pt-12 md:pb-24">
          <Link href={newsHref} className="text-link text-[15px]">
            <ArrowLeft size={18} aria-hidden />
            {t.backToList}
          </Link>

          <header className="mt-8 max-w-[52rem]">
            <p className="flex items-center gap-2 text-[14px] font-bold text-muted">
              <span className="chip">{categoryLabels[locale][item.category]}</span>
              <span>{item.dateLabel}</span>
            </p>
            <h1 className="mt-5 text-[32px] leading-[1.25] font-extrabold tracking-[-0.03em] md:text-[52px]">{item.title}</h1>
          </header>

          <NewsThumb item={item} priority className="mt-10 aspect-[16/9] w-full rounded-[24px] md:aspect-[21/9]" />

          <div className="mx-auto mt-10 flex max-w-[44rem] flex-col gap-5 text-[17px] leading-[1.85] text-ink/90 md:mt-14 md:text-[18px]">
            {item.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {externalUrl ? (
              <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-4 self-start">
                {t.original}
                <ArrowUpRight size={18} aria-hidden />
                <span className="sr-only">{t.newWindow}</span>
              </a>
            ) : null}
          </div>
        </div>
      </article>

      {related.length ? (
        <section aria-labelledby="related-title" className="section-y border-t border-line bg-surface">
          <div className="container-x">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 id="related-title" className="text-[26px] font-extrabold tracking-[-0.02em] md:text-[34px]">
                {t.related}
              </h2>
              <Link href={newsHref} className="text-link text-[16px]">
                <ArrowLeft size={18} aria-hidden />
                {t.returnToList}
              </Link>
            </div>
            <ul className="mobile-rail mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((n) => (
                <li key={n.slug}>
                  <NewsCard item={n} locale={locale} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <InquiryCTA locale={locale} />
    </>
  );
}
