import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { hero, isExternalServiceReady, site } from "@/content/site";

const cardTones = [
  "self-start bg-white",
  "self-center bg-white",
  "self-end bg-white",
];

function HeroPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[460px] pt-8 lg:pt-4" aria-label="뉴아미 가이드 카드 미리보기" role="group">
      <svg
        aria-hidden
        className="pointer-events-none absolute top-10 left-[12%] h-[85%] w-[76%] text-white/45"
        viewBox="0 0 200 300"
        fill="none"
        preserveAspectRatio="none"
      >
        <path d="M20 10 C 120 60, 40 150, 110 170 S 190 260, 180 295" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 9" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      </svg>

      <span className="sticker float-soft absolute -top-1 right-0 z-20 lg:-right-2">{hero.sticker}</span>

      <ol className="relative flex flex-col">
        {hero.previewCards.map((card, i) => (
          <li
            key={card.badge}
            className={`hero-rise relative w-[88%] max-w-[340px] rounded-[24px] p-4 shadow-[0_18px_40px_-18px_rgba(33,26,53,0.45)] sm:p-5 ${cardTones[i]} ${
              i > 0 ? "-mt-2 sm:-mt-3" : ""
            }`}
            style={{ animationDelay: `${120 + i * 110}ms`, zIndex: 10 - i }}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-lavender px-3 py-1 text-[12px] font-extrabold tracking-[0.12em] text-brand-deep">
                {card.badge}
              </span>
              <span
                aria-hidden
                className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-[13px] font-extrabold ${
                  i === 1 ? "bg-accent text-ink" : "bg-brand text-white"
                }`}
              >
                {i === 2 ? <Check size={15} strokeWidth={3} /> : i + 1}
              </span>
            </div>
            <p className="mt-3 text-[17px] font-bold leading-snug text-ink sm:text-[19px]">{card.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Hero() {
  const serviceReady = isExternalServiceReady();

  return (
    <section aria-labelledby="hero-title" className="container-x pt-3 md:pt-6">
      <div className="on-dark relative overflow-hidden rounded-[28px] bg-brand text-white md:rounded-[32px]">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -bottom-32 h-80 w-80 rounded-full bg-brand-deep/40 md:h-[30rem] md:w-[30rem]"
        />
        <div className="relative grid gap-10 px-6 pt-10 pb-10 sm:px-10 md:px-14 md:pt-16 md:pb-16 lg:grid-cols-[52fr_48fr] lg:items-center lg:gap-6 lg:px-16 lg:py-20">
          <div>
            <p className="eyebrow text-white/85">{hero.eyebrow}</p>
            <h1 id="hero-title" className="h1 mt-4">
              {hero.titleLead}
              <br />
              <span className="relative inline-block whitespace-nowrap">
                <span aria-hidden className="absolute inset-x-[-0.08em] bottom-[0.08em] h-[0.34em] rounded-md bg-accent" />
                <span className="relative">{hero.titleHighlight}</span>
              </span>
              {hero.titleTail}
            </h1>
            <p className="mt-6 max-w-[34rem] text-[17px] leading-relaxed text-white/90 md:text-[19px]">{hero.description}</p>
            <p className="mt-3 text-[15px] font-semibold text-white/75 md:text-[16px]">{hero.slogan}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {serviceReady && site.serviceUrl ? (
                <a href={site.serviceUrl} target="_blank" rel="noopener noreferrer" className="btn btn-light">
                  {hero.serviceCta}
                  <ArrowUpRight size={18} aria-hidden />
                  <span className="sr-only">(새 창)</span>
                </a>
              ) : (
                <a href="#service" className="btn btn-light">
                  {hero.primaryCta}
                  <ArrowRight size={18} aria-hidden />
                </a>
              )}
              <a href="#contact" className="btn btn-ghost-light">
                {hero.secondaryCta}
              </a>
            </div>
            {serviceReady ? (
              <a
                href="#service"
                className="mt-4 inline-flex min-h-11 items-center gap-1 text-[15px] font-semibold text-white underline underline-offset-4"
              >
                {hero.primaryCta}
              </a>
            ) : null}
          </div>

          <HeroPreview />
        </div>
      </div>
    </section>
  );
}
