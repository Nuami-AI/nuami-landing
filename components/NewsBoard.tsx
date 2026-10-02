"use client";

import { useState } from "react";
import NewsCard from "@/components/NewsCard";
import { newsFilters, type NewsFilter, type NewsItem } from "@/content/news";

export default function NewsBoard({ items }: { items: NewsItem[] }) {
  const [filter, setFilter] = useState<NewsFilter>("all");
  const categories = newsFilters.find((f) => f.id === filter)!.categories;
  const visible = items.filter((item) => categories.includes(item.category));
  const featured = visible.find((item) => item.featured);
  const rest = visible.filter((item) => item !== featured);
  const filterLabel = newsFilters.find((f) => f.id === filter)!.label;

  return (
    <div>
      <div role="group" aria-label="뉴스 분류" className="flex flex-wrap gap-2">
        {newsFilters.map((f) => {
          const selected = f.id === filter;
          const count = items.filter((item) => f.categories.includes(item.category)).length;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(f.id)}
              className={`inline-flex min-h-11 items-center gap-1.5 rounded-full border px-5 text-[15px] font-bold transition-colors ${
                selected ? "border-brand-deep bg-brand-deep text-white" : "border-line bg-white text-ink hover:border-brand-deep"
              }`}
            >
              {f.label}
              <span className={selected ? "text-white/80" : "text-muted"}>{count}</span>
            </button>
          );
        })}
      </div>
      <p className="sr-only-live" aria-live="polite">
        {filterLabel} 분류, {visible.length}개 표시
      </p>

      {visible.length === 0 ? (
        <p className="mt-10 rounded-[20px] bg-surface px-6 py-12 text-center text-[16px] text-muted">
          이 분류에 등록된 소식이 아직 없습니다.
        </p>
      ) : (
        <>
          {featured ? (
            <div className="mt-10">
              <NewsCard item={featured} variant="featured" headingLevel="h2" />
            </div>
          ) : null}
          {rest.length ? (
            <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((item) => (
                <li key={item.slug}>
                  <NewsCard item={item} headingLevel="h2" />
                </li>
              ))}
            </ul>
          ) : null}
        </>
      )}
    </div>
  );
}
