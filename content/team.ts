export type TeamMember = {
  id: string;
  displayName: string;
  englishName: string | null;
  role: string | null;
  headline: string | null;
  introduction: string | null;
  highlights: string[];
  tags: string[];
  portrait: string | null;
  highlighted: boolean;
};

export const team: TeamMember[] = [
  {
    id: "junseok-choi",
    displayName: "최준석",
    englishName: "Junseok Choi",
    role: "Founder & CEO",
    headline: "문제를 발견하고, 직접 만들고, 검증합니다.",
    introduction: "풀스택 디자이너이자 프론트엔드 개발자로, 사용자 경험 연구와 서비스 구현을 연결합니다.",
    highlights: [
      "서울과학기술대학교 디자인 박사과정",
      "스타트업 디자인 리드 경험",
      "AI, UX 기반 사용자 연구와 MVP 구현",
    ],
    tags: ["경영총괄", "디자인", "개발"],
    portrait: null,
    highlighted: true,
  },
  {
    id: "siri",
    displayName: "시리",
    englishName: null,
    role: null,
    headline: null,
    introduction: null,
    highlights: [],
    tags: [],
    portrait: null,
    highlighted: true,
  },
  {
    id: "hongan-truong",
    displayName: "장홍안",
    englishName: null,
    role: "글로벌 리드",
    headline: null,
    introduction: "유학생 커뮤니티와 글로벌 네트워크를 바탕으로 현지 사용자와 서비스를 연결합니다.",
    highlights: [],
    tags: [],
    portrait: null,
    highlighted: false,
  },
  {
    id: "soyeon-lee",
    displayName: "이소연",
    englishName: null,
    role: "글로벌 매니저",
    headline: null,
    introduction: "사용자 인터뷰, 문화와 표현 검수, 현지화 지원을 통해 생활가이드의 이해도를 높입니다.",
    highlights: [],
    tags: [],
    portrait: null,
    highlighted: false,
  },
];
