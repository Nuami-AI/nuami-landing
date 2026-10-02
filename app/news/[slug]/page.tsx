import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import ExhibitionBar from "@/components/ExhibitionBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsThumb from "@/components/NewsThumb";
import { getCategoryLabel, getNewsBySlug, getPublishedNews, getSafeExternalUrl } from "@/content/news";
import { site } from "@/content/site";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedNews().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) return {};
  const title = `${item.title} | 뉴아미 Nuami`;
  return {
    title,
    description: item.excerpt,
    ...(site.canonicalUrl ? { alternates: { canonical: `/news/${item.slug}` } } : {}),
    openGraph: {
      type: "article",
      title: item.title,
      description: item.excerpt,
      ...(site.canonicalUrl ? { url: `/news/${item.slug}` } : {}),
    },
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) notFound();

  const externalUrl = getSafeExternalUrl(item);
  const others = getPublishedNews()
    .filter((n) => n.id !== item.id)
    .slice(0, 3);

  return (
    <>
      <ExhibitionBar />
      <Header />
      <main>
        <article className="container-x pt-8 pb-16 md:pt-12 md:pb-24">
          <Link
            href="/#news"
            className="inline-flex min-h-11 items-center gap-1.5 text-[15px] font-bold text-brand-deep hover:underline"
          >
            <ArrowLeft size={18} aria-hidden />
            소식 목록으로
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-14">
            <div>
              <p className="flex items-center gap-2 text-[14px] font-bold text-muted">
                <span className="rounded-full bg-lavender px-2.5 py-0.5 text-brand-deep">{getCategoryLabel(item)}</span>
                <span>{item.dateLabel}</span>
              </p>
              <h1 className="mt-4 text-[32px] leading-[1.22] font-extrabold tracking-[-0.03em] md:text-[48px]">{item.title}</h1>
              <div className="mt-8 flex flex-col gap-5 text-[17px] leading-[1.8] text-ink/90 md:text-[18px]">
                {item.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {externalUrl ? (
                <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8">
                  기사 원문 보기
                  <ArrowUpRight size={18} aria-hidden />
                  <span className="sr-only">(새 창)</span>
                </a>
              ) : null}
            </div>
            <NewsThumb item={item} className="aspect-[4/3] w-full rounded-[28px] md:rounded-[32px]" />
          </div>
        </article>

        {others.length ? (
          <section aria-labelledby="more-news-title" className="bg-lavender">
            <div className="container-x py-14 md:py-20">
              <h2 id="more-news-title" className="text-[24px] font-extrabold tracking-[-0.02em] md:text-[32px]">
                다른 소식
              </h2>
              <ul className="mt-6 grid gap-4 md:grid-cols-3">
                {others.map((n) => (
                  <li key={n.id}>
                    <Link
                      href={`/news/${n.slug}`}
                      className="group flex h-full flex-col rounded-[24px] bg-white p-6 transition-transform hover:-translate-y-1 focus-visible:-translate-y-1"
                    >
                      <span className="text-[14px] font-bold text-muted">
                        {getCategoryLabel(n)} · {n.dateLabel}
                      </span>
                      <h3 className="mt-2 text-[18px] leading-snug font-extrabold">{n.title}</h3>
                      <span aria-hidden className="mt-auto pt-4 text-brand-deep">
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-[3px]" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/#contact" className="btn btn-primary mt-10">
                협업 문의
              </Link>
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
