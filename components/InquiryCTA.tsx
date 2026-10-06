import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { localePath, type Locale } from "@/lib/i18n";

const defaults = {
  ko: {
    title: "다음 행동을 함께 만들까요?",
    description: "대학과 기관의 협업, 서비스에 대한 질문, 새로운 연결을 기다립니다.",
    label: "문의하기",
  },
  en: {
    title: "Shall we shape the next step together?",
    description: "We welcome partnerships with universities and institutions, questions about the service and new connections.",
    label: "Contact us",
  },
} as const;

type InquiryCTAProps = {
  locale: Locale;
  title?: string;
  description?: string;
  label?: string;
  href?: string;
};

export default function InquiryCTA({
  locale,
  title = defaults[locale].title,
  description = defaults[locale].description,
  label = defaults[locale].label,
  href = localePath(locale, "/inquire_all"),
}: InquiryCTAProps) {
  return (
    <section aria-labelledby="inquiry-cta-title" className="section-y bg-white">
      <div className="container-x">
        <div className="flex flex-col items-start gap-8 rounded-[24px] bg-surface px-6 py-10 md:flex-row md:items-end md:justify-between md:px-14 md:py-14">
          <div className="max-w-[36rem]">
            <span aria-hidden className="block h-1 w-10 rounded-full bg-accent" />
            <h2 id="inquiry-cta-title" className="h2 mt-5">
              {title}
            </h2>
            <p className="lead mt-4">{description}</p>
          </div>
          <Link href={href} className="btn btn-primary shrink-0">
            {label}
            <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
