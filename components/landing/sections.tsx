"use client";

import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Check,
  Heart,
  MapPin,
  MessageCircleMore,
  PlayCircle,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { FormEvent } from "react";

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionFrame({
  id,
  title,
  subtitle,
  tone = "white",
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  tone?: "white" | "soft" | "tint";
  children: React.ReactNode;
}) {
  const bg = tone === "soft" ? "bg-slate-50" : tone === "tint" ? "bg-violet-50/60" : "bg-white";
  return (
    <section id={id} className={`scroll-mt-24 border-b border-slate-100 py-18 sm:py-22 ${bg}`}>
      <div className="mx-auto w-full max-w-[1200px] px-5">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">{title}</h2>
          {subtitle ? <p className="mt-3 max-w-2xl text-base text-slate-600">{subtitle}</p> : null}
        </Reveal>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export function HeroSection() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-120, 120], [8, -8]), { stiffness: 130, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-120, 120], [-8, 8]), { stiffness: 130, damping: 20 });
  const glowX = useTransform(x, [-120, 120], [30, 75]);
  const glowY = useTransform(y, [-120, 120], [30, 70]);
  const glow = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(139,92,246,.26), rgba(255,255,255,0))`;

  return (
    <section
      id="hero"
      className="relative scroll-mt-24 overflow-hidden bg-linear-to-b from-violet-50 via-indigo-50/40 to-white pb-18 pt-28 sm:pt-32"
      onMouseMove={(event) => {
        const rect = (event.currentTarget as HTMLDivElement).getBoundingClientRect();
        x.set(event.clientX - rect.left - rect.width / 2);
        y.set(event.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-violet-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-36 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl" />
      <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-5 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-1.5 text-xs font-semibold text-violet-700">
            <Sparkles className="h-3.5 w-3.5" />
            AI 문화 행동 가이드
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            낯선 한국 생활,
            <br />
            지금 무엇을 해야 할지 알려주는 AI
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Nuami는 유튜브·릴스·틱톡 같은 콘텐츠를 분석해 외국인이 한국 생활에서 바로 행동할 수 있도록 돕는 실생활 문화 가이드 서비스입니다.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cta"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:brightness-110"
            >
              파일럿 참여하기
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#help"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-violet-300 hover:text-violet-700"
            >
              서비스 미리보기
              <PlayCircle className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <motion.div style={{ rotateX, rotateY }} className="relative transform-3d">
          <motion.div style={{ backgroundImage: glow }} className="absolute inset-0 rounded-3xl" />
          <div className="relative rounded-3xl border border-violet-100 bg-white p-5 shadow-2xl shadow-violet-200/50">
            {/* TODO: 실제 앱 스크린샷으로 교체 */}
            <div className="relative mx-auto w-full max-w-[270px] rounded-4xl border-8 border-slate-900 bg-slate-100 p-4">
              <div className="mb-3 h-1.5 w-16 rounded-full bg-slate-300" />
              <div className="h-40 rounded-xl border border-dashed border-violet-300 bg-white" />
              <div className="mt-3 space-y-2">
                <div className="h-8 rounded-lg bg-violet-100" />
                <div className="h-8 rounded-lg bg-indigo-100" />
              </div>
            </div>
            <div className="pointer-events-none absolute -left-6 top-8 rounded-xl border border-white/60 bg-white/90 px-3 py-2 text-xs font-semibold text-violet-700 shadow-sm">
              <MapPin className="mr-1 inline h-3.5 w-3.5" />
              Place Card
            </div>
            <div className="pointer-events-none absolute -right-6 top-24 rounded-xl border border-white/60 bg-white/90 px-3 py-2 text-xs font-semibold text-indigo-700 shadow-sm">
              <MessageCircleMore className="mr-1 inline h-3.5 w-3.5" />
              Action Card
            </div>
            <div className="pointer-events-none absolute -left-6 bottom-10 rounded-xl border border-white/60 bg-white/90 px-3 py-2 text-xs font-semibold text-fuchsia-700 shadow-sm">
              <Check className="mr-1 inline h-3.5 w-3.5" />
              Context Card
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function WhoForSection() {
  const cards = [
    "카페나 식당에서 어떻게 주문해야 할지 헷갈릴 때",
    "병원이나 약국에서 어떤 표현을 써야 할지 막막할 때",
    "영상으로는 봤지만 실제 행동이 어려울 때",
    "한국의 분위기와 예절이 낯설고 불안할 때",
  ];
  return (
    <SectionFrame id="for" tone="white" title="이런 순간, 뉴아미가 필요해요">
      <div className="grid gap-4 md:grid-cols-2">
        {cards.map((text, idx) => (
          <Reveal key={text} delay={idx * 0.05}>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-md">
              <Heart className="h-5 w-5 text-violet-600" />
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionFrame>
  );
}

export function HowHelpsSection() {
  const steps = [
    ["01", "콘텐츠 링크를 넣어요", "보고 있는 영상 링크를 붙여 넣어요."],
    ["02", "AI가 상황을 읽어요", "장소, 맥락, 분위기를 빠르게 이해해요."],
    ["03", "바로 쓸 수 있는 행동 가이드를 만들어요", "지금 해야 할 행동을 카드로 정리해요."],
  ];
  return (
    <SectionFrame id="help" tone="soft" title="뉴아미는 이렇게 도와줘요">
      <div className="grid gap-4 lg:grid-cols-3">
        {steps.map(([num, title, desc], idx) => (
          <Reveal key={num} delay={idx * 0.06}>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              {/* TODO: 섹션별 일러스트로 교체 */}
              <div className="mb-4 h-28 rounded-xl border border-dashed border-slate-300 bg-slate-100" />
              <p className="text-xs font-bold tracking-wide text-violet-700">{num}</p>
              <h3 className="mt-2 text-base font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionFrame>
  );
}

export function FeatureSection() {
  const cards = [
    ["Place Card", "어디에서 어떤 흐름으로 움직이면 좋은지 알려줘요."],
    ["Action Card", "지금 말할 표현과 행동 순서를 간단히 보여줘요."],
    ["Context Card", "왜 이런 행동이 자연스러운지 맥락을 알려줘요."],
    ["저장하고 다시 보기", "자주 쓰는 가이드는 모아두고 반복해서 활용해요."],
  ];
  return (
    <SectionFrame id="feature" tone="white" title="뉴아미의 핵심 기능">
      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map(([title, desc], idx) => (
          <Reveal key={title} delay={idx * 0.04}>
            <motion.div whileHover={{ y: -4 }} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <WandSparkles className="h-5 w-5 text-violet-600" />
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </SectionFrame>
  );
}

export function UsageFlowSection() {
  const { scrollYProgress } = useScroll();
  const lineScale = useSpring(scrollYProgress, { stiffness: 70, damping: 22 });
  const steps = [
    "STEP 1 영상 링크 입력",
    "STEP 2 AI 상황 분석",
    "STEP 3 행동 카드 생성",
    "STEP 4 저장 및 재사용",
    "STEP 5 실제 생활에서 더 자연스럽게 행동",
  ];
  return (
    <SectionFrame id="flow" tone="tint" title="뉴아미는 이렇게 사용해요">
      <div className="relative">
        <motion.div style={{ scaleX: lineScale }} className="absolute left-0 top-6 hidden h-0.5 w-full origin-left bg-linear-to-r from-violet-300 to-indigo-300 md:block" />
        <div className="grid gap-4 md:grid-cols-5">
          {steps.map((step, idx) => (
            <Reveal key={step} delay={idx * 0.05}>
              <div className="rounded-2xl border border-violet-200 bg-white p-4 text-sm font-semibold text-slate-800 shadow-sm">{step}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}

export function UseCasesSection() {
  const useCases = ["카페 / 음식점", "병원 / 약국", "학교 / 행정", "쇼핑 / 결제", "대중교통 이후 실제 행동", "일상 예절 / 분위기 이해"];
  return (
    <SectionFrame id="cases" tone="white" title="이런 상황에서 활용할 수 있어요">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {useCases.map((item, idx) => (
          <Reveal key={item} delay={idx * 0.04}>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              {/* TODO: 실제 썸네일/일러스트로 교체 */}
              <div className="h-28 bg-linear-to-br from-violet-100 via-indigo-50 to-slate-100" />
              <p className="px-4 py-3 text-sm font-semibold text-slate-800">{item}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionFrame>
  );
}

export function TrustSection() {
  const points = ["이해에서 끝나지 않아요", "지금 필요한 행동을 알려줘요", "자주 쓰는 가이드를 다시 활용할 수 있어요"];
  return (
    <SectionFrame id="trust" tone="soft" title="콘텐츠를 이해하는 것에서, 실제 행동하는 것까지">
      <div className="grid gap-4 md:grid-cols-3">
        {points.map((point) => (
          <div key={point} className="rounded-2xl border border-slate-200 bg-white p-5 text-sm font-medium text-slate-700">
            <Check className="mb-2 h-5 w-5 text-violet-600" />
            {point}
          </div>
        ))}
      </div>
    </SectionFrame>
  );
}

export function FinalCtaSection() {
  const onSubmit = (event: FormEvent) => event.preventDefault();
  return (
    <SectionFrame
      id="cta"
      tone="tint"
      title="이제 문화는 설명이 아니라, 행동으로 연결되어야 하니까"
      subtitle="뉴아미와 함께 한국 생활의 낯선 순간을 조금 더 자연스럽게 시작해보세요."
    >
      <div className="grid gap-6 rounded-3xl border border-violet-200 bg-linear-to-br from-violet-50 to-indigo-50 p-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-violet-700">Nuami Pilot</p>
          <h3 className="mt-2 text-2xl font-bold text-slate-900">첫 사용자로 가장 먼저 경험해보세요</h3>
          <p className="mt-3 text-sm text-slate-600">서비스 정식 공개 전, 파일럿으로 먼저 참여하고 출시 소식을 받아보실 수 있어요.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:hello@nuami.ai" className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-400/20 transition hover:bg-violet-700">
              파일럿 참여하기
            </a>
            <a href="mailto:hello@nuami.ai" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700">
              출시 알림 받기
            </a>
          </div>
        </div>
        <form onSubmit={onSubmit} className="rounded-2xl bg-white p-4">
          <p className="text-sm font-semibold text-slate-800">이메일로 소식 받기</p>
          <input className="mt-3 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="이메일 주소" />
          <button type="submit" className="mt-3 w-full rounded-lg bg-slate-900 py-2.5 text-sm font-semibold text-white">
            등록하기 (데모 UI)
          </button>
          {/* TODO: 실제 이메일 수집 API 연결 */}
        </form>
      </div>
    </SectionFrame>
  );
}

export function FooterSection() {
  return (
    <footer className="bg-slate-950 py-10 text-slate-300">
      <div className="mx-auto grid w-full max-w-[1200px] gap-6 px-5 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-white">Nuami</p>
          <p className="mt-2 text-sm">외국인의 한국 생활을 돕는 AI 문화 행동 가이드</p>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-white">Contact</p>
          <p className="mt-2">hello@nuami.ai</p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          {["소개", "대상", "도움 방식", "핵심 기능", "활용 사례", "시작하기"].map((item) => (
            <span key={item} className="rounded-md bg-slate-800 px-2 py-1">
              {item}
            </span>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-8 w-full max-w-[1200px] px-5 text-xs text-slate-500">© {new Date().getFullYear()} Nuami. All rights reserved.</p>
    </footer>
  );
}
