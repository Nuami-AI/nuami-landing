import type { Localized } from "@/lib/i18n";

export type AudienceId = "university" | "community";

export type Audience = {
  id: AudienceId;
  label: string;
  title: string;
  description: string;
  who: string[];
  scenes: string[];
};

export const audiences: Localized<Audience[]> = {
  ko: [
    {
      id: "university",
      label: "대학과 교육기관",
      title: "입국 초기 유학생의 학교 생활 안내를 행동 중심으로",
      description: "학교가 전하는 안내를 유학생이 실제로 준비하고 움직일 수 있는 순서로 정리합니다.",
      who: ["국제교류처", "한국어교육원", "입국 초기 유학생 안내 담당"],
      scenes: ["학교 생활", "은행 방문 준비", "기관 이용 안내"],
    },
    {
      id: "community",
      label: "지역 지원기관",
      title: "지역의 생활 적응 안내를 상황별 가이드로",
      description: "지역에서 제공하는 생활정보와 공식 안내를 외국인 주민이 이해하고 실행하기 쉬운 형태로 연결합니다.",
      who: ["외국인 지원기관", "지자체 생활 적응 안내 담당"],
      scenes: ["지역 생활정보", "방문기관 확인", "공식 안내자료 이해"],
    },
  ],
  en: [
    {
      id: "university",
      label: "Universities & schools",
      title: "Action-first campus guidance for newly arrived students",
      description: "We turn the guidance your school provides into steps international students can actually prepare for and follow.",
      who: ["International affairs offices", "Korean language institutes", "Staff supporting newly arrived students"],
      scenes: ["Campus life", "Preparing a bank visit", "Using public offices"],
    },
    {
      id: "community",
      label: "Regional support centers",
      title: "Local life guidance, organized by situation",
      description: "We connect local living information and official guidance in a form foreign residents can easily understand and act on.",
      who: ["Foreign resident support centers", "Local government settlement support staff"],
      scenes: ["Local living information", "Finding the right office", "Understanding official notices"],
    },
  ],
};

export function resolveAudience(value: string | null | undefined): AudienceId {
  return value === "university" || value === "community" ? value : "university";
}

export const scope: Localized<{ title: string; description: string }[]> = {
  ko: [
    { title: "기관 안내자료 정리", description: "반복 문의가 많은 자료와 생활 장면을 함께 확인합니다." },
    { title: "상황별 행동가이드 구성", description: "준비물, 절차, 표현, 주의사항 중심으로 정리합니다." },
    { title: "지역/기관 기준 반영", description: "공식 정보와 운영 기준을 반영할 범위를 협의합니다." },
    { title: "초기 실증과 평가", description: "이해도와 실행 가능성, 반복 문의 등 평가 기준을 정합니다." },
  ],
  en: [
    { title: "Review institutional materials", description: "We look at frequently asked materials and everyday situations together." },
    { title: "Build situation-based action guides", description: "Organized around what to bring, the steps, useful phrases and cautions." },
    { title: "Reflect local and institutional rules", description: "We agree on how official information and operating policies are reflected." },
    { title: "Pilot and evaluate", description: "We set evaluation criteria such as comprehension, actionability and repeat inquiries." },
  ],
};

export const steps: Localized<string[]> = {
  ko: ["적용 상황 확인", "자료/범위 협의", "가이드 구성", "초기 실증", "개선 논의"],
  en: ["Identify situations", "Agree on materials & scope", "Build guides", "Run a pilot", "Discuss improvements"],
};

export const outcomes: Localized<{ who: string; text: string }[]> = {
  ko: [
    { who: "유학생", text: "다음 행동과 필요한 준비를 쉽게 확인합니다." },
    { who: "기관", text: "반복 안내가 필요한 장면을 구조화합니다." },
    { who: "지역", text: "생활 적응을 위한 기관 정보를 연결합니다." },
  ],
  en: [
    { who: "Students", text: "Easily see their next step and what to prepare." },
    { who: "Institutions", text: "Structure the situations that need repeated guidance." },
    { who: "Communities", text: "Connect institutional information that helps people settle in." },
  ],
};
