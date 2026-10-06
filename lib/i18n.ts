export type Locale = "ko" | "en";

export const locales: Locale[] = ["ko", "en"];

export type Localized<T> = Record<Locale, T>;

export function localePath(locale: Locale, href: string): string {
  if (locale === "ko") return href;
  if (href === "/") return "/en";
  return `/en${href}`;
}

export function localeFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ko";
}

export function stripLocale(pathname: string): string {
  if (pathname === "/en") return "/";
  return pathname.startsWith("/en/") ? pathname.slice(3) : pathname;
}
