"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronRight, Mail, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Logo from "@/components/Logo";
import { isExternalServiceReady, nav, site } from "@/content/site";
import { localePath, stripLocale, type Locale } from "@/lib/i18n";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

const copy = {
  ko: { home: "Nuami 홈", main: "주요 메뉴", mobile: "모바일 메뉴", open: "메뉴 열기", close: "메뉴 닫기", service: "서비스 이용하기", newWindow: "(새 창)", contact: "문의하기", language: "언어 선택" },
  en: { home: "Nuami home", main: "Main menu", mobile: "Mobile menu", open: "Open menu", close: "Close menu", service: "Use the service", newWindow: "(opens in a new window)", contact: "Contact", language: "Language" },
} as const;

const languageNames = { en: "English", ko: "한국어" } as const;

function LanguageSwitch({ locale, path, label, className = "" }: { locale: Locale; path: string; label: string; className?: string }) {
  return (
    <div role="group" aria-label={label} className={`flex items-center text-[14px] font-extrabold tracking-[0.02em] ${className}`}>
      {(["en", "ko"] as const).map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 ? (
            <span aria-hidden className="px-0.5 text-[#c4c8d0]">
              /
            </span>
          ) : null}
          {l === locale ? (
            <span aria-current="true" className="inline-flex min-h-11 min-w-9 items-center justify-center text-brand-deep">
              <span aria-hidden>{l.toUpperCase()}</span>
              <span className="sr-only">{languageNames[l]}</span>
            </span>
          ) : (
            <Link
              href={localePath(l, path)}
              hrefLang={l}
              lang={l}
              className="inline-flex min-h-11 min-w-9 items-center justify-center text-muted transition-colors hover:text-ink"
            >
              <span aria-hidden>{l.toUpperCase()}</span>
              <span className="sr-only">{languageNames[l]}</span>
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}

export default function Header({ locale }: { locale: Locale }) {
  const pathname = stripLocale(usePathname());
  const t = copy[locale];
  const [open, setOpen] = useState(false);
  const [panelTop, setPanelTop] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const serviceReady = isExternalServiceReady();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const openMenu = () => {
    setPanelTop(headerRef.current?.getBoundingClientRect().bottom ?? 0);
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const header = headerRef.current;
    const syncTop = () => {
      if (header) setPanelTop(header.getBoundingClientRect().bottom);
    };
    const observer = new ResizeObserver(syncTop);
    if (header?.parentElement) observer.observe(header.parentElement);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current || !toggleRef.current) return;
      const focusables = [
        toggleRef.current,
        ...panelRef.current.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled])",
        ),
      ];
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
      else syncTop();
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      observer.disconnect();
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur-sm"
      >
        <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-4">
          <Link
            href={localePath(locale, "/")}
            className="inline-flex min-h-11 items-center"
            aria-label={t.home}
          >
            <Logo className="h-6 w-auto md:h-7" />
          </Link>

          <nav
            aria-label={t.main}
            className="hidden items-center gap-1 md:flex"
          >
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={localePath(locale, item.href)}
                  aria-current={active ? "page" : undefined}
                  className={`relative inline-flex min-h-11 items-center px-3 text-[16px] font-semibold transition-colors lg:px-4 ${
                    active
                      ? "text-brand-deep"
                      : "text-ink hover:text-brand-deep"
                  }`}
                >
                  {item.label[locale]}
                  {active ? (
                    <span
                      aria-hidden
                      className="absolute inset-x-3 bottom-1 h-[2px] rounded-full bg-brand lg:inset-x-4"
                    />
                  ) : null}
                </Link>
              );
            })}
            {serviceReady ? (
              <a
                href={site.serviceUrl!}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary ml-3 !min-h-11 !px-5 text-[15px]"
              >
                {t.service}
                <ArrowUpRight size={16} aria-hidden />
                <span className="sr-only">{t.newWindow}</span>
              </a>
            ) : null}
            <span aria-hidden className="mx-2 h-4 w-px bg-line lg:mx-3" />
            <LanguageSwitch locale={locale} path={pathname} label={t.language} />
          </nav>

          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-surface md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.close : t.open}
            onClick={() => (open ? setOpen(false) : openMenu())}
          >
            {open ? (
              <X size={24} aria-hidden />
            ) : (
              <Menu size={24} aria-hidden />
            )}
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        style={{ top: panelTop }}
        className="fixed inset-x-0 bottom-0 z-40 flex flex-col bg-white md:hidden"
      >
        <nav aria-label={t.mobile} className="flex-1 overflow-y-auto">
          <ul>
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className="border-b border-line">
                  <Link
                    href={localePath(locale, item.href)}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`container-x flex min-h-[68px] items-center justify-between gap-4 text-[19px] font-extrabold tracking-[-0.01em] ${
                      active ? "text-brand-deep" : "text-ink active:bg-surface"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {item.label[locale]}
                      {active ? (
                        <span
                          aria-hidden
                          className="h-1.5 w-1.5 rounded-full bg-accent"
                        />
                      ) : null}
                    </span>
                    <ChevronRight
                      size={20}
                      aria-hidden
                      className={active ? "text-brand-deep" : "text-muted"}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          {serviceReady ? (
            <div className="container-x pt-6">
              <a
                href={site.serviceUrl!}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full"
              >
                {t.service}
                <ArrowUpRight size={16} aria-hidden />
                <span className="sr-only">{t.newWindow}</span>
              </a>
            </div>
          ) : null}
        </nav>

        <div className="container-x shrink-0 border-t border-line py-6">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[15px] font-extrabold">{t.contact}</p>
            <LanguageSwitch locale={locale} path={pathname} label={t.language} className="-mr-2" />
          </div>
          <a
            href={`mailto:${site.contactEmail}`}
            className="mt-2 inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold text-muted hover:text-brand-deep"
          >
            <Mail size={18} aria-hidden />
            {site.contactEmail}
          </a>
        </div>
      </div>
    </>
  );
}
