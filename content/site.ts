import type { Localized } from "@/lib/i18n";

export type SiteConfig = {
  brandName: string;
  contactEmail: string;
  serviceUrl: string | null;
  canonicalUrl: string | null;
  legalCompanyName: string | null;
  registrationNumber: string | null;
  foundedAt: string | null;
  publicBrochureUrl: string | null;
  event: {
    enabled: boolean;
    title: string;
    dateLabel: string;
    startsAt: string;
    endsAtExclusive: string;
    venue: string;
    booth: string | null;
  };
};

export const site: SiteConfig = {
  brandName: "Nuami",
  contactEmail: "hello@nuami.kr",
  serviceUrl: null,
  canonicalUrl: "https://nuami.kr",
  legalCompanyName: null,
  registrationNumber: null,
  foundedAt: null,
  publicBrochureUrl: null,
  event: {
    enabled: true,
    title: "FLY ASIA 2026",
    dateLabel: "10.7–10.8",
    startsAt: "2026-10-02T00:00:00+09:00",
    endsAtExclusive: "2026-10-09T00:00:00+09:00",
    venue: "BEXCO",
    booth: null,
  },
};

export const nav: { href: string; label: Localized<string> }[] = [
  { href: "/about", label: { ko: "회사소개", en: "About" } },
  { href: "/nuami", label: { ko: "뉴아미", en: "Nuami" } },
  { href: "/solutions", label: { ko: "솔루션", en: "Solutions" } },
  { href: "/news", label: { ko: "뉴스", en: "News" } },
  { href: "/inquire_all", label: { ko: "문의", en: "Contact" } },
];

type SeoEntry = { title: string; description: string };
type SeoKey = "home" | "about" | "nuami" | "solutions" | "news" | "inquire";

const seoKo: Record<SeoKey, SeoEntry> = {
  home: {
    title: "뉴아미 Nuami, 외국인 유학생을 위한 AI 생활 행동가이드",
    description:
      "낯선 한국 생활, 다음 행동을 안내합니다. 뉴아미는 외국인 유학생의 상황에 맞춰 준비물, 행동 순서, 문화적 맥락을 연결하는 AI 생활 행동가이드입니다.",
  },
  about: {
    title: "회사소개, 뉴아미 Nuami",
    description: "낯선 순간에도 스스로 다음 행동을 선택할 수 있도록. 뉴아미의 미션과 접근 원칙, 히스토리를 소개합니다.",
  },
  nuami: {
    title: "뉴아미 서비스, 상황과 행동을 연결하는 3-Card",
    description: "상황, 행동, 맥락을 세 장의 카드로 정리하는 뉴아미의 AI 생활 행동가이드를 살펴보세요.",
  },
  solutions: {
    title: "기관 솔루션, 대학과 지역기관의 생활 적응 안내",
    description: "대학과 지역기관의 안내자료를 생활 장면별 행동가이드로 연결하는 적용 방향을 소개합니다.",
  },
  news: {
    title: "뉴스, 뉴아미의 수상과 새로운 소식",
    description: "수상과 선정, 제품과 협업에 관한 뉴아미의 소식을 전합니다.",
  },
  inquire: {
    title: "문의하기, 뉴아미 Nuami",
    description: "기관 적용과 실증 협업, 서비스 체험, 새로운 제안을 기다립니다.",
  },
};

const seoEn: Record<SeoKey, SeoEntry> = {
  home: {
    title: "Nuami, an AI life action guide for international students",
    description:
      "Life in Korea, one next step at a time. Nuami connects what to prepare, what to do in what order, and the cultural context behind it, tailored to each international student's situation.",
  },
  about: {
    title: "About, Nuami",
    description: "So that anyone can choose their next step, even in unfamiliar moments. Learn about Nuami's mission, principles and history.",
  },
  nuami: {
    title: "Nuami, the 3-Card guide that links situation to action",
    description: "See how Nuami's AI life action guide organizes situation, action and context into three cards.",
  },
  solutions: {
    title: "Solutions for universities and regional institutions",
    description: "How universities and regional institutions can turn their guidance materials into action guides for everyday situations.",
  },
  news: {
    title: "News, awards and updates from Nuami",
    description: "Awards, program selections, product and partnership news from Nuami.",
  },
  inquire: {
    title: "Contact, Nuami",
    description: "We welcome institutional partnerships, pilot collaborations, service demos and new proposals.",
  },
};

export const seo: Localized<Record<SeoKey, SeoEntry>> = { ko: seoKo, en: seoEn };

export const offices: Localized<{ label: string; address: string }[]> = {
  ko: [
    { label: "서울사업장", address: "서울특별시 성북구 개운사길 83-13, 창업스테이션 306호" },
    { label: "부산사업장", address: "부산광역시 해운대구 센텀동로 41, 센텀벤처타운 3층 308호" },
  ],
  en: [
    { label: "Seoul office", address: "Room 306, Startup Station, 83-13 Gaeunsa-gil, Seongbuk-gu, Seoul" },
    { label: "Busan office", address: "Room 308, 3F Centum Venture Town, 41 Centum dong-ro, Haeundae-gu, Busan" },
  ],
};

export const footer: Localized<{ tagline: string; slogan: string; copyright: string }> = {
  ko: {
    tagline: "외국인 유학생을 위한 AI 생활 행동가이드",
    slogan: "From content to action.",
    copyright: "© 2026 Nuami. All rights reserved.",
  },
  en: {
    tagline: "An AI life action guide for international students",
    slogan: "From content to action.",
    copyright: "© 2026 Nuami. All rights reserved.",
  },
};

export const productImageAlt: Localized<string> = {
  ko: "뉴아미 모바일 생활가이드의 한국어, 베트남어 화면 예시",
  en: "Example screens of the Nuami mobile life guide in Korean and Vietnamese",
};

export const images = {
  product: {
    src: "/images/nuami-product.jpg",
    width: 2400,
    height: 1350,
  },
  city: {
    src: "/images/city-context.jpg",
    width: 1600,
    height: 900,
  },
  hero: {
    src: "/images/hero-city.jpg",
    width: 2560,
    height: 1439,
  },
};

export const ogImage = { url: "/og-image.jpg", width: 1024, height: 512 };

// 접속 도메인별 GA4 측정 ID. 목록에 없는 도메인(localhost, *.vercel.app 등)에서는 GA를 불러오지 않습니다.
export const gaMeasurementIds: Record<string, string | null> = {
  "nuami.kr": "G-WH50WFXR76",
  "www.nuami.kr": "G-WH50WFXR76",
  "go.nuami.kr": "G-R452P6BN3L",
};

export type GuideCardKey = "situation" | "action" | "context";

export const guideCards: Localized<{ key: GuideCardKey; label: string; title: string; description: string }[]> = {
  ko: [
    { key: "situation", label: "Situation", title: "지금 어떤 상황인가요?", description: "현재 상황과 필요한 준비를 확인합니다." },
    { key: "action", label: "Action", title: "무엇부터 하면 될까요?", description: "해야 할 일을 실행 순서대로 안내합니다." },
    { key: "context", label: "Context", title: "미리 알면 좋아요", description: "표현과 놓치기 쉬운 맥락을 짚어줍니다." },
  ],
  en: [
    { key: "situation", label: "Situation", title: "What's going on right now?", description: "Check your situation and what you need to prepare." },
    { key: "action", label: "Action", title: "Where do I start?", description: "Walks you through what to do, step by step." },
    { key: "context", label: "Context", title: "Good to know", description: "Points out useful phrases and easy-to-miss context." },
  ],
};

export const guideDisclaimer: Localized<string> = {
  ko: "*서비스 이해를 위한 예시이며, 실제 안내는 상황과 기관 기준에 따라 달라질 수 있습니다.",
  en: "*This is an illustrative example. Actual guidance may vary by situation and institutional policy.",
};

export function isExternalServiceReady(): boolean {
  return typeof site.serviceUrl === "string" && /^https?:\/\//.test(site.serviceUrl);
}
