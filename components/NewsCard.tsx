import Link from "next/link";
import { ArrowRight } from "lucide-react";
import NewsThumb from "@/components/NewsThumb";
import { categoryLabels, type NewsItem } from "@/content/news";

type NewsCardProps = {
  item: NewsItem;
  variant?: "featured" | "grid";
  headingLevel?: "h2" | "h3";
};

export default function NewsCard({ item, variant = "grid", headingLevel = "h3" }: NewsCardProps) {
  const Heading = headingLevel;

  if (variant === "featured") {
    return (
      <Link
        href={`/news/${item.slug}`}
        className="group grid overflow-hidden rounded-[24px] border border-line bg-white transition-colors hover:border-brand/50 md:grid-cols-[1.15fr_1fr]"
      >
        <NewsThumb item={item} priority className="aspect-[16/10] w-full border-0 md:aspect-auto md:min-h-[360px]" />
        <div className="flex flex-col justify-center p-6 md:p-12">
          <p className="flex items-center gap-2 text-[14px] font-bold text-muted">
            <span className="chip">{categoryLabels[item.category]}</span>
            <span>{item.dateLabel}</span>
          </p>
          <Heading className="mt-4 text-[24px] leading-snug font-extrabold tracking-[-0.02em] group-hover:text-brand-deep md:text-[34px]">
            {item.title}
          </Heading>
          <p className="mt-3 text-[16px] text-muted md:text-[18px]">{item.excerpt}</p>
          <span className="text-link mt-6 text-[16px]">
            자세히 보기
            <ArrowRight size={18} aria-hidden className="transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/news/${item.slug}`} className="group flex h-full flex-col">
      <NewsThumb item={item} size="small" className="aspect-[16/10] w-full rounded-[20px]" />
      <p className="mt-5 flex items-center gap-2 text-[14px] font-bold text-muted">
        <span className="chip">{categoryLabels[item.category]}</span>
        <span>{item.dateLabel}</span>
      </p>
      <Heading className="mt-3 text-[19px] leading-snug font-extrabold tracking-[-0.01em] group-hover:text-brand-deep md:text-[21px]">
        {item.title}
      </Heading>
      <p className="mt-2 text-[15px] text-muted md:text-[16px]">{item.excerpt}</p>
    </Link>
  );
}
