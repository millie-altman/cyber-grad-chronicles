type SectionCardProps = {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  href?: string;
  className?: string;
};

export default function SectionCard({
  eyebrow,
  title,
  children,
  href,
  className = "",
}: SectionCardProps) {
  const content = (
    <>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h3>{title}</h3>
      <div>{children}</div>
    </>
  );

  if (href) {
    return (
      <a href={href} className={`card section-card ${className}`}>
        {content}
      </a>
    );
  }

  return <div className={`card section-card ${className}`}>{content}</div>;
}