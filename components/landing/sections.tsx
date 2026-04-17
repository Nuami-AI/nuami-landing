"use client";

import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Bookmark,
  Check,
  Info,
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
  titleHighlight,
  subtitle,
  tone = "white",
  children,
}: {
  id: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  tone?: "white" | "soft" | "tint";
  children: React.ReactNode;
}) {
  const bg = tone === "soft" ? "bg-slate-50" : tone === "tint" ? "bg-violet-50/60" : "bg-white";

  const renderedTitle = titleHighlight ? (
    <>
      {title.split(titleHighlight)[0]}
      <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
        {titleHighlight}
      </span>
      {title.split(titleHighlight)[1]}
    </>
  ) : title;

  return (
    <section id={id} className={`scroll-mt-24 border-b border-slate-100 py-18 sm:py-22 ${bg}`}>
      <div className="mx-auto w-full max-w-[1200px] px-5">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">{renderedTitle}</h2>
          {subtitle ? <p className="mt-3 max-w-2xl text-base text-slate-600">{subtitle}</p> : null}
        </Reveal>
        <div className="mt-10">{children}</div>
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
  const glow = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(139,92,246,.28), rgba(255,255,255,0))`;

  return (
    <section
      id="hero"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-violet-50 via-indigo-50/40 to-white pb-20 pt-28 sm:pt-36"
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
      {/* background blobs */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-36 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-fuchsia-200/15 blur-3xl" />

      <div className="mx-auto grid w-full max-w-[1200px] gap-14 px-5 lg:grid-cols-2 lg:items-center">
        {/* Left copy */}
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-violet-700 shadow-sm backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            AI 문화 행동 가이드
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-fuchsia-500 bg-clip-text text-transparent">
              낯선 한국 생활,
            </span>
            <br />
            지금 무엇을 해야 할지
            <br />
            알려주는 AI
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Nuami는 유튜브·릴스·틱톡 같은 콘텐츠를 분석해 외국인이 한국 생활에서
            <strong className="font-semibold text-slate-800"> 바로 행동할 수 있도록</strong> 돕는 실생활 문화 가이드 서비스입니다.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cta"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:brightness-110 hover:shadow-violet-500/40"
            >
              파일럿 참여하기
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#help"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-7 py-3.5 text-sm font-semibold text-slate-700 backdrop-blur-sm transition hover:border-violet-300 hover:text-violet-700"
            >
              서비스 미리보기
              <PlayCircle className="h-4 w-4" />
            </a>
          </div>
          {/* Social proof */}
          <div className="mt-8 flex flex-wrap gap-6">
            {[
              ["500+", "파일럿 신청자"],
              ["20+", "실생활 상황"],
              ["97%", "만족도"],
            ].map(([num, label]) => (
              <div key={label} className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">{num}</span>
                <span className="text-xs text-slate-500">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Right mockup */}
        <motion.div style={{ rotateX, rotateY }} className="relative flex justify-center" style={{ transformStyle: "preserve-3d" } as React.CSSProperties}>
          <motion.div style={{ backgroundImage: glow }} className="absolute inset-0 rounded-3xl" />
          <div className="relative rounded-3xl border border-violet-100 bg-white p-6 shadow-2xl shadow-violet-200/60">
            {/* Phone frame */}
            <div className="relative mx-auto w-[220px] overflow-hidden rounded-[2rem] border-[7px] border-slate-900 bg-white shadow-xl">
              {/* Status bar */}
              <div className="flex items-center justify-between bg-slate-900 px-4 py-2">
                <span className="text-[9px] font-semibold text-slate-400">9:41</span>
                <div className="h-3 w-14 rounded-full bg-slate-800" />
                <div className="flex items-center gap-0.5">
                  <div className="h-1.5 w-1 rounded-sm bg-slate-400" />
                  <div className="h-1.5 w-1 rounded-sm bg-slate-400" />
                  <div className="h-1.5 w-1 rounded-sm bg-slate-400" />
                </div>
              </div>
              {/* App header */}
              <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2">
                <div className="h-3 w-12 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500" />
                <div className="h-5 w-5 rounded-full bg-slate-100" />
              </div>
              {/* URL input */}
              <div className="px-3 pt-2.5">
                <div className="flex items-center gap-1.5 rounded-lg bg-slate-100 px-2 py-1.5">
                  <div className="h-2 w-2 flex-shrink-0 rounded-full bg-red-400" />
                  <div className="h-1.5 flex-1 rounded-full bg-slate-300" />
                  <div className="h-4 w-5 flex-shrink-0 rounded bg-violet-500" />
                </div>
              </div>
              {/* Place card */}
              <div className="mx-3 mt-2 rounded-xl border border-violet-100 bg-violet-50 p-2.5">
                <div className="mb-1.5 flex items-center gap-1.5">
                  <div className="flex h-4 w-4 items-center justify-center rounded bg-violet-500">
                    <div className="h-2 w-2 rounded-sm bg-white" />
                  </div>
                  <div className="h-1.5 w-14 rounded-full bg-violet-400" />
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 rounded-full bg-violet-200" />
                  <div className="h-1.5 w-4/5 rounded-full bg-violet-200" />
                </div>
              </div>
              {/* Action card */}
              <div className="mx-3 mt-2 rounded-xl bg-indigo-500 p-2.5">
                <div className="mb-1.5 flex items-center gap-1.5">
                  <div className="h-4 w-4 rounded bg-indigo-300" />
                  <div className="h-1.5 w-16 rounded-full bg-indigo-300" />
                </div>
                <div className="space-y-1.5">
                  <div className="h-5 rounded-lg bg-indigo-400" />
                  <div className="h-5 rounded-lg bg-indigo-400" />
                </div>
              </div>
              {/* Context card */}
              <div className="mx-3 my-2 rounded-xl border border-slate-200 bg-white p-2.5">
                <div className="mb-1.5 h-1.5 w-16 rounded-full bg-fuchsia-300" />
                <div className="space-y-1">
                  <div className="h-1.5 rounded-full bg-slate-200" />
                  <div className="h-1.5 w-3/4 rounded-full bg-slate-200" />
                </div>
              </div>
            </div>
            {/* Floating badges */}
            <div className="pointer-events-none absolute -left-7 top-10 rounded-xl border border-white/80 bg-white px-3 py-2 text-xs font-semibold text-violet-700 shadow-md">
              <MapPin className="mr-1 inline h-3.5 w-3.5" />
              Place Card
            </div>
            <div className="pointer-events-none absolute -right-7 top-28 rounded-xl border border-white/80 bg-white px-3 py-2 text-xs font-semibold text-indigo-700 shadow-md">
              <MessageCircleMore className="mr-1 inline h-3.5 w-3.5" />
              Action Card
            </div>
            <div className="pointer-events-none absolute -left-7 bottom-12 rounded-xl border border-white/80 bg-white px-3 py-2 text-xs font-semibold text-fuchsia-700 shadow-md">
              <Info className="mr-1 inline h-3.5 w-3.5" />
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
    { emoji: "☕", text: "카페나 식당에서 어떻게 주문해야 할지 헷갈릴 때" },
    { emoji: "🏥", text: "병원이나 약국에서 어떤 표현을 써야 할지 막막할 때" },
    { emoji: "📱", text: "영상으로는 봤지만 실제 행동이 어려울 때" },
    { emoji: "🇰🇷", text: "한국의 분위기와 예절이 낯설고 불안할 때" },
  ];
  return (
    <SectionFrame id="for" tone="white" title="이런 순간, 뉴아미가 필요해요" titleHighlight="뉴아미가 필요해요">
      <div className="grid gap-4 md:grid-cols-2">
        {cards.map((card, idx) => (
          <Reveal key={card.text} delay={idx * 0.06}>
            <motion.div
              whileHover={{ y: -4 }}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-violet-200 hover:shadow-md"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-violet-50 text-2xl">
                {card.emoji}
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{card.text}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </SectionFrame>
  );
}

export function HowHelpsSection() {
  const steps = [
    {
      num: "01",
      emoji: "🔗",
      gradient: "from-violet-500 to-violet-600",
      bg: "bg-violet-50",
      title: "콘텐츠 링크를 넣어요",
      desc: "보고 있는 영상 링크를 붙여 넣어요.",
    },
    {
      num: "02",
      emoji: "🤖",
      gradient: "from-indigo-500 to-indigo-600",
      bg: "bg-indigo-50",
      title: "AI가 상황을 읽어요",
      desc: "장소, 맥락, 분위기를 빠르게 이해해요.",
    },
    {
      num: "03",
      emoji: "✨",
      gradient: "from-fuchsia-500 to-fuchsia-600",
      bg: "bg-fuchsia-50",
      title: "바로 쓸 수 있는 행동 가이드를 만들어요",
      desc: "지금 해야 할 행동을 카드로 정리해요.",
    },
  ];
  return (
    <SectionFrame id="help" tone="soft" title="뉴아미는 이렇게 도와줘요">
      <div className="grid gap-5 lg:grid-cols-3">
        {steps.map((step, idx) => (
          <Reveal key={step.num} delay={idx * 0.07}>
            <motion.div whileHover={{ y: -4 }} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              {/* Illustration area */}
              <div className={`flex h-32 items-center justify-center ${step.bg} relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-10`} />
                <span className="text-5xl">{step.emoji}</span>
              </div>
              <div className="p-5">
                <p className={`inline-block rounded-lg bg-gradient-to-r ${step.gradient} px-2.5 py-0.5 text-xs font-bold text-white`}>
                  {step.num}
                </p>
                <h3 className="mt-2.5 text-base font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600">{step.desc}</p>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </SectionFrame>
  );
}

export function FeatureSection() {
  const cards = [
    {
      icon: MapPin,
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
      accentBorder: "hover:border-violet-200",
      title: "Place Card",
      desc: "어디에서 어떤 흐름으로 움직이면 좋은지 알려줘요.",
    },
    {
      icon: MessageCircleMore,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      accentBorder: "hover:border-indigo-200",
      title: "Action Card",
      desc: "지금 말할 표현과 행동 순서를 간단히 보여줘요.",
    },
    {
      icon: Info,
      iconBg: "bg-fuchsia-100",
      iconColor: "text-fuchsia-600",
      accentBorder: "hover:border-fuchsia-200",
      title: "Context Card",
      desc: "왜 이런 행동이 자연스러운지 맥락을 알려줘요.",
    },
    {
      icon: Bookmark,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      accentBorder: "hover:border-emerald-200",
      title: "저장하고 다시 보기",
      desc: "자주 쓰는 가이드는 모아두고 반복해서 활용해요.",
    },
  ];
  return (
    <SectionFrame id="feature" tone="white" title="뉴아미의 핵심 기능" titleHighlight="핵심 기능">
      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <Reveal key={card.title} delay={idx * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition ${card.accentBorder} hover:shadow-md`}
              >
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${card.iconBg}`}>
                  <Icon className={`h-5 w-5 ${card.iconColor}`} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.desc}</p>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </SectionFrame>
  );
}

export function UsageFlowSection() {
  const { scrollYProgress } = useScroll();
  const lineScale = useSpring(scrollYProgress, { stiffness: 70, damping: 22 });
  const steps = [
    { num: "1", label: "영상 링크 입력", emoji: "🔗" },
    { num: "2", label: "AI 상황 분석", emoji: "🤖" },
    { num: "3", label: "행동 카드 생성", emoji: "✨" },
    { num: "4", label: "저장 및 재사용", emoji: "📌" },
    { num: "5", label: "더 자연스럽게 생활", emoji: "🌟" },
  ];
  return (
    <SectionFrame id="flow" tone="tint" title="뉴아미는 이렇게 사용해요">
      <div className="relative">
        {/* Connecting line */}
        <div className="absolute left-0 top-7 hidden h-0.5 w-full bg-violet-100 md:block" />
        <motion.div
          style={{ scaleX: lineScale }}
          className="absolute left-0 top-7 hidden h-0.5 w-full origin-left bg-gradient-to-r from-violet-400 to-indigo-400 md:block"
        />
        <div className="grid gap-4 md:grid-cols-5">
          {steps.map((step, idx) => (
            <Reveal key={step.num} delay={idx * 0.06}>
              <div className="flex flex-col items-center text-center">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-violet-500 to-indigo-500 text-xl shadow-md shadow-violet-200">
                  {step.emoji}
                </div>
                <div className="mt-3 rounded-2xl border border-violet-200 bg-white px-3 py-2.5 shadow-sm">
                  <p className="text-xs font-bold text-violet-600">STEP {step.num}</p>
                  <p className="mt-1 text-xs font-semibold text-slate-800">{step.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}

export function UseCasesSection() {
  const useCases = [
    { emoji: "☕", label: "카페 / 음식점", gradient: "from-amber-100 to-orange-50" },
    { emoji: "🏥", label: "병원 / 약국", gradient: "from-blue-100 to-cyan-50" },
    { emoji: "🏫", label: "학교 / 행정", gradient: "from-green-100 to-emerald-50" },
    { emoji: "🛍️", label: "쇼핑 / 결제", gradient: "from-pink-100 to-rose-50" },
    { emoji: "🚌", label: "대중교통 이후 실제 행동", gradient: "from-indigo-100 to-blue-50" },
    { emoji: "🙏", label: "일상 예절 / 분위기 이해", gradient: "from-violet-100 to-purple-50" },
  ];
  return (
    <SectionFrame id="cases" tone="white" title="이런 상황에서 활용할 수 있어요" titleHighlight="이런 상황에서">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {useCases.map((item, idx) => (
          <Reveal key={item.label} delay={idx * 0.05}>
            <motion.div whileHover={{ y: -4 }} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
              <div className={`flex h-28 items-center justify-center bg-gradient-to-br ${item.gradient}`}>
                <span className="text-5xl">{item.emoji}</span>
              </div>
              <p className="px-4 py-3 text-sm font-semibold text-slate-800">{item.label}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </SectionFrame>
  );
}

export function TrustSection() {
  const points = [
    {
      icon: "🎯",
      title: "이해에서 끝나지 않아요",
      desc: "콘텐츠를 '보는 것'을 넘어 실제 행동까지 연결해요.",
    },
    {
      icon: "⚡",
      title: "지금 필요한 행동을 알려줘요",
      desc: "상황에 맞는 표현과 행동 순서를 바로 확인해요.",
    },
    {
      icon: "🔖",
      title: "자주 쓰는 가이드를 다시 활용해요",
      desc: "저장한 카드를 언제든 꺼내볼 수 있어요.",
    },
  ];
  return (
    <SectionFrame id="trust" tone="soft" title="콘텐츠를 이해하는 것에서," titleHighlight="실제 행동">
      <div className="grid gap-5 md:grid-cols-3">
        {points.map((point, idx) => (
          <Reveal key={point.title} delay={idx * 0.07}>
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-violet-200 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-2xl">
                {point.icon}
              </div>
              <h3 className="text-base font-semibold text-slate-900">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{point.desc}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </SectionFrame>
  );
}

export function FinalCtaSection() {
  const onSubmit = (event: FormEvent) => event.preventDefault();
  return (
    <section id="cta" className="scroll-mt-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-violet-950 to-indigo-950 py-20 sm:py-28">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(139,92,246,0.25),_transparent_60%)]" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-violet-600/15 blur-3xl" />
      <div className="pointer-events-none absolute -top-16 right-0 h-72 w-72 rounded-full bg-indigo-600/15 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1200px] px-5">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-300">
            <WandSparkles className="h-3.5 w-3.5" />
            Nuami Pilot
          </p>
          <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
            이제 문화는 설명이 아니라,
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              행동으로 연결되어야 하니까
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-slate-400">
            뉴아미와 함께 한국 생활의 낯선 순간을 조금 더 자연스럽게 시작해보세요.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Left: CTA */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white">첫 사용자로 가장 먼저 경험해보세요</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                서비스 정식 공개 전, 파일럿으로 먼저 참여하고 출시 소식을 받아보실 수 있어요.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:hello@nuami.ai"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:brightness-110"
                >
                  파일럿 참여하기
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </a>
                <a
                  href="mailto:hello@nuami.ai"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
                >
                  출시 알림 받기
                </a>
              </div>
              <div className="mt-6 flex gap-6 border-t border-white/10 pt-6">
                {[["무료", "파일럿 참여"], ["선착순", "마감 예정"], ["즉시", "소식 수신"]].map(([label, sub]) => (
                  <div key={sub} className="flex flex-col">
                    <span className="text-lg font-bold text-violet-300">{label}</span>
                    <span className="text-xs text-slate-500">{sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: email form */}
          <Reveal delay={0.15}>
            <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="text-base font-semibold text-white">이메일로 소식 받기</p>
              <p className="mt-1 text-sm text-slate-400">출시 소식과 파일럿 초대를 가장 먼저 받아보세요.</p>
              <input
                className="mt-5 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none backdrop-blur-sm transition focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20"
                placeholder="이메일 주소를 입력해주세요"
              />
              <button
                type="submit"
                className="mt-3 w-full rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:brightness-110"
              >
                등록하기
              </button>
              <p className="mt-3 text-center text-xs text-slate-600">스팸 없이, 중요한 소식만 보내드려요.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function FooterSection() {
  return (
    <footer className="bg-slate-950 py-12 text-slate-400">
      <div className="mx-auto grid w-full max-w-[1200px] gap-8 px-5 md:grid-cols-3">
        <div>
          <p className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-lg font-bold text-transparent">
            Nuami
          </p>
          <p className="mt-2 text-sm leading-relaxed">외국인의 한국 생활을 돕는<br />AI 문화 행동 가이드</p>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-white">Contact</p>
          <a href="mailto:hello@nuami.ai" className="mt-2 block text-slate-400 transition hover:text-violet-400">
            hello@nuami.ai
          </a>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          {["소개", "대상", "도움 방식", "핵심 기능", "활용 사례", "시작하기"].map((item) => (
            <span key={item} className="rounded-lg bg-slate-800/80 px-3 py-1.5 text-slate-400 transition hover:text-slate-200">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-8 flex w-full max-w-[1200px] items-center justify-between border-t border-slate-800 px-5 pt-6">
        <p className="text-xs text-slate-600">© {new Date().getFullYear()} Nuami. All rights reserved.</p>
        <p className="text-xs text-slate-700">Made with ♥ for foreigners in Korea</p>
      </div>
    </footer>
  );
}
