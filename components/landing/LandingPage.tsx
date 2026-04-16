"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  FeatureSection,
  FinalCtaSection,
  FooterSection,
  HeroSection,
  HowHelpsSection,
  TrustSection,
  UseCasesSection,
  UsageFlowSection,
  WhoForSection,
} from "./sections";

const sections = [
  { id: "hero", label: "소개" },
  { id: "for", label: "대상" },
  { id: "help", label: "도움 방식" },
  { id: "feature", label: "핵심 기능" },
  { id: "flow", label: "사용 방법" },
  { id: "cases", label: "활용 사례" },
  { id: "trust", label: "서비스 가치" },
  { id: "cta", label: "시작하기" },
];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: 0.1 },
    );

    sections.forEach((section) => {
      const node = document.getElementById(section.id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5">
        <a href="#hero" className="text-lg font-bold tracking-tight text-slate-900">
          Nuami
        </a>
        <nav className="hidden items-center gap-1 lg:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={cx(
                "rounded-lg px-3 py-2 text-sm transition",
                active === section.id ? "bg-violet-100 text-violet-700" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
              )}
            >
              {section.label}
            </a>
          ))}
        </nav>
        <button className="rounded-lg border border-slate-200 p-2 lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="메뉴 열기">
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>
      {open ? (
        <div className="grid grid-cols-2 gap-2 border-t border-slate-200 bg-white p-4 lg:hidden">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setOpen(false)}
              className={cx(
                "rounded-lg px-3 py-2 text-sm",
                active === section.id ? "bg-violet-100 text-violet-700" : "bg-slate-100 text-slate-700",
              )}
            >
              {section.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <WhoForSection />
        <HowHelpsSection />
        <FeatureSection />
        <UsageFlowSection />
        <UseCasesSection />
        <TrustSection />
        <FinalCtaSection />
      </main>
      <FooterSection />
    </div>
  );
}
