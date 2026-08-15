type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  className = "",
}: PageHeroProps) {
  return (
    <section className={`page-hero ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className="section-title">{title}</h1>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </section>
  );
}