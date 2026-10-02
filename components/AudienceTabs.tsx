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
    <div className="mt-10 md:mt-12">
      <div role="tablist" aria-label="적용 대상" className="grid gap-2 sm:inline-grid sm:grid-cols-2">
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
              className={`inline-flex min-h-13 items-center justify-center gap-2 rounded-full border px-6 text-[16px] font-bold transition-colors ${
                selected ? "border-brand-deep bg-brand-deep text-white" : "border-line bg-white text-ink hover:border-brand-deep"
              }`}
            >
              <Icon size={18} aria-hidden />
              {a.label}
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
          className="mt-6 rounded-[24px] focus-visible:outline-offset-4"
        >
          {a.id === active ? (
            <div className="fade-swap grid gap-6 rounded-[24px] border border-line bg-white p-6 md:grid-cols-[1.2fr_1fr] md:gap-12 md:p-10">
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
              <div className="rounded-[20px] bg-surface p-6">
                <p className="text-[14px] font-bold text-muted">예시 적용 장면</p>
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
