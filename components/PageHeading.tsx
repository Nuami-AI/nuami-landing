type PageHeadingProps = {
  eyebrow: string;
  pageName: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export default function PageHeading({ eyebrow, pageName, title, description, children }: PageHeadingProps) {
  return (
    <section className="border-b border-line bg-white">
      <div className="container-x rise-in pt-14 pb-14 md:pt-24 md:pb-20">
        <p className="eyebrow">
          {eyebrow}
          <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
          <span className="tracking-normal normal-case text-muted">{pageName}</span>
        </p>
        <h1 className="h1 mt-5 max-w-[16em]">{title}</h1>
        {description ? <p className="lead mt-6 max-w-[38em]">{description}</p> : null}
        {children}
      </div>
    </section>
  );
}
