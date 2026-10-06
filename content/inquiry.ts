import type { Locale, Localized } from "@/lib/i18n";

export type InquiryType = "institution" | "poc" | "demo" | "other";

export const inquiryTypes: { id: InquiryType; title: string; description: string }[] = [
  { id: "institution", title: "기관 도입 협의", description: "우리 대학과 기관에 필요한 적용 방향을 이야기합니다." },
  { id: "poc", title: "실증 협업", description: "초기 테스트와 검증의 범위를 함께 살펴봅니다." },
  { id: "demo", title: "서비스 체험 문의", description: "서비스 화면과 이용 방식에 대해 문의합니다." },
  { id: "other", title: "기타 문의", description: "제휴, 미디어, 행사 등 다양한 제안을 전해주세요." },
];

export const MESSAGE_MAX = 1500;
export const ORGANIZATION_MAX = 100;
export const NAME_MAX = 50;
export const EMAIL_MAX = 254;

export type InquiryFields = {
  type: InquiryType;
  organization: string;
  name: string;
  email: string;
  message: string;
};

export type InquiryErrors = Partial<Record<"organization" | "name" | "email" | "message", string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isInquiryType(value: unknown): value is InquiryType {
  return inquiryTypes.some((t) => t.id === value);
}

export const inquiryTypeCopy: Localized<{ id: InquiryType; title: string; description: string }[]> = {
  ko: inquiryTypes,
  en: [
    { id: "institution", title: "Institutional adoption", description: "Talk about how Nuami could work for your university or organization." },
    { id: "poc", title: "Pilot collaboration", description: "Explore the scope of an early test and validation together." },
    { id: "demo", title: "Service demo", description: "Ask about the service screens and how it works." },
    { id: "other", title: "Other inquiries", description: "Partnerships, media, events and any other proposals." },
  ],
};

const validationCopy = {
  ko: {
    organization: "기관/회사명을 입력해주세요.",
    name: "담당자명을 입력해주세요.",
    email: "이메일을 입력해주세요.",
    emailInvalid: "올바른 이메일 주소를 입력해주세요.",
    message: "문의 내용을 입력해주세요.",
    tooLong: (max: number) => `${max.toLocaleString()}자 이내로 입력해주세요.`,
  },
  en: {
    organization: "Please enter your organization or company name.",
    name: "Please enter your name.",
    email: "Please enter your email.",
    emailInvalid: "Please enter a valid email address.",
    message: "Please enter your message.",
    tooLong: (max: number) => `Please keep it within ${max.toLocaleString()} characters.`,
  },
};

export function validateInquiry(fields: Omit<InquiryFields, "type">, locale: Locale = "ko"): InquiryErrors {
  const t = validationCopy[locale];
  const errors: InquiryErrors = {};
  const organization = fields.organization.trim();
  const name = fields.name.trim();
  const email = fields.email.trim();
  const message = fields.message.trim();

  if (!organization) errors.organization = t.organization;
  else if (organization.length > ORGANIZATION_MAX) errors.organization = t.tooLong(ORGANIZATION_MAX);

  if (!name) errors.name = t.name;
  else if (name.length > NAME_MAX) errors.name = t.tooLong(NAME_MAX);

  if (!email) errors.email = t.email;
  else if (email.length > EMAIL_MAX || !EMAIL_PATTERN.test(email)) errors.email = t.emailInvalid;

  if (!message) errors.message = t.message;
  else if (message.length > MESSAGE_MAX) errors.message = t.tooLong(MESSAGE_MAX);

  return errors;
}

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

export function buildInquiryBody(fields: InquiryFields): string {
  return [
    `문의 유형: ${getInquiryTitle(fields.type)}`,
    `기관/회사명: ${fields.organization.trim()}`,
    `담당자명: ${fields.name.trim()}`,
    `이메일: ${fields.email.trim()}`,
    "",
    "문의 내용:",
    fields.message.trim(),
  ].join("\n");
}
