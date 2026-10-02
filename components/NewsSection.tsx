import Link from "next/link";
import { ArrowRight } from "lucide-react";
import NewsMore from "@/components/NewsMore";
import NewsThumb from "@/components/NewsThumb";
import { getCategoryLabel, getPublishedNews, HIGHLIGHT_COUNT, type NewsItem } from "@/content/news";
import { newsSection } from "@/content/site";

function NewsMeta({ item, light = false }: { item: NewsItem; light?: boolean }) {
  return (
    <p className={`flex items-center gap-2 text-[14px] font-bold ${light ? "text-white/85" : "text-muted"}`}>
      <span className={`rounded-full px-2.5 py-0.5 ${light ? "bg-white/15 text-white" : "bg-lavender text-brand-deep"}`}>
        {getCategoryLabel(item)}
      </span>
      <span>{item.dateLabel}</span>
    </p>
  );
}

export default function NewsSection() {
  const published = getPublishedNews();
  const featured = published.find((n) => n.featured) ?? published[0];
  if (!featured) return null;
  const rest = published.filter((n) => n.id !== featured.id);
  const highlighted = rest.slice(0, HIGHLIGHT_COUNT - 1);
  const extra = rest.slice(HIGHLIGHT_COUNT - 1);

  return (
    <section id="news" aria-labelledby="news-title" className="section-y">
      <div className="container-x" data-reveal>
        <p className="eyebrow text-brand-deep">{newsSection.eyebrow}</p>
        <h2 id="news-title" className="h2 mt-4">
          {newsSection.title}
        </h2>
        <p className="mt-4 text-muted">{newsSection.description}</p>

        <div className="mt-10 grid gap-5 md:mt-12 lg:grid-cols-[1.15fr_1fr] lg:gap-6">
          <Link
            href={`/news/${featured.slug}`}
            className="group flex flex-col overflow-hidden rounded-[28px] border border-line bg-white transition-transform duration-300 hover:-translate-y-1 focus-visible:-translate-y-1"
          >
            <NewsThumb item={featured} className="aspect-[16/10] w-full" />
            <div className="flex flex-1 flex-col p-6 md:p-8">
              <NewsMeta item={featured} />
              <h3 className="mt-3 text-[22px] font-extrabold leading-snug tracking-[-0.02em] md:text-[28px]">{featured.title}</h3>
              <p className="mt-3 text-muted">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-[16px] font-bold text-brand-deep">
                자세히 보기
                <ArrowRight size={18} aria-hidden className="transition-transform group-hover:translate-x-[3px] group-focus-visible:translate-x-[3px]" />
              </span>
            </div>
          </Link>

          <ul className="flex flex-col gap-4">
            {highlighted.map((item) => (
              <li key={item.id} className="flex-1">
                <Link
                  href={`/news/${item.slug}`}
                  className="group flex h-full items-stretch gap-4 rounded-[24px] border border-line bg-white p-4 transition-transform duration-300 hover:-translate-y-1 focus-visible:-translate-y-1 md:gap-5 md:p-5"
                >
                  <NewsThumb item={item} size="small" className="w-[84px] shrink-0 rounded-[18px] md:w-[112px]" />
                  <div className="flex min-w-0 flex-1 flex-col justify-center py-1">
                    <NewsMeta item={item} />
                    <h3 className="mt-2 text-[18px] font-extrabold leading-snug md:text-[20px]">{item.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{item.excerpt}</p>
                  </div>
                  <ArrowRight
                    size={18}
                    aria-hidden
                    className="mt-1 hidden shrink-0 self-center text-brand-deep transition-transform group-hover:translate-x-[3px] group-focus-visible:translate-x-[3px] sm:block"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <NewsMore
          items={extra.map((n) => ({ id: n.id, slug: n.slug, title: n.title, label: getCategoryLabel(n), dateLabel: n.dateLabel }))}
          moreLabel={newsSection.moreLabel}
          lessLabel={newsSection.lessLabel}
        />
      </div>
    </section>
  );
}
