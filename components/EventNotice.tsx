"use client";

import { CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { isEventActive } from "@/lib/event";

export default function EventNotice() {
  const [active, setActive] = useState(false);
  const { event } = site;

  useEffect(() => {
    setActive(isEventActive(event));
  }, [event]);

  if (!active) return null;

  return (
    <p className="inline-flex items-start gap-2 rounded-2xl bg-white/12 px-4 py-3 text-[15px] font-semibold text-white md:text-[16px]">
      <CalendarDays size={18} aria-hidden className="mt-0.5 shrink-0" />
      <span>
        {event.title} · {event.dateLabel} · {event.venue}
        {event.booth ? ` · 부스 ${event.booth}` : ""}에서 뉴아미를 만나보세요.
      </span>
    </p>
  );
}
