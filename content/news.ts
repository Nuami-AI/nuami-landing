export type NewsCategory = "award" | "competition" | "program" | "press" | "event";

export type NewsItem = {
  id: string;
  slug: string;
  category: NewsCategory;
  categoryLabel?: string;
  graphicLabel?: string;
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
  program: "지원사업 선정",
  press: "보도",
  event: "행사",
};

const news: NewsItem[] = [
  {
    id: "busan-public-data-award",
    slug: "busan-public-data-award",
    category: "award",
    dateLabel: "2026",
    sortOrder: 1,
    title: "부산 공공데이터, AI 활용 창업경진대회 우수상",
    excerpt: "공공데이터 기반 생활 행동가이드로 부산광역시장상을 수상했습니다.",
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
    id: "ku-global-startlink",
    slug: "ku-global-startlink",
    category: "competition",
    dateLabel: "2026",
    sortOrder: 2,
    title: "KU Global StartLink 최종 2위",
    excerpt: "고려대학교 창업입주경진대회에서 성과를 거두고 캠퍼스타운에 입주했습니다.",
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
    id: "hug-up",
    slug: "hug-up",
    category: "program",
    dateLabel: "2026",
    sortOrder: 3,
    title: "HUG UP 선정",
    excerpt: "지역과 연결되는 생활 적응 서비스의 사업화를 준비합니다.",
    body: [
      "뉴아미는 ‘HUG UP: 청년이 만드는 부산의 새로운 업’에 선정되었습니다.",
      "지역 기반의 사업화 지원을 바탕으로 외국인 유학생의 생활 적응 문제를 구체적인 서비스와 협업 기회로 연결해갑니다.",
    ],
    image: null,
    externalUrl: null,
    featured: false,
    published: true,
  },
  {
    id: "nia-growth-support",
    slug: "nia-growth-support",
    category: "program",
    dateLabel: "2026",
    sortOrder: 4,
    title: "공공데이터 기반 AI 성장 지원사업 선정",
    excerpt: "공공데이터 활용기업 AI 연계 맞춤형 성장 지원사업에 선정되었습니다.",
    body: [
      "뉴아미는 공공데이터 활용기업 AI 연계 맞춤형 성장 지원사업에 선정되었습니다.",
      "공공데이터와 기관의 공식 안내를 사용자 상황에 맞는 생활 행동가이드로 연결하는 방향을 발전시켜갑니다.",
    ],
    image: null,
    externalUrl: null,
    featured: false,
    published: true,
  },
  {
    id: "company-builder",
    slug: "company-builder",
    category: "program",
    dateLabel: "2026",
    sortOrder: 5,
    title: "공공기술 기반 Company Builder 선정",
    excerpt: "공공기술 기반 Company Builder 프로그램에 선정되었습니다.",
    body: ["뉴아미는 공공기술 기반 Company Builder 프로그램에 선정되었습니다."],
    image: null,
    externalUrl: null,
    featured: false,
    published: true,
  },
  {
    id: "ku-campus-town",
    slug: "ku-campus-town",
    category: "program",
    categoryLabel: "입주",
    graphicLabel: "CAMPUS",
    dateLabel: "2026",
    sortOrder: 6,
    title: "고려대학교 캠퍼스타운 입주",
    excerpt: "고려대학교 서울캠퍼스타운에 입주했습니다.",
    body: [
      "뉴아미는 고려대학교 서울캠퍼스타운에 입주했습니다.",
      "입주 공간을 기반으로 제품 개선과 유학생 대상 사용자 검증을 이어갑니다.",
    ],
    image: null,
    externalUrl: null,
    featured: false,
    published: true,
  },
  {
    id: "hana-social-venture-university",
    slug: "hana-social-venture-university",
    category: "program",
    categoryLabel: "프로그램 수료",
    graphicLabel: "PROGRAM",
    dateLabel: "2026",
    sortOrder: 7,
    title: "하나 소셜벤처 유니버시티 5기 수료",
    excerpt: "하나 소셜벤처 유니버시티 5기 과정을 수료했습니다.",
    body: ["뉴아미는 하나 소셜벤처 유니버시티 5기 과정을 수료했습니다."],
    image: null,
    externalUrl: null,
    featured: false,
    published: true,
  },
];

export const HIGHLIGHT_COUNT = 4;

export function getPublishedNews(): NewsItem[] {
  return news.filter((item) => item.published).sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return getPublishedNews().find((item) => item.slug === slug);
}

export function getCategoryLabel(item: NewsItem): string {
  return item.categoryLabel ?? categoryLabels[item.category];
}

export function getSafeExternalUrl(item: NewsItem): string | null {
  return item.externalUrl && /^https?:\/\//.test(item.externalUrl) ? item.externalUrl : null;
}
