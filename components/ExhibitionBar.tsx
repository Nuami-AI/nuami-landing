"use client";

import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { isEventActive } from "@/lib/event";

const DISMISS_KEY = "nuami-event-bar-dismissed";

function readDismissed(): boolean {
  try {
    return window.sessionStorage.getItem(DISMISS_KEY) === "1";
  } catch {
    return false;
  }
}

export default function ExhibitionBar() {
  const [visible, setVisible] = useState(false);
  const { event } = site;

  useEffect(() => {
    if (!isEventActive(event) || readDismissed()) return;
    setVisible(true);
    const remaining = Date.parse(event.endsAtExclusive) - Date.now();
    if (remaining > 0 && remaining < 2 ** 31 - 1) {
      const timer = window.setTimeout(() => setVisible(false), remaining);
      return () => window.clearTimeout(timer);
    }
  }, [event]);

  if (!visible) return null;

  const dismiss = () => {
    setVisible(false);
    try {
      window.sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // 저장소 접근이 막힌 브라우저에서는 현재 화면에서만 닫는다.
    }
  };

  return (
    <div className="border-b border-line bg-surface text-ink">
      <div className="container-x flex min-h-11 items-center justify-between gap-2">
        <Link
          href="/inquire_all?type=event"
          className="group flex min-h-11 flex-1 items-center gap-2 py-1.5 text-[14px] font-semibold leading-snug md:justify-center md:text-[15px]"
        >
          <span className="[word-break:keep-all]">
            {event.dateLabel}, {event.title}에서 뉴아미를 만나보세요.
            <span className="ml-1.5 font-normal text-muted">
              {event.venue}
              {event.booth ? ` · ${event.booth}` : ""}
            </span>
          </span>
          <ArrowRight size={16} aria-hidden className="shrink-0 text-brand-deep transition-transform group-hover:translate-x-0.5" />
        </Link>
        <button
          type="button"
          onClick={dismiss}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-muted hover:bg-white hover:text-ink"
          aria-label="행사 안내 닫기"
        >
          <X size={18} aria-hidden />
        </button>
      </div>
    </div>
  );
}
