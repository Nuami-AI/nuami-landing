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

export const nav = [
  { label: "회사소개", href: "/about" },
  { label: "뉴아미", href: "/nuami" },
  { label: "솔루션", href: "/solutions" },
  { label: "뉴스", href: "/news" },
  { label: "문의", href: "/inquire_all" },
] as const;

export const seo = {
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

export const offices = [
  { label: "서울사업장", address: "서울특별시 성북구 개운사길 83-13, 창업스테이션 306호" },
  { label: "부산사업장", address: "부산광역시 해운대구 센텀동로 41, 센텀벤처타운 3층 308호" },
];

export const footer = {
  tagline: "외국인 유학생을 위한 AI 생활 행동가이드",
  slogan: "From content to action.",
  copyright: "© 2026 Nuami. All rights reserved.",
};

export const images = {
  product: {
    src: "/images/nuami-product.jpg",
    width: 2400,
    height: 1350,
    alt: "뉴아미 모바일 생활가이드의 한국어, 베트남어 화면 예시",
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

export const guideCards = [
  { key: "situation", label: "Situation", title: "지금 어떤 상황인가요?", description: "현재 상황과 필요한 준비를 확인합니다." },
  { key: "action", label: "Action", title: "무엇부터 하면 될까요?", description: "해야 할 일을 실행 순서대로 안내합니다." },
  { key: "context", label: "Context", title: "미리 알면 좋아요", description: "표현과 놓치기 쉬운 맥락을 짚어줍니다." },
] as const;

export const guideDisclaimer = "*서비스 이해를 위한 예시이며, 실제 안내는 상황과 기관 기준에 따라 달라질 수 있습니다.";

export function isExternalServiceReady(): boolean {
  return typeof site.serviceUrl === "string" && /^https?:\/\//.test(site.serviceUrl);
}
