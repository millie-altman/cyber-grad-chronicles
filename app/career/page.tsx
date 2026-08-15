import Link from "next/link";

const services = [
  {
    eyebrow: "01",
    title: "Resume Review",
    price: "$25",
    description:
      "Receive a detailed assessment of your resume with actionable feedback on content, formatting, readability, and job alignment.",
    features: [
      "ATS and keyword feedback",
      "Formatting and readability review",
      "Bullet point recommendations",
      "Personalized priority checklist",
    ],
    href: "/career/resume-review",
    linkText: "Explore Resume Reviews",
  },
  {
    eyebrow: "02",
    title: "Resume Rewrite",
    price: "$50",
    description:
      "Turn an outdated, unfocused, or underperforming resume into a polished document tailored to your career goals.",
    features: [
      "Complete resume rewrite",
      "Stronger summary and skills",
      "Impact-focused bullet points",
      "Role-specific positioning",
    ],
    href: "/career/resume-rewrite",
    linkText: "Explore Resume Rewrites",
  },
  {
    eyebrow: "03",
    title: "LinkedIn Review",
    price: "$30",
    description:
      "Strengthen your professional presence with personalized recommendations for every major section of your LinkedIn profile.",
    features: [
      "Headline and About review",
      "Experience section feedback",
      "Skills and profile optimization",
      "Recruiter visibility recommendations",
    ],
    href: "/career/linkedin-review",
    linkText: "Explore LinkedIn Reviews",
  },
  {
    eyebrow: "04",
    title: "GitHub Review",
    price: "$20",
    description:
      "Make your technical work easier for recruiters and hiring managers to understand, navigate, and evaluate.",
    features: [
      "Profile presentation review",
      "Repository organization",
      "README and documentation feedback",
      "Project visibility recommendations",
    ],
    href: "/career/github-review",
    linkText: "Explore GitHub Reviews",
  },
  {
    eyebrow: "05",
    title: "Portfolio Review",
    price: "$25",
    description:
      "Receive a thorough review of your personal website, project portfolio, or digital body of work.",
    features: [
      "Navigation and user experience",
      "Project presentation",
      "Content and personal branding",
      "Recruiter-focused recommendations",
    ],
    href: "/career/portfolio-review",
    linkText: "Explore Portfolio Reviews",
  },
  {
    eyebrow: "06",
    title: "Interview Preparation",
    price: "$35",
    description:
      "Prepare for your next opportunity with questions, research guidance, and recommendations tailored to the position.",
    features: [
      "Behavioral question preparation",
      "Role-specific technical topics",
      "Experience talking points",
      "Personalized preparation guide",
    ],
    href: "/career/interview-prep",
    linkText: "Explore Interview Preparation",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Choose your review",
    description:
      "Select the individual service or bundle that best matches your current career goals.",
  },
  {
    number: "02",
    title: "Share your materials",
    description:
      "Submit your resume, links, job posting, career goals, and any relevant background information.",
  },
  {
    number: "03",
    title: "Receive a thorough review",
    description:
      "I personally evaluate your materials and identify the changes that will make the greatest difference.",
  },
  {
    number: "04",
    title: "Use your action plan",
    description:
      "Apply clear, prioritized recommendations or receive a completed rewrite based on the service you selected.",
  },
];

const audiences = [
  "Cybersecurity students and recent graduates",
  "Military spouses and veterans",
  "Career changers entering technology",
  "Early-career cybersecurity professionals",
  "Job seekers building technical portfolios",
  "Applicants struggling to communicate their value",
];

const principles = [
  {
    title: "Personalized",
    description:
      "Your feedback is based on your experience, goals, target roles, and current materials—not a generic checklist.",
  },
  {
    title: "Educational",
    description:
      "I explain why changes are recommended so you can make stronger career decisions long after the review is complete.",
  },
  {
    title: "Honest",
    description:
      "You will receive practical feedback about what is working, what is weakening your presentation, and what to prioritize.",
  },
  {
    title: "Research-informed",
    description:
      "Recommendations draw from cybersecurity hiring research, recruiter guidance, ATS practices, and ongoing career development.",
  },
];

const bundleHighlights = [
  {
    title: "Foundation Bundle",
    price: "$65",
    description:
      "A practical starting point for students, recent graduates, and early-career professionals.",
    included: ["Resume Review", "LinkedIn Review", "GitHub Review"],
  },
  {
    title: "Career Presence Bundle",
    price: "$95",
    description:
      "A more complete package for job seekers who need stronger materials across multiple platforms.",
    included: [
      "Resume Rewrite",
      "LinkedIn Review",
      "Portfolio Review",
      "GitHub Review",
    ],
    featured: true,
  },
  {
    title: "Complete Career Review",
    price: "$145",
    description:
      "A comprehensive review of the materials supporting your professional brand and job search.",
    included: [
      "Resume Rewrite",
      "LinkedIn Review",
      "Portfolio Review",
      "GitHub Review",
      "Interview Preparation",
    ],
  },
];

export default function CareerPage() {
  return (
    <>
      <main className="career-page">
        <section className="career-hero">
          <div className="career-container career-hero-grid">
            <div className="career-hero-content">
              <p className="career-eyebrow">Career Intelligence</p>

              <h1>Turn your experience into a story employers understand.</h1>

              <p className="career-hero-description">
                Personalized resume, LinkedIn, GitHub, portfolio, and interview
                reviews for cybersecurity students, military spouses, veterans,
                career changers, and early-career professionals.
              </p>

              <div className="career-hero-actions">
                <a className="career-button career-button-primary" href="#services">
                  Explore Services
                </a>

                <Link
                  className="career-button career-button-secondary"
                  href="/career/bundles"
                >
                  View Bundles
                </Link>
              </div>

              <ul
                className="career-hero-details"
                aria-label="Career review highlights"
              >
                <li>Personalized feedback</li>
                <li>Actionable recommendations</li>
                <li>Beginner-friendly guidance</li>
              </ul>
            </div>

            <aside
              className="career-hero-panel"
              aria-label="Career Intelligence review overview"
            >
              <p className="career-panel-label">Review Framework</p>

              <div className="career-score-preview">
                <div className="career-score-heading">
                  <span>Career Readiness</span>
                  <strong>Detailed Assessment</strong>
                </div>

                <div className="career-score-item">
                  <span>Clarity</span>
                  <span>Positioning</span>
                </div>

                <div className="career-score-item">
                  <span>Technical Evidence</span>
                  <span>Presentation</span>
                </div>

                <div className="career-score-item">
                  <span>Role Alignment</span>
                  <span>Next Steps</span>
                </div>
              </div>

              <p className="career-panel-note">
                Every review focuses on helping you communicate what you know,
                what you have accomplished, and where you are ready to go next.
              </p>
            </aside>
          </div>
        </section>

        <section className="career-introduction career-section">
          <div className="career-container career-introduction-grid">
            <div>
              <p className="career-section-eyebrow">A Better Kind of Feedback</p>
              <h2>More than proofreading and generic career advice.</h2>
            </div>

            <div className="career-introduction-copy">
              <p>
                You have probably been told to add keywords, quantify your
                achievements, improve your personal brand, or make your projects
                stand out. Those suggestions are not helpful when no one explains
                what they should look like for your specific experience.
              </p>

              <p>
                Career Intelligence reviews provide detailed, practical guidance
                based on your goals, target roles, current materials, and stage of
                your career. You will learn what is already working, what may be
                holding you back, and which changes deserve your attention first.
              </p>
            </div>
          </div>
        </section>

        <section className="career-services career-section" id="services">
          <div className="career-container">
            <div className="career-section-heading">
              <div>
                <p className="career-section-eyebrow">Individual Reviews</p>
                <h2>Choose the support you need right now.</h2>
              </div>

              <p>
                Start with one focused review or combine services for a more
                complete assessment of your professional presence.
              </p>
            </div>

            <div className="career-services-grid">
              {services.map((service) => (
                <article className="career-service-card" key={service.title}>
                  <div className="career-service-card-header">
                    <span className="career-service-number">
                      {service.eyebrow}
                    </span>
                    <span className="career-service-price">{service.price}</span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <ul>
                    {service.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  <Link className="career-text-link" href={service.href}>
                    {service.linkText}
                    <span aria-hidden="true"> →</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="career-audience career-section">
          <div className="career-container career-audience-grid">
            <div className="career-audience-content">
              <p className="career-section-eyebrow">Who It Is For</p>
              <h2>Career support for people still building their path.</h2>

              <p>
                These services are designed for people who may not have a
                traditional path, an established professional network, or years
                of industry experience—but still have valuable skills and
                experiences worth presenting well.
              </p>

              <Link className="career-text-link" href="/career/faq">
                Read the frequently asked questions
                <span aria-hidden="true"> →</span>
              </Link>
            </div>

            <ul className="career-audience-list">
              {audiences.map((audience) => (
                <li key={audience}>
                  <span aria-hidden="true">+</span>
                  {audience}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="career-principles career-section">
          <div className="career-container">
            <div className="career-section-heading">
              <div>
                <p className="career-section-eyebrow">The Review Standard</p>
                <h2>Thoughtful guidance without empty promises.</h2>
              </div>

              <p>
                The goal is not to make your materials sound impressive at any
                cost. The goal is to represent your experience clearly,
                confidently, and honestly.
              </p>
            </div>

            <div className="career-principles-grid">
              {principles.map((principle, index) => (
                <article className="career-principle-card" key={principle.title}>
                  <span className="career-principle-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="career-process career-section">
          <div className="career-container">
            <div className="career-section-heading">
              <div>
                <p className="career-section-eyebrow">How It Works</p>
                <h2>A clear process from submission to next steps.</h2>
              </div>

              <p>
                You will know what information to provide, what your service
                includes, and what you will receive at the end of the review.
              </p>
            </div>

            <div className="career-process-list">
              {processSteps.map((step) => (
                <article className="career-process-step" key={step.number}>
                  <span className="career-process-number">{step.number}</span>

                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="career-report career-section">
          <div className="career-container career-report-grid">
            <div className="career-report-content">
              <p className="career-section-eyebrow">
                Career Intelligence Report
              </p>

              <h2>Understand what to change—and why it matters.</h2>

              <p>
                Reviews are structured to make your next steps clear. Instead of
                receiving a page of disconnected comments, you will receive
                organized feedback that identifies strengths, weaknesses,
                priority changes, and practical recommendations.
              </p>

              <ul className="career-report-features">
                <li>Overall assessment and first impression</li>
                <li>What is already working well</li>
                <li>High-priority improvements</li>
                <li>Section-by-section recommendations</li>
                <li>Role and audience alignment</li>
                <li>Clear next steps</li>
              </ul>
            </div>

            <aside
              className="career-report-preview"
              aria-label="Example Career Intelligence Report"
            >
              <div className="career-report-preview-header">
                <p>Cyber Grad Chronicles</p>
                <span>Career Intelligence Report</span>
              </div>

              <div className="career-report-preview-body">
                <div className="career-report-preview-score">
                  <span>Overall Assessment</span>
                  <strong>Career Readiness</strong>
                </div>

                <div className="career-report-preview-section">
                  <span>01</span>
                  <p>Top Strengths</p>
                </div>

                <div className="career-report-preview-section">
                  <span>02</span>
                  <p>Priority Improvements</p>
                </div>

                <div className="career-report-preview-section">
                  <span>03</span>
                  <p>Detailed Recommendations</p>
                </div>

                <div className="career-report-preview-section">
                  <span>04</span>
                  <p>Next-Step Action Plan</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="career-bundles career-section">
          <div className="career-container">
            <div className="career-section-heading">
              <div>
                <p className="career-section-eyebrow">Service Bundles</p>
                <h2>Build a stronger professional presence across platforms.</h2>
              </div>

              <p>
                Bundles are designed for job seekers who need coordinated
                feedback across more than one career document or platform.
              </p>
            </div>

            <div className="career-bundles-grid">
              {bundleHighlights.map((bundle) => (
                <article
                  className={`career-bundle-card${
                    bundle.featured ? " career-bundle-card-featured" : ""
                  }`}
                  key={bundle.title}
                >
                  {bundle.featured && (
                    <span className="career-bundle-badge">Recommended</span>
                  )}

                  <h3>{bundle.title}</h3>
                  <p className="career-bundle-price">{bundle.price}</p>
                  <p>{bundle.description}</p>

                  <ul>
                    {bundle.included.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <Link
                    className={
                      bundle.featured
                        ? "career-button career-button-primary"
                        : "career-button career-button-secondary"
                    }
                    href="/career/bundles"
                  >
                    View Bundle Details
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="career-transparency career-section">
          <div className="career-container career-transparency-grid">
            <div>
              <p className="career-section-eyebrow">A Transparent Approach</p>
              <h2>Advice grounded in research, experience, and continued learning.</h2>
            </div>

            <div className="career-transparency-copy">
              <p>
                I am not presenting myself as a recruiter, hiring manager, or
                career coach with decades of industry experience. I am a
                cybersecurity professional, researcher, military spouse, and
                career builder who has spent extensive time studying hiring
                practices, resume strategy, portfolio development, federal
                applications, LinkedIn, and the challenges facing early-career
                candidates.
              </p>

              <p>
                My role is to give you the same kind of thorough, thoughtful
                review I would want when preparing my own career materials. I do
                not guarantee interviews, job offers, or employment outcomes. I
                provide honest feedback and practical recommendations that can
                help you present your work more effectively.
              </p>
            </div>
          </div>
        </section>

        <section className="career-final-cta">
          <div className="career-container career-final-cta-inner">
            <div>
              <p className="career-section-eyebrow">
                Your Work Deserves to Be Understood
              </p>
              <h2>Build career materials you feel confident sharing.</h2>
              <p>
                Choose an individual review or explore a bundled assessment for
                more complete guidance.
              </p>
            </div>

            <div className="career-final-cta-actions">
              <a className="career-button career-button-primary" href="#services">
                Choose a Service
              </a>

              <Link
                className="career-button career-button-secondary"
                href="/career/faq"
              >
                Read the FAQ
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}