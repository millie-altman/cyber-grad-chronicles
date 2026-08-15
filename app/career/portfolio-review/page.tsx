import Link from "next/link";

const reviewAreas = [
  {
    number: "01",
    title: "First Impression",
    description:
      "How clearly your portfolio communicates who you are, what you do, and which professional opportunities you are pursuing.",
  },
  {
    number: "02",
    title: "Navigation and Structure",
    description:
      "Whether visitors can easily find your projects, experience, credentials, contact information, and other important content.",
  },
  {
    number: "03",
    title: "Project Presentation",
    description:
      "How effectively your projects explain the problem, process, tools, decisions, outcomes, and skills demonstrated.",
  },
  {
    number: "04",
    title: "Professional Content",
    description:
      "Whether your biography, experience, credentials, writing, and supporting content strengthen your professional positioning.",
  },
  {
    number: "05",
    title: "Visual Consistency",
    description:
      "How consistently your typography, spacing, imagery, colors, layouts, and interface elements support a polished experience.",
  },
  {
    number: "06",
    title: "Recruiter Usability",
    description:
      "How quickly a recruiter or hiring manager can understand your qualifications, evaluate your work, and determine how to contact you.",
  },
];

const includedItems = [
  "A complete review of one portfolio website",
  "Homepage and first-impression assessment",
  "Navigation and information architecture feedback",
  "Project presentation recommendations",
  "Professional biography and content feedback",
  "Visual consistency and readability assessment",
  "Recruiter usability recommendations",
  "Mobile experience observations",
  "Call-to-action and contact guidance",
  "A prioritized portfolio improvement plan",
];

const submissionItems = [
  {
    title: "Your portfolio link",
    description:
      "Provide the public URL for the website or digital portfolio you want reviewed.",
  },
  {
    title: "Your target role",
    description:
      "Share the job title, career field, or professional direction your portfolio should support.",
  },
  {
    title: "Your priority pages",
    description:
      "Identify the pages, projects, case studies, or sections you most want employers to notice.",
  },
  {
    title: "Your current resume",
    description:
      "Your resume helps determine whether your portfolio supports the same experience, skills, and professional direction.",
  },
  {
    title: "Your intended audience",
    description:
      "Explain whether the portfolio is primarily for recruiters, hiring managers, clients, collaborators, students, or another audience.",
  },
  {
    title: "Your current concerns",
    description:
      "Describe anything that feels confusing, incomplete, outdated, difficult to navigate, or disconnected from your career goals.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Purchase your review",
    description:
      "Complete your purchase and receive instructions for submitting your portfolio and supporting career information.",
  },
  {
    number: "02",
    title: "Share your website",
    description:
      "Provide your portfolio link, target role, priority pages, resume, intended audience, and any questions you want addressed.",
  },
  {
    number: "03",
    title: "I evaluate the experience",
    description:
      "I review your portfolio from the perspective of a first-time visitor, recruiter, hiring manager, and professional contact.",
  },
  {
    number: "04",
    title: "Receive your feedback",
    description:
      "You receive organized recommendations covering content, navigation, projects, presentation, readability, and professional alignment.",
  },
  {
    number: "05",
    title: "Improve with direction",
    description:
      "Use your prioritized action plan to strengthen the pages and changes that will have the greatest impact.",
  },
];

const idealFor = [
  "Cybersecurity students and recent graduates",
  "Technology professionals building personal websites",
  "Career changers creating proof of work",
  "Military spouses and veterans",
  "Applicants with technical projects or case studies",
  "Professionals launching a new portfolio",
  "Job seekers receiving limited portfolio engagement",
  "Creators unsure how employers experience their website",
];

const portfolioPrinciples = [
  {
    title: "Clear",
    description:
      "Visitors should quickly understand your identity, professional direction, strongest qualifications, and the purpose of your website.",
  },
  {
    title: "Navigable",
    description:
      "Important pages, projects, credentials, and contact information should be easy to locate without unnecessary searching.",
  },
  {
    title: "Evidence-Based",
    description:
      "Your projects and case studies should provide enough context, process, artifacts, and outcomes to support your stated abilities.",
  },
  {
    title: "Intentional",
    description:
      "Every major section should serve a purpose and help visitors understand your experience, work, or professional story.",
  },
];

const commonPortfolioIssues = [
  {
    title: "Unclear professional direction",
    description:
      "The homepage looks polished but does not clearly explain what the person does, what roles they want, or why the portfolio exists.",
  },
  {
    title: "Projects without context",
    description:
      "Project pages show screenshots or tool names but do not explain the problem, process, decisions, results, or professional relevance.",
  },
  {
    title: "Too much content",
    description:
      "Important information is buried beneath long sections, repeated explanations, unnecessary pages, or competing calls to action.",
  },
  {
    title: "Weak navigation",
    description:
      "Visitors cannot easily find projects, credentials, experience, contact information, or a clear path through the website.",
  },
  {
    title: "Inconsistent presentation",
    description:
      "Fonts, spacing, layouts, image styles, button patterns, or page structures change enough to make the portfolio feel disconnected.",
  },
  {
    title: "Missing next step",
    description:
      "The website presents the work but does not make it clear how a recruiter, employer, client, or collaborator should continue.",
  },
];

const notIncluded = [
  {
    title: "Website development",
    description:
      "This service provides feedback and recommendations but does not include writing, coding, redesigning, or rebuilding the website.",
  },
  {
    title: "Formal accessibility audit",
    description:
      "The review may identify visible usability or readability concerns, but it is not a certified accessibility or WCAG compliance audit.",
  },
  {
    title: "Security testing",
    description:
      "The service does not include penetration testing, vulnerability scanning, source-code auditing, or infrastructure security assessment.",
  },
  {
    title: "Private account access",
    description:
      "I will not request hosting credentials, content management passwords, repository tokens, analytics access, or administrator permissions.",
  },
  {
    title: "Guaranteed hiring outcomes",
    description:
      "A stronger portfolio may improve how your work is understood, but it cannot guarantee website traffic, interviews, clients, or job offers.",
  },
  {
    title: "Unlimited page reviews",
    description:
      "The service covers one portfolio website and the primary public pages available at the time of review.",
  },
];

const frequentlyAskedQuestions = [
  {
    question: "How many pages will you review?",
    answer:
      "The service includes an overall review of one portfolio website and its primary public pages. Very large websites, extensive archives, or multiple separate websites may require additional review services.",
  },
  {
    question: "Does my portfolio need to be finished?",
    answer:
      "No. A review can be useful before launch, during a redesign, or after the website is live. The site must be accessible through a public or temporary review link.",
  },
  {
    question: "Will you review the mobile version?",
    answer:
      "Yes. The review includes general observations about how the website appears and functions on smaller screens. It is not a complete device-by-device quality assurance test.",
  },
  {
    question: "Will you review my code?",
    answer:
      "No. This service focuses on the visitor experience, professional presentation, content, structure, and usability. A GitHub Review is better suited for repository documentation and technical proof of work.",
  },
  {
    question: "Can you redesign my portfolio?",
    answer:
      "The review may include layout, structure, content, and visual recommendations, but it does not include creating mockups, editing code, or rebuilding the website.",
  },
  {
    question: "Can you review a portfolio outside cybersecurity?",
    answer:
      "Yes. My strongest focus is cybersecurity, technology, career changers, and early-career professionals, but the principles of clear presentation, navigation, evidence, and professional positioning apply across many fields.",
  },
  {
    question: "What if my portfolio is hosted locally?",
    answer:
      "The website must be accessible through a public or temporary review link. Files stored only on your computer cannot be reviewed through this service.",
  },
  {
    question: "Will you review analytics or search performance?",
    answer:
      "The standard review does not include analytics interpretation, technical SEO, keyword research, traffic strategy, or search-ranking analysis.",
  },
];

export default function PortfolioReviewPage() {
  return (
    <main className="career-page career-service-page">
      <section className="career-service-hero">
        <div className="career-container career-service-hero-grid">
          <div className="career-service-hero-content">
            <div className="career-breadcrumbs" aria-label="Breadcrumb">
              <Link href="/career">Career Intelligence</Link>
              <span aria-hidden="true">/</span>
              <span>Portfolio Review</span>
            </div>

            <p className="career-eyebrow">Career Intelligence Service</p>

            <h1>Portfolio Review</h1>

            <p className="career-service-hero-description">
              Receive a detailed assessment of your personal website, projects,
              content, navigation, visual presentation, and overall effectiveness
              as a professional portfolio.
            </p>

            <div className="career-service-hero-actions">
              <a
                className="career-button career-button-primary"
                href="#purchase"
              >
                Purchase Portfolio Review
              </a>

              <a
                className="career-button career-button-secondary"
                href="#included"
              >
                See What Is Included
              </a>
            </div>

            <ul
              className="career-service-hero-details"
              aria-label="Portfolio Review highlights"
            >
              <li>One portfolio website</li>
              <li>Complete visitor experience</li>
              <li>Prioritized action plan</li>
            </ul>
          </div>

          <aside
            className="career-service-summary-card"
            aria-label="Portfolio Review service summary"
          >
            <div className="career-service-summary-header">
              <p>Portfolio Review</p>
              <span>Individual Service</span>
            </div>

            <p className="career-service-summary-price">
              <span>$</span>
              <strong>25</strong>
            </p>

            <p className="career-service-summary-description">
              A complete assessment of your website’s content, projects,
              navigation, presentation, professional alignment, and recruiter
              usability.
            </p>

            <div className="career-service-summary-details">
              <div>
                <span>Service Type</span>
                <strong>Review and Feedback</strong>
              </div>

              <div>
                <span>Websites</span>
                <strong>One Portfolio</strong>
              </div>

              <div>
                <span>Best For</span>
                <strong>Professional Presentation</strong>
              </div>

              <div>
                <span>Deliverable</span>
                <strong>Career Intelligence Report</strong>
              </div>
            </div>

            <a
              className="career-button career-button-primary career-button-full"
              href="#purchase"
            >
              Get Started
            </a>
          </aside>
        </div>
      </section>

      <section className="career-service-introduction career-section">
        <div className="career-container career-service-introduction-grid">
          <div>
            <p className="career-section-eyebrow">
              Your Work in One Place
            </p>

            <h2>Your portfolio should make your value easier to see.</h2>
          </div>

          <div className="career-service-introduction-copy">
            <p>
              A personal website gives you more room than a resume or LinkedIn
              profile to explain your projects, research, experience, interests,
              and professional journey. That freedom can also make it difficult
              to decide what belongs, what should lead, and what visitors need
              to understand first.
            </p>

            <p>
              A Portfolio Review evaluates how effectively your website guides a
              first-time visitor through your work. The goal is to identify where
              your portfolio builds confidence and where unclear structure,
              incomplete projects, or presentation issues may be hiding your
              strongest qualifications.
            </p>
          </div>
        </div>
      </section>

      <section className="career-review-areas career-section" id="included">
        <div className="career-container">
          <div className="career-section-heading">
            <div>
              <p className="career-section-eyebrow">What I Evaluate</p>

              <h2>Every page should support a clear professional story.</h2>
            </div>

            <p>
              Your website will be reviewed as a complete experience, from the
              first impression on the homepage to the next action you want a
              visitor to take.
            </p>
          </div>

          <div className="career-review-areas-grid">
            {reviewAreas.map((area) => (
              <article className="career-review-area-card" key={area.number}>
                <span className="career-review-area-number">
                  {area.number}
                </span>

                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="career-service-included career-section">
        <div className="career-container career-service-included-grid">
          <div className="career-service-included-content">
            <p className="career-section-eyebrow">Your Review Includes</p>

            <h2>Feedback across your complete portfolio experience.</h2>

            <p>
              Recommendations will focus on helping your intended audience find,
              understand, and evaluate the work that matters most to your career
              goals.
            </p>

            <Link className="career-text-link" href="/career/github-review">
              Only need your repositories reviewed?
              <span aria-hidden="true"> →</span>
            </Link>
          </div>

          <ul className="career-service-included-list">
            {includedItems.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="career-rewrite-principles career-section">
        <div className="career-container">
          <div className="career-section-heading">
            <div>
              <p className="career-section-eyebrow">
                The Portfolio Standard
              </p>

              <h2>A beautiful website still needs a clear purpose.</h2>
            </div>

            <p>
              Visual design matters, but the strongest portfolios combine a
              polished experience with clear content, useful evidence, and
              intentional professional positioning.
            </p>
          </div>

          <div className="career-principles-grid">
            {portfolioPrinciples.map((principle, index) => (
              <article
                className="career-principle-card"
                key={principle.title}
              >
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

      <section className="career-report career-section">
        <div className="career-container career-report-grid">
          <div className="career-report-content">
            <p className="career-section-eyebrow">
              Career Intelligence Report
            </p>

            <h2>Understand the experience your website creates.</h2>

            <p>
              Your report will separate portfolio-wide concerns from
              page-specific recommendations so you can prioritize the changes
              most likely to improve clarity, usability, and professional impact.
            </p>

            <ul className="career-report-features">
              <li>Overall first impression</li>
              <li>Homepage and navigation feedback</li>
              <li>Project presentation recommendations</li>
              <li>Content and professional positioning</li>
              <li>Visual consistency observations</li>
              <li>Prioritized portfolio action plan</li>
            </ul>
          </div>

          <aside
            className="career-report-preview"
            aria-label="Example Portfolio Review report structure"
          >
            <div className="career-report-preview-header">
              <p>Cyber Grad Chronicles</p>
              <span>Portfolio Review</span>
            </div>

            <div className="career-report-preview-body">
              <div className="career-report-preview-score">
                <span>Review Focus</span>
                <strong>Professional Experience</strong>
              </div>

              <div className="career-report-preview-section">
                <span>01</span>
                <p>First Impression</p>
              </div>

              <div className="career-report-preview-section">
                <span>02</span>
                <p>Navigation and Structure</p>
              </div>

              <div className="career-report-preview-section">
                <span>03</span>
                <p>Projects and Evidence</p>
              </div>

              <div className="career-report-preview-section">
                <span>04</span>
                <p>Content and Presentation</p>
              </div>

              <div className="career-report-preview-section">
                <span>05</span>
                <p>Improvement Plan</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="career-project-issues career-section">
        <div className="career-container">
          <div className="career-section-heading">
            <div>
              <p className="career-section-eyebrow">
                What May Be Weakening Your Portfolio
              </p>

              <h2>Strong work can still be difficult to find or evaluate.</h2>
            </div>

            <p>
              These common issues can prevent visitors from understanding the
              quality, relevance, or professional value of the work presented on
              a portfolio website.
            </p>
          </div>

          <div className="career-boundaries-grid">
            {commonPortfolioIssues.map((issue, index) => (
              <article className="career-boundary-card" key={issue.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{issue.title}</h3>
                <p>{issue.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="career-submission career-section">
        <div className="career-container">
          <div className="career-section-heading">
            <div>
              <p className="career-section-eyebrow">What You Will Submit</p>

              <h2>Help me understand what your website needs to accomplish.</h2>
            </div>

            <p>
              Your intended audience, target role, and priority pages provide
              the context needed to evaluate whether your portfolio is serving
              its purpose.
            </p>
          </div>

          <div className="career-submission-grid">
            {submissionItems.map((item, index) => (
              <article className="career-submission-card" key={item.title}>
                <span className="career-submission-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="career-submission-note">
            <span aria-hidden="true">i</span>

            <p>
              Do not provide hosting credentials, administrator passwords,
              access tokens, private repository access, analytics logins,
              customer information, confidential employer data, or unpublished
              proprietary material.
            </p>
          </div>
        </div>
      </section>

      <section className="career-ideal-for career-section">
        <div className="career-container career-ideal-for-grid">
          <div className="career-ideal-for-content">
            <p className="career-section-eyebrow">Who This Is For</p>

            <h2>Built for professionals creating a place for their work.</h2>

            <p>
              This service is especially useful when you have built a portfolio
              but need an outside perspective on how effectively it communicates
              your skills, projects, identity, and career direction.
            </p>
          </div>

          <ul className="career-ideal-for-list">
            {idealFor.map((item) => (
              <li key={item}>
                <span aria-hidden="true">+</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="career-process career-section">
        <div className="career-container">
          <div className="career-section-heading">
            <div>
              <p className="career-section-eyebrow">How It Works</p>

              <h2>A complete review from the visitor’s perspective.</h2>
            </div>

            <p>
              You explain what the portfolio should accomplish. I evaluate how
              clearly the current experience supports that goal.
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

      <section className="career-service-comparison career-section">
        <div className="career-container">
          <div className="career-section-heading">
            <div>
              <p className="career-section-eyebrow">Portfolio or GitHub?</p>

              <h2>Review your full website or focus on technical repositories.</h2>
            </div>

            <p>
              A Portfolio Review evaluates the complete public experience. A
              GitHub Review focuses more closely on repositories, READMEs, and
              technical evidence.
            </p>
          </div>

          <div className="career-comparison-grid">
            <article className="career-comparison-card career-comparison-card-current">
              <p className="career-comparison-label">This Service</p>
              <h3>Portfolio Review</h3>
              <p className="career-comparison-price">$25</p>

              <p>
                Best when you want your website, content, projects, navigation,
                visual presentation, and professional story evaluated together.
              </p>

              <ul>
                <li>One portfolio website</li>
                <li>Homepage and navigation review</li>
                <li>Project presentation feedback</li>
                <li>Professional content assessment</li>
                <li>Portfolio action plan</li>
              </ul>

              <a
                className="career-button career-button-primary"
                href="#purchase"
              >
                Choose Portfolio Review
              </a>
            </article>

            <article className="career-comparison-card">
              <p className="career-comparison-label">Technical Focus</p>
              <h3>GitHub Review</h3>
              <p className="career-comparison-price">$20</p>

              <p>
                Best when you want detailed feedback on repositories,
                documentation, pinned projects, and technical proof of work.
              </p>

              <ul>
                <li>One GitHub profile</li>
                <li>Up to five repositories</li>
                <li>README feedback</li>
                <li>Technical evidence review</li>
                <li>Repository action plan</li>
              </ul>

              <Link
                className="career-button career-button-secondary"
                href="/career/github-review"
              >
                Explore GitHub Review
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="career-service-boundaries career-section">
        <div className="career-container">
          <div className="career-section-heading">
            <div>
              <p className="career-section-eyebrow">Service Boundaries</p>

              <h2>What the Portfolio Review does not include.</h2>
            </div>

            <p>
              Clear boundaries define the difference between professional
              feedback and website development, security testing, or formal
              compliance services.
            </p>
          </div>

          <div className="career-boundaries-grid">
            {notIncluded.map((item, index) => (
              <article className="career-boundary-card" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="career-faq career-section">
        <div className="career-container">
          <div className="career-section-heading">
            <div>
              <p className="career-section-eyebrow">Common Questions</p>
              <h2>Portfolio Review FAQ</h2>
            </div>

            <p>
              Review the service details before sharing your website and career
              information.
            </p>
          </div>

          <div className="career-faq-list">
            {frequentlyAskedQuestions.map((item) => (
              <details className="career-faq-item" key={item.question}>
                <summary>
                  <span>{item.question}</span>

                  <span className="career-faq-icon" aria-hidden="true">
                    +
                  </span>
                </summary>

                <div className="career-faq-answer">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="career-faq-link">
            <Link className="career-text-link" href="/career/faq">
              View all Career Intelligence questions
              <span aria-hidden="true"> →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="career-purchase career-section" id="purchase">
        <div className="career-container career-purchase-grid">
          <div className="career-purchase-content">
            <p className="career-section-eyebrow">Portfolio Review</p>

            <h2>Make your strongest work easier to find and understand.</h2>

            <p>
              Submit one portfolio website for a complete assessment of its
              content, structure, projects, presentation, usability, and
              alignment with your professional goals.
            </p>

            <ul>
              <li>One portfolio website</li>
              <li>Complete visitor-experience assessment</li>
              <li>Career Intelligence Report</li>
              <li>Prioritized improvement plan</li>
            </ul>
          </div>

          <aside className="career-purchase-card">
            <div className="career-purchase-card-header">
              <div>
                <p>Portfolio Review</p>
                <span>One-time purchase</span>
              </div>

              <strong>$25</strong>
            </div>

            <p>
              Payment and secure website-submission functionality will be
              connected before Career Intelligence services officially launch.
            </p>

            <button
              className="career-button career-button-primary career-button-full"
              type="button"
              disabled
            >
              Purchasing Coming Soon
            </button>

            <p className="career-purchase-note">
              Never submit hosting credentials, passwords, tokens,
              administrator access, or confidential website information.
            </p>
          </aside>
        </div>
      </section>

      <section className="career-final-cta">
        <div className="career-container career-final-cta-inner">
          <div>
            <p className="career-section-eyebrow">
              Present Your Work as One Complete Story
            </p>

            <h2>Connect your portfolio to the rest of your career materials.</h2>

            <p>
              Combine your portfolio review with resume, LinkedIn, or GitHub
              feedback for a coordinated assessment of your professional
              presence.
            </p>
          </div>

          <div className="career-final-cta-actions">
            <Link
              className="career-button career-button-primary"
              href="/career/bundles"
            >
              Explore Bundles
            </Link>

            <Link
              className="career-button career-button-secondary"
              href="/career"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}