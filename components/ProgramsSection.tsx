import { programs } from "@/content/site";

export default function ProgramsSection() {
  return (
    <section id="programs" aria-labelledby="programs-title" className="section-y pt-0 md:pt-0">
      <div className="container-x" data-reveal>
        <div className="rounded-[28px] border border-line p-7 md:rounded-[32px] md:p-12">
          <h2 id="programs-title" className="h2">
            {programs.title}
          </h2>
          <p className="mt-4 text-muted">{programs.description}</p>
          <ul className="mt-8 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {programs.items.map((p) => (
              <li key={p.name} className="flex flex-col gap-2 border-t-2 border-brand py-5">
                <span className="text-[18px] font-extrabold leading-snug">{p.name}</span>
                <span className="self-start rounded-full bg-lavender px-3 py-1 text-[14px] font-bold text-brand-deep">{p.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
