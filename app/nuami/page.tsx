import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Coffee, GraduationCap, Landmark } from "lucide-react";
import GuideDemo from "@/components/GuideDemo";
import PageHeading from "@/components/PageHeading";
import SectionHeading from "@/components/SectionHeading";
import { images, isExternalServiceReady, seo, site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({ ...seo.nuami, path: "/nuami" });

const scenes = [
  {
    icon: GraduationCap,
    title: "학교 생활",
    description: "수업, 교수님 연락, 학교 시설 이용처럼 처음 마주하는 학교의 순간을 준비합니다.",
    steps: ["면담 목적 정리", "메일 제목과 순서", "정중한 표현"],
  },
  {
    icon: Landmark,
    title: "은행 방문",
    description: "계좌 개설처럼 준비물과 순서가 중요한 생활 업무를 미리 살펴봅니다.",
    steps: ["지점 안내 확인", "필요 서류 준비", "창구에서 문의"],
  },
  {
    icon: Coffee,
    title: "카페와 식당 이용",
    description: "주문, 좌석, 매장 이용 기준처럼 장소마다 다를 수 있는 일상의 장면을 안내합니다.",
    steps: ["이용 안내 확인", "주문", "좌석 확인"],
  },
];

const basis = [
  { title: "공공데이터와 기관 안내", description: "공식 안내와 기준 정보를 출발점으로 삼습니다." },
  { title: "사용자 상황 이해", description: "사용자가 처한 상황과 언어, 지금 필요한 것을 살펴봅니다." },
  { title: "행동 순서와 맥락 안내", description: "준비할 것, 행동 순서, 놓치기 쉬운 맥락을 함께 정리합니다." },
];

export default function NuamiPage() {
  const serviceReady = isExternalServiceReady();

  return (
    <>
      <PageHeading
        eyebrow="NUAMI"
        pageName="AI 생활 행동가이드"
        image="product"
        title="지금 필요한 행동을, 한눈에 이해할 수 있도록."
        description="상황을 입력하면 필요한 준비와 행동 순서, 놓치기 쉬운 맥락을 함께 살펴볼 수 있도록 돕습니다."
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          {serviceReady ? (
            <a href={site.serviceUrl!} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              서비스 이용하기
              <ArrowUpRight size={18} aria-hidden />
              <span className="sr-only">(새 창)</span>
            </a>
          ) : null}
          <a href="#guide-demo" className={`btn ${serviceReady ? "btn-outline" : "btn-primary"}`}>
            가이드 예시 보기
            <ArrowDown size={18} aria-hidden />
          </a>
          <Link href="/inquire_all?type=demo" className="btn btn-outline">
            서비스 체험 문의
          </Link>
        </div>
      </PageHeading>

      {/* 제품 이미지 */}
      <section aria-label="서비스 화면" className="bg-white pt-10 md:pt-16">
        <div className="container-media">
          <div className="overflow-hidden rounded-[20px] md:rounded-[24px]">
            <Image
              src={images.product.src}
              width={images.product.width}
              height={images.product.height}
              alt={images.product.alt}
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
          <SectionHeading
            id="guide-demo-title"
            eyebrow="3-CARD GUIDE"
            title={"상황, 행동, 맥락. 세\u00a0장으로 연결합니다."}
            description="상황을 선택하면 세 장의 카드 내용이 함께 바뀝니다."
          />
          <GuideDemo />
        </div>
      </section>

      {/* 생활 장면 */}
      <section aria-labelledby="scenes-title" className="section-y bg-surface">
        <div className="container-x">
          <SectionHeading id="scenes-title" eyebrow="LIFE SCENES" title="생활의 여러 순간에 필요한 가이드." />
          <p className="mt-4 text-[14px] text-muted">아래는 뉴아미가 다루는 예시 적용 장면입니다.</p>
          <ul className="mt-10 flex flex-col gap-4">
            {scenes.map((s, i) => (
              <li key={s.title} className="grid items-center gap-6 rounded-[20px] bg-white p-6 md:grid-cols-[auto_1fr_1.1fr] md:gap-10 md:p-9">
                <span aria-hidden className="inline-flex h-14 w-14 items-center justify-center rounded-[16px] bg-lavender text-brand-deep">
                  <s.icon size={26} />
                </span>
                <div>
                  <p aria-hidden className="text-[13px] font-extrabold text-muted">
                    0{i + 1}
                  </p>
                  <h3 className="mt-1 text-[22px] font-extrabold tracking-[-0.02em] md:text-[26px]">{s.title}</h3>
                  <p className="mt-2 text-[16px] text-muted">{s.description}</p>
                </div>
                <ol className="flex flex-wrap items-center gap-2" aria-label={`${s.title} 행동 순서 예시`}>
                  {s.steps.map((step, si) => (
                    <li key={step} className="flex items-center gap-2">
                      <span className="rounded-full border border-line bg-white px-3.5 py-2 text-[14px] font-semibold md:text-[15px]">{step}</span>
                      {si < s.steps.length - 1 ? <ArrowRight size={16} aria-hidden className="text-accent" /> : null}
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 안내의 근거 */}
      <section aria-labelledby="basis-title" className="section-y bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <SectionHeading id="basis-title" eyebrow="HOW WE GUIDE" title="공식정보에, 실제 생활의 맥락을 더합니다." />
            <p className="mt-5 text-[15px] text-muted">
              검색 증강 생성(RAG)과 역할을 나눈 AI 에이전트 구조를 활용하는 방향으로 개발하고 있습니다.
            </p>
          </div>
          <ol className="border-t border-ink">
            {basis.map((b, i) => (
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
            다음으로 볼 내용
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/solutions" className="group flex flex-col justify-between gap-8 rounded-[20px] bg-surface p-7 md:p-10">
              <span>
                <span className="eyebrow">FOR INSTITUTIONS</span>
                <span className="mt-3 block text-[22px] font-extrabold tracking-[-0.02em] md:text-[28px]">대학과 기관에 적용하기</span>
                <span className="mt-2 block text-[16px] text-muted">기관 안내자료를 생활 행동가이드로 연결하는 방향을 소개합니다.</span>
              </span>
              <ArrowRight size={22} aria-hidden className="text-brand-deep transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/inquire_all?type=demo" className="group flex flex-col justify-between gap-8 rounded-[20px] bg-surface p-7 md:p-10">
              <span>
                <span className="eyebrow">CONTACT</span>
                <span className="mt-3 block text-[22px] font-extrabold tracking-[-0.02em] md:text-[28px]">서비스 체험 문의</span>
                <span className="mt-2 block text-[16px] text-muted">서비스 화면과 이용 방식에 대해 문의해주세요.</span>
              </span>
              <ArrowRight size={22} aria-hidden className="text-brand-deep transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
