import Image from "next/image";
import { images } from "@/content/site";

type PageHeadingProps = {
  eyebrow: string;
  pageName: string;
  title: string;
  description?: string;
  image?: keyof typeof images;
  children?: React.ReactNode;
};

export default function PageHeading({ eyebrow, pageName, title, description, image = "hero", children }: PageHeadingProps) {
  return (
    <section className="hero-dark relative isolate overflow-hidden bg-ink text-white">
      <Image
        src={images[image].src}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 scale-110 object-cover blur-[6px]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-black/55" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-black/60 via-black/30 to-transparent" />
      <div className="container-x rise-in pt-16 pb-16 md:pt-28 md:pb-24">
        <p className="eyebrow text-[#c4abff]">
          {eyebrow}
          <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
          <span className="tracking-normal normal-case text-white/75">{pageName}</span>
        </p>
        <h1 className="h1 mt-5 max-w-[16em] text-white">{title}</h1>
        {description ? <p className="lead mt-6 max-w-[38em] text-white/85">{description}</p> : null}
        {children}
      </div>
    </section>
  );
}
