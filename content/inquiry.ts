export type InquiryType = "institution" | "poc" | "demo" | "other";

export const inquiryTypes: { id: InquiryType; title: string; description: string }[] = [
  { id: "institution", title: "기관 도입 협의", description: "우리 대학과 기관에 필요한 적용 방향을 이야기합니다." },
  { id: "poc", title: "실증 협업", description: "초기 테스트와 검증의 범위를 함께 살펴봅니다." },
  { id: "demo", title: "서비스 체험 문의", description: "서비스 화면과 이용 방식에 대해 문의합니다." },
  { id: "other", title: "기타 문의", description: "제휴, 미디어, 행사 등 다양한 제안을 전해주세요." },
];

export const MESSAGE_MAX = 1500;
export const MAILTO_MAX = 1800;

export function resolveInquiryType(value: string | null | undefined): InquiryType {
  if (value === "event") return "other";
  return inquiryTypes.some((t) => t.id === value) ? (value as InquiryType) : "institution";
}

export function getInquiryTitle(type: InquiryType): string {
  return inquiryTypes.find((t) => t.id === type)?.title ?? "";
}

export function buildInquirySubject(type: InquiryType): string {
  return `[뉴아미 문의] ${getInquiryTitle(type)}`;
}

export function buildInquiryBody(fields: { type: InquiryType; organization: string; name: string; message: string }): string {
  return [
    "안녕하세요, 뉴아미.",
    "",
    `문의 유형: ${getInquiryTitle(fields.type)}`,
    `기관/회사명: ${fields.organization.trim()}`,
    `담당자명: ${fields.name.trim()}`,
    "",
    "문의 내용:",
    fields.message.trim(),
  ].join("\n");
}
