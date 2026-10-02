export type SiteConfig = {
  brandName: string;
  contactEmail: string;
  serviceUrl: string | null;
  canonicalUrl: string | null;
  legalCompanyName: string | null;
  registrationNumber: string | null;
  foundedAt: string | null;
  logo: string | null;
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
  contactEmail: "jay@nuami.kr",
  serviceUrl: null,
  canonicalUrl: null,
  legalCompanyName: null,
  registrationNumber: null,
  foundedAt: null,
  logo: "/brand/nuami-logo.svg",
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

export const seo = {
  title: "뉴아미 Nuami | 외국인 유학생을 위한 AI 생활 행동가이드",
  description:
    "낯선 한국 생활, 다음 행동을 안내합니다. 뉴아미는 외국인 유학생의 상황에 맞춰 준비물, 행동 순서, 문화적 맥락을 연결하는 AI 생활 행동가이드입니다.",
  ogTitle: "낯선 한국 생활, 다음 행동을 안내합니다.",
};

export const nav = [
  { label: "서비스", href: "/#service" },
  { label: "소식", href: "/#news" },
  { label: "팀", href: "/#team" },
] as const;

export const hero = {
  eyebrow: "NEW ACTION FOR ME",
  titleLead: "낯선 한국 생활,",
  titleHighlight: "다음 행동",
  titleTail: "을 안내합니다.",
  description:
    "뉴아미는 외국인 유학생이 한국 생활의 정보를 실제 행동으로 옮길 수 있도록 돕는 AI 생활 행동가이드입니다.",
  slogan: "From content to action.",
  primaryCta: "뉴아미 살펴보기",
  serviceCta: "서비스 이용하기",
  secondaryCta: "기관 협업 문의",
  sticker: "LET’S TAKE ACTION",
  previewCards: [
    { badge: "SITUATION", text: "카페에서 공부하고 싶어요" },
    { badge: "ACTION", text: "주문 후 좌석을 확인해요" },
    { badge: "CONTEXT", text: "콘센트와 이용 안내를 확인해요" },
  ],
};

export const milestones = {
  featured: {
    title: "부산광역시장상 수상",
    description: "2026 부산 공공데이터, AI 활용 창업경진대회 우수상",
    href: "/news/busan-public-data-award",
  },
  items: [
    { label: "KU Global StartLink 최종 2위", href: "/news/ku-global-startlink" },
    { label: "고려대학교 캠퍼스타운 입주", href: "/#programs" },
  ],
};

export const mission = {
  title: "정보를 찾은 다음이 더 어려울 때.",
  questions: [
    "은행에 가기 전에, 뭘 준비해야 하지?",
    "카페에서 오래 공부해도 괜찮을까?",
    "교수님께 어떤 말로 연락해야 하지?",
  ],
  statementLead: "번역된 문장만으로는 알기 어려운 준비물, 행동 순서, 문화적 맥락.",
  statementHighlight: "뉴아미는 그 사이를 연결합니다.",
};

export const service = {
  eyebrow: "HOW NUAMI WORKS",
  title: "상황을 이해하고, 행동을 안내하고, 맥락을 짚어줍니다.",
  description:
    "지금 필요한 정보를 세 장의 카드로 정리해, 준비부터 현장 행동까지 한눈에 살펴볼 수 있도록 돕습니다.",
  cards: [
    { key: "situation", label: "Situation", title: "지금 어떤 상황인가요?", description: "현재 상황과 필요한 준비를 확인합니다." },
    { key: "action", label: "Action", title: "무엇부터 하면 될까요?", description: "해야 할 일을 실행 순서대로 안내합니다." },
    { key: "context", label: "Context", title: "미리 알면 좋아요", description: "상황에 맞는 표현과 놓치기 쉬운 맥락을 짚어줍니다." },
  ],
  disclaimer: "서비스 이해를 위한 예시입니다. 실제 안내는 상황과 기관 기준에 따라 달라질 수 있습니다.",
  productEyebrow: "SERVICE SCREENS",
  productTitle: "서비스 화면",
  productImage: {
    src: "/images/nuami-product.jpg",
    width: 2400,
    height: 1350,
    alt: "뉴아미의 모바일 생활가이드와 한국어, 베트남어 서비스 화면",
  },
  trust: [
    "공공데이터와 기관의 공식 안내를 바탕으로",
    "사용자의 상황과 언어를 고려하고",
    "유학생의 실제 경험과 검수를 더합니다",
  ],
};

export const institutions = {
  eyebrow: "FOR UNIVERSITIES & INSTITUTIONS",
  title: "유학생의 다음 행동, 기관의 더 나은 안내.",
  description:
    "대학과 기관의 안내자료를 유학생이 이해하고 실행할 수 있는 생활 행동가이드로 연결합니다. 뉴아미는 기관별 상황을 함께 살펴보며 초기 협업과 실증을 준비하고 있습니다.",
  items: [
    { title: "기관 안내를 상황별 가이드로", description: "흩어진 안내자료를 준비물, 절차, 주의사항 중심으로 정리합니다." },
    { title: "반복 문의가 많은 장면부터", description: "입국 초기 생활과 행정 상황을 중심으로 적용 범위를 함께 정합니다." },
    { title: "효과를 함께 확인하는 실증", description: "이해도, 행동 완료, 반복 문의 등 평가 기준을 협의합니다." },
  ],
  cta: "우리 기관과 적용 가능성 이야기하기",
};

export const newsSection = {
  eyebrow: "NUAMI UPDATES",
  title: "작은 시작, 선명한 발걸음.",
  description: "뉴아미의 수상과 선정, 새로운 소식을 전합니다.",
  moreLabel: "전체 소식 보기",
  lessLabel: "소식 접기",
};

export const teamSection = {
  eyebrow: "MEET THE TEAM",
  title: "다른 경험을, 하나의 다음 행동으로.",
  description: "디자인과 기술, 운영과 문화 이해를 연결해 낯선 생활의 순간을 함께 풀어갑니다.",
};

export const programs = {
  title: "함께 성장하는 기반.",
  description: "뉴아미의 제품 개발과 사업화를 함께하는 입주, 지원 프로그램입니다.",
  items: [
    { name: "고려대학교 캠퍼스타운", status: "입주" },
    { name: "HUG UP", status: "사업화 지원 선정" },
    { name: "공공데이터 활용기업 AI 연계 맞춤형 성장 지원사업", status: "선정" },
    { name: "공공기술 기반 Company Builder", status: "선정" },
  ],
};

export const contact = {
  title: "다음 행동을 함께 만들까요?",
  description: "대학과 기관의 협업, 서비스에 대한 질문, 새로운 연결을 기다립니다.",
  cta: "이메일로 협업 문의하기",
  copyLabel: "이메일 복사",
  copiedMessage: "이메일 주소를 복사했습니다",
  copyFailedMessage: "주소를 선택했습니다. 직접 복사해 주세요",
  mailSubject: "[뉴아미 협업 문의]",
  mailBody: [
    "안녕하세요, 뉴아미 팀.",
    "",
    "기관/회사명:",
    "담당자명:",
    "문의 유형:",
    "문의 내용:",
    "회신 연락처:",
  ].join("\n"),
  offices: [
    { label: "서울사업장", address: "서울특별시 성북구 개운사길 83-13, 창업스테이션 306호" },
    { label: "부산사업장", address: "부산광역시 해운대구 센텀동로 41, 센텀벤처타운 3층 308호" },
  ],
};

export const footer = {
  tagline: "외국인 유학생을 위한 AI 생활 행동가이드",
  slogan: "From content to action.",
  copyright: "© 2026 Nuami. All rights reserved.",
};

export function buildMailto(): string {
  const subject = encodeURIComponent(contact.mailSubject);
  const body = encodeURIComponent(contact.mailBody);
  return `mailto:${site.contactEmail}?subject=${subject}&body=${body}`;
}

export function isExternalServiceReady(): boolean {
  return typeof site.serviceUrl === "string" && /^https?:\/\//.test(site.serviceUrl);
}
