import Link from "next/link";
import NewsThumb from "@/components/NewsThumb";
import { categoryLabels, type NewsItem } from "@/content/news";

type NewsCardProps = {
  item: NewsItem;
  headingLevel?: "h2" | "h3";
};

export default function NewsCard({ item, headingLevel = "h3" }: NewsCardProps) {
  const Heading = headingLevel;

  return (
    <Link href={`/news/${item.slug}`} className="group flex h-full flex-col">
      <NewsThumb item={item} size="small" className="aspect-[16/10] w-full rounded-[20px]" />
      <Heading title={item.title} className="mt-5 truncate text-[19px] leading-snug font-extrabold tracking-[-0.01em] group-hover:text-brand-deep md:text-[21px]">
        {item.title}
      </Heading>
      <p className="mt-3 flex items-center gap-2 text-[14px] font-bold text-muted">
        <span className="chip">{categoryLabels[item.category]}</span>
        <span>{item.dateLabel}</span>
      </p>
    </Link>
  );
}
