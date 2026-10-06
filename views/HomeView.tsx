import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, Compass, GraduationCap, MessageSquare } from "lucide-react";
import InquiryCTA from "@/components/InquiryCTA";
import NewsCard from "@/components/NewsCard";
import SectionHeading from "@/components/SectionHeading";
import { getPublishedNews } from "@/content/news";
import { guideCards, images, isExternalServiceReady, site } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";

const copy = {
  ko: {
    badge: "외국인 유학생을 위한 AI 생활 행동가이드",
    heroTitle: (
      <>
        낯선 한국 생활,
        <br />
        <span className="text-[#ad8bff]">다음 행동</span>을 안내합니다.
      </>
    ),
    heroLead: "뉴아미는 외국인 유학생이 한국 생활의 정보를 실제 행동으로 옮길 수 있도록 돕는 AI 생활 행동가이드입니다.",
    service: "서비스 이용하기",
    newWindow: "(새 창)",
    learn: "뉴아미 알아보기",
    partner: "기관 협업 문의",
    previewTitle: "정보를 찾는 것에서, 행동하는 것으로.",
    previewDesc: "상황, 행동, 맥락을 세 장의 카드로 정리합니다.",
    examplePrefix: "예시: ",
    previewExamples: {
      situation: { name: "지금의 상황", example: "노트북 사용 가능 여부와 좌석을 먼저 확인해요." },
      action: { name: "해야 할 행동", example: "음료 주문 → 좌석 확인 → 필요하면 직원에게 문의." },
      context: { name: "미리 알 맥락", example: "‘노트북을 사용해도 괜찮을까요?’라고 물어볼 수 있어요." },
    },
    explore3Card: "3-Card 살펴보기",
    missionTitle: "정보를 찾은 다음이 더 어려울 때.",
    questions: ["은행에 가기 전에 뭘 준비해야 하지?", "카페에서 오래 공부해도 괜찮을까?", "교수님께 어떤 말로 연락해야 하지?"],
    missionBody: "번역된 문장만으로는 알기 어려운 준비물, 행동 순서, 문화적 맥락.",
    missionAccent: "뉴아미는 그 사이를 연결합니다.",
    origin: "뉴아미의 시작",
    solutionTitle: "유학생의 다음 행동, 기관의 더 나은 안내.",
    solutionDesc: "대학과 기관의 안내자료를 유학생이 이해하고 실행할 수 있는 생활 행동가이드로 연결합니다.",
    solutionBlocks: [
      {
        title: "대학과 교육기관",
        description: "국제교류처와 한국어교육원의 입국 초기 안내를 유학생의 행동 순서로 연결합니다.",
        scenes: ["학교 생활 안내", "은행 방문 준비"],
      },
      {
        title: "지역의 외국인 지원기관",
        description: "지역의 생활정보와 공식 안내자료를 이해하고 실행하기 쉬운 가이드로 정리합니다.",
        scenes: ["지역 생활정보 안내", "방문기관 확인"],
      },
    ],
    seeDirection: "적용 방향 보기",
    milestonesTitle: "아이디어를 실제 발걸음으로.",
    achievements: [
      { title: "부산광역시장상", description: "부산 공공데이터, AI 활용 창업경진대회 우수상" },
      { title: "KU Global StartLink", description: "최종 2위" },
      { title: "고려대학교 캠퍼스타운", description: "입주" },
    ],
    newsTitle: "뉴아미의 새로운 발걸음.",
    allNews: "전체 뉴스 보기",
  },
  en: {
    badge: "An AI life action guide for international students",
    heroTitle: (
      <>
        Life in Korea,
        <br />
        one <span className="text-[#ad8bff]">next step</span> at a time.
      </>
    ),
    heroLead: "Nuami is an AI life action guide that helps international students turn information about life in Korea into real action.",
    service: "Use the service",
    newWindow: "(opens in a new window)",
    learn: "Discover Nuami",
    partner: "Partner with us",
    previewTitle: "From finding information to taking action.",
    previewDesc: "Situation, action and context, organized into three cards.",
    examplePrefix: "Example: ",
    previewExamples: {
      situation: { name: "Your situation", example: "First check whether laptops are allowed and find a seat." },
      action: { name: "What to do", example: "Order a drink → find a seat → ask staff if needed." },
      context: { name: "Good to know", example: "You can ask, “노트북을 사용해도 괜찮을까요?” (Is it okay to use my laptop?)" },
    },
    explore3Card: "Explore the 3-Card guide",
    missionTitle: "When the hard part comes after finding the information.",
    questions: [
      "What should I prepare before going to the bank?",
      "Is it okay to study at a café for hours?",
      "How should I word an email to my professor?",
    ],
    missionBody: "What to bring, what order to do things in, the cultural context: things a translated sentence alone can't tell you.",
    missionAccent: "Nuami bridges that gap.",
    origin: "How Nuami began",
    solutionTitle: "Clear next steps for students, better guidance for institutions.",
    solutionDesc: "We turn the guidance materials of universities and institutions into life action guides students can understand and follow.",
    solutionBlocks: [
      {
        title: "Universities & schools",
        description: "We turn arrival guidance from international offices and language institutes into step-by-step actions for students.",
        scenes: ["Campus life guidance", "Preparing a bank visit"],
      },
      {
        title: "Regional support centers for foreign residents",
        description: "We organize local living information and official notices into guides that are easy to understand and act on.",
        scenes: ["Local living information", "Finding the right office"],
      },
    ],
    seeDirection: "See how it applies",
    milestonesTitle: "From idea to real steps.",
    achievements: [
      { title: "Mayor of Busan Award", description: "Excellence Award, Busan Public Data & AI Startup Competition" },
      { title: "KU Global StartLink", description: "2nd place overall" },
      { title: "Korea University Campus Town", description: "Resident company" },
    ],
    newsTitle: "Nuami's latest steps.",
    allNews: "See all news",
  },
};

const solutionMeta = [
  { icon: GraduationCap, href: "/solutions?audience=university" },
  { icon: Building2, href: "/solutions?audience=community" },
];

const achievementHrefs = ["/news/busan-public-data-award", "/news/ku-global-startlink", "/about#support"];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.brandName,
  alternateName: "뉴아미",
  email: site.contactEmail,
  ...(site.canonicalUrl ? { url: site.canonicalUrl } : {}),
};

export default function HomeView({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const lp = (href: string) => localePath(locale, href);
  const serviceReady = isExternalServiceReady();
  const latest = getPublishedNews(locale).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="hero-dark relative isolate overflow-hidden bg-black text-white">
        <Image
          src={images.hero.src}
          width={images.hero.width}
          height={images.hero.height}
          alt=""
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-[62%_center]"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-black/45" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-black/70 via-black/40 to-black/10" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-black/60 to-transparent" />

        <div className="container-x rise-in flex min-h-[620px] flex-col justify-center py-20 md:min-h-[640px] lg:min-h-[680px]">
          <p className="inline-flex self-start rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[13px] font-semibold backdrop-blur-sm md:text-[14px]">
            {t.badge}
          </p>
          <h1 className="h1 mt-7 max-w-[13em]">{t.heroTitle}</h1>
          <p className="mt-6 max-w-[30em] text-[16px] leading-[1.8] text-white/80 md:text-[18px]">{t.heroLead}</p>
          <p className="mt-3 text-[14px] font-semibold tracking-[0.02em] text-white/60 md:text-[15px]">From content to action.</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            {serviceReady ? (
              <a href={site.serviceUrl!} target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-primary">
                <span aria-hidden className="hero-btn-icon">
                  <Compass size={18} />
                </span>
                {t.service}
                <ArrowUpRight size={18} aria-hidden className="ml-auto sm:ml-3" />
                <span className="sr-only">{t.newWindow}</span>
              </a>
            ) : (
              <Link href={lp("/nuami")} className="hero-btn hero-btn-primary">
                <span aria-hidden className="hero-btn-icon">
                  <Compass size={18} />
                </span>
                {t.learn}
                <ArrowRight size={18} aria-hidden className="ml-auto sm:ml-3" />
              </Link>
            )}
            <Link href={`${lp("/inquire_all")}?type=institution`} className="hero-btn hero-btn-glass">
              <span aria-hidden className="hero-btn-icon">
                <MessageSquare size={18} />
              </span>
              {t.partner}
              <ArrowRight size={18} aria-hidden className="ml-auto sm:ml-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* 제품 미리보기 */}
      <section aria-labelledby="preview-title" className="section-y bg-surface">
        <div className="container-x">
          <SectionHeading id="preview-title" eyebrow="HOW IT WORKS" title={t.previewTitle} description={t.previewDesc} />
          <ol className="mobile-rail mt-10 grid gap-4 md:mt-12 md:grid-cols-3 md:gap-5">
            {guideCards[locale].map((card, i) => {
              const ex = t.previewExamples[card.key];
              return (
                <li key={card.key} className="flex flex-col rounded-[20px] border border-line bg-white p-6 md:p-8">
                  <span className="flex items-center justify-between">
                    <span className="text-[12px] font-extrabold tracking-[0.12em] text-brand-deep uppercase">{card.label}</span>
                    <span aria-hidden className="text-[14px] font-extrabold text-muted">
                      0{i + 1}
                    </span>
                  </span>
                  <h3 className="mt-5 text-[22px] font-extrabold tracking-[-0.02em]">{ex.name}</h3>
                  <p className="mt-2 text-[16px] text-muted">{card.description}</p>
                  <p className="mt-6 border-t border-line pt-4 text-[15px] font-semibold text-ink">
                    <span className="sr-only">{t.examplePrefix}</span>
                    {ex.example}
                  </p>
                </li>
              );
            })}
          </ol>
          <Link href={`${lp("/nuami")}#guide-demo`} className="text-link mt-8 text-[16px]">
            {t.explore3Card}
            <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </section>

      {/* 문제와 미션 */}
      <section aria-labelledby="mission-title" className="section-y bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading id="mission-title" eyebrow="WHY NUAMI" title={t.missionTitle} />
            <ul className="mt-8 flex flex-col gap-3">
              {t.questions.map((q) => (
                <li key={q} className="rounded-[16px] rounded-bl-[4px] border border-line bg-white px-5 py-4 text-[16px] font-semibold md:text-[18px]">
                  “{q}”
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-end">
            <span aria-hidden className="block h-1 w-12 rounded-full bg-accent" />
            <p className="mt-6 text-[24px] leading-[1.5] font-bold tracking-[-0.02em] md:text-[32px]">
              {t.missionBody} <span className="text-brand-deep">{t.missionAccent}</span>
            </p>
            <Link href={lp("/about")} className="text-link mt-8 text-[16px]">
              {t.origin}
              <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* 기관 솔루션 요약 */}
      <section aria-labelledby="solution-title" className="section-y bg-surface">
        <div className="container-x">
          <SectionHeading id="solution-title" eyebrow="FOR INSTITUTIONS" title={t.solutionTitle} description={t.solutionDesc} />
          <div className="mobile-rail mt-10 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-5">
            {t.solutionBlocks.map((b, i) => {
              const { icon: Icon, href } = solutionMeta[i];
              return (
                <div key={b.title} className="flex flex-col rounded-[20px] bg-white p-6 md:p-9">
                  <span aria-hidden className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-lavender text-brand-deep">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 text-[22px] font-extrabold tracking-[-0.02em] md:text-[26px]">{b.title}</h3>
                  <p className="mt-2 text-[16px] text-muted md:text-[17px]">{b.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {b.scenes.map((s) => (
                      <li key={s} className="rounded-full bg-surface px-3.5 py-1.5 text-[14px] font-semibold">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <Link href={lp(href)} className="text-link mt-6 text-[16px]">
                    {t.seeDirection}
                    <span className="sr-only">: {b.title}</span>
                    <ArrowRight size={18} aria-hidden />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 대표 성과 */}
      <section aria-labelledby="achievement-title" className="section-y bg-white">
        <div className="container-x">
          <SectionHeading id="achievement-title" eyebrow="MILESTONES" title={t.milestonesTitle} />
          <ul className="mobile-rail mt-10 grid border-t border-line md:mt-12 md:grid-cols-3">
            {t.achievements.map((a, i) => (
              <li key={a.title} className={`border-b border-line md:border-b-0 ${i > 0 ? "md:border-l md:pl-8" : ""} ${i < 2 ? "md:pr-8" : ""}`}>
                <Link href={lp(achievementHrefs[i])} className="group flex h-full flex-col py-7 md:py-9">
                  <span aria-hidden className="h-2 w-2 rounded-full bg-accent" />
                  <span className="mt-4 text-[22px] font-extrabold tracking-[-0.02em] group-hover:text-brand-deep md:text-[26px]">{a.title}</span>
                  <span className="mt-2 text-[16px] text-muted">{a.description}</span>
                  <ArrowRight size={18} aria-hidden className="mt-5 text-brand-deep transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 최신 소식 */}
      {latest.length ? (
        <section aria-labelledby="latest-title" className="section-y bg-surface">
          <div className="container-x">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading id="latest-title" eyebrow="NEWS" title={t.newsTitle} />
              <Link href={lp("/news")} className="text-link shrink-0 text-[16px]">
                {t.allNews}
                <ArrowRight size={18} aria-hidden />
              </Link>
            </div>
            <ul className="mobile-rail mt-10 grid gap-x-6 gap-y-12 md:mt-12 md:grid-cols-3">
              {latest.map((n) => (
                <li key={n.slug}>
                  <NewsCard item={n} locale={locale} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <InquiryCTA locale={locale} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
    </>
  );
}
