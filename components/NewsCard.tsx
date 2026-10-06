import Link from "next/link";
import NewsThumb from "@/components/NewsThumb";
import { categoryLabels, type NewsItem } from "@/content/news";
import { localePath, type Locale } from "@/lib/i18n";

type NewsCardProps = {
  item: NewsItem;
  headingLevel?: "h2" | "h3";
  locale: Locale;
  compact?: boolean;
};

export default function NewsCard({ item, headingLevel = "h3", locale, compact = false }: NewsCardProps) {
  const Heading = headingLevel;

  return (
    <Link href={localePath(locale, `/news/${item.slug}`)} className="group flex h-full flex-col">
      <NewsThumb
        item={item}
        size="small"
        className={`aspect-[16/10] w-full ${compact ? "rounded-[14px] sm:rounded-[20px]" : "rounded-[20px]"}`}
      />
      <Heading
        title={item.title}
        className={`truncate leading-snug font-extrabold tracking-[-0.01em] group-hover:text-brand-deep md:text-[21px] ${
          compact ? "mt-3 text-[16px] sm:mt-5 sm:text-[19px]" : "mt-5 text-[19px]"
        }`}
      >
        {item.title}
      </Heading>
      <p
        className={`flex flex-wrap items-center font-bold text-muted ${
          compact ? "mt-2 gap-x-2 gap-y-1 text-[13px] sm:mt-3 sm:text-[14px]" : "mt-3 gap-2 text-[14px]"
        }`}
      >
        <span className="chip">{categoryLabels[locale][item.category]}</span>
        <span>{item.dateLabel}</span>
      </p>
    </Link>
  );
}
