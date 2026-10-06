"use client";

import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { isEventActive } from "@/lib/event";
import { localePath, type Locale } from "@/lib/i18n";

const DISMISS_KEY = "nuami-event-bar-dismissed";

function readDismissed(): boolean {
  try {
    return window.sessionStorage.getItem(DISMISS_KEY) === "1";
  } catch {
    return false;
  }
}

export default function ExhibitionBar({ locale }: { locale: Locale }) {
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

  const message =
    locale === "en"
      ? `Meet Nuami at ${event.title}, ${event.venue}, ${event.dateLabel}.`
      : `${event.dateLabel}, ${event.title}에서 뉴아미를 만나보세요.`;
  const items = Array.from({ length: 6 }, (_, i) => (
    <span key={i} className="flex shrink-0 items-center gap-2 pr-10">
      {message}
      {/* <ArrowRight size={16} className="shrink-0" /> */}
    </span>
  ));

  return (
    <div className="bg-linear-to-r from-brand to-accent text-ink">
      <div className="flex min-h-11 items-center">
        <Link href={`${localePath(locale, "/inquire_all")}?type=event`} className="marquee group relative flex min-h-11 min-w-0 flex-1 items-center overflow-hidden">
          <span className="sr-only">{message}</span>
          <span aria-hidden className="marquee-track flex w-max text-[14px] font-bold whitespace-nowrap md:text-[15px]">
            <span className="flex shrink-0">{items}</span>
            <span className="flex shrink-0">{items}</span>
          </span>
        </Link>
        <button
          type="button"
          onClick={dismiss}
          className="mr-2 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ink hover:bg-white/30"
          aria-label={locale === "en" ? "Close event notice" : "행사 안내 닫기"}
        >
          <X size={18} aria-hidden />
        </button>
      </div>
    </div>
  );
}
