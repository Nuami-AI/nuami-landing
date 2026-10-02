import Link from "next/link";
import { ArrowRight, Trophy } from "lucide-react";
import { milestones } from "@/content/site";

export default function MilestoneStrip() {
  return (
    <section aria-label="주요 성과" className="container-x pt-6 md:pt-8">
      <ul className="grid divide-y divide-line rounded-[24px] border border-line md:grid-cols-[1.5fr_1fr_1fr] md:divide-x md:divide-y-0">
        <li>
          <Link
            href={milestones.featured.href}
            className="group flex h-full min-h-11 items-center gap-4 rounded-t-[24px] p-5 transition-colors hover:bg-lavender md:rounded-l-[24px] md:rounded-tr-none md:p-6"
          >
            <span aria-hidden className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coral-soft text-ink">
              <Trophy size={20} />
            </span>
            <span className="min-w-0 flex-1">
              <strong className="block text-[18px] font-extrabold leading-snug text-ink md:text-[20px]">{milestones.featured.title}</strong>
              <span className="mt-0.5 block text-[14px] leading-snug text-muted md:text-[15px]">{milestones.featured.description}</span>
            </span>
            <ArrowRight size={18} aria-hidden className="shrink-0 text-brand-deep transition-transform group-hover:translate-x-[3px]" />
          </Link>
        </li>
        {milestones.items.map((item, i) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className={`group flex h-full min-h-11 items-center justify-between gap-3 p-5 text-[16px] font-bold text-ink transition-colors hover:bg-lavender md:p-6 ${
                i === milestones.items.length - 1 ? "rounded-b-[24px] md:rounded-r-[24px] md:rounded-bl-none" : ""
              }`}
            >
              <span>{item.label}</span>
              <ArrowRight size={18} aria-hidden className="shrink-0 text-brand-deep transition-transform group-hover:translate-x-[3px]" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
