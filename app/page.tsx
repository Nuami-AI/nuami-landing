import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, Compass, GraduationCap, MessageSquare } from "lucide-react";
import InquiryCTA from "@/components/InquiryCTA";
import NewsThumb from "@/components/NewsThumb";
import SectionHeading from "@/components/SectionHeading";
import { categoryLabels, getNewsBySlug } from "@/content/news";
import { guideCards, images, isExternalServiceReady, seo, site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({ ...seo.home, path: "/" });

const previewExamples = {
  situation: { name: "지금의 상황", example: "노트북 사용 가능 여부와 좌석을 먼저 확인해요." },
  action: { name: "해야 할 행동", example: "음료 주문 → 좌석 확인 → 필요하면 직원에게 문의." },
  context: { name: "미리 알 맥락", example: "‘노트북을 사용해도 괜찮을까요?’라고 물어볼 수 있어요." },
} as const;

const questions = ["은행에 가기 전에 뭘 준비해야 하지?", "카페에서 오래 공부해도 괜찮을까?", "교수님께 어떤 말로 연락해야 하지?"];

const solutionBlocks = [
  {
    icon: GraduationCap,
    title: "대학과 교육기관",
    description: "국제교류처와 한국어교육원의 입국 초기 안내를 유학생의 행동 순서로 연결합니다.",
    scenes: ["학교 생활 안내", "은행 방문 준비"],
    href: "/solutions?audience=university",
  },
  {
    icon: Building2,
    title: "지역의 외국인 지원기관",
    description: "지역의 생활정보와 공식 안내자료를 이해하고 실행하기 쉬운 가이드로 정리합니다.",
    scenes: ["지역 생활정보 안내", "방문기관 확인"],
    href: "/solutions?audience=community",
  },
];

const achievements = [
  { title: "부산광역시장상", description: "부산 공공데이터, AI 활용 창업경진대회 우수상", href: "/news/busan-public-data-award" },
  { title: "KU Global StartLink", description: "최종 2위", href: "/news/ku-global-startlink" },
  { title: "고려대학교 캠퍼스타운", description: "입주", href: "/about#support" },
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.brandName,
  alternateName: "뉴아미",
  email: site.contactEmail,
  ...(site.canonicalUrl ? { url: site.canonicalUrl } : {}),
};

export default function HomePage() {
  const serviceReady = isExternalServiceReady();
  const featured = getNewsBySlug("busan-public-data-award");
  const latest = ["hug-up", "nia-growth-support"].map((slug) => getNewsBySlug(slug)).filter((n) => n !== undefined);

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
            외국인 유학생을 위한 AI 생활 행동가이드
          </p>
          <h1 className="h1 mt-7 max-w-[13em]">
            낯선 한국 생활,
            <br />
            <span className="text-[#ad8bff]">다음 행동</span>을 안내합니다.
          </h1>
          <p className="mt-6 max-w-[30em] text-[16px] leading-[1.8] text-white/80 md:text-[18px]">
            뉴아미는 외국인 유학생이 한국 생활의 정보를 실제 행동으로 옮길 수 있도록 돕는 AI 생활 행동가이드입니다.
          </p>
          <p className="mt-3 text-[14px] font-semibold tracking-[0.02em] text-white/60 md:text-[15px]">From content to action.</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            {serviceReady ? (
              <a href={site.serviceUrl!} target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-primary">
                <span aria-hidden className="hero-btn-icon">
                  <Compass size={18} />
                </span>
                서비스 이용하기
                <ArrowUpRight size={18} aria-hidden className="ml-auto sm:ml-3" />
                <span className="sr-only">(새 창)</span>
              </a>
            ) : (
              <Link href="/nuami" className="hero-btn hero-btn-primary">
                <span aria-hidden className="hero-btn-icon">
                  <Compass size={18} />
                </span>
                뉴아미 알아보기
                <ArrowRight size={18} aria-hidden className="ml-auto sm:ml-3" />
              </Link>
            )}
            <Link href="/inquire_all?type=institution" className="hero-btn hero-btn-glass">
              <span aria-hidden className="hero-btn-icon">
                <MessageSquare size={18} />
              </span>
              기관 협업 문의
              <ArrowRight size={18} aria-hidden className="ml-auto sm:ml-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* 제품 미리보기 */}
      <section aria-labelledby="preview-title" className="section-y bg-surface">
        <div className="container-x">
          <SectionHeading
            id="preview-title"
            eyebrow="HOW IT WORKS"
            title="정보를 찾는 것에서, 행동하는 것으로."
            description="상황, 행동, 맥락을 세 장의 카드로 정리합니다."
          />
          <ol className="mt-10 grid gap-4 md:mt-12 md:grid-cols-3 md:gap-5">
            {guideCards.map((card, i) => {
              const ex = previewExamples[card.key];
              return (
                <li key={card.key} className="flex flex-col rounded-[20px] bg-white p-6 md:p-8">
                  <span className="flex items-center justify-between">
                    <span className="text-[12px] font-extrabold tracking-[0.12em] text-brand-deep uppercase">{card.label}</span>
                    <span aria-hidden className="text-[14px] font-extrabold text-muted">
                      0{i + 1}
                    </span>
                  </span>
                  <h3 className="mt-5 text-[22px] font-extrabold tracking-[-0.02em]">{ex.name}</h3>
                  <p className="mt-2 text-[16px] text-muted">{card.description}</p>
                  <p className="mt-6 border-t border-line pt-4 text-[15px] font-semibold text-ink">
                    <span className="sr-only">예시: </span>
                    {ex.example}
                  </p>
                </li>
              );
            })}
          </ol>
          <Link href="/nuami#guide-demo" className="text-link mt-8 text-[16px]">
            3-Card 살펴보기
            <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </section>

      {/* 문제와 미션 */}
      <section aria-labelledby="mission-title" className="section-y bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading id="mission-title" eyebrow="WHY NUAMI" title="정보를 찾은 다음이 더 어려울 때." />
            <ul className="mt-8 flex flex-col gap-3">
              {questions.map((q) => (
                <li key={q} className="rounded-[16px] rounded-bl-[4px] border border-line bg-white px-5 py-4 text-[16px] font-semibold md:text-[18px]">
                  “{q}”
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-end">
            <span aria-hidden className="block h-1 w-12 rounded-full bg-accent" />
            <p className="mt-6 text-[24px] leading-[1.5] font-bold tracking-[-0.02em] md:text-[32px]">
              번역된 문장만으로는 알기 어려운 준비물, 행동 순서, 문화적 맥락.{" "}
              <span className="text-brand-deep">뉴아미는 그 사이를 연결합니다.</span>
            </p>
            <Link href="/about" className="text-link mt-8 text-[16px]">
              뉴아미의 시작
              <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* 기관 솔루션 요약 */}
      <section aria-labelledby="solution-title" className="section-y bg-surface">
        <div className="container-x">
          <SectionHeading
            id="solution-title"
            eyebrow="FOR INSTITUTIONS"
            title="유학생의 다음 행동, 기관의 더 나은 안내."
            description="대학과 기관의 안내자료를 유학생이 이해하고 실행할 수 있는 생활 행동가이드로 연결합니다."
          />
          <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-5">
            {solutionBlocks.map((b) => (
              <div key={b.title} className="flex flex-col rounded-[20px] bg-white p-6 md:p-9">
                <span aria-hidden className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-lavender text-brand-deep">
                  <b.icon size={22} />
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
                <Link href={b.href} className="text-link mt-6 text-[16px]">
                  적용 방향 보기
                  <span className="sr-only">: {b.title}</span>
                  <ArrowRight size={18} aria-hidden />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 대표 성과 */}
      <section aria-labelledby="achievement-title" className="section-y bg-white">
        <div className="container-x">
          <SectionHeading id="achievement-title" eyebrow="MILESTONES" title="아이디어를 실제 발걸음으로." />
          <ul className="mt-10 grid border-t border-line md:mt-12 md:grid-cols-3">
            {achievements.map((a, i) => (
              <li key={a.title} className={`border-b border-line md:border-b-0 ${i > 0 ? "md:border-l md:pl-8" : ""} ${i < 2 ? "md:pr-8" : ""}`}>
                <Link href={a.href} className="group flex h-full flex-col py-7 md:py-9">
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
      {featured ? (
        <section aria-labelledby="latest-title" className="section-y bg-surface">
          <div className="container-x">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading id="latest-title" eyebrow="NEWS" title="뉴아미의 새로운 발걸음." />
              <Link href="/news" className="text-link shrink-0 text-[16px]">
                전체 뉴스 보기
                <ArrowRight size={18} aria-hidden />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 md:mt-12 lg:grid-cols-[1.25fr_1fr] lg:gap-10">
              <Link href={`/news/${featured.slug}`} className="group flex flex-col overflow-hidden rounded-[24px] bg-white">
                <NewsThumb item={featured} className="aspect-[16/9] w-full border-0 border-b" />
                <div className="p-6 md:p-8">
                  <p className="flex items-center gap-2 text-[14px] font-bold text-muted">
                    <span className="chip">{categoryLabels[featured.category]}</span>
                    {featured.dateLabel}
                  </p>
                  <h3 className="mt-3 text-[22px] leading-snug font-extrabold tracking-[-0.02em] group-hover:text-brand-deep md:text-[28px]">
                    {featured.title}
                  </h3>
                  <p className="mt-2 text-[16px] text-muted">{featured.excerpt}</p>
                </div>
              </Link>
              <ul className="flex flex-col">
                {latest.map((n) => (
                  <li key={n.slug} className="border-b border-line first:border-t">
                    <Link href={`/news/${n.slug}`} className="group flex items-start justify-between gap-6 py-7">
                      <div>
                        <span className="flex items-center gap-2 text-[14px] font-bold text-muted">
                          <span className="chip">{categoryLabels[n.category]}</span>
                          {n.dateLabel}
                        </span>
                        <h3 className="mt-3 text-[19px] leading-snug font-extrabold group-hover:text-brand-deep md:text-[22px]">{n.title}</h3>
                        <span className="mt-1.5 block text-[15px] text-muted">{n.excerpt}</span>
                      </div>
                      <ArrowRight size={20} aria-hidden className="mt-1 shrink-0 text-brand-deep transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}

      <InquiryCTA />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
    </>
  );
}
