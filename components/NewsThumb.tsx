import { Medal, Rocket, Trophy } from "lucide-react";
import Image from "next/image";
import type { NewsItem } from "@/content/news";

const graphicWord: Record<NewsItem["category"], string> = {
  award: "AWARD",
  competition: "AWARD",
  program: "SELECTED",
  press: "PRESS",
  event: "EVENT",
};

type NewsThumbProps = {
  item: NewsItem;
  size?: "large" | "small";
  className?: string;
};

export default function NewsThumb({ item, size = "large", className = "" }: NewsThumbProps) {
  if (item.image) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={item.image} alt="" fill sizes={size === "large" ? "(min-width: 1024px) 600px, 100vw" : "160px"} className="object-cover" />
      </div>
    );
  }

  const Icon = item.category === "award" ? Trophy : item.category === "competition" ? Medal : Rocket;
  const dark = item.category === "award";
  const word = item.graphicLabel ?? graphicWord[item.category];

  return (
    <div
      aria-hidden
      className={`relative flex overflow-hidden ${dark ? "bg-brand text-white" : "bg-lavender text-brand-deep"} ${className}`}
    >
      {size === "large" ? (
        <div className="flex w-full flex-col justify-between p-6 md:p-8">
          <div className="flex items-center justify-between">
            <span className="text-[15px] font-bold opacity-85">{item.dateLabel}</span>
            <Icon size={28} />
          </div>
          <span className="text-[clamp(3rem,2rem+5vw,6rem)] leading-[0.9] font-extrabold tracking-[-0.04em]">{word}</span>
          <svg className="absolute right-6 bottom-6 h-16 w-28 opacity-60 md:h-20 md:w-36" viewBox="0 0 140 80" fill="none">
            <path d="M4 70 C 40 70, 40 20, 80 24 S 120 10, 136 6" stroke="currentColor" strokeWidth="3" strokeDasharray="5 8" strokeLinecap="round" />
          </svg>
        </div>
      ) : (
        <div className="flex w-full flex-col items-center justify-center gap-1.5 p-2 text-center">
          <Icon size={22} />
          <span className="text-[11px] font-extrabold tracking-[0.08em]">{word}</span>
        </div>
      )}
    </div>
  );
}
