import Image from "next/image";
import { ListOrdered, ShieldCheck, Sparkles } from "lucide-react";
import InquiryCTA from "@/components/InquiryCTA";
import PageHeading from "@/components/PageHeading";
import SectionHeading from "@/components/SectionHeading";
import { history, supportBase } from "@/content/history";
import { images } from "@/content/site";
import type { Locale } from "@/lib/i18n";

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const copy = {
  ko: {
    pageName: "회사소개",
    title: "낯선 순간에도, 스스로 다음 행동을 선택할 수 있도록.",
    backgroundTitle: "언어를 이해해도, 행동 기준은 낯설 수 있습니다.",
    backgroundBody:
      "한국 생활에는 검색이나 번역만으로 해결하기 어려운 순간이 있습니다. 어디에 가야 하는지, 무엇을 준비해야 하는지, 어떤 순서로 움직이고 어떻게 표현해야 하는지. 뉴아미는 외국인 유학생의 이런 질문에서 출발했습니다.",
    directionTitle: "생활 정보를 실행 가능한 안내로 바꿉니다.",
    directionBody:
      "공공데이터와 기관의 공식 안내에 사용자의 상황과 실제 생활 경험을 더합니다. 필요한 내용을 상황, 행동, 맥락으로 정리해 준비부터 현장 행동까지 연결합니다.",
    principlesHeading: "접근 원칙",
    principles: [
      { title: "근거를 확인합니다", description: "공식 안내와 기준 정보를 바탕으로 내용을 정리합니다." },
      { title: "순서를 설계합니다", description: "실제로 해야 할 행동을 중심으로 안내합니다." },
      { title: "상황을 고려합니다", description: "사용자의 언어와 생활 맥락에 맞는 이해를 돕습니다." },
    ],
    historyTitle: "히스토리",
    year: (y: number) => `${y}년`,
    month: (m: number) => `${m}월`,
    supportTitle: "함께 성장하는 기반.",
    supportDesc: "뉴아미의 제품 개발과 사업화를 뒷받침하는 입주, 지원 프로그램입니다.",
  },
  en: {
    pageName: "About",
    title: "So anyone can choose their next step, even in unfamiliar moments.",
    backgroundTitle: "You can understand the language and still not know what to do.",
    backgroundBody:
      "Life in Korea has moments that search or translation alone can't solve: where to go, what to prepare, what order to do things in and how to say it. Nuami started from these questions asked by international students.",
    directionTitle: "Turning everyday information into guidance you can act on.",
    directionBody:
      "We combine public data and official institutional guidance with each user's situation and real-life experience, organizing it into situation, action and context to connect preparation with what to do on the spot.",
    principlesHeading: "Our principles",
    principles: [
      { title: "We check the source", description: "Content is based on official guidance and reference information." },
      { title: "We design the order", description: "Guidance centers on the actions you actually need to take." },
      { title: "We consider the situation", description: "We help users understand in their own language and life context." },
    ],
    historyTitle: "History",
    year: (y: number) => `${y}`,
    month: (m: number) => monthNames[m - 1],
    supportTitle: "Growing with our partners.",
    supportDesc: "Residency and support programs backing Nuami's product development and commercialization.",
  },
};

const principleIcons = [ShieldCheck, ListOrdered, Sparkles];

export default function AboutView({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <>
      <PageHeading eyebrow="ABOUT NUAMI" pageName={t.pageName} image="city" title={t.title} />

      {/* 시작의 배경 */}
      <section aria-labelledby="background-title" className="section-y bg-white">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading id="background-title" eyebrow="BACKGROUND" title={t.backgroundTitle} />
            <p className="mt-6 text-[17px] leading-[1.8] text-ink/85 md:text-[18px]">{t.backgroundBody}</p>
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
            <SectionHeading id="direction-title" eyebrow="DIRECTION" title={t.directionTitle} />
            <p className="text-[17px] leading-[1.8] text-ink/85 md:text-[18px] lg:pt-10">{t.directionBody}</p>
          </div>
          <h3 className="sr-only">{t.principlesHeading}</h3>
          <ul className="mobile-rail mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
            {t.principles.map((p, i) => {
              const Icon = principleIcons[i];
              return (
                <li key={p.title} className="rounded-[20px] bg-white p-6 md:p-8">
                  <span className="flex items-center justify-between">
                    <span aria-hidden className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-lavender text-brand-deep">
                      <Icon size={20} />
                    </span>
                    <span aria-hidden className="text-[14px] font-extrabold text-muted">
                      0{i + 1}
                    </span>
                  </span>
                  <h4 className="mt-6 text-[20px] font-extrabold tracking-[-0.02em] md:text-[22px]">{p.title}</h4>
                  <p className="mt-2 text-[16px] text-muted">{p.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 히스토리 */}
      <section aria-labelledby="history-title" className="section-y bg-white">
        <div className="container-x">
          <SectionHeading id="history-title" eyebrow="HISTORY" title={t.historyTitle} />
          <ol className="mt-10 border-t border-ink md:mt-14">
            {history[locale].map((y) => (
              <li key={y.year} className="grid gap-5 border-b border-line py-8 md:grid-cols-[200px_1fr] md:gap-8 md:py-12 lg:grid-cols-[260px_1fr]">
                <h3 className="text-[32px] leading-none font-extrabold tracking-[-0.03em] text-brand-deep tabular-nums md:sticky md:top-[calc(var(--header-h)+32px)] md:self-start md:text-[44px]">
                  {t.year(y.year)}
                </h3>
                <ol className="flex flex-col gap-7 md:gap-9">
                  {y.months.map((m) => (
                    <li key={m.month} className="grid grid-cols-[52px_1fr] gap-3 md:grid-cols-[88px_1fr] md:gap-6">
                      <h4 className="text-[17px] leading-[1.6] font-extrabold tabular-nums md:text-[19px]">
                        {t.month(m.month)}
                        <span className="sr-only">, {t.year(y.year)}</span>
                      </h4>
                      <ul className="flex flex-col gap-4 md:gap-5">
                        {m.items.map((item) => (
                          <li key={item.text} className="relative pl-5 break-keep">
                            <span aria-hidden className="absolute top-[0.7em] left-0 h-1.5 w-1.5 bg-[#c9cdd6]" />
                            <p className="text-[16px] leading-[1.6] font-semibold text-ink md:text-[18px]">{item.text}</p>
                            {item.note ? <p className="mt-1.5 text-[14px] text-muted md:text-[15px]">{item.note}</p> : null}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 지원 기반 */}
      <section id="support" aria-labelledby="support-title" className="section-y bg-surface">
        <div className="container-x">
          <SectionHeading id="support-title" eyebrow="SUPPORT" title={t.supportTitle} description={t.supportDesc} />
          <ul className="mobile-rail mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {supportBase[locale].map((s) => (
              <li key={s.name} className="flex min-h-[160px] flex-col justify-between rounded-[20px] bg-white p-6">
                <span className="text-[17px] leading-snug font-extrabold md:text-[18px]">{s.name}</span>
                <span className="mt-4 self-start rounded-full border border-line px-3 py-1 text-[13px] font-bold text-muted">{s.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <InquiryCTA locale={locale} />
    </>
  );
}
