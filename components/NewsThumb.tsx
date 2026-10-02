import { Medal, Newspaper, Rocket, Trophy } from "lucide-react";
import Image from "next/image";
import type { NewsItem } from "@/content/news";

const graphic: Record<NewsItem["category"], { word: string; Icon: typeof Trophy }> = {
  award: { word: "AWARD", Icon: Trophy },
  competition: { word: "AWARD", Icon: Medal },
  program: { word: "SELECTED", Icon: Rocket },
  press: { word: "PRESS", Icon: Newspaper },
  event: { word: "EVENT", Icon: Newspaper },
};

type NewsThumbProps = {
  item: NewsItem;
  size?: "large" | "small";
  priority?: boolean;
  className?: string;
};

export default function NewsThumb({ item, size = "large", priority = false, className = "" }: NewsThumbProps) {
  if (item.image) {
    return (
      <div className={`relative overflow-hidden bg-surface ${className}`}>
        <Image
          src={item.image}
          alt=""
          fill
          priority={priority}
          sizes={size === "large" ? "(min-width: 1024px) 640px, 100vw" : "(min-width: 1024px) 400px, 100vw"}
          className="object-cover"
        />
      </div>
    );
  }

  const { word, Icon } = graphic[item.category];

  return (
    <div aria-hidden className={`relative flex overflow-hidden border border-line bg-surface ${className}`}>
      <div className="flex w-full flex-col justify-between p-5 md:p-7">
        <div className="flex items-center justify-between">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-deep">
            <Icon size={20} />
          </span>
          <span className="text-[13px] font-bold text-muted">{item.dateLabel}</span>
        </div>
        <div>
          <span className={`block font-extrabold leading-[0.95] tracking-[-0.03em] text-ink ${size === "large" ? "text-[clamp(2.5rem,1.6rem+3.6vw,4.75rem)]" : "text-[clamp(1.875rem,1.4rem+1.6vw,2.75rem)]"}`}>
            {word}
          </span>
          <span className="mt-3 block h-1 w-12 rounded-full bg-accent" />
        </div>
      </div>
      <svg className="pointer-events-none absolute -right-6 -bottom-6 h-32 w-32 text-brand/15" viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="56" stroke="currentColor" strokeWidth="8" />
      </svg>
    </div>
  );
}
