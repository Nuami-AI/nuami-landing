import GuideDemo from "@/components/GuideDemo";
import ProductVisual from "@/components/ProductVisual";
import { service } from "@/content/site";

export default function ServiceSection() {
  return (
    <section id="service" aria-labelledby="service-title" className="section-y bg-white pt-0 md:pt-0">
      <div className="container-x" data-reveal>
        <p className="eyebrow text-brand-deep">{service.eyebrow}</p>
        <h2 id="service-title" className="h2 mt-4 max-w-[22ch]">
          {service.title}
        </h2>
        <p className="mt-5 max-w-[40rem] text-muted">{service.description}</p>

        <dl className="mt-10 grid gap-x-8 gap-y-5 border-t border-line pt-8 sm:grid-cols-3">
          {service.cards.map((card) => (
            <div key={card.key}>
              <dt className="text-[14px] font-extrabold tracking-[0.1em] text-brand-deep uppercase">{card.label}</dt>
              <dd className="mt-1.5 text-[16px] text-muted">
                <strong className="block text-[17px] font-bold text-ink">{card.title}</strong>
                {card.description}
              </dd>
            </div>
          ))}
        </dl>

        <GuideDemo />
      </div>
      <ProductVisual />
    </section>
  );
}
