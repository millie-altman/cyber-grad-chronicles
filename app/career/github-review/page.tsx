import Link from "next/link";

const reviewAreas = [
  {
    number: "01",
    title: "Profile Presentation",
    description:
      "How clearly your GitHub profile communicates who you are, what you are learning, and the type of technical work you want employers to notice.",
  },
  {
    number: "02",
    title: "Repository Organization",
    description:
      "Whether your repositories are named, grouped, pinned, and organized in a way that makes your strongest work easy to find.",
  },
  {
    number: "03",
    title: "README Quality",
    description:
      "How effectively each project explains its purpose, setup, tools, process, findings, challenges, and practical value.",
  },
  {
    number: "04",
    title: "Technical Evidence",
    description:
      "Whether your repositories provide enough code, screenshots, documentation, outputs, analysis, and supporting evidence to demonstrate your skills.",
  },
  {
    number: "05",
    title: "Recruiter Readability",
    description:
      "How easily a non-technical recruiter or busy hiring manager can understand what you created and why the work matters.",
  },
  {
    number: "06",
    title: "Professional Credibility",
    description:
      "Whether your profile appears complete, intentional, active, accurate, and aligned with the professional image you want to present.",
  },
];

const includedItems = [
  "A complete review of one GitHub profile",
  "Profile bio and presentation feedback",
  "Pinned repository recommendations",
  "Repository naming and organization feedback",
  "README structure and content recommendations",
  "Project documentation feedback",
  "Technical evidence and screenshot recommendations",
  "Recruiter-readability assessment",
  "A prioritized GitHub improvement plan",
];

const submissionItems = [
  {
    title: "Your GitHub profile",
    description:
      "Provide the public link to the GitHub account you want reviewed.",
  },
  {
    title: "Your target role",
    description:
      "Share the job title, career field, or technical direction your GitHub profile should support.",
  },
  {
    title: "Your priority repositories",
    description:
      "Identify up to five repositories you most want recruiters, hiring managers, or professional contacts to notice.",
  },
  {
    title: "Your current resume",
    description:
      "Your resume helps determine whether your GitHub projects reinforce the skills and experience you are presenting elsewhere.",
  },
  {
    title: "Your current concerns",
    description:
      "Explain what feels incomplete, confusing, outdated, difficult to document, or disconnected from your career goals.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Purchase your review",
    description:
      "Complete your purchase and receive instructions for submitting your GitHub profile and supporting career information.",
  },
  {
    number: "02",
    title: "Share your repositories",
    description:
      "Provide your profile link, target role, priority repositories, resume, and any questions you want addressed.",
  },
  {
    number: "03",
    title: "I evaluate your profile",
    description:
      "I review your profile structure, pinned work, repository organization, documentation, technical evidence, and recruiter readability.",
  },
  {
    number: "04",
    title: "Receive your feedback",
    description:
      "You receive organized recommendations showing what is working, what is missing, and which improvements should come first.",
  },
  {
    number: "05",
    title: "Strengthen your proof of work",
    description:
      "Use your action plan to improve how your projects demonstrate technical ability, learning, communication, and professional growth.",
  },
];

const idealFor = [
  "Cybersecurity students and recent graduates",
  "Entry-level technology professionals",
  "Career changers building technical evidence",
  "Applicants with personal labs or coding projects",
  "Candidates preparing for cybersecurity roles",
  "Job seekers with incomplete project documentation",
  "Professionals building a technical portfolio",
  "Anyone unsure what recruiters see on GitHub",
];

const profilePrinciples = [
  {
    title: "Understandable",
    description:
      "A reviewer should understand what each project does without reading every file or having expert knowledge of the topic.",
  },
  {
    title: "Evidence-Based",
    description:
      "Your repositories should contain enough code, documentation, screenshots, outputs, and analysis to support the skills you claim.",
  },
  {
    title: "Intentional",
    description:
      "Pinned projects, repository names, descriptions, and profile content should reflect the work you most want employers to notice.",
  },
  {
    title: "Honest",
    description:
      "Your documentation should accurately distinguish what you built, adapted, researched, practiced, or completed through guided coursework.",
  },
];

const commonProjectIssues = [
  {
    title: "No clear project purpose",
    description:
      "The repository contains files but never explains the problem, goal, scenario, or reason the project was created.",
  },
  {
    title: "Tool lists without context",
    description:
      "Technologies are named, but the documentation does not explain how they were used or what the user learned from them.",
  },
  {
    title: "Missing evidence",
    description:
      "The project lacks screenshots, sample outputs, diagrams, findings, logs, reports, or other evidence showing that the work was completed.",
  },
  {
    title: "Unclear ownership",
    description:
      "The repository does not explain which work was original, guided, adapted, collaborative, or based on an existing tutorial.",
  },
  {
    title: "Weak navigation",
    description:
      "Important files are difficult to locate, repositories are poorly named, or the strongest projects are not pinned.",
  },
  {
    title: "No professional takeaway",
    description:
      "The documentation explains what happened but not what skills were demonstrated or how the project relates to a target role.",
  },
];

const notIncluded = [
  {
    title: "Code auditing or security testing",
    description:
      "This service evaluates presentation, organization, documentation, and professional usefulness. It is not a formal source-code audit, penetration test, or vulnerability assessment.",
  },
  {
    title: "Repository rewrites",
    description:
      "The review provides recommendations and examples but does not rewrite every README, refactor all code, or reorganize every repository for you.",
  },
  {
    title: "Private account access",
    description:
      "I will not request your GitHub password, authentication codes, private keys, tokens, or direct account access.",
  },
  {
    title: "Guaranteed hiring outcomes",
    description:
      "A stronger GitHub profile may improve how your work is understood, but it cannot guarantee recruiter attention, interviews, or job offers.",
  },
  {
    title: "Fabricated technical work",
    description:
      "Recommendations will not involve claiming tools, code, findings, projects, or responsibilities you did not actually complete.",
  },
  {
    title: "Unlimited repository reviews",
    description:
      "The service covers one GitHub profile and up to five priority repositories submitted with the order.",
  },
];

const frequentlyAskedQuestions = [
  {
    question: "How many repositories will you review?",
    answer:
      "The service includes an overall review of one GitHub profile and a closer assessment of up to five priority repositories. You should select the projects most relevant to your target role.",
  },
  {
    question: "Do my repositories need to be public?",
    answer:
      "The repositories must be accessible for review. Public links are preferred. Do not share passwords, access tokens, private keys, credentials, or confidential code.",
  },
  {
    question: "Will you review my actual code?",
    answer:
      "I may consider whether the repository contains understandable and relevant technical evidence, but this service is not a detailed code review, quality audit, debugging service, or security assessment.",
  },
  {
    question: "Can you help me improve my READMEs?",
    answer:
      "Yes. The review includes README structure, clarity, missing sections, project context, technical explanation, evidence, and recruiter-readability recommendations. It does not include fully rewriting every README.",
  },
  {
    question: "What if my projects came from tutorials or coursework?",
    answer:
      "That is completely acceptable when represented honestly. Your documentation should explain the original source, what you completed, what you changed, which decisions you made, and what you learned.",
  },
  {
    question: "Do I need many repositories?",
    answer:
      "No. A small number of well-documented, relevant projects is usually more useful than many incomplete or unexplained repositories.",
  },
  {
    question: "Can you review a GitHub outside cybersecurity?",
    answer:
      "Yes. My strongest focus is cybersecurity and early-career technical portfolios, but the core principles of project documentation, organization, evidence, and recruiter readability apply across many technology fields.",
  },
  {
    question: "Will you create projects for me?",
    answer:
      "No. The review evaluates and strengthens how you present work you have completed. It does not include completing technical projects, writing code, or generating false proof of experience.",
  },
];

export default function GitHubReviewPage() {
  return (
    <main className="career-page career-service-page">
      <section className="career-service-hero">
        <div className="career-container career-service-hero-grid">
          <div className="career-service-hero-content">
            <div className="career-breadcrumbs" aria-label="Breadcrumb">
              <Link href="/career">Career Intelligence</Link>
              <span aria-hidden="true">/</span>
              <span>GitHub Review</span>
            </div>

            <p className="career-eyebrow">Career Intelligence Service</p>

            <h1>GitHub Review</h1>

            <p className="career-service-hero-description">
              Turn your GitHub profile into clearer proof of your technical
              skills with personalized feedback on your repositories,
              documentation, project evidence, and overall professional
              presentation.
            </p>

            <div className="career-service-hero-actions">
              <a
                className="career-button career-button-primary"
                href="#purchase"
              >
                Purchase GitHub Review
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
              aria-label="GitHub Review highlights"
            >
              <li>One GitHub profile</li>
              <li>Up to five repositories</li>
              <li>Prioritized action plan</li>
            </ul>
          </div>

          <aside
            className="career-service-summary-card"
            aria-label="GitHub Review service summary"
          >
            <div className="career-service-summary-header">
              <p>GitHub Review</p>
              <span>Individual Service</span>
            </div>

            <p className="career-service-summary-price">
              <span>$</span>
              <strong>20</strong>
            </p>

            <p className="career-service-summary-description">
              A detailed assessment of your GitHub profile, priority
              repositories, READMEs, technical evidence, and recruiter
              readability.
            </p>

            <div className="career-service-summary-details">
              <div>
                <span>Service Type</span>
                <strong>Review and Feedback</strong>
              </div>

              <div>
                <span>Repositories</span>
                <strong>Up to Five</strong>
              </div>

              <div>
                <span>Best For</span>
                <strong>Technical Proof of Work</strong>
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
              More Than a Collection of Repositories
            </p>
            <h2>Your GitHub should help employers understand your work.</h2>
          </div>

          <div className="career-service-introduction-copy">
            <p>
              Completing a project is only part of building a technical
              portfolio. Recruiters and hiring managers also need enough context
              to understand what you created, how you approached it, which skills
              you used, and what the final result demonstrates.
            </p>

            <p>
              A GitHub Review identifies where your work is presented clearly
              and where missing documentation, confusing organization, or weak
              project descriptions may be hiding your actual ability.
            </p>
          </div>
        </div>
      </section>

      <section className="career-review-areas career-section" id="included">
        <div className="career-container">
          <div className="career-section-heading">
            <div>
              <p className="career-section-eyebrow">What I Evaluate</p>
              <h2>Your projects should be easy to find and understand.</h2>
            </div>

            <p>
              Your GitHub profile will be reviewed as a technical portfolio,
              communication tool, and source of evidence supporting your career
              materials.
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
            <h2>Practical feedback for a stronger technical profile.</h2>

            <p>
              Your recommendations will focus on making your existing work more
              understandable, credible, organized, and relevant to the roles you
              want to pursue.
            </p>

            <Link className="career-text-link" href="/career/portfolio-review">
              Need your full website reviewed too?
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
                The Technical Portfolio Standard
              </p>
              <h2>Strong projects need strong communication.</h2>
            </div>

            <p>
              Your GitHub should accurately represent what you built while
              making the value of that work understandable to both technical and
              non-technical reviewers.
            </p>
          </div>

          <div className="career-principles-grid">
            {profilePrinciples.map((principle, index) => (
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

            <h2>Know which projects and improvements deserve priority.</h2>

            <p>
              The review will separate profile-wide concerns from
              repository-specific recommendations so you can strengthen your
              most important work first.
            </p>

            <ul className="career-report-features">
              <li>Overall GitHub impression</li>
              <li>Profile and pinned repository feedback</li>
              <li>Repository organization recommendations</li>
              <li>README and documentation feedback</li>
              <li>Technical evidence recommendations</li>
              <li>Prioritized improvement checklist</li>
            </ul>
          </div>

          <aside
            className="career-report-preview"
            aria-label="Example GitHub Review report structure"
          >
            <div className="career-report-preview-header">
              <p>Cyber Grad Chronicles</p>
              <span>GitHub Review</span>
            </div>

            <div className="career-report-preview-body">
              <div className="career-report-preview-score">
                <span>Review Focus</span>
                <strong>Technical Proof of Work</strong>
              </div>

              <div className="career-report-preview-section">
                <span>01</span>
                <p>Profile Assessment</p>
              </div>

              <div className="career-report-preview-section">
                <span>02</span>
                <p>Pinned Repositories</p>
              </div>

              <div className="career-report-preview-section">
                <span>03</span>
                <p>README Quality</p>
              </div>

              <div className="career-report-preview-section">
                <span>04</span>
                <p>Technical Evidence</p>
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
                What May Be Hiding Your Work
              </p>
              <h2>Good projects can still be difficult to evaluate.</h2>
            </div>

            <p>
              These are common presentation issues that can make completed
              technical work appear less substantial or less relevant than it
              actually is.
            </p>
          </div>

          <div className="career-boundaries-grid">
            {commonProjectIssues.map((issue, index) => (
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
              <h2>Choose the work most relevant to your career goals.</h2>
            </div>

            <p>
              Your target role and priority repositories help focus the review
              on the technical evidence employers are most likely to value.
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
              Never provide passwords, personal access tokens, API keys, SSH
              keys, authentication codes, secrets, private credentials, customer
              data, employer-owned source code, or other confidential
              information.
            </p>
          </div>
        </div>
      </section>

      <section className="career-ideal-for career-section">
        <div className="career-container career-ideal-for-grid">
          <div className="career-ideal-for-content">
            <p className="career-section-eyebrow">Who This Is For</p>
            <h2>Built for people turning technical practice into evidence.</h2>

            <p>
              This service is especially useful when you have completed projects
              but are unsure whether your GitHub profile clearly communicates
              their quality, relevance, and professional value.
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
              <h2>A focused review of your strongest technical work.</h2>
            </div>

            <p>
              You identify your target direction and priority repositories. I
              evaluate how effectively those projects support your professional
              story.
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
              <p className="career-section-eyebrow">GitHub or Portfolio?</p>
              <h2>Review one platform or your complete body of work.</h2>
            </div>

            <p>
              GitHub focuses on your repositories and technical documentation.
              A portfolio review evaluates how your broader website presents
              your work, identity, and career direction.
            </p>
          </div>

          <div className="career-comparison-grid">
            <article className="career-comparison-card career-comparison-card-current">
              <p className="career-comparison-label">This Service</p>
              <h3>GitHub Review</h3>
              <p className="career-comparison-price">$20</p>

              <p>
                Best when you want focused feedback on your repositories,
                documentation, and technical evidence.
              </p>

              <ul>
                <li>One GitHub profile</li>
                <li>Up to five repositories</li>
                <li>README feedback</li>
                <li>Technical evidence review</li>
                <li>Repository action plan</li>
              </ul>

              <a
                className="career-button career-button-primary"
                href="#purchase"
              >
                Choose GitHub Review
              </a>
            </article>

            <article className="career-comparison-card">
              <p className="career-comparison-label">Broader Review</p>
              <h3>Portfolio Review</h3>
              <p className="career-comparison-price">$25</p>

              <p>
                Best when you want your personal website, projects, navigation,
                content, and professional presentation evaluated together.
              </p>

              <ul>
                <li>One portfolio website</li>
                <li>Project presentation</li>
                <li>Navigation and readability</li>
                <li>Professional branding</li>
                <li>Portfolio action plan</li>
              </ul>

              <Link
                className="career-button career-button-secondary"
                href="/career/portfolio-review"
              >
                Explore Portfolio Review
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
              <h2>What the GitHub Review does not include.</h2>
            </div>

            <p>
              Clear boundaries protect your account, your technical work, and
              the accuracy of the professional claims attached to your projects.
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
              <h2>GitHub Review FAQ</h2>
            </div>

            <p>
              Review the service details before sharing your profile and
              repository links.
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
            <p className="career-section-eyebrow">GitHub Review</p>
            <h2>Make your technical work easier to understand and evaluate.</h2>

            <p>
              Submit one GitHub profile and up to five priority repositories for
              a detailed assessment of your organization, documentation,
              technical evidence, and professional presentation.
            </p>

            <ul>
              <li>One GitHub profile</li>
              <li>Up to five priority repositories</li>
              <li>Career Intelligence Report</li>
              <li>Prioritized improvement plan</li>
            </ul>
          </div>

          <aside className="career-purchase-card">
            <div className="career-purchase-card-header">
              <div>
                <p>GitHub Review</p>
                <span>One-time purchase</span>
              </div>

              <strong>$20</strong>
            </div>

            <p>
              Payment and secure profile-submission functionality will be
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
              Never submit passwords, tokens, private keys, secrets,
              confidential code, or private account credentials.
            </p>
          </aside>
        </div>
      </section>

      <section className="career-final-cta">
        <div className="career-container career-final-cta-inner">
          <div>
            <p className="career-section-eyebrow">
              Connect Your Projects to Your Career Story
            </p>

            <h2>Present your technical work across every platform.</h2>

            <p>
              Combine your GitHub review with resume, LinkedIn, or portfolio
              feedback for a more complete assessment of your professional
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