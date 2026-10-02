import { Check } from "lucide-react";
import FallbackImage from "@/components/FallbackImage";
import { service } from "@/content/site";

export default function ProductVisual() {
  const { productImage } = service;

  return (
    <div className="container-x mt-16 md:mt-24" data-reveal>
      <p className="eyebrow text-brand-deep">{service.productEyebrow}</p>
      <h3 className="mt-3 text-[24px] font-extrabold tracking-[-0.02em] md:text-[32px]">{service.productTitle}</h3>

      <figure className="mt-6 overflow-hidden rounded-[24px] bg-brand md:rounded-[32px]">
        <FallbackImage
          src={productImage.src}
          width={productImage.width}
          height={productImage.height}
          alt={productImage.alt}
          sizes="(min-width: 1336px) 1240px, calc(100vw - 40px)"
          className="block h-auto w-full"
          loading="lazy"
        />
      </figure>

      <ul className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-6">
        {service.trust.map((line) => (
          <li key={line} className="flex items-start gap-3 text-[16px] font-semibold text-ink md:text-[17px]">
            <span aria-hidden className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lavender text-brand-deep">
              <Check size={14} strokeWidth={3} />
            </span>
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}
