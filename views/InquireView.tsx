import InquiryComposer from "@/components/InquiryComposer";
import PageHeading from "@/components/PageHeading";
import type { Locale } from "@/lib/i18n";

const copy = {
  ko: {
    pageName: "문의",
    title: "다음 행동을 함께 만들까요?",
    description: "기관 적용과 실증 협업, 서비스 체험, 새로운 제안을 기다립니다.",
    formLabel: "문의 작성",
  },
  en: {
    pageName: "Contact",
    title: "Shall we shape the next step together?",
    description: "We welcome institutional partnerships, pilot collaborations, service demos and new proposals.",
    formLabel: "Inquiry form",
  },
};

export default function InquireView({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <>
      <PageHeading eyebrow="CONTACT NUAMI" pageName={t.pageName} title={t.title} description={t.description} />
      <section aria-label={t.formLabel} className="bg-white pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="container-x">
          <InquiryComposer locale={locale} />
        </div>
      </section>
    </>
  );
}
