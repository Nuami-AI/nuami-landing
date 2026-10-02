"use client";

import Link from "next/link";
import { X } from "lucide-react";
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
    <div className="on-dark bg-ink text-white">
      <div className="container-x flex min-h-11 items-center justify-between gap-2">
        <Link
          href="/#contact"
          className="flex min-h-11 flex-1 items-center gap-2 py-1.5 text-[14px] font-semibold leading-snug [word-break:keep-all] md:justify-center md:text-[15px]"
        >
          <span aria-hidden className="h-2 w-2 shrink-0 rounded-full bg-accent" />
          <span>
            {event.dateLabel}, {event.title}에서 뉴아미를 만나보세요.
          </span>
        </Link>
        <button
          type="button"
          onClick={dismiss}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full hover:bg-white/10"
          aria-label="행사 안내 닫기"
        >
          <X size={18} aria-hidden />
        </button>
      </div>
    </div>
  );
}
