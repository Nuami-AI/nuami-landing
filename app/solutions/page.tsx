import type { Metadata } from "next";
import { ArrowRight, FileText } from "lucide-react";
import AudienceTabs from "@/components/AudienceTabs";
import InquiryCTA from "@/components/InquiryCTA";
import PageHeading from "@/components/PageHeading";
import SectionHeading from "@/components/SectionHeading";
import { seo } from "@/content/site";
import { outcomes, scope, steps } from "@/content/solutions";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({ ...seo.solutions, path: "/solutions" });

const exampleGuide = [
  { label: "Situation", text: "방문할 은행과 지점의 준비사항을 먼저 확인해요." },
  { label: "Action", text: "지점 안내 확인 → 필요한 서류 준비 → 창구에서 계좌 개설 문의." },
  { label: "Context", text: "‘외국인 유학생인데 어떤 서류가 필요한가요?’라고 미리 문의할 수 있어요." },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHeading
        eyebrow="SOLUTIONS"
        pageName="솔루션"
        title="우리 기관의 안내를, 유학생의 다음 행동으로."
        description="대학과 지역기관이 가진 안내자료를 생활 장면별 행동가이드로 연결하는 적용 방향을 함께 설계합니다."
      >
        <p className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[14px] font-bold text-white backdrop-blur-sm">
          <span aria-hidden className="h-2 w-2 rounded-full bg-accent" />
          기관 협업 및 실증 준비
        </p>
      </PageHeading>

      {/* 적용 대상 */}
      <section aria-labelledby="audience-title" className="section-y bg-white">
        <div className="container-x">
          <SectionHeading id="audience-title" eyebrow="WHO IT'S FOR" title="적용 대상" description="기관의 역할과 유학생이 마주하는 장면에 맞춰 적용 방향을 정합니다." />
          <AudienceTabs />
        </div>
      </section>

      {/* 협업 범위 */}
      <section aria-labelledby="scope-title" className="section-y bg-surface">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <SectionHeading id="scope-title" eyebrow="SCOPE" title="함께 정하는 협업 범위" />
          <dl className="grid gap-4 sm:grid-cols-2">
            {scope.map((s, i) => (
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
          <SectionHeading
            id="example-title"
            eyebrow="EXAMPLE"
            title="기관 안내자료가 행동가이드가 되면"
            description="기대 적용 방식을 보여주는 예시입니다. 실제 기관 자료나 도입 결과가 아닙니다."
          />
          <div className="mt-10 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1.2fr] md:gap-6">
            <div className="rounded-[20px] border border-line bg-surface p-6 md:p-8">
              <p className="flex items-center gap-2 text-[14px] font-bold text-muted">
                <FileText size={16} aria-hidden />
                기관 안내자료 (일반 예시)
              </p>
              <h3 className="mt-4 text-[19px] font-extrabold md:text-[21px]">외국인 유학생 은행 계좌 개설 안내</h3>
              <p className="mt-3 text-[16px] leading-[1.8] text-ink/80">
                은행 방문 시 신분 확인을 위한 서류를 지참해야 합니다. 필요 서류와 개설 조건은 은행 및 지점에 따라 다를 수 있으므로 방문 전 확인하시기 바랍니다.
              </p>
            </div>
            <div aria-hidden className="flex items-center justify-center text-brand-deep">
              <ArrowRight size={28} className="rotate-90 md:rotate-0" />
            </div>
            <div className="rounded-[20px] border-2 border-brand bg-white p-6 md:p-8">
              <p className="text-[14px] font-bold text-brand-deep">상황별 행동가이드 (기대 적용 방식)</p>
              <h3 className="mt-4 text-[19px] font-extrabold md:text-[21px]">한국에서 은행 계좌를 만들고 싶어요</h3>
              <ol className="mt-4 flex flex-col gap-3">
                {exampleGuide.map((g) => (
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
          <SectionHeading
            id="process-title"
            eyebrow="PROCESS"
            title="협업 절차"
            description="소개를 위한 일반적인 절차이며, 확정된 일정이나 계약 조건이 아닙니다."
          />
          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, i) => (
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
          <SectionHeading id="outcome-title" eyebrow="DIRECTION" title="함께 기대하는 방향" />
          <ul className="mt-10 grid border-t border-line md:grid-cols-3">
            {outcomes.map((o, i) => (
              <li key={o.who} className={`border-b border-line py-7 md:border-b-0 md:py-9 ${i > 0 ? "md:border-l md:pl-8" : ""} ${i < 2 ? "md:pr-8" : ""}`}>
                <h3 className="text-[20px] font-extrabold md:text-[22px]">{o.who}</h3>
                <p className="mt-2 text-[16px] text-muted">{o.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <InquiryCTA
        title="우리 기관에 맞는 적용 방향이 궁금하다면"
        description="기관의 안내 상황과 유학생이 자주 묻는 장면을 함께 살펴봅니다."
        label="기관 도입과 실증 협의하기"
        href="/inquire_all?type=institution"
      />
    </>
  );
}
