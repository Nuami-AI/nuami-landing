import { ArrowRight } from "lucide-react";
import { institutions } from "@/content/site";

export default function InstitutionSection() {
  return (
    <section aria-labelledby="institutions-title" className="bg-lavender">
      <div className="container-x section-y grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20" data-reveal>
        <div>
          <p className="eyebrow text-brand-deep">{institutions.eyebrow}</p>
          <h2 id="institutions-title" className="h2 mt-4">
            {institutions.title}
          </h2>
          <p className="mt-6 text-ink/80">{institutions.description}</p>
          <a href="#contact" className="btn btn-primary mt-8 w-full sm:w-auto">
            {institutions.cta}
            <ArrowRight size={18} aria-hidden />
          </a>
        </div>

        <ol className="flex flex-col">
          {institutions.items.map((item, i) => (
            <li key={item.title} className="flex gap-5 border-t-2 border-brand/25 py-6 first:border-brand md:gap-7 md:py-8">
              <span aria-hidden className="text-[32px] leading-none font-extrabold text-brand md:text-[44px]">
                0{i + 1}
              </span>
              <div>
                <h3 className="text-[20px] font-extrabold leading-snug md:text-[23px]">{item.title}</h3>
                <p className="mt-2 text-[16px] text-ink/80 md:text-[17px]">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
