export type HistoryYear = {
  year: number;
  months: { month: number; items: { text: string; note?: string }[] }[];
};

export const history: HistoryYear[] = [
  {
    year: 2026,
    months: [
      { month: 10, items: [{ text: "「FLY ASIA 2026」 전시부스 참가 (부산 벡스코)", note: "2026. 10. 07. ~ 10. 08." }] },
      {
        month: 9,
        items: [
          { text: "「2026년 제3차 초기 창업사업화 지원사업」 선정기업 및 사업화 지원" },
          { text: "KB국민카드 「데이터루트」 상권 및 지역 분석 플랫폼 연계지원" },
        ],
      },
      {
        month: 8,
        items: [
          { text: "행정안전부·한국지능정보사회진흥원 「2026년 공공데이터 활용기업 AI 연계 맞춤형 성장 지원사업」 선정기업 및 맞춤형 성장 지원" },
          { text: "키스트이노베이션 「2026년 공공기술 기반 Company Builder(COMPA)」 선정기업 및 사업화 지원" },
          { text: "주택도시보증공사·큐네스티 「HUG UP : 청년이 만드는 부산의 새로운 업(業)」 선정기업 및 사업화 지원" },
        ],
      },
      {
        month: 7,
        items: [
          { text: "부산광역시 공공데이터·AI활용 창업경진대회 우수상 (부산광역시장상)" },
          { text: "하나 소셜벤처 유니버시티 5기 수료" },
        ],
      },
      {
        month: 6,
        items: [
          { text: "고려대학교 제20회 창업입주경진대회 & KU Global StartLink 최종 2위" },
          { text: "고려대학교 서울캠퍼스타운 독립형 입주기업 선정" },
          { text: "2026 동남권 ICT이노베이션 스퀘어 부산 COA 오픈개발실 입주기업 선정" },
        ],
      },
      {
        month: 4,
        items: [{ text: "교내 ST창업동아리 선정 및 창업 지원 협약 체결", note: "협약기간: 2026. 04. 01. ~ 2027. 02. 28." }],
      },
    ],
  },
  {
    year: 2025,
    months: [{ month: 12, items: [{ text: "상표 출원 완료" }] }],
  },
];

export const supportBase = [
  { name: "고려대학교 캠퍼스타운", status: "입주" },
  { name: "HUG UP: 청년이 만드는 부산의 새로운 업", status: "선정" },
  { name: "공공데이터 활용기업 AI 연계 맞춤형 성장 지원사업", status: "선정" },
  { name: "공공기술 기반 Company Builder", status: "선정" },
];
