import { ArrowRight, FileText } from "lucide-react";
import AudienceTabs from "@/components/AudienceTabs";
import InquiryCTA from "@/components/InquiryCTA";
import PageHeading from "@/components/PageHeading";
import SectionHeading from "@/components/SectionHeading";
import { outcomes, scope, steps } from "@/content/solutions";
import { localePath, type Locale } from "@/lib/i18n";

const copy = {
  ko: {
    pageName: "솔루션",
    title: "우리 기관의 안내를, 유학생의 다음 행동으로.",
    description: "대학과 지역기관이 가진 안내자료를 생활 장면별 행동가이드로 연결하는 적용 방향을 함께 설계합니다.",
    badge: "기관 협업 및 실증 준비",
    audienceTitle: "적용 대상",
    audienceDesc: "기관의 역할과 유학생이 마주하는 장면에 맞춰 적용 방향을 정합니다.",
    scopeTitle: "함께 정하는 협업 범위",
    exampleTitle: "기관 안내자료가 행동가이드가 되면",
    sourceLabel: "기관 안내자료 (일반 예시)",
    sourceTitle: "외국인 유학생 은행 계좌 개설 안내",
    sourceBody:
      "은행 방문 시 신분 확인을 위한 서류를 지참해야 합니다. 필요 서류와 개설 조건은 은행 및 지점에 따라 다를 수 있으므로 방문 전 확인하시기 바랍니다.",
    guideLabel: "상황별 행동가이드 (기대 적용 방식)",
    guideTitle: "한국에서 은행 계좌를 만들고 싶어요",
    exampleGuide: [
      { label: "Situation", text: "방문할 은행과 지점의 준비사항을 먼저 확인해요." },
      { label: "Action", text: "지점 안내 확인 → 필요한 서류 준비 → 창구에서 계좌 개설 문의." },
      { label: "Context", text: "‘외국인 유학생인데 어떤 서류가 필요한가요?’라고 미리 문의할 수 있어요." },
    ],
    processTitle: "협업 절차",
    outcomeTitle: "함께 기대하는 방향",
    ctaTitle: "우리 기관에 맞는 적용 방향이 궁금하다면",
    ctaDesc: "기관의 안내 상황과 유학생이 자주 묻는 장면을 함께 살펴봅니다.",
    ctaLabel: "기관 도입과 실증 협의하기",
  },
  en: {
    pageName: "Solutions",
    title: "Turn your institution's guidance into students' next steps.",
    description: "Together we design how the guidance materials of universities and regional institutions become action guides for everyday situations.",
    badge: "Open to partnerships and pilots",
    audienceTitle: "Who it's for",
    audienceDesc: "We shape the approach around your institution's role and the situations students face.",
    scopeTitle: "A collaboration scope we define together",
    exampleTitle: "When an institutional notice becomes an action guide",
    sourceLabel: "Institutional notice (generic example)",
    sourceTitle: "Opening a bank account as an international student",
    sourceBody:
      "Please bring identification documents when visiting the bank. Required documents and account conditions may vary by bank and branch, so please check before your visit.",
    guideLabel: "Situation-based action guide (intended approach)",
    guideTitle: "I want to open a bank account in Korea",
    exampleGuide: [
      { label: "Situation", text: "First check what your bank and branch require." },
      { label: "Action", text: "Check the branch info → prepare documents → ask about opening an account at the counter." },
      { label: "Context", text: "You can ask ahead: “I'm an international student. What documents do I need?”" },
    ],
    processTitle: "How we work together",
    outcomeTitle: "What we hope to achieve together",
    ctaTitle: "Curious how this could work for your institution?",
    ctaDesc: "Let's look at your guidance needs and the questions students ask most often.",
    ctaLabel: "Discuss adoption and pilots",
  },
};

export default function SolutionsView({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <>
      <PageHeading eyebrow="SOLUTIONS" pageName={t.pageName} title={t.title} description={t.description}>
        <p className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[14px] font-bold text-white backdrop-blur-sm">
          <span aria-hidden className="h-2 w-2 rounded-full bg-accent" />
          {t.badge}
        </p>
      </PageHeading>

      {/* 적용 대상 */}
      <section aria-labelledby="audience-title" className="section-y bg-white">
        <div className="container-x">
          <SectionHeading id="audience-title" eyebrow="WHO IT'S FOR" title={t.audienceTitle} description={t.audienceDesc} />
          <AudienceTabs locale={locale} />
        </div>
      </section>

      {/* 협업 범위 */}
      <section aria-labelledby="scope-title" className="section-y bg-surface">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <SectionHeading id="scope-title" eyebrow="SCOPE" title={t.scopeTitle} />
          <dl className="mobile-rail grid gap-4 sm:grid-cols-2">
            {scope[locale].map((s, i) => (
              <div key={s.title} className="rounded-[20px] bg-white p-6 md:p-7">
                <dt>
                  <span aria-hidden className="block text-[13px] font-extrabold text-brand-deep">
                    0{i + 1}
                  </span>
                  <span className="mt-2 block text-[19px] font-extrabold md:text-[20px]">{s.title}</span>
                </dt>
                <dd className="mt-2 text-[16px] text-muted">{s.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 적용 장면 예시 */}
      <section aria-labelledby="example-title" className="section-y bg-white">
        <div className="container-x">
          <SectionHeading id="example-title" eyebrow="EXAMPLE" title={t.exampleTitle} />
          <div className="mt-10 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1.2fr] md:gap-6">
            <div className="rounded-[20px] border border-line bg-surface p-6 md:p-8">
              <p className="flex items-center gap-2 text-[14px] font-bold text-muted">
                <FileText size={16} aria-hidden />
                {t.sourceLabel}
              </p>
              <h3 className="mt-4 text-[19px] font-extrabold md:text-[21px]">{t.sourceTitle}</h3>
              <p className="mt-3 text-[16px] leading-[1.8] text-ink/80">{t.sourceBody}</p>
            </div>
            <div aria-hidden className="flex items-center justify-center text-brand-deep">
              <ArrowRight size={28} className="rotate-90 md:rotate-0" />
            </div>
            <div className="rounded-[20px] border-2 border-brand bg-white p-6 md:p-8">
              <p className="text-[14px] font-bold text-brand-deep">{t.guideLabel}</p>
              <h3 className="mt-4 text-[19px] font-extrabold md:text-[21px]">{t.guideTitle}</h3>
              <ol className="mt-4 flex flex-col gap-3">
                {t.exampleGuide.map((g) => (
                  <li key={g.label} className="rounded-[14px] bg-surface p-4">
                    <span className="text-[12px] font-extrabold tracking-[0.12em] text-brand-deep uppercase">{g.label}</span>
                    <p className="mt-1 text-[15px] font-semibold md:text-[16px]">{g.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 협업 절차 */}
      <section aria-labelledby="process-title" className="section-y bg-surface">
        <div className="container-x">
          <SectionHeading id="process-title" eyebrow="PROCESS" title={t.processTitle} />
          <ol className="mobile-rail mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {steps[locale].map((step, i) => (
              <li key={step} className="flex items-center gap-4 rounded-[18px] bg-white p-5 lg:flex-col lg:items-start lg:p-6">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lavender text-[15px] font-extrabold text-brand-deep">
                  {i + 1}
                </span>
                <span className="text-[17px] font-extrabold">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 기대 방향 */}
      <section aria-labelledby="outcome-title" className="section-y bg-white pb-0 md:pb-0">
        <div className="container-x">
          <SectionHeading id="outcome-title" eyebrow="DIRECTION" title={t.outcomeTitle} />
          <ul className="mobile-rail mt-10 grid border-t border-line md:grid-cols-3">
            {outcomes[locale].map((o, i) => (
              <li key={o.who} className={`border-b border-line py-7 md:border-b-0 md:py-9 ${i > 0 ? "md:border-l md:pl-8" : ""} ${i < 2 ? "md:pr-8" : ""}`}>
                <h3 className="text-[20px] font-extrabold md:text-[22px]">{o.who}</h3>
                <p className="mt-2 text-[16px] text-muted">{o.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <InquiryCTA
        locale={locale}
        title={t.ctaTitle}
        description={t.ctaDesc}
        label={t.ctaLabel}
        href={`${localePath(locale, "/inquire_all")}?type=institution`}
      />
    </>
  );
}
