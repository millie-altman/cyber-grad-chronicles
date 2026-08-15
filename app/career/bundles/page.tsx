import Link from "next/link";

const bundles = [
  {
    id: "foundation",
    eyebrow: "01",
    title: "Foundation Bundle",
    price: "$65",
    originalPrice: "$75",
    savings: "Save $10",
    description:
      "A practical starting point for students, recent graduates, and early-career professionals building a stronger job-search foundation.",
    bestFor:
      "Candidates who want coordinated feedback across their resume, LinkedIn profile, and GitHub presence.",
    included: [
      {
        title: "Resume Review",
        description:
          "Detailed feedback on content, readability, ATS considerations, role alignment, and revision priorities.",
      },
      {
        title: "LinkedIn Review",
        description:
          "Section-by-section recommendations for your headline, About section, experience, skills, and professional positioning.",
      },
      {
        title: "GitHub Review",
        description:
          "Feedback on one profile and up to five priority repositories, including READMEs, organization, and technical evidence.",
      },
    ],
    deliverables: [
      "Three coordinated Career Intelligence reviews",
      "Cross-platform consistency recommendations",
      "A prioritized action plan",
      "Guidance on which changes to complete first",
    ],
    featured: false,
  },
  {
    id: "career-presence",
    eyebrow: "02",
    title: "Career Presence Bundle",
    price: "$95",
    originalPrice: "$125",
    savings: "Save $30",
    description:
      "A more complete package for job seekers who need stronger written materials and a clearer professional presence across multiple platforms.",
    bestFor:
      "Candidates who want a rewritten resume supported by coordinated LinkedIn, GitHub, and portfolio feedback.",
    included: [
      {
        title: "Resume Rewrite",
        description:
          "A complete rewrite of one resume with stronger content, organization, bullet points, skills, and role alignment.",
      },
      {
        title: "LinkedIn Review",
        description:
          "Personalized recommendations for improving your profile content, clarity, consistency, and recruiter readability.",
      },
      {
        title: "GitHub Review",
        description:
          "A review of one profile and up to five priority repositories with documentation and presentation guidance.",
      },
      {
        title: "Portfolio Review",
        description:
          "A complete assessment of one portfolio website, including navigation, projects, content, presentation, and usability.",
      },
    ],
    deliverables: [
      "One completed resume rewrite",
      "Three coordinated Career Intelligence reviews",
      "Cross-platform positioning guidance",
      "A complete professional-presence action plan",
    ],
    featured: true,
  },
  {
    id: "complete",
    eyebrow: "03",
    title: "Complete Career Review",
    price: "$145",
    originalPrice: "$160",
    savings: "Save $15",
    description:
      "A comprehensive assessment of the materials, platforms, and preparation supporting your professional brand and active job search.",
    bestFor:
      "Candidates preparing for an active search or upcoming interview who want support across their complete career presence.",
    included: [
      {
        title: "Resume Rewrite",
        description:
          "A complete rewrite of one resume tailored to one primary role or closely related job family.",
      },
      {
        title: "LinkedIn Review",
        description:
          "Detailed feedback on your complete profile, positioning, evidence, and recruiter readability.",
      },
      {
        title: "GitHub Review",
        description:
          "A review of one profile and up to five priority repositories, including READMEs and technical evidence.",
      },
      {
        title: "Portfolio Review",
        description:
          "A complete review of one public portfolio website and its primary pages.",
      },
      {
        title: "Interview Preparation",
        description:
          "A personalized preparation guide for one target position and interview process.",
      },
    ],
    deliverables: [
      "One completed resume rewrite",
      "Three Career Intelligence platform reviews",
      "One personalized interview preparation guide",
      "A complete cross-platform action plan",
    ],
    featured: false,
  },
];

const comparisonRows = [
  {
    service: "Resume Review",
    foundation: true,
    careerPresence: false,
    complete: false,
  },
  {
    service: "Resume Rewrite",
    foundation: false,
    careerPresence: true,
    complete: true,
  },
  {
    service: "LinkedIn Review",
    foundation: true,
    careerPresence: true,
    complete: true,
  },
  {
    service: "GitHub Review",
    foundation: true,
    careerPresence: true,
    complete: true,
  },
  {
    service: "Portfolio Review",
    foundation: false,
    careerPresence: true,
    complete: true,
  },
  {
    service: "Interview Preparation",
    foundation: false,
    careerPresence: false,
    complete: true,
  },
  {
    service: "Cross-Platform Action Plan",
    foundation: true,
    careerPresence: true,
    complete: true,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Choose your bundle",
    description:
      "Select the package that best matches the career materials and platforms you need help strengthening.",
  },
  {
    number: "02",
    title: "Complete one coordinated intake",
    description:
      "Submit your career goals, target role, resume, profile links, job posting, and the materials required for each included service.",
  },
  {
    number: "03",
    title: "I review the full picture",
    description:
      "I evaluate how your resume, LinkedIn, technical work, portfolio, and interview preparation support the same professional story.",
  },
  {
    number: "04",
    title: "Receive your deliverables",
    description:
      "You receive the completed rewrite, reports, preparation materials, and recommendations included in your selected bundle.",
  },
  {
    number: "05",
    title: "Follow the action plan",
    description:
      "Use the prioritized roadmap to make coordinated improvements without trying to update every platform at once.",
  },
];

const bundleBenefits = [
  {
    title: "Consistent Positioning",
    description:
      "Your resume, LinkedIn, GitHub, portfolio, and interview talking points should reinforce the same professional direction.",
  },
  {
    title: "Fewer Contradictions",
    description:
      "Bundled reviews help identify inconsistent dates, titles, skills, project descriptions, and career messaging across platforms.",
  },
  {
    title: "Clear Priorities",
    description:
      "You receive a coordinated action plan showing which improvements matter most and the order in which to complete them.",
  },
  {
    title: "Lower Combined Cost",
    description:
      "Bundle pricing reduces the total cost compared with purchasing every included service separately.",
  },
];

const submissionItems = [
  {
    title: "Your current resume",
    description:
      "Submit the most complete and current version of your resume, even if you already know it needs substantial revision.",
  },
  {
    title: "Your target role",
    description:
      "Identify the position, job family, career field, or professional direction all included services should support.",
  },
  {
    title: "A representative job posting",
    description:
      "Provide one posting that reflects the responsibilities, qualifications, keywords, and expectations relevant to your goals.",
  },
  {
    title: "Your professional profiles",
    description:
      "Provide the LinkedIn, GitHub, portfolio, or other public links required for the services included in your bundle.",
  },
  {
    title: "Your background information",
    description:
      "Share relevant experience, education, certifications, projects, accomplishments, career changes, and measurable results.",
  },
  {
    title: "Your current concerns",
    description:
      "Explain where you feel stuck, what has not been working, and which parts of your professional presence need the most attention.",
  },
];

const notIncluded = [
  {
    title: "Services outside the selected bundle",
    description:
      "Each package includes only the reviews, rewrites, and preparation services specifically listed in its description.",
  },
  {
    title: "Multiple career directions",
    description:
      "Each bundle targets one primary role or closely related job family. Substantially different career paths may require separate services.",
  },
  {
    title: "Unlimited documents or platforms",
    description:
      "Document, profile, repository, website, and interview limits from each individual service still apply within a bundle.",
  },
  {
    title: "Guaranteed hiring outcomes",
    description:
      "A stronger professional presence can improve clarity and positioning but cannot guarantee recruiter interest, interviews, offers, or employment.",
  },
  {
    title: "Fabricated qualifications",
    description:
      "No service will invent experience, tools, projects, responsibilities, accomplishments, credentials, or measurable outcomes.",
  },
  {
    title: "Ongoing career management",
    description:
      "Bundles provide defined deliverables and recommendations. They do not include indefinite updates, account management, or continuous coaching.",
  },
];

const frequentlyAskedQuestions = [
  {
    question: "Which bundle should I choose?",
    answer:
      "Choose the Foundation Bundle if you want feedback and plan to revise your own resume. Choose the Career Presence Bundle if you need a complete resume rewrite and feedback across your professional platforms. Choose the Complete Career Review if you also have an active interview or want interview preparation included.",
  },
  {
    question: "Can I replace one service with another?",
    answer:
      "Bundle substitutions are not included by default because each package is priced and structured around a specific combination of services. Custom package availability can be evaluated separately before purchase.",
  },
  {
    question: "Can I upgrade after purchasing a smaller bundle?",
    answer:
      "Upgrade terms will be finalized before launch. The goal is to provide a clear option when an upgrade is requested before work on the original bundle has been completed.",
  },
  {
    question: "Do all services need to target the same role?",
    answer:
      "Yes. The value of a bundle comes from evaluating your materials as one coordinated professional presence. All included services should support one primary role or closely related job family.",
  },
  {
    question: "How many resumes are included?",
    answer:
      "Each bundle includes one resume service. The Foundation Bundle includes one Resume Review. The Career Presence and Complete Career Review bundles include one Resume Rewrite.",
  },
  {
    question: "How many GitHub repositories are included?",
    answer:
      "The GitHub Review includes an overall assessment of one profile and a closer review of up to five priority repositories.",
  },
  {
    question: "Does the Complete Career Review include a mock interview?",
    answer:
      "No. It includes a personalized written Interview Preparation guide for one target position. A live mock interview is not included.",
  },
  {
    question: "Can I purchase a bundle without a portfolio or GitHub?",
    answer:
      "You should choose a bundle only when you have the required materials for its included services. Individual services may offer better value when you do not have a GitHub profile, portfolio, or active interview.",
  },
];

export default function BundlesPage() {
  return (
    <main className="career-page career-bundles-page">
      <section className="career-service-hero career-bundles-hero">
        <div className="career-container career-service-hero-grid">
          <div className="career-service-hero-content">
            <div className="career-breadcrumbs" aria-label="Breadcrumb">
              <Link href="/career">Career Intelligence</Link>
              <span aria-hidden="true">/</span>
              <span>Bundles</span>
            </div>

            <p className="career-eyebrow">Career Intelligence Bundles</p>

            <h1>Strengthen your complete professional presence.</h1>

            <p className="career-service-hero-description">
              Combine resume, LinkedIn, GitHub, portfolio, and interview support
              into one coordinated package built around your target role and
              career goals.
            </p>

            <div className="career-service-hero-actions">
              <a
                className="career-button career-button-primary"
                href="#bundles"
              >
                Compare Bundles
              </a>

              <Link
                className="career-button career-button-secondary"
                href="/career"
              >
                View Individual Services
              </Link>
            </div>

            <ul
              className="career-service-hero-details"
              aria-label="Career Intelligence bundle highlights"
            >
              <li>Coordinated feedback</li>
              <li>Cross-platform alignment</li>
              <li>Reduced combined pricing</li>
            </ul>
          </div>

          <aside
            className="career-service-summary-card"
            aria-label="Career Intelligence bundle overview"
          >
            <div className="career-service-summary-header">
              <p>Career Bundles</p>
              <span>Coordinated Services</span>
            </div>

            <p className="career-service-summary-price career-bundle-range">
              <span>From</span>
              <strong>$65</strong>
            </p>

            <p className="career-service-summary-description">
              Select a package based on whether you need focused feedback, a
              complete resume rewrite, or support across your entire job search.
            </p>

            <div className="career-service-summary-details">
              <div>
                <span>Bundle Options</span>
                <strong>Three Packages</strong>
              </div>

              <div>
                <span>Primary Goal</span>
                <strong>Career Alignment</strong>
              </div>

              <div>
                <span>Best For</span>
                <strong>Multi-Platform Support</strong>
              </div>

              <div>
                <span>Maximum Savings</span>
                <strong>$30</strong>
              </div>
            </div>

            <a
              className="career-button career-button-primary career-button-full"
              href="#bundles"
            >
              Explore Packages
            </a>
          </aside>
        </div>
      </section>

      <section className="career-service-introduction career-section">
        <div className="career-container career-service-introduction-grid">
          <div>
            <p className="career-section-eyebrow">One Professional Story</p>
            <h2>Your career materials should work together.</h2>
          </div>

          <div className="career-service-introduction-copy">
            <p>
              A strong resume can lose credibility when LinkedIn tells a
              different story. A polished portfolio may be overlooked when the
              resume never directs anyone toward it. Technical projects may be
              difficult to evaluate when their descriptions change across every
              platform.
            </p>

            <p>
              Career Intelligence bundles evaluate your materials together.
              Each recommendation considers how your experience, projects,
              credentials, career direction, and professional identity appear
              across the complete hiring journey.
            </p>
          </div>
        </div>
      </section>

      <section className="career-bundles career-section" id="bundles">
        <div className="career-container">
          <div className="career-section-heading">
            <div>
              <p className="career-section-eyebrow">Choose Your Bundle</p>
              <h2>Select the level of support that fits your current search.</h2>
            </div>

            <p>
              Each bundle supports one primary target role or closely related
              job family and includes the limits of its individual services.
            </p>
          </div>

          <div className="career-bundles-grid career-bundles-grid-detailed">
            {bundles.map((bundle) => (
              <article
                className={`career-bundle-card career-bundle-card-detailed${
                  bundle.featured ? " career-bundle-card-featured" : ""
                }`}
                id={bundle.id}
                key={bundle.id}
              >
                {bundle.featured && (
                  <span className="career-bundle-badge">Recommended</span>
                )}

                <div className="career-bundle-card-heading">
                  <span className="career-bundle-number">
                    {bundle.eyebrow}
                  </span>

                  <div>
                    <h3>{bundle.title}</h3>
                    <p>{bundle.description}</p>
                  </div>
                </div>

                <div className="career-bundle-pricing">
                  <p className="career-bundle-price">{bundle.price}</p>

                  <div>
                    <span className="career-bundle-original-price">
                      {bundle.originalPrice}
                    </span>
                    <strong>{bundle.savings}</strong>
                  </div>
                </div>

                <div className="career-bundle-best-for">
                  <span>Best For</span>
                  <p>{bundle.bestFor}</p>
                </div>

                <div className="career-bundle-included">
                  <p className="career-bundle-section-label">
                    Included Services
                  </p>

                  <div className="career-bundle-service-list">
                    {bundle.included.map((service) => (
                      <article
                        className="career-bundle-service-item"
                        key={service.title}
                      >
                        <span aria-hidden="true">+</span>

                        <div>
                          <h4>{service.title}</h4>
                          <p>{service.description}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="career-bundle-deliverables">
                  <p className="career-bundle-section-label">
                    Package Deliverables
                  </p>

                  <ul>
                    {bundle.deliverables.map((deliverable) => (
                      <li key={deliverable}>{deliverable}</li>
                    ))}
                  </ul>
                </div>

                <a
                  className={
                    bundle.featured
                      ? "career-button career-button-primary career-button-full"
                      : "career-button career-button-secondary career-button-full"
                  }
                  href={`#purchase-${bundle.id}`}
                >
                  Choose {bundle.title}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="career-bundle-benefits career-section">
        <div className="career-container">
          <div className="career-section-heading">
            <div>
              <p className="career-section-eyebrow">Why Bundle?</p>
              <h2>Improve the full experience employers see.</h2>
            </div>

            <p>
              Bundles are not simply discounted services. They create an
              opportunity to evaluate how every part of your professional
              presence supports the same goal.
            </p>
          </div>

          <div className="career-principles-grid">
            {bundleBenefits.map((benefit, index) => (
              <article className="career-principle-card" key={benefit.title}>
                <span className="career-principle-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="career-bundle-comparison career-section">
        <div className="career-container">
          <div className="career-section-heading">
            <div>
              <p className="career-section-eyebrow">Bundle Comparison</p>
              <h2>See exactly what each package includes.</h2>
            </div>

            <p>
              Use this comparison to determine whether you need feedback,
              rewriting, portfolio support, or interview preparation.
            </p>
          </div>

          <div
            className="career-comparison-table-wrapper"
            role="region"
            aria-label="Career Intelligence bundle comparison"
            tabIndex={0}
          >
            <table className="career-comparison-table">
              <thead>
                <tr>
                  <th scope="col">Service</th>
                  <th scope="col">
                    Foundation
                    <span>$65</span>
                  </th>
                  <th scope="col">
                    Career Presence
                    <span>$95</span>
                  </th>
                  <th scope="col">
                    Complete
                    <span>$145</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.service}>
                    <th scope="row">{row.service}</th>

                    <td>
                      <span
                        className={
                          row.foundation
                            ? "career-comparison-included"
                            : "career-comparison-not-included"
                        }
                        aria-label={row.foundation ? "Included" : "Not included"}
                      >
                        {row.foundation ? "✓" : "—"}
                      </span>
                    </td>

                    <td>
                      <span
                        className={
                          row.careerPresence
                            ? "career-comparison-included"
                            : "career-comparison-not-included"
                        }
                        aria-label={
                          row.careerPresence ? "Included" : "Not included"
                        }
                      >
                        {row.careerPresence ? "✓" : "—"}
                      </span>
                    </td>

                    <td>
                      <span
                        className={
                          row.complete
                            ? "career-comparison-included"
                            : "career-comparison-not-included"
                        }
                        aria-label={row.complete ? "Included" : "Not included"}
                      >
                        {row.complete ? "✓" : "—"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="career-report career-section">
        <div className="career-container career-report-grid">
          <div className="career-report-content">
            <p className="career-section-eyebrow">
              Cross-Platform Action Plan
            </p>

            <h2>Know what to update first across every platform.</h2>

            <p>
              Bundled feedback can become overwhelming when every service
              produces a separate list of recommendations. Your bundle will
              include coordinated priorities that account for dependencies
              between your resume, LinkedIn, projects, portfolio, and interview
              preparation.
            </p>

            <ul className="career-report-features">
              <li>Overall professional-presence assessment</li>
              <li>Cross-platform consistency findings</li>
              <li>High-priority corrections</li>
              <li>Platform-specific recommendations</li>
              <li>Suggested update order</li>
              <li>Final career-material checklist</li>
            </ul>
          </div>

          <aside
            className="career-report-preview"
            aria-label="Example bundle action plan"
          >
            <div className="career-report-preview-header">
              <p>Cyber Grad Chronicles</p>
              <span>Career Presence Review</span>
            </div>

            <div className="career-report-preview-body">
              <div className="career-report-preview-score">
                <span>Primary Focus</span>
                <strong>Cross-Platform Alignment</strong>
              </div>

              <div className="career-report-preview-section">
                <span>01</span>
                <p>Resume Positioning</p>
              </div>

              <div className="career-report-preview-section">
                <span>02</span>
                <p>LinkedIn Consistency</p>
              </div>

              <div className="career-report-preview-section">
                <span>03</span>
                <p>Technical Evidence</p>
              </div>

              <div className="career-report-preview-section">
                <span>04</span>
                <p>Portfolio Experience</p>
              </div>

              <div className="career-report-preview-section">
                <span>05</span>
                <p>Priority Action Plan</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="career-submission career-section">
        <div className="career-container">
          <div className="career-section-heading">
            <div>
              <p className="career-section-eyebrow">What You Will Submit</p>
              <h2>One intake connects every included service.</h2>
            </div>

            <p>
              Complete and accurate context helps ensure your materials support
              the same target role rather than being evaluated as unrelated
              documents and platforms.
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
              Never provide passwords, authentication codes, access tokens,
              private keys, administrator credentials, classified information,
              confidential employer materials, customer data, or protected
              hiring assessments.
            </p>
          </div>
        </div>
      </section>

      <section className="career-process career-section">
        <div className="career-container">
          <div className="career-section-heading">
            <div>
              <p className="career-section-eyebrow">How It Works</p>
              <h2>One process for your complete professional presence.</h2>
            </div>

            <p>
              Your bundle uses one central career goal to guide every included
              review, rewrite, and preparation deliverable.
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

      <section className="career-service-boundaries career-section">
        <div className="career-container">
          <div className="career-section-heading">
            <div>
              <p className="career-section-eyebrow">Bundle Boundaries</p>
              <h2>What Career Intelligence bundles do not include.</h2>
            </div>

            <p>
              Each bundle combines defined services. The boundaries and limits
              of those individual services continue to apply.
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
              <h2>Career Bundle FAQ</h2>
            </div>

            <p>
              Review package details before deciding whether a bundle or
              individual service is the better fit.
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

      <section
        className="career-purchase career-section"
        id="purchase-foundation"
      >
        <div className="career-container career-purchase-grid">
          <div className="career-purchase-content">
            <p className="career-section-eyebrow">Foundation Bundle</p>
            <h2>Strengthen the materials supporting your early career.</h2>

            <p>
              Receive coordinated feedback on your resume, LinkedIn profile,
              and GitHub presence, along with a clear plan for making your own
              improvements.
            </p>

            <ul>
              <li>Resume Review</li>
              <li>LinkedIn Review</li>
              <li>GitHub Review</li>
              <li>Cross-platform action plan</li>
            </ul>
          </div>

          <aside className="career-purchase-card">
            <div className="career-purchase-card-header">
              <div>
                <p>Foundation Bundle</p>
                <span>One-time purchase</span>
              </div>

              <strong>$65</strong>
            </div>

            <p>
              Payment and secure intake functionality will be connected before
              Career Intelligence services officially launch.
            </p>

            <button
              className="career-button career-button-primary career-button-full"
              type="button"
              disabled
            >
              Purchasing Coming Soon
            </button>

            <p className="career-purchase-note">
              Individual service limits and submission requirements apply.
            </p>
          </aside>
        </div>
      </section>

      <section
        className="career-purchase career-section"
        id="purchase-career-presence"
      >
        <div className="career-container career-purchase-grid">
          <div className="career-purchase-content">
            <p className="career-section-eyebrow">Career Presence Bundle</p>
            <h2>Rebuild your resume and align your professional platforms.</h2>

            <p>
              Receive a complete resume rewrite plus coordinated LinkedIn,
              GitHub, and portfolio feedback based on one target role.
            </p>

            <ul>
              <li>Resume Rewrite</li>
              <li>LinkedIn Review</li>
              <li>GitHub Review</li>
              <li>Portfolio Review</li>
            </ul>
          </div>

          <aside className="career-purchase-card">
            <div className="career-purchase-card-header">
              <div>
                <p>Career Presence Bundle</p>
                <span>One-time purchase</span>
              </div>

              <strong>$95</strong>
            </div>

            <p>
              Payment and secure intake functionality will be connected before
              Career Intelligence services officially launch.
            </p>

            <button
              className="career-button career-button-primary career-button-full"
              type="button"
              disabled
            >
              Purchasing Coming Soon
            </button>

            <p className="career-purchase-note">
              All included materials must support one primary target role.
            </p>
          </aside>
        </div>
      </section>

      <section
        className="career-purchase career-section"
        id="purchase-complete"
      >
        <div className="career-container career-purchase-grid">
          <div className="career-purchase-content">
            <p className="career-section-eyebrow">Complete Career Review</p>
            <h2>Prepare your complete professional presence for the search.</h2>

            <p>
              Combine a resume rewrite, platform reviews, and personalized
              interview preparation into one comprehensive career package.
            </p>

            <ul>
              <li>Resume Rewrite</li>
              <li>LinkedIn, GitHub, and Portfolio Reviews</li>
              <li>Interview Preparation</li>
              <li>Complete career action plan</li>
            </ul>
          </div>

          <aside className="career-purchase-card">
            <div className="career-purchase-card-header">
              <div>
                <p>Complete Career Review</p>
                <span>One-time purchase</span>
              </div>

              <strong>$145</strong>
            </div>

            <p>
              Payment and secure intake functionality will be connected before
              Career Intelligence services officially launch.
            </p>

            <button
              className="career-button career-button-primary career-button-full"
              type="button"
              disabled
            >
              Purchasing Coming Soon
            </button>

            <p className="career-purchase-note">
              Interview Preparation covers one active position and interview
              process.
            </p>
          </aside>
        </div>
      </section>

      <section className="career-final-cta">
        <div className="career-container career-final-cta-inner">
          <div>
            <p className="career-section-eyebrow">
              Only Need One Area Reviewed?
            </p>

            <h2>Choose an individual Career Intelligence service.</h2>

            <p>
              Individual reviews may be the better fit when you only need help
              with one document, platform, or upcoming interview.
            </p>
          </div>

          <div className="career-final-cta-actions">
            <Link
              className="career-button career-button-primary"
              href="/career"
            >
              View All Services
            </Link>

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
  );
}