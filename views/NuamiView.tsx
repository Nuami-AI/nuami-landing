import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Coffee, GraduationCap, Landmark } from "lucide-react";
import GuideDemo from "@/components/GuideDemo";
import PageHeading from "@/components/PageHeading";
import SectionHeading from "@/components/SectionHeading";
import { images, isExternalServiceReady, productImageAlt, site } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";

const copy = {
  ko: {
    pageName: "AI 생활 행동가이드",
    title: "지금 필요한 행동을, 한눈에 이해할 수 있도록.",
    description: "상황을 입력하면 필요한 준비와 행동 순서, 놓치기 쉬운 맥락을 함께 살펴볼 수 있도록 돕습니다.",
    service: "서비스 이용하기",
    newWindow: "(새 창)",
    seeExample: "가이드 예시 보기",
    demo: "서비스 체험 문의",
    screens: "서비스 화면",
    demoTitle: "상황, 행동, 맥락. 세\u00a0장으로 연결합니다.",
    scenesTitle: "생활의 여러 순간에 필요한 가이드.",
    stepsLabel: (title: string) => `${title} 행동 순서 예시`,
    scenes: [
      {
        title: "학교 생활",
        description: "수업, 교수님 연락, 학교 시설 이용처럼 처음 마주하는 학교의 순간을 준비합니다.",
        steps: ["면담 목적 정리", "메일 제목과 순서", "정중한 표현"],
      },
      {
        title: "은행 방문",
        description: "계좌 개설처럼 준비물과 순서가 중요한 생활 업무를 미리 살펴봅니다.",
        steps: ["지점 안내 확인", "필요 서류 준비", "창구에서 문의"],
      },
      {
        title: "카페와 식당 이용",
        description: "주문, 좌석, 매장 이용 기준처럼 장소마다 다를 수 있는 일상의 장면을 안내합니다.",
        steps: ["이용 안내 확인", "주문", "좌석 확인"],
      },
    ],
    basisTitle: "공식정보에, 실제 생활의 맥락을 더합니다.",
    basis: [
      { title: "공공데이터와 기관 안내", description: "공식 안내와 기준 정보를 출발점으로 삼습니다." },
      { title: "사용자 상황 이해", description: "사용자가 처한 상황과 언어, 지금 필요한 것을 살펴봅니다." },
      { title: "행동 순서와 맥락 안내", description: "준비할 것, 행동 순서, 놓치기 쉬운 맥락을 함께 정리합니다." },
    ],
    nextHeading: "다음으로 볼 내용",
    nextSolutions: { title: "대학과 기관에 적용하기", description: "기관 안내자료를 생활 행동가이드로 연결하는 방향을 소개합니다." },
    nextDemo: { title: "서비스 체험 문의", description: "서비스 화면과 이용 방식에 대해 문의해주세요." },
  },
  en: {
    pageName: "AI life action guide",
    title: "See the action you need right now, at a glance.",
    description: "Describe your situation and Nuami helps you see what to prepare, what to do in what order, and the context that's easy to miss.",
    service: "Use the service",
    newWindow: "(opens in a new window)",
    seeExample: "See a guide example",
    demo: "Request a demo",
    screens: "Service screens",
    demoTitle: "Situation, action, context. Connected in three\u00a0cards.",
    scenesTitle: "Guides for many moments of everyday life.",
    stepsLabel: (title: string) => `Example steps for ${title}`,
    scenes: [
      {
        title: "Campus life",
        description: "Prepare for first-time moments at school, like classes, contacting professors and using campus facilities.",
        steps: ["Clarify the purpose", "Subject line and structure", "Polite phrasing"],
      },
      {
        title: "Bank visits",
        description: "Look ahead at everyday tasks where documents and order matter, like opening an account.",
        steps: ["Check branch info", "Prepare documents", "Ask at the counter"],
      },
      {
        title: "Cafés and restaurants",
        description: "Guidance for everyday scenes that differ from place to place, like ordering, seating and house rules.",
        steps: ["Check the rules", "Order", "Find a seat"],
      },
    ],
    basisTitle: "Official information, plus the context of real life.",
    basis: [
      { title: "Public data and institutional guidance", description: "Official guidance and reference information are our starting point." },
      { title: "Understanding the user's situation", description: "We look at the user's situation, language and what they need right now." },
      { title: "Steps and context", description: "We bring together what to prepare, the order of actions and easy-to-miss context." },
    ],
    nextHeading: "What to explore next",
    nextSolutions: { title: "For universities and institutions", description: "How institutional materials become life action guides." },
    nextDemo: { title: "Request a demo", description: "Ask us about the service screens and how it works." },
  },
};

const sceneIcons = [GraduationCap, Landmark, Coffee];

export default function NuamiView({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const lp = (href: string) => localePath(locale, href);
  const serviceReady = isExternalServiceReady();

  return (
    <>
      <PageHeading eyebrow="NUAMI" pageName={t.pageName} image="product" title={t.title} description={t.description}>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          {serviceReady ? (
            <a href={site.serviceUrl!} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {t.service}
              <ArrowUpRight size={18} aria-hidden />
              <span className="sr-only">{t.newWindow}</span>
            </a>
          ) : null}
          <a href="#guide-demo" className={`btn ${serviceReady ? "btn-outline" : "btn-primary"}`}>
            {t.seeExample}
            <ArrowDown size={18} aria-hidden />
          </a>
          <Link href={`${lp("/inquire_all")}?type=demo`} className="btn btn-outline">
            {t.demo}
          </Link>
        </div>
      </PageHeading>

      {/* 제품 이미지 */}
      <section aria-label={t.screens} className="bg-white pt-10 md:pt-16">
        <div className="container-media">
          <div className="overflow-hidden rounded-[20px] md:rounded-[24px]">
            <Image
              src={images.product.src}
              width={images.product.width}
              height={images.product.height}
              alt={productImageAlt[locale]}
              priority
              sizes="(min-width: 1440px) 1344px, 100vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* 3-Card 데모 */}
      <section id="guide-demo" aria-labelledby="guide-demo-title" className="section-y bg-white">
        <div className="container-x">
          <SectionHeading id="guide-demo-title" eyebrow="3-CARD GUIDE" title={t.demoTitle} />
          <GuideDemo locale={locale} />
        </div>
      </section>

      {/* 생활 장면 */}
      <section aria-labelledby="scenes-title" className="section-y bg-surface">
        <div className="container-x">
          <SectionHeading id="scenes-title" eyebrow="LIFE SCENES" title={t.scenesTitle} />
          <ul className="mobile-rail mt-10 flex flex-col gap-4">
            {t.scenes.map((s, i) => {
              const Icon = sceneIcons[i];
              return (
                <li key={s.title} className="grid items-center gap-6 rounded-[20px] bg-white p-6 md:grid-cols-[auto_1fr_1.1fr] md:gap-10 md:p-9">
                  <span aria-hidden className="inline-flex h-14 w-14 items-center justify-center rounded-[16px] bg-lavender text-brand-deep">
                    <Icon size={26} />
                  </span>
                  <div>
                    <p aria-hidden className="text-[13px] font-extrabold text-muted">
                      0{i + 1}
                    </p>
                    <h3 className="mt-1 text-[22px] font-extrabold tracking-[-0.02em] md:text-[26px]">{s.title}</h3>
                    <p className="mt-2 text-[16px] text-muted">{s.description}</p>
                  </div>
                  <ol className="flex flex-wrap items-center gap-2" aria-label={t.stepsLabel(s.title)}>
                    {s.steps.map((step, si) => (
                      <li key={step} className="flex items-center gap-2">
                        <span className="rounded-full border border-line bg-white px-3.5 py-2 text-[14px] font-semibold md:text-[15px]">{step}</span>
                        {si < s.steps.length - 1 ? <ArrowRight size={16} aria-hidden className="text-accent" /> : null}
                      </li>
                    ))}
                  </ol>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 안내의 근거 */}
      <section aria-labelledby="basis-title" className="section-y bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <SectionHeading id="basis-title" eyebrow="HOW WE GUIDE" title={t.basisTitle} />
          </div>
          <ol className="border-t border-ink">
            {t.basis.map((b, i) => (
              <li key={b.title} className="grid grid-cols-[48px_1fr] gap-4 border-b border-line py-6 md:grid-cols-[64px_1fr] md:py-8">
                <span className="text-[20px] font-extrabold text-brand-deep md:text-[24px]">0{i + 1}</span>
                <div>
                  <h3 className="text-[19px] font-extrabold md:text-[22px]">{b.title}</h3>
                  <p className="mt-1.5 text-[16px] text-muted">{b.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 다음 경로 */}
      <section aria-labelledby="next-title" className="section-y bg-white pt-0 md:pt-0">
        <div className="container-x">
          <h2 id="next-title" className="sr-only">
            {t.nextHeading}
          </h2>
          <div className="mobile-rail grid gap-4 md:grid-cols-2">
            <Link href={lp("/solutions")} className="group flex flex-col justify-between gap-8 rounded-[20px] bg-surface p-7 md:p-10">
              <span>
                <span className="eyebrow">FOR INSTITUTIONS</span>
                <span className="mt-3 block text-[22px] font-extrabold tracking-[-0.02em] md:text-[28px]">{t.nextSolutions.title}</span>
                <span className="mt-2 block text-[16px] text-muted">{t.nextSolutions.description}</span>
              </span>
              <ArrowRight size={22} aria-hidden className="text-brand-deep transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href={`${lp("/inquire_all")}?type=demo`} className="group flex flex-col justify-between gap-8 rounded-[20px] bg-surface p-7 md:p-10">
              <span>
                <span className="eyebrow">CONTACT</span>
                <span className="mt-3 block text-[22px] font-extrabold tracking-[-0.02em] md:text-[28px]">{t.nextDemo.title}</span>
                <span className="mt-2 block text-[16px] text-muted">{t.nextDemo.description}</span>
              </span>
              <ArrowRight size={22} aria-hidden className="text-brand-deep transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
