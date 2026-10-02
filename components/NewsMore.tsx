"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

type NewsMoreItem = {
  id: string;
  slug: string;
  title: string;
  label: string;
  dateLabel: string;
};

type NewsMoreProps = {
  items: NewsMoreItem[];
  moreLabel: string;
  lessLabel: string;
};

export default function NewsMore({ items, moreLabel, lessLabel }: NewsMoreProps) {
  const [open, setOpen] = useState(false);
  if (items.length === 0) return null;

  return (
    <div className="mt-8">
      <ul id="news-more" hidden={!open} className="mb-6 divide-y divide-line border-y border-line">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={`/news/${item.slug}`}
              className="group flex min-h-16 flex-wrap items-center gap-x-4 gap-y-1 py-4 transition-colors hover:text-brand-deep"
            >
              <span className="w-28 shrink-0 text-[14px] font-bold text-muted">
                {item.label} · {item.dateLabel}
              </span>
              <span className="min-w-0 flex-1 text-[17px] font-bold">{item.title}</span>
              <ArrowRight size={18} aria-hidden className="shrink-0 text-brand-deep transition-transform group-hover:translate-x-[3px]" />
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <button
          type="button"
          className="btn btn-outline"
          aria-expanded={open}
          aria-controls="news-more"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? lessLabel : moreLabel}
          <ChevronDown size={18} aria-hidden className={`transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
    </div>
  );
}
