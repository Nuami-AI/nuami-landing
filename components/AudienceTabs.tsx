"use client";

import { Building2, Check, GraduationCap } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { audiences, resolveAudience, type AudienceId } from "@/content/solutions";

const icons = { university: GraduationCap, community: Building2 } as const;

function Tabs({ initial }: { initial: AudienceId }) {
  const [active, setActive] = useState<AudienceId>(initial);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    setActive(initial);
  }, [initial]);

  const select = (id: AudienceId, focus = false) => {
    setActive(id);
    const url = new URL(window.location.href);
    url.searchParams.set("audience", id);
    window.history.replaceState(window.history.state, "", url);
    if (focus) tabRefs.current[audiences.findIndex((a) => a.id === id)]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const index = audiences.findIndex((a) => a.id === active);
    const last = audiences.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = index === last ? 0 : index + 1;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = index === 0 ? last : index - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next !== null) {
      e.preventDefault();
      select(audiences[next].id, true);
    }
  };

  return (
    <div className="mt-10 overflow-hidden rounded-[24px] border border-line bg-white md:mt-12">
      <div role="tablist" aria-label="적용 대상" className="grid grid-cols-2 border-b-2 border-brand-deep">
        {audiences.map((a, i) => {
          const selected = a.id === active;
          const Icon = icons[a.id];
          return (
            <button
              key={a.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              id={`audience-tab-${a.id}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`audience-panel-${a.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(a.id)}
              onKeyDown={onKeyDown}
              className={`group relative flex flex-col items-start gap-3 p-4 text-left break-keep transition-colors -outline-offset-4 md:flex-row md:items-center md:gap-4 md:px-8 md:py-6 ${
                selected ? "bg-brand-deep text-white" : "bg-surface text-muted hover:bg-lavender hover:text-ink"
              }`}
            >
              <span
                aria-hidden
                className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] transition-colors md:h-12 md:w-12 md:rounded-[14px] ${
                  selected ? "bg-white/15 text-white" : "bg-white text-muted group-hover:text-brand-deep"
                }`}
              >
                <Icon size={22} className="md:size-6" />
              </span>
              <span className="block min-w-0">
                <span className="block text-[16px] leading-snug font-extrabold tracking-[-0.02em] md:text-[21px]">{a.label}</span>
                <span aria-hidden className={`mt-1 hidden text-[14px] md:block ${selected ? "text-white/75" : "text-muted"}`}>
                  {a.who.join(" · ")}
                </span>
              </span>
              {selected ? (
                <span aria-hidden className="absolute -bottom-[7px] left-8 h-3 w-3 rotate-45 bg-brand-deep md:left-12" />
              ) : null}
            </button>
          );
        })}
      </div>

      {audiences.map((a) => (
        <div
          key={a.id}
          id={`audience-panel-${a.id}`}
          role="tabpanel"
          aria-labelledby={`audience-tab-${a.id}`}
          hidden={a.id !== active}
          tabIndex={0}
          className="-outline-offset-4"
        >
          {a.id === active ? (
            <div className="fade-swap grid gap-6 p-6 md:grid-cols-[1.2fr_1fr] md:gap-12 md:p-10">
              <div>
                <h3 className="text-[22px] leading-snug font-extrabold tracking-[-0.02em] md:text-[28px]">{a.title}</h3>
                <p className="mt-3 text-[16px] text-muted md:text-[17px]">{a.description}</p>
                <p className="mt-6 text-[14px] font-bold text-muted">함께할 수 있는 곳</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {a.who.map((w) => (
                    <li key={w} className="rounded-full bg-surface px-3.5 py-1.5 text-[14px] font-semibold text-ink">
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[20px] bg-lavender p-6">
                <p className="text-[14px] font-bold text-brand-deep">예시 적용 장면</p>
                <ul className="mt-3 flex flex-col gap-3">
                  {a.scenes.map((scene) => (
                    <li key={scene} className="flex items-center gap-3 text-[17px] font-bold">
                      <span aria-hidden className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-brand-deep">
                        <Check size={16} />
                      </span>
                      {scene}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function TabsFromQuery() {
  const params = useSearchParams();
  return <Tabs initial={resolveAudience(params.get("audience"))} />;
}

export default function AudienceTabs() {
  return (
    <Suspense fallback={<Tabs initial="university" />}>
      <TabsFromQuery />
    </Suspense>
  );
}
