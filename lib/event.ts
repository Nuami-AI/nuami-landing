import type { SiteConfig } from "@/content/site";

export function isEventActive(event: SiteConfig["event"], now: Date = new Date()): boolean {
  if (!event.enabled) return false;
  const start = Date.parse(event.startsAt);
  const end = Date.parse(event.endsAtExclusive);
  if (Number.isNaN(start) || Number.isNaN(end)) return false;
  const t = now.getTime();
  return t >= start && t < end;
}
