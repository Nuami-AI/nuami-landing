import FallbackImage from "@/components/FallbackImage";
import { mission } from "@/content/site";

const bubbleStyles = [
  "self-start bg-lavender rounded-bl-md",
  "self-end bg-coral-soft rounded-br-md",
  "self-start bg-lavender rounded-bl-md sm:ml-10",
];

export default function Mission() {
  return (
    <section aria-labelledby="mission-title" className="section-y">
      <div className="container-x" data-reveal>
        <h2 id="mission-title" className="h2 max-w-[18ch]">
          {mission.title}
        </h2>

        <div className="mt-10 grid gap-10 md:mt-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <ul className="flex flex-col gap-3" aria-label="유학생이 자주 마주하는 질문">
            {mission.questions.map((q, i) => (
              <li
                key={q}
                className={`max-w-[92%] rounded-[22px] px-5 py-4 text-[17px] font-semibold leading-snug text-ink md:text-[19px] ${bubbleStyles[i]}`}
              >
                “{q}”
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-6">
            <p className="text-[22px] font-extrabold leading-[1.45] tracking-[-0.02em] text-ink md:text-[30px]">
              {mission.statementLead} <span className="text-brand-deep">{mission.statementHighlight}</span>
            </p>
            <div className="relative aspect-[16/7] overflow-hidden rounded-[24px] bg-lavender">
              <FallbackImage
                src="/images/city-context.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover object-[50%_40%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
