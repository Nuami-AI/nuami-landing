"use client";

import { useState } from "react";
import NewsCard from "@/components/NewsCard";
import { newsFilters, type NewsFilter, type NewsItem } from "@/content/news";
import type { Locale } from "@/lib/i18n";

export default function NewsBoard({ items, locale }: { items: NewsItem[]; locale: Locale }) {
  const en = locale === "en";
  const [filter, setFilter] = useState<NewsFilter>("all");
  const categories = newsFilters.find((f) => f.id === filter)!.categories;
  const visible = items.filter((item) => categories.includes(item.category));
  const filterLabel = newsFilters.find((f) => f.id === filter)!.label[locale];

  return (
    <div>
      <div role="group" aria-label={en ? "News categories" : "뉴스 분류"} className="flex flex-wrap gap-2">
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
              {f.label[locale]}
              <span className={selected ? "text-white/80" : "text-muted"}>{count}</span>
            </button>
          );
        })}
      </div>
      <p className="sr-only-live" aria-live="polite">
        {en ? `${filterLabel}: showing ${visible.length}` : `${filterLabel} 분류, ${visible.length}개 표시`}
      </p>

      {visible.length === 0 ? (
        <p className="mt-10 rounded-[20px] bg-surface px-6 py-12 text-center text-[16px] text-muted">
          {en ? "No news in this category yet." : "이 분류에 등록된 소식이 아직 없습니다."}
        </p>
      ) : (
        <ul className="mt-8 grid grid-cols-2 gap-x-3 gap-y-8 sm:mt-10 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3">
          {visible.map((item) => (
            <li key={item.slug} className="min-w-0">
              <NewsCard item={item} headingLevel="h2" locale={locale} compact />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
