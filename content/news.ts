import type { Locale, Localized } from "@/lib/i18n";

export type NewsCategory = "award" | "competition" | "program" | "press" | "event";

export type NewsItem = {
  slug: string;
  category: NewsCategory;
  dateLabel: string;
  sortOrder: number;
  title: string;
  excerpt: string;
  body: string[];
  image: string | null;
  externalUrl: string | null;
  featured: boolean;
  published: boolean;
};

export const categoryLabels: Localized<Record<NewsCategory, string>> = {
  ko: { award: "수상", competition: "대회 성과", program: "선정", press: "보도", event: "행사" },
  en: { award: "Award", competition: "Competition", program: "Selected", press: "Press", event: "Event" },
};

export type NewsFilter = "all" | "award" | "selected" | "update";

export const newsFilters: { id: NewsFilter; label: Localized<string>; categories: NewsCategory[] }[] = [
  { id: "all", label: { ko: "전체", en: "All" }, categories: ["award", "competition", "program", "press", "event"] },
  { id: "award", label: { ko: "수상", en: "Awards" }, categories: ["award", "competition"] },
  { id: "selected", label: { ko: "선정", en: "Selections" }, categories: ["program"] },
  { id: "update", label: { ko: "소식", en: "Updates" }, categories: ["press", "event"] },
];

const news: NewsItem[] = [
  {
    slug: "fly-asia-2026",
    category: "event",
    dateLabel: "2026.10.07",
    sortOrder: 1,
    title: "FLY ASIA 2026 전시부스 참가",
    excerpt: "부산 벡스코에서 열리는 FLY ASIA 2026에 전시부스로 참가합니다.",
    body: [
      "뉴아미는 2026년 10월 7일부터 8일까지 부산 벡스코에서 열리는 「FLY ASIA 2026」에 전시부스로 참가합니다.",
      "현장에서 외국인 유학생을 위한 AI 생활 행동가이드를 소개하고, 기관과 파트너의 이야기를 듣습니다.",
    ],
    image: null,
    externalUrl: null,
    featured: false,
    published: true,
  },
  {
    slug: "early-startup-support",
    category: "program",
    dateLabel: "2026.09.29",
    sortOrder: 2,
    title: "초기 창업사업화 지원사업 선정",
    excerpt: "2026년 제3차 초기 창업사업화 지원사업 선정.",
    body: [
      "뉴아미는 「2026년 제3차 초기 창업사업화 지원사업」에 선정되어 사업화 지원을 받습니다.",
    ],
    image: null,
    externalUrl: null,
    featured: false,
    published: true,
  },
  {
    slug: "kb-dataroute",
    category: "program",
    dateLabel: "2026.09.28",
    sortOrder: 3,
    title: "KB국민카드 데이터루트 연계지원",
    excerpt: "KB국민카드 「데이터루트」 상권 및 지역 분석 플랫폼 연계지원.",
    body: [
      "뉴아미는 KB국민카드 「데이터루트」 상권 및 지역 분석 플랫폼의 연계지원을 받습니다.",
    ],
    image: null,
    externalUrl: null,
    featured: false,
    published: true,
  },
  {
    slug: "nia-growth-support",
    category: "program",
    dateLabel: "2026.08.27",
    sortOrder: 4,
    title: "공공데이터 기반 AI 성장 지원사업 선정",
    excerpt: "공공데이터 활용기업 AI 연계 맞춤형 성장 지원사업 선정.",
    body: [
      "뉴아미는 행정안전부·한국지능정보사회진흥원의 「2026년 공공데이터 활용기업 AI 연계 맞춤형 성장 지원사업」에 선정되었습니다.",
      "공공데이터와 기관의 공식 안내를 사용자 상황에 맞는 생활 행동가이드로 연결하는 방향을 발전시켜갑니다.",
    ],
    image: null,
    externalUrl: null,
    featured: false,
    published: true,
  },
  {
    slug: "company-builder",
    category: "program",
    dateLabel: "2026.08.27",
    sortOrder: 5,
    title: "공공기술 기반 Company Builder 선정",
    excerpt: "키스트이노베이션 2026년 공공기술 기반 Company Builder(COMPA) 선정.",
    body: [
      "뉴아미는 키스트이노베이션의 「2026년 공공기술 기반 Company Builder(COMPA)」에 선정되어 사업화 지원을 받습니다.",
    ],
    image: null,
    externalUrl: null,
    featured: false,
    published: true,
  },
  {
    slug: "hug-up",
    category: "program",
    dateLabel: "2026.08.23",
    sortOrder: 6,
    title: "HUG UP 선정",
    excerpt: "지역과 연결되는 생활 적응 서비스의 사업화를 준비합니다.",
    body: [
      "뉴아미는 주택도시보증공사·큐네스티의 「HUG UP : 청년이 만드는 부산의 새로운 업(業)」에 선정되었습니다.",
      "지역 기반의 사업화 지원을 바탕으로 외국인 유학생의 생활 적응 문제를 구체적인 서비스와 협업 기회로 연결해갑니다.",
    ],
    image: null,
    externalUrl: null,
    featured: false,
    published: true,
  },
  {
    slug: "busan-public-data-award",
    category: "award",
    dateLabel: "2026.07.29",
    sortOrder: 7,
    title: "부산 공공데이터, AI 활용 창업경진대회 우수상",
    excerpt: "부산광역시장상을 수상했습니다.",
    body: [
      "뉴아미는 2026 부산 공공데이터, AI 활용 창업경진대회에서 우수상인 부산광역시장상을 수상했습니다.",
      "외국인 유학생이 생활과 행정 정보를 실제 행동으로 옮길 수 있도록 돕는 AI 생활 행동가이드를 제안했습니다.",
      "앞으로 공식 안내와 사용자 맥락을 연결하는 서비스 경험을 다듬어갑니다.",
    ],
    image: null,
    externalUrl: null,
    featured: true,
    published: true,
  },
  {
    slug: "hana-social-venture-university",
    category: "program",
    dateLabel: "2026.07.28",
    sortOrder: 8,
    title: "하나 소셜벤처 유니버시티 5기 수료",
    excerpt: "하나 소셜벤처 유니버시티 5기 과정을 수료했습니다.",
    body: ["뉴아미는 하나 소셜벤처 유니버시티 5기 과정을 수료했습니다."],
    image: null,
    externalUrl: null,
    featured: false,
    published: true,
  },
  {
    slug: "ku-global-startlink",
    category: "competition",
    dateLabel: "2026.06.16",
    sortOrder: 9,
    title: "KU Global StartLink 최종 2위",
    excerpt: "고려대학교 창업입주경진대회 성과와 캠퍼스타운 입주.",
    body: [
      "뉴아미는 고려대학교 제20회 창업입주경진대회와 KU Global StartLink에서 최종 2위의 성과를 거두었습니다.",
      "고려대학교 캠퍼스타운 입주 기반을 바탕으로 제품 개선과 유학생 대상 사용자 검증을 이어갑니다.",
    ],
    image: null,
    externalUrl: null,
    featured: false,
    published: true,
  },
  {
    slug: "ku-campus-town",
    category: "program",
    dateLabel: "2026.06.16",
    sortOrder: 10,
    title: "고려대학교 서울캠퍼스타운 입주기업 선정",
    excerpt: "고려대학교 서울캠퍼스타운 독립형 입주기업으로 선정되었습니다.",
    body: ["뉴아미는 고려대학교 서울캠퍼스타운 독립형 입주기업으로 선정되었습니다."],
    image: null,
    externalUrl: null,
    featured: false,
    published: true,
  },
  {
    slug: "coa-open-lab",
    category: "program",
    dateLabel: "2026.06.01",
    sortOrder: 11,
    title: "ICT이노베이션 스퀘어 부산 COA 오픈개발실 입주",
    excerpt: "2026 동남권 ICT이노베이션 스퀘어 부산 COA 오픈개발실 입주기업 선정.",
    body: ["뉴아미는 2026 동남권 ICT이노베이션 스퀘어 부산 COA 오픈개발실 입주기업으로 선정되었습니다."],
    image: null,
    externalUrl: null,
    featured: false,
    published: true,
  },
  {
    slug: "st-startup-club",
    category: "program",
    dateLabel: "2026.04.01",
    sortOrder: 12,
    title: "교내 ST창업동아리 선정 및 창업 지원 협약 체결",
    excerpt: "교내 ST창업동아리로 선정되어 창업 지원 협약을 체결했습니다.",
    body: [
      "뉴아미는 교내 ST창업동아리로 선정되어 창업 지원 협약을 체결했습니다.",
      "협약기간은 2026년 4월 1일부터 2027년 2월 28일까지입니다.",
    ],
    image: null,
    externalUrl: null,
    featured: false,
    published: true,
  },
];

type NewsText = Pick<NewsItem, "title" | "excerpt" | "body">;

const newsEn: Record<string, NewsText> = {
  "fly-asia-2026": {
    title: "Exhibiting at FLY ASIA 2026",
    excerpt: "Nuami will exhibit at FLY ASIA 2026 at BEXCO, Busan.",
    body: [
      "Nuami will run an exhibition booth at FLY ASIA 2026, held at BEXCO in Busan from October 7 to 8, 2026.",
      "At the booth, we will introduce our AI life action guide for international students and hear from institutions and partners.",
    ],
  },
  "early-startup-support": {
    title: "Selected for the Early-Stage Startup Commercialization Program",
    excerpt: "Selected for the 3rd round of the 2026 Early-Stage Startup Commercialization Program.",
    body: ["Nuami has been selected for the 3rd round of the 2026 Early-Stage Startup Commercialization Program and will receive commercialization support."],
  },
  "kb-dataroute": {
    title: "Partner support from KB Kookmin Card DataRoute",
    excerpt: "Linked support from KB Kookmin Card's DataRoute commercial and regional analytics platform.",
    body: ["Nuami is receiving linked support from DataRoute, KB Kookmin Card's commercial district and regional analytics platform."],
  },
  "nia-growth-support": {
    title: "Selected for the public data AI growth support program",
    excerpt: "Selected for the AI-linked customized growth program for public data companies.",
    body: [
      "Nuami has been selected for the 2026 AI-Linked Customized Growth Support Program for Public Data Companies, run by the Ministry of the Interior and Safety and the National Information Society Agency (NIA).",
      "We will keep developing our approach of turning public data and official institutional guidance into life action guides that fit each user's situation.",
    ],
  },
  "company-builder": {
    title: "Selected for the public technology Company Builder program",
    excerpt: "Selected for KIST Innovation's 2026 Public Technology Company Builder (COMPA).",
    body: ["Nuami has been selected for KIST Innovation's 2026 Public Technology Company Builder (COMPA) program and will receive commercialization support."],
  },
  "hug-up": {
    title: "Selected for HUG UP",
    excerpt: "Preparing to commercialize a life adaptation service connected to the local community.",
    body: [
      "Nuami has been selected for HUG UP: New Businesses for Busan, Made by Young People, run by Korea Housing & Urban Guarantee Corporation and Qnesty.",
      "With this regional commercialization support, we will turn the everyday challenges international students face into concrete services and partnership opportunities.",
    ],
  },
  "busan-public-data-award": {
    title: "Excellence Award at the Busan Public Data & AI Startup Competition",
    excerpt: "Received the Mayor of Busan Award.",
    body: [
      "Nuami received the Excellence Award (Mayor of Busan Award) at the 2026 Busan Public Data & AI Startup Competition.",
      "We proposed an AI life action guide that helps international students turn everyday and administrative information into real action.",
      "We will continue refining a service experience that connects official guidance with each user's context.",
    ],
  },
  "hana-social-venture-university": {
    title: "Completed Hana Social Venture University, Cohort 5",
    excerpt: "Completed the 5th cohort of Hana Social Venture University.",
    body: ["Nuami has completed the 5th cohort of Hana Social Venture University."],
  },
  "ku-global-startlink": {
    title: "2nd place at KU Global StartLink",
    excerpt: "Results at Korea University's startup residency competition and Campus Town residency.",
    body: [
      "Nuami took 2nd place overall at Korea University's 20th Startup Residency Competition and KU Global StartLink.",
      "Based at Korea University Campus Town, we will continue improving the product and validating it with international students.",
    ],
  },
  "ku-campus-town": {
    title: "Selected as a resident company of Korea University Seoul Campus Town",
    excerpt: "Selected as an independent resident company of Korea University Seoul Campus Town.",
    body: ["Nuami has been selected as an independent resident company of Korea University Seoul Campus Town."],
  },
  "coa-open-lab": {
    title: "Moved into the COA Open Lab at ICT Innovation Square Busan",
    excerpt: "Selected as a resident of the 2026 Southeast ICT Innovation Square Busan COA Open Lab.",
    body: ["Nuami has been selected as a resident company of the COA Open Lab at the 2026 Southeast Region ICT Innovation Square in Busan."],
  },
  "st-startup-club": {
    title: "Selected as an ST startup club and signed a startup support agreement",
    excerpt: "Selected as a campus ST startup club and signed a startup support agreement.",
    body: [
      "Nuami has been selected as a campus ST startup club and signed a startup support agreement.",
      "The agreement runs from April 1, 2026 to February 28, 2027.",
    ],
  },
};

function localize(item: NewsItem, locale: Locale): NewsItem {
  if (locale === "ko") return item;
  const text = newsEn[item.slug];
  return text ? { ...item, ...text } : item;
}

export function getPublishedNews(locale: Locale = "ko"): NewsItem[] {
  return news
    .filter((item) => item.published && item.body.length > 0)
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((item) => localize(item, locale));
}

export function getNewsBySlug(slug: string, locale: Locale = "ko"): NewsItem | undefined {
  return getPublishedNews(locale).find((item) => item.slug === slug);
}

export function getSafeExternalUrl(item: NewsItem): string | null {
  return item.externalUrl && /^https?:\/\//.test(item.externalUrl) ? item.externalUrl : null;
}
