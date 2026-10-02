import type { Metadata } from "next";
import Image from "next/image";
import { ListOrdered, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import InquiryCTA from "@/components/InquiryCTA";
import PageHeading from "@/components/PageHeading";
import SectionHeading from "@/components/SectionHeading";
import { history, historyNote, supportBase } from "@/content/history";
import { images, offices, seo } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({ ...seo.about, path: "/about" });

const principles = [
  { icon: ShieldCheck, title: "근거를 확인합니다", description: "공식 안내와 기준 정보를 바탕으로 내용을 정리합니다." },
  { icon: ListOrdered, title: "순서를 설계합니다", description: "실제로 해야 할 행동을 중심으로 안내합니다." },
  { icon: Sparkles, title: "상황을 고려합니다", description: "사용자의 언어와 생활 맥락에 맞는 이해를 돕습니다." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeading eyebrow="ABOUT NUAMI" pageName="회사소개" image="city" title="낯선 순간에도, 스스로 다음 행동을 선택할 수 있도록." />

      {/* 시작의 배경 */}
      <section aria-labelledby="background-title" className="section-y bg-white">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading id="background-title" eyebrow="BACKGROUND" title="언어를 이해해도, 행동 기준은 낯설 수 있습니다." />
            <p className="mt-6 text-[17px] leading-[1.8] text-ink/85 md:text-[18px]">
              한국 생활에는 검색이나 번역만으로 해결하기 어려운 순간이 있습니다. 어디에 가야 하는지, 무엇을 준비해야 하는지, 어떤 순서로 움직이고 어떻게
              표현해야 하는지. 뉴아미는 외국인 유학생의 이런 질문에서 출발했습니다.
            </p>
          </div>
          <div className="overflow-hidden rounded-[24px] bg-surface">
            <Image
              src={images.city.src}
              width={images.city.width}
              height={images.city.height}
              alt=""
              sizes="(min-width: 1024px) 640px, 100vw"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 방향과 원칙 */}
      <section aria-labelledby="direction-title" className="section-y bg-surface">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
            <SectionHeading id="direction-title" eyebrow="DIRECTION" title="생활 정보를 실행 가능한 안내로 바꿉니다." />
            <p className="text-[17px] leading-[1.8] text-ink/85 md:text-[18px] lg:pt-10">
              공공데이터와 기관의 공식 안내에 사용자의 상황과 실제 생활 경험을 더합니다. 필요한 내용을 상황, 행동, 맥락으로 정리해 준비부터 현장 행동까지
              연결합니다.
            </p>
          </div>
          <h3 className="sr-only">접근 원칙</h3>
          <ul className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
            {principles.map((p, i) => (
              <li key={p.title} className="rounded-[20px] bg-white p-6 md:p-8">
                <span className="flex items-center justify-between">
                  <span aria-hidden className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-lavender text-brand-deep">
                    <p.icon size={20} />
                  </span>
                  <span aria-hidden className="text-[14px] font-extrabold text-muted">
                    0{i + 1}
                  </span>
                </span>
                <h4 className="mt-6 text-[20px] font-extrabold tracking-[-0.02em] md:text-[22px]">{p.title}</h4>
                <p className="mt-2 text-[16px] text-muted">{p.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 연혁 */}
      <section aria-labelledby="history-title" className="section-y bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div>
            <SectionHeading id="history-title" eyebrow="HISTORY" title="연혁" />
            <p className="mt-4 text-[14px] text-muted">{historyNote}</p>
          </div>
          <ol className="border-t border-ink">
            {history.map((h) => (
              <li key={h.text} className="grid grid-cols-[72px_1fr] gap-4 border-b border-line py-5 md:grid-cols-[110px_1fr] md:py-6">
                <span className="text-[15px] font-extrabold text-brand-deep md:text-[17px]">{h.when}</span>
                <span className="text-[16px] font-semibold md:text-[18px]">{h.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 지원 기반 */}
      <section id="support" aria-labelledby="support-title" className="section-y bg-surface">
        <div className="container-x">
          <SectionHeading
            id="support-title"
            eyebrow="SUPPORT"
            title="함께 성장하는 기반."
            description="뉴아미의 제품 개발과 사업화를 뒷받침하는 입주, 지원 프로그램입니다."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {supportBase.map((s) => (
              <li key={s.name} className="flex min-h-[160px] flex-col justify-between rounded-[20px] bg-white p-6">
                <span className="text-[17px] leading-snug font-extrabold md:text-[18px]">{s.name}</span>
                <span className="mt-4 self-start rounded-full border border-line px-3 py-1 text-[13px] font-bold text-muted">{s.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 사업장 */}
      <section aria-labelledby="office-title" className="section-y bg-white pb-0 md:pb-0">
        <div className="container-x">
          <SectionHeading id="office-title" eyebrow="OFFICES" title="사업장" />
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {offices.map((o) => (
              <li key={o.label} className="flex gap-4 rounded-[20px] border border-line p-6 md:p-8">
                <MapPin size={22} aria-hidden className="mt-0.5 shrink-0 text-brand-deep" />
                <div>
                  <h3 className="text-[18px] font-extrabold">{o.label}</h3>
                  <p className="mt-1 text-[16px] text-muted">{o.address}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <InquiryCTA />
    </>
  );
}
