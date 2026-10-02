"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Logo from "@/components/Logo";
import { isExternalServiceReady, nav, site } from "@/content/site";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const serviceReady = isExternalServiceReady();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur-sm">
      <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-4">
        <Link href="/" className="inline-flex min-h-11 items-center" aria-label="Nuami 홈">
          <Logo className="h-6 w-auto md:h-7" />
        </Link>

        <nav aria-label="주요 메뉴" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative inline-flex min-h-11 items-center px-3 text-[16px] font-semibold transition-colors lg:px-4 ${
                  active ? "text-brand-deep" : "text-ink hover:text-brand-deep"
                }`}
              >
                {item.label}
                {active ? <span aria-hidden className="absolute inset-x-3 bottom-1 h-[2px] rounded-full bg-brand lg:inset-x-4" /> : null}
              </Link>
            );
          })}
          {serviceReady ? (
            <a href={site.serviceUrl!} target="_blank" rel="noopener noreferrer" className="btn btn-primary ml-3 !min-h-11 !px-5 text-[15px]">
              서비스 이용하기
              <ArrowUpRight size={16} aria-hidden />
              <span className="sr-only">(새 창)</span>
            </a>
          ) : null}
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-surface md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
        </button>
      </div>

      <div id="mobile-menu" hidden={!open} className="border-t border-line bg-white md:hidden">
        <nav aria-label="모바일 메뉴" className="container-x flex flex-col py-3">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`flex min-h-12 items-center justify-between rounded-xl px-3 text-[17px] font-semibold ${
                  active ? "bg-lavender text-brand-deep" : "text-ink hover:bg-surface"
                }`}
              >
                {item.label}
                {active ? <span className="text-[13px] font-bold">현재 페이지</span> : null}
              </Link>
            );
          })}
          {serviceReady ? (
            <a href={site.serviceUrl!} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2 mb-1">
              서비스 이용하기
              <ArrowUpRight size={16} aria-hidden />
              <span className="sr-only">(새 창)</span>
            </a>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
