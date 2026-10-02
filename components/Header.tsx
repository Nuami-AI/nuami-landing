"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Logo from "@/components/Logo";
import { nav } from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={`sticky top-0 z-40 bg-white transition-[border-color] ${
        scrolled || open ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-4">
        <Link href="/" className="inline-flex min-h-11 items-center" aria-label="Nuami 홈">
          <Logo className="h-6 w-auto md:h-7" />
        </Link>

        <nav aria-label="주요 메뉴" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center rounded-full px-4 text-[16px] font-semibold text-ink transition-colors hover:bg-lavender hover:text-brand-deep"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn btn-primary ml-3 !min-h-11 !px-5 text-[15px]">
            협업 문의
          </Link>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-lavender md:hidden"
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
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center rounded-xl px-3 text-[17px] font-semibold text-ink hover:bg-lavender"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" onClick={() => setOpen(false)} className="btn btn-primary mt-2 mb-1">
            협업 문의
          </Link>
        </nav>
      </div>
    </header>
  );
}
