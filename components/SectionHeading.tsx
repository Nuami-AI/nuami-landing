type SectionHeadingProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeading({ id, eyebrow, title, description, className = "" }: SectionHeadingProps) {
  return (
    <div className={`max-w-[44rem] ${className}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 id={id} className={`h2 ${eyebrow ? "mt-4" : ""}`}>
        {title}
      </h2>
      {description ? <p className="lead mt-5">{description}</p> : null}
    </div>
  );
}
