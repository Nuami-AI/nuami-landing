import Image from "next/image";
import Logo from "@/components/Logo";
import type { NewsItem } from "@/content/news";

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

  return (
    <div aria-hidden className={`flex items-center justify-center overflow-hidden bg-[#f1f2f4] ${className}`}>
      <Logo tone="placeholder" className={`h-auto ${size === "large" ? "w-[22%] max-w-[220px] min-w-[110px]" : "w-[36%] max-w-[140px]"}`} />
    </div>
  );
}
