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

export const categoryLabels: Record<NewsCategory, string> = {
  award: "수상",
  competition: "대회 성과",
  program: "선정",
  press: "보도",
  event: "행사",
};

export type NewsFilter = "all" | "award" | "selected" | "update";

export const newsFilters: { id: NewsFilter; label: string; categories: NewsCategory[] }[] = [
  { id: "all", label: "전체", categories: ["award", "competition", "program", "press", "event"] },
  { id: "award", label: "수상", categories: ["award", "competition"] },
  { id: "selected", label: "선정", categories: ["program"] },
  { id: "update", label: "소식", categories: ["press", "event"] },
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
    image: "/images/news/fly-asia-2026.jpg",
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
    image: "/images/news/early-startup-support.jpg",
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
    image: "/images/news/kb-dataroute.jpg",
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
    image: "/images/news/nia-growth-support.jpg",
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
    image: "/images/news/company-builder.jpg",
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
    image: "/images/news/hug-up.jpg",
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
    image: "/images/news/busan-public-data-award.jpg",
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
    image: "/images/news/hana-social-venture-university.jpg",
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
    image: "/images/news/ku-global-startlink.jpg",
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
    image: "/images/news/ku-campus-town.jpg",
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
    image: "/images/news/coa-open-lab.jpg",
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
    image: "/images/news/st-startup-club.jpg",
    externalUrl: null,
    featured: false,
    published: true,
  },
];

export function getPublishedNews(): NewsItem[] {
  return news.filter((item) => item.published && item.body.length > 0).sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return getPublishedNews().find((item) => item.slug === slug);
}

export function getSafeExternalUrl(item: NewsItem): string | null {
  return item.externalUrl && /^https?:\/\//.test(item.externalUrl) ? item.externalUrl : null;
}
