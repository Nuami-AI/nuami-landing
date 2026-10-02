"use client";

import { MessageCircle } from "lucide-react";
import { useRef, useState, type KeyboardEvent } from "react";
import { scenarios } from "@/content/scenarios";
import { guideCards, guideDisclaimer } from "@/content/site";

const cardStyles = {
  situation: "bg-lavender",
  action: "border-2 border-brand bg-white",
  context: "bg-coral-soft",
} as const;

export default function GuideDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [announcement, setAnnouncement] = useState("");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = scenarios[activeIndex];

  const select = (index: number, focus = false) => {
    setActiveIndex(index);
    setAnnouncement(`${scenarios[index].label} 예시로 바뀌었습니다. ${scenarios[index].question}`);
    if (focus) tabRefs.current[index]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const last = scenarios.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = activeIndex === last ? 0 : activeIndex + 1;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = activeIndex === 0 ? last : activeIndex - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next !== null) {
      e.preventDefault();
      select(next, true);
    }
  };

  return (
    <div className="mt-10 md:mt-12">
      <div role="tablist" aria-label="상황 선택" className="flex flex-wrap gap-2">
        {scenarios.map((s, i) => {
          const selected = i === activeIndex;
          return (
            <button
              key={s.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              id={`tab-${s.id}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`panel-${s.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(i)}
              onKeyDown={onKeyDown}
              className={`inline-flex min-h-12 items-center gap-2 rounded-full border px-5 text-[16px] font-bold transition-colors ${
                selected ? "border-brand-deep bg-brand-deep text-white" : "border-line bg-white text-ink hover:border-brand-deep"
              }`}
            >
              {selected ? <span aria-hidden className="h-2 w-2 rounded-full bg-accent" /> : null}
              {s.label}
            </button>
          );
        })}
      </div>

      {scenarios.map((s, i) => (
        <div
          key={s.id}
          id={`panel-${s.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${s.id}`}
          hidden={i !== activeIndex}
          tabIndex={0}
          className="mt-6 rounded-[24px] focus-visible:outline-offset-4"
        >
          {i === activeIndex ? (
            <div key={active.id} className="fade-swap">
              <p className="inline-flex max-w-full items-start gap-2 rounded-[20px] rounded-bl-md border border-line bg-white px-5 py-3.5 text-[16px] font-semibold text-ink md:text-[18px]">
                <MessageCircle size={20} aria-hidden className="mt-0.5 shrink-0 text-brand-deep" />
                <span>“{active.question}”</span>
              </p>

              <ol className="mt-5 grid gap-4 md:grid-cols-3">
                {guideCards.map((card, ci) => {
                  const content = active[card.key];
                  return (
                    <li key={card.key} className={`flex flex-col rounded-[20px] p-6 md:p-7 ${cardStyles[card.key]}`}>
                      <div className="flex items-center justify-between gap-3">
                        <span className="rounded-full bg-white px-3 py-1 text-[12px] font-extrabold tracking-[0.12em] text-brand-deep uppercase">
                          {card.label}
                        </span>
                        <span aria-hidden className="text-[14px] font-extrabold text-muted">
                          0{ci + 1}
                        </span>
                      </div>
                      <h3 className="mt-5 text-[15px] font-bold text-muted">{card.title}</h3>
                      <p className="mt-2 text-[19px] leading-snug font-extrabold md:text-[21px]">{content.title}</p>
                      <p className="mt-3 text-[16px] leading-relaxed text-ink/85">{content.body}</p>
                    </li>
                  );
                })}
              </ol>
            </div>
          ) : null}
        </div>
      ))}

      <p className="mt-4 text-[14px] text-muted">{guideDisclaimer}</p>
      <p className="sr-only-live" aria-live="polite">
        {announcement}
      </p>
    </div>
  );
}
