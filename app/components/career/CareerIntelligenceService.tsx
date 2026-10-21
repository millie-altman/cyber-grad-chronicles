import Image from "next/image";
import Link from "next/link";
import "./career-intelligence-service.css";
import "./career-intelligence-options.css";

export type CareerServiceConfig = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  intro: string;
  fieldLabel: string;
  fieldName: string;
  fieldPlaceholder: string;
  fieldType?: "text" | "url";
  serviceOptions?: { label: string; description: string; value: string }[];
  checklist: string[];
  resourceLinks?: { label: string; description: string; href: string; external?: boolean }[];
  faqs: { question: string; answer: string }[];
};

const sharedBenefits = [
  ["01", "Constructive feedback", "Clear, actionable suggestions you can use right away."],
  ["02", "Career-aware perspective", "Guidance grounded in cybersecurity and IT career paths."],
  ["03", "Tailored direction", "Feedback shaped around your goals, experience, and next step."],
  ["04", "Supportive approach", "A practical review designed to help you move forward with confidence."],
];

export default function CareerIntelligenceService({ service }: { service: CareerServiceConfig }) {
  return (
    <main className="career-page career-intelligence-page">
      <section className="career-intelligence-hero">
        <Image className="career-intelligence-hero-image" src="/images/resume-hero.png" alt="A workspace prepared for career review and planning" fill priority sizes="100vw" />
        <div className="career-intelligence-hero-overlay" />
        <div className="career-container career-intelligence-hero-content">
          <Link className="career-back-link" href="/career">← Career Intelligence</Link>
          <p className="career-eyebrow">Career Intelligence · {service.eyebrow}</p>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
          <a className="career-button career-button-primary" href="#inquiry">Share your request <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="career-intelligence-benefits" aria-label="What you can expect">
        <div className="career-container career-intelligence-benefit-grid">
          {sharedBenefits.map(([number, title, text]) => <article key={title}><span>{number}</span><h2>{title}</h2><p>{text}</p></article>)}
        </div>
      </section>

      <section className="career-section career-intelligence-main" id="inquiry">
        <div className="career-container career-intelligence-layout">
          <aside className="career-intelligence-note">
            <p className="career-section-eyebrow">A free resource for now</p>
            <h2>Thoughtful guidance, while I build this out.</h2>
            <p>{service.intro}</p>
            <p>This is currently offered free while I strengthen the resources, examples, and advice behind Career Intelligence. Share what you are comfortable sharing, and I will use your context to shape a useful response.</p>
            <div className="career-intelligence-note-list">{service.checklist.map((item) => <span key={item}>✦ {item}</span>)}</div>
            {service.resourceLinks && <div className="career-intelligence-resources"><p className="career-section-eyebrow">Helpful resources</p>{service.resourceLinks.map((resource) => resource.external ? <a href={resource.href} target="_blank" rel="noopener noreferrer" key={resource.href}><strong>{resource.label}</strong><span>{resource.description}</span></a> : <Link href={resource.href} key={resource.href}><strong>{resource.label}</strong><span>{resource.description}</span></Link>)}</div>}
          </aside>

          <form className="career-intelligence-form" action={service.slug === "resume-review" || service.slug === "linkedin-review" || service.slug === "portfolio-review" ? "https://formspree.io/f/xrpewywr" : "https://formspree.io/f/mpqgdjge"} method="POST" encType="multipart/form-data">
            <input type="hidden" name="form_type" value={`${service.title} inquiry`} />
            <input type="hidden" name="service" value={service.title} />
            <div className="career-intelligence-form-heading"><p className="career-section-eyebrow">{service.title} inquiry</p><h2>Tell me what you are working toward.</h2><p>Share a little context so I can understand where feedback would be most useful.</p></div>
            <div className="career-intelligence-fields">
              <label>Full name *<input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
              <label>Email address *<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
              <label>Current or target role<input name="target_role" type="text" placeholder="e.g. SOC analyst, GRC, IT support" /></label>
              <label>{service.fieldLabel}<input name={service.fieldName} type={service.fieldType ?? "text"} placeholder={service.fieldPlaceholder} /></label>
              <label className="career-intelligence-field-full">What would you like feedback on? *<textarea name="goals" rows={5} placeholder="Tell me what you are hoping to improve or understand." required /></label>
              <label className="career-intelligence-field-full">Anything else I should know?<textarea name="additional_context" rows={4} placeholder="Optional context about your experience, goals, or constraints." /></label>
            </div>
            {service.serviceOptions && <fieldset className="career-intelligence-options career-intelligence-field-full"><legend>What kind of support are you looking for?</legend><div>{service.serviceOptions.map((option) => <label key={option.value}><input type="radio" name="support_type" value={option.value} required /><span><strong>{option.label}</strong>{option.description}</span></label>)}</div></fieldset>}
            {service.slug === "resume-review" && <label className="career-intelligence-upload career-intelligence-field-full">Upload your resume<input name="resume" type="file" accept=".pdf,.doc,.docx" /><span>PDF or DOCX is welcome. Please remove sensitive personal information.</span></label>}
            <label className="career-intelligence-agreement"><input name="acknowledgement" type="checkbox" value="Yes" required /><span>I understand this is an informal, free resource while Career Intelligence is being developed.</span></label>
            <button className="career-button career-button-primary" type="submit">Submit inquiry <span aria-hidden="true">→</span></button>
          </form>
        </div>
      </section>

      <section className="career-section career-intelligence-faq"><div className="career-container career-intelligence-faq-layout"><div><p className="career-section-eyebrow">Common questions</p><h2>{service.title} FAQ</h2></div><div className="career-faq-list">{service.faqs.map((faq) => <details className="career-faq-item" key={faq.question}><summary><span>{faq.question}</span><span className="career-faq-icon" aria-hidden="true">+</span></summary><div className="career-faq-answer"><p>{faq.answer}</p></div></details>)}</div></div></section>
      <section className="career-final-cta"><div className="career-container career-final-cta-inner"><div><p className="career-section-eyebrow">Keep building</p><h2>Your career story gets stronger one useful step at a time.</h2></div><Link className="career-button career-button-secondary" href="/career">Explore Career Intelligence</Link></div></section>
    </main>
  );
}
