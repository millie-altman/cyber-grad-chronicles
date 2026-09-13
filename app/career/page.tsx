import Link from "next/link";
import "./career-home.css";

const readinessPaths = [
  {
    number: "01",
    label: "Written Foundation",
    title: "Resume",
    description:
      "Make your experience clear, relevant, and easy for employers to understand.",
    outcomes: [
      "Stronger positioning and bullet points",
      "ATS-aware structure and keywords",
      "A focused story for your target roles",
    ],
    links: [
      { href: "/career/resume-review", text: "Resume Review" },
      { href: "/career/resume-rewrite", text: "Resume Rewrite" },
    ],
  },
  {
    number: "02",
    label: "Professional Presence",
    title: "LinkedIn",
    description:
      "Turn your profile into a consistent, searchable extension of your career story.",
    outcomes: [
      "Clear headline and About section",
      "Stronger experience presentation",
      "Better recruiter-facing visibility",
    ],
    links: [{ href: "/career/linkedin-review", text: "LinkedIn Review" }],
  },
  {
    number: "03",
    label: "Visible Proof",
    title: "Portfolio & GitHub",
    description:
      "Help people quickly understand what you built, what you learned, and how you think.",
    outcomes: [
      "Better project presentation",
      "Clearer READMEs and navigation",
      "Consistent technical storytelling",
    ],
    links: [
      { href: "/career/portfolio-review", text: "Portfolio Review" },
      { href: "/career/github-review", text: "GitHub Review" },
    ],
  },
  {
    number: "04",
    label: "Guidance & Direction",
    title: "Mentorship",
    description:
      "Share where you are, what feels unclear, and what support could help you move forward.",
    outcomes: [
      "Honest career transparency",
      "Answers to focused questions",
      "Practical next-step direction",
    ],
    links: [{ href: "/career/mentorship", text: "Mentorship Interest" }],
    featured: true,
  },
];

const supportLinks = [
  {
    title: "Interview Preparation",
    text: "Prepare stories, questions, and role-specific talking points.",
    href: "/career/interview-prep",
  },
  {
    title: "Service Bundles",
    text: "Coordinate feedback across your complete professional presence.",
    href: "/career/bundles",
  },
  {
    title: "Testimonials",
    text: "Read what others say about their Career Intelligence experience.",
    href: "/career/testimonials",
  },
  {
    title: "Frequently Asked Questions",
    text: "Review process, boundaries, turnaround, and service details.",
    href: "/career/faq",
  },
];

export default function CareerPage() {
  return (
    <main className="career-page">
      <section className="career-home-hero">
        <div className="career-container career-home-hero-grid">
          <div>
            <p className="career-eyebrow">Career Readiness</p>
            <h1>Build a career story employers can understand.</h1>
            <p className="career-home-hero-copy">
              Choose the part of your professional presence that needs attention
              now—from your resume and LinkedIn profile to your technical proof
              and career direction.
            </p>
            <div className="career-home-actions">
              <a
                className="career-button career-button-primary"
                href="#readiness-paths"
              >
                Choose a pathway
              </a>
              <Link
                className="career-button career-button-secondary"
                href="/career/mentorship"
              >
                Explore mentorship
              </Link>
            </div>
          </div>
          <aside
            className="career-home-summary"
            aria-label="Career readiness pathways"
          >
            <span>Your readiness map</span>
            <ol>
              {readinessPaths.map((path) => (
                <li key={path.number}>
                  <span>{path.number}</span>
                  {path.title}
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      <section className="career-section" id="readiness-paths">
        <div className="career-container">
          <div className="career-readiness-intro">
            <div>
              <p className="career-section-eyebrow">
                Four Ways to Move Forward
              </p>
              <h2>Start with the gap that matters most.</h2>
            </div>
            <p>
              Career readiness is not one document or one perfect profile. It is
              the alignment between what you know, the proof you can show, the
              story you tell, and the direction you choose next.
            </p>
          </div>
          <div className="career-readiness-grid">
            {readinessPaths.map((path) => (
              <article
                className={`career-readiness-card${path.featured ? " career-readiness-card-featured" : ""}`}
                key={path.title}
              >
                <div className="career-readiness-card-top">
                  <span className="career-readiness-number">{path.number}</span>
                  <span className="career-readiness-label">{path.label}</span>
                </div>
                <h3>{path.title}</h3>
                <p>{path.description}</p>
                <ul>
                  {path.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
                <div className="career-readiness-links">
                  {path.links.map((link) => (
                    <Link
                      className="career-button career-button-secondary"
                      href={link.href}
                      key={link.href}
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="career-support-section career-section">
        <div className="career-container">
          <div className="career-support-heading">
            <p className="career-section-eyebrow">Additional Support</p>
            <h2>Prepare for the whole process.</h2>
            <p>
              Once your foundation is clear, strengthen how you interview,
              compare coordinated services, and understand what to expect.
            </p>
          </div>
          <div className="career-support-grid">
            {supportLinks.map((item) => (
              <article className="career-support-card" key={item.href}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link href={item.href}>Explore {item.title} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="career-section">
        <div className="career-container career-home-process">
          <div>
            <p className="career-section-eyebrow">A Clear Starting Point</p>
            <h2>Build in the right order.</h2>
          </div>
          <ol className="career-home-steps">
            <li>
              <span>01</span>
              <div>
                <h3>Choose the current gap</h3>
                <p>
                  Focus on the document, platform, proof, or question creating
                  the most friction.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Share useful context</h3>
                <p>
                  Your goals, target roles, experience, and constraints make
                  guidance more relevant.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Apply prioritized feedback</h3>
                <p>
                  Make the highest-impact changes first instead of rebuilding
                  everything at once.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="career-final-cta">
        <div className="career-container career-final-cta-inner">
          <div>
            <p className="career-section-eyebrow">Proof Before Opportunity</p>
            <h2>You do not need a traditional path to build credible work.</h2>
            <p>
              Start with a readiness pathway or share your goals through the
              mentorship interest questionnaire.
            </p>
          </div>
          <div className="career-final-cta-actions">
            <a
              className="career-button career-button-primary"
              href="#readiness-paths"
            >
              Choose a pathway
            </a>
            <Link
              className="career-button career-button-secondary"
              href="/career/mentorship"
            >
              Mentorship Interest
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
