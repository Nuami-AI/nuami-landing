import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import InquiryCTA from "@/components/InquiryCTA";
import NewsCard from "@/components/NewsCard";
import NewsThumb from "@/components/NewsThumb";
import { categoryLabels, getNewsBySlug, getPublishedNews, getSafeExternalUrl } from "@/content/news";
import { pageMetadata } from "@/lib/metadata";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedNews().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) return {};
  return pageMetadata({ title: `${item.title}, 뉴아미 Nuami`, description: item.excerpt, path: `/news/${item.slug}`, type: "article" });
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) notFound();

  const externalUrl = getSafeExternalUrl(item);
  const related = getPublishedNews()
    .filter((n) => n.slug !== item.slug)
    .slice(0, 3);

  return (
    <>
      <article className="bg-white">
        <div className="container-x pt-8 pb-16 md:pt-12 md:pb-24">
          <Link href="/news" className="text-link text-[15px]">
            <ArrowLeft size={18} aria-hidden />
            뉴스 목록으로
          </Link>

          <header className="mt-8 max-w-[52rem]">
            <p className="flex items-center gap-2 text-[14px] font-bold text-muted">
              <span className="chip">{categoryLabels[item.category]}</span>
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
                기사 원문 보기
                <ArrowUpRight size={18} aria-hidden />
                <span className="sr-only">(새 창)</span>
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
                관련 소식
              </h2>
              <Link href="/news" className="text-link text-[16px]">
                <ArrowLeft size={18} aria-hidden />
                목록으로 돌아가기
              </Link>
            </div>
            <ul className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((n) => (
                <li key={n.slug}>
                  <NewsCard item={n} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <InquiryCTA />
    </>
  );
}
