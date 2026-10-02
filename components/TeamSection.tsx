import Image from "next/image";
import { team, type TeamMember } from "@/content/team";
import { teamSection } from "@/content/site";

function PathGraphic({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden className={className} viewBox="0 0 220 160" fill="none">
      <path d="M8 150 C 60 150, 50 70, 110 80 S 170 20, 200 18" stroke="currentColor" strokeWidth="3" strokeDasharray="6 9" strokeLinecap="round" />
      <circle cx="200" cy="18" r="16" fill="currentColor" />
      <path d="M192 18 l6 6 l10 -12" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Poster({ member, tone }: { member: TeamMember; tone: "lavender" | "coral" }) {
  const hasDetails = Boolean(member.role || member.headline || member.introduction || member.highlights.length || member.tags.length);
  const bg = tone === "lavender" ? "bg-lavender" : "bg-coral-soft";
  const accent = tone === "lavender" ? "text-brand" : "text-accent";

  return (
    <li className={`group relative flex min-h-[300px] flex-col overflow-hidden rounded-[28px] border-2 border-transparent p-7 transition-colors hover:border-brand/30 md:min-h-[440px] md:rounded-[32px] md:p-10 ${bg}`}>
      {member.portrait ? (
        <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-[24px] bg-white">
          <Image src={member.portrait} alt={`${member.displayName} 프로필 사진`} fill loading="lazy" sizes="(min-width: 768px) 560px, 100vw" className="object-cover object-top" />
        </div>
      ) : null}

      {hasDetails ? (
        <>
          <PathGraphic className={`pointer-events-none absolute top-6 right-6 h-20 w-28 md:h-28 md:w-40 ${accent}`} />
          <h3 className="text-[40px] leading-tight font-extrabold tracking-[-0.03em] md:text-[48px]">{member.displayName}</h3>
          {member.englishName || member.role ? (
            <p className="mt-1 text-[15px] font-bold text-muted md:text-[16px]">
              {[member.englishName, member.role].filter(Boolean).join(" · ")}
            </p>
          ) : null}
          {member.headline ? <p className="mt-6 text-[20px] font-extrabold leading-snug md:text-[23px]">{member.headline}</p> : null}
          {member.introduction ? <p className="mt-3 max-w-[30rem] text-[16px] text-ink/80 md:text-[17px]">{member.introduction}</p> : null}
          {member.highlights.length ? (
            <ul className="mt-6 flex flex-col gap-2">
              {member.highlights.slice(0, 3).map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-[15px] font-semibold md:text-[16px]">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {h}
                </li>
              ))}
            </ul>
          ) : null}
          {member.tags.length ? (
            <ul className="mt-auto flex flex-wrap gap-2 pt-6" aria-label="역할">
              {member.tags.map((t) => (
                <li key={t} className="rounded-full bg-white px-3 py-1 text-[14px] font-bold text-brand-deep">
                  #{t}
                </li>
              ))}
            </ul>
          ) : null}
        </>
      ) : (
        <div className="flex flex-1 flex-col justify-between">
          <PathGraphic className={`h-28 w-40 self-end md:h-36 md:w-52 ${accent}`} />
          <h3 className="text-[88px] leading-none font-extrabold tracking-[-0.05em] md:text-[132px]">{member.displayName}</h3>
        </div>
      )}
    </li>
  );
}

export default function TeamSection() {
  const featured = team.filter((m) => m.highlighted);
  const others = team.filter((m) => !m.highlighted);

  return (
    <section id="team" aria-labelledby="team-title" className="section-y pt-0 md:pt-0">
      <div className="container-x" data-reveal>
        <p className="eyebrow text-brand-deep">{teamSection.eyebrow}</p>
        <h2 id="team-title" className="h2 mt-4">
          {teamSection.title}
        </h2>
        <p className="mt-4 max-w-[38rem] text-muted">{teamSection.description}</p>

        <ul className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2 md:gap-6">
          {featured.map((m, i) => (
            <Poster key={m.id} member={m} tone={i % 2 === 0 ? "lavender" : "coral"} />
          ))}
        </ul>

        {others.length ? (
          <ul className="mt-8 grid gap-6 border-t border-line pt-8 md:grid-cols-2 md:gap-10">
            {others.map((m) => (
              <li key={m.id}>
                <h3 className="text-[20px] font-extrabold">
                  {m.displayName}
                  {m.role ? <span className="ml-2 text-[16px] font-bold text-muted">| {m.role}</span> : null}
                </h3>
                {m.introduction ? <p className="mt-2 text-[16px] text-ink/80 md:text-[17px]">{m.introduction}</p> : null}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
