"use client";

import { MessageCircle } from "lucide-react";
import { useRef, useState, type KeyboardEvent } from "react";
import { scenarios } from "@/content/scenarios";
import { service } from "@/content/site";

const cardStyles = {
  situation: { box: "bg-lavender text-ink", badge: "bg-white text-brand-deep", sub: "text-muted" },
  action: { box: "bg-brand text-white on-dark", badge: "bg-white text-brand-deep", sub: "text-white/85" },
  context: { box: "bg-coral-soft text-ink", badge: "bg-accent text-ink", sub: "text-muted" },
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
    <div className="mt-10 md:mt-14">
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
              className={`inline-flex min-h-12 items-center gap-2 rounded-full border-2 px-5 text-[16px] font-bold transition-colors ${
                selected
                  ? "border-brand-deep bg-brand-deep text-white"
                  : "border-line bg-white text-ink hover:border-brand"
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
                {service.cards.map((card, ci) => {
                  const key = card.key as keyof typeof cardStyles;
                  const tone = cardStyles[key];
                  const content = active[key];
                  return (
                    <li key={card.key} className={`flex flex-col rounded-[24px] p-6 md:p-7 ${tone.box}`}>
                      <div className="flex items-center justify-between gap-3">
                        <span className={`rounded-full px-3 py-1 text-[12px] font-extrabold tracking-[0.12em] uppercase ${tone.badge}`}>
                          {card.label}
                        </span>
                        <span aria-hidden className="text-[14px] font-extrabold opacity-70">
                          0{ci + 1}
                        </span>
                      </div>
                      <h3 className={`mt-5 text-[15px] font-bold ${tone.sub}`}>{card.title}</h3>
                      <p className="mt-2 text-[19px] font-extrabold leading-snug md:text-[21px]">{content.title}</p>
                      <p className={`mt-3 text-[16px] leading-relaxed ${key === "action" ? "text-white/90" : "text-ink/85"}`}>{content.body}</p>
                    </li>
                  );
                })}
              </ol>
            </div>
          ) : null}
        </div>
      ))}

      <p className="mt-4 text-[14px] text-muted">{service.disclaimer}</p>
      <p className="sr-only-live" aria-live="polite">
        {announcement}
      </p>
    </div>
  );
}
