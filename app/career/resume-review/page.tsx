import Link from "next/link";

const reviewAreas = [
  {
    number: "01",
    title: "First Impression",
    description:
      "How clearly your resume communicates who you are, what you offer, and the kinds of opportunities you are prepared for.",
  },
  {
    number: "02",
    title: "Content and Positioning",
    description:
      "Whether your experience, education, projects, certifications, and skills support the professional story you are trying to tell.",
  },
  {
    number: "03",
    title: "Bullet Point Strength",
    description:
      "How effectively your bullet points communicate responsibilities, actions, technical skills, accomplishments, and measurable impact.",
  },
  {
    number: "04",
    title: "Role Alignment",
    description:
      "How closely your resume aligns with your target position, job posting, career level, and intended industry.",
  },
  {
    number: "05",
    title: "ATS Readability",
    description:
      "Potential issues involving formatting, headings, keywords, organization, and content that may affect applicant tracking systems.",
  },
  {
    number: "06",
    title: "Formatting and Readability",
    description:
      "How easily a recruiter or hiring manager can scan, understand, and navigate your resume.",
  },
];

const includedItems = [
  "A complete review of your current resume",
  "An overall assessment of your resume’s strengths and weaknesses",
  "Section-by-section feedback",
  "ATS and keyword recommendations",
  "Formatting and readability feedback",
  "Bullet point improvement recommendations",
  "Feedback on your summary, skills, education, and projects",
  "A prioritized action plan for your next revision",
];

const submissionItems = [
  {
    title: "Your current resume",
    description:
      "Submit the version you are currently using, even if you already know it needs significant improvement.",
  },
  {
    title: "Your target role",
    description:
      "Share the job title, career field, or type of opportunity you are pursuing.",
  },
  {
    title: "A job posting",
    description:
      "Include one representative job posting whenever possible so the review can evaluate role alignment and relevant keywords.",
  },
  {
    title: "Your current concerns",
    description:
      "Tell me what you believe is not working, where you feel uncertain, or what kind of feedback would be most useful.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Purchase your review",
    description:
      "Complete your purchase and receive instructions for submitting your resume and supporting information.",
  },
  {
    number: "02",
    title: "Submit your materials",
    description:
      "Send your resume, target role, representative job posting, and any specific questions you want addressed.",
  },
  {
    number: "03",
    title: "I review your resume",
    description:
      "I evaluate your resume for clarity, impact, organization, role alignment, ATS readability, and overall presentation.",
  },
  {
    number: "04",
    title: "Receive your feedback",
    description:
      "You receive organized recommendations explaining what is working, what should change, and what to prioritize first.",
  },
  {
    number: "05",
    title: "Revise with direction",
    description:
      "Use your feedback and action plan to strengthen your resume without guessing which changes matter most.",
  },
];

const idealFor = [
  "Students and recent graduates",
  "Cybersecurity and technology job seekers",
  "Military spouses and veterans",
  "Career changers",
  "Applicants receiving few interview invitations",
  "Professionals updating an older resume",
  "Candidates unsure how to present projects or certifications",
  "Job seekers who want detailed feedback before applying",
];

const notIncluded = [
  {
    title: "A complete rewrite",
    description:
      "This service provides detailed feedback and recommendations but does not include rewriting every section of your resume.",
  },
  {
    title: "Guaranteed employment outcomes",
    description:
      "No resume service can guarantee interviews, job offers, recruiter responses, or employment.",
  },
  {
    title: "Fabricated accomplishments",
    description:
      "Recommendations will never include inventing experience, responsibilities, tools, metrics, or qualifications.",
  },
  {
    title: "Unlimited revisions",
    description:
      "The review covers the resume submitted with your order and does not include ongoing editing or repeated reviews of new versions.",
  },
];

const frequentlyAskedQuestions = [
  {
    question: "Will you rewrite parts of my resume?",
    answer:
      "The review may include examples of stronger wording and recommendations for specific sections or bullet points. However, it does not include a complete rewrite of the document. A full rewrite is available through the Resume Rewrite service.",
  },
  {
    question: "Do I need to include a job posting?",
    answer:
      "A job posting is strongly recommended because it allows me to evaluate keywords, qualifications, responsibilities, and overall role alignment. If you do not have one specific posting, you can provide a target job title instead.",
  },
  {
    question: "Can you review a resume outside cybersecurity?",
    answer:
      "Yes. My primary focus is cybersecurity, technology, early-career professionals, military spouses, veterans, and career changers, but many resume principles apply across industries. You should provide clear information about your target field and role.",
  },
  {
    question: "Can you review a federal resume?",
    answer:
      "A standard Resume Review is intended primarily for private-sector resumes. Federal resumes have different expectations involving length, dates, hours, duties, qualifications, and specialized experience. Federal resume services may be offered separately.",
  },
  {
    question: "What format should I submit?",
    answer:
      "A PDF is preferred because it preserves your formatting. You may also be asked to provide an editable Word document if needed for reviewing specific sections.",
  },
  {
    question: "Will you review more than one resume?",
    answer:
      "Each Resume Review covers one resume version. Additional resumes, substantially different versions, or resumes targeting separate career fields require separate reviews.",
  },
];

export default function ResumeReviewPage() {
  return (
    <main className="career-page career-service-page">
      <section className="career-service-hero">
        <div className="career-container career-service-hero-grid">
          <div className="career-service-hero-content">
            <div className="career-breadcrumbs" aria-label="Breadcrumb">
              <Link href="/career">Career Intelligence</Link>
              <span aria-hidden="true">/</span>
              <span>Resume Review</span>
            </div>

            <p className="career-eyebrow">Career Intelligence Service</p>

            <h1>Resume Review</h1>

            <p className="career-service-hero-description">
              Receive a thorough, personalized assessment of your resume so you
              can understand what is working, what may be weakening your
              application, and which improvements should come first.
            </p>

            <div className="career-service-hero-actions">
              <a
                className="career-button career-button-primary"
                href="#purchase"
              >
                Purchase Resume Review
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
              aria-label="Resume Review highlights"
            >
              <li>One resume</li>
              <li>Personalized feedback</li>
              <li>Prioritized action plan</li>
            </ul>
          </div>

          <aside
            className="career-service-summary-card"
            aria-label="Resume Review service summary"
          >
            <div className="career-service-summary-header">
              <p>Resume Review</p>
              <span>Individual Service</span>
            </div>

            <p className="career-service-summary-price">
              <span>$</span>
              <strong>25</strong>
            </p>

            <p className="career-service-summary-description">
              A detailed evaluation of your resume’s content, structure,
              readability, impact, and alignment with your target role.
            </p>

            <div className="career-service-summary-details">
              <div>
                <span>Service Type</span>
                <strong>Review and Feedback</strong>
              </div>

              <div>
                <span>Documents</span>
                <strong>One Resume</strong>
              </div>

              <div>
                <span>Best For</span>
                <strong>Targeted Improvements</strong>
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
            <p className="career-section-eyebrow">An Outside Perspective</p>
            <h2>Stop guessing what your resume needs.</h2>
          </div>

          <div className="career-service-introduction-copy">
            <p>
              It is difficult to evaluate a resume you have read and revised
              dozens of times. You may know your experience well, but a recruiter
              or hiring manager only sees what you placed on the page.
            </p>

            <p>
              A Resume Review identifies where your value is being communicated
              effectively and where important context, technical evidence, or
              impact may be missing. The goal is to help you make intentional
              improvements rather than repeatedly changing your resume without a
              clear strategy.
            </p>
          </div>
        </div>
      </section>

      <section
        className="career-review-areas career-section"
        id="included"
      >
        <div className="career-container">
          <div className="career-section-heading">
            <div>
              <p className="career-section-eyebrow">What I Evaluate</p>
              <h2>A complete assessment of how your resume performs.</h2>
            </div>

            <p>
              Your resume is reviewed as both a career document and a
              communication tool. Every section should help the reader understand
              your qualifications and professional direction.
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
            <h2>Detailed feedback you can actually use.</h2>

            <p>
              You will not receive a vague list of common resume tips. Your
              feedback will be based on the document you submit, the roles you
              are targeting, and the professional story your resume currently
              communicates.
            </p>

            <Link
              className="career-text-link"
              href="/career/resume-rewrite"
            >
              Need a complete rewrite instead?
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

      <section className="career-report career-section">
        <div className="career-container career-report-grid">
          <div className="career-report-content">
            <p className="career-section-eyebrow">
              Career Intelligence Report
            </p>

            <h2>Your feedback will be organized by priority.</h2>

            <p>
              Resume feedback can quickly become overwhelming when every comment
              seems equally important. Your review will separate major concerns
              from smaller refinements so you know where to begin.
            </p>

            <ul className="career-report-features">
              <li>Overall first impression</li>
              <li>Primary strengths</li>
              <li>High-priority changes</li>
              <li>Section-by-section feedback</li>
              <li>Role-alignment recommendations</li>
              <li>Final revision checklist</li>
            </ul>
          </div>

          <aside
            className="career-report-preview"
            aria-label="Example Resume Review report structure"
          >
            <div className="career-report-preview-header">
              <p>Cyber Grad Chronicles</p>
              <span>Resume Review</span>
            </div>

            <div className="career-report-preview-body">
              <div className="career-report-preview-score">
                <span>Review Focus</span>
                <strong>Career Readiness</strong>
              </div>

              <div className="career-report-preview-section">
                <span>01</span>
                <p>First Impression</p>
              </div>

              <div className="career-report-preview-section">
                <span>02</span>
                <p>What Is Working</p>
              </div>

              <div className="career-report-preview-section">
                <span>03</span>
                <p>Priority Improvements</p>
              </div>

              <div className="career-report-preview-section">
                <span>04</span>
                <p>Section Feedback</p>
              </div>

              <div className="career-report-preview-section">
                <span>05</span>
                <p>Revision Action Plan</p>
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
              <h2>The more context you provide, the stronger the review.</h2>
            </div>

            <p>
              Your resume cannot be evaluated in isolation. Your target role and
              career goals help determine whether the document is communicating
              the right information.
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
              Please remove sensitive personal information that is not necessary
              for the review. You may omit your full street address, identification
              numbers, security clearance documentation, references, and other
              confidential information.
            </p>
          </div>
        </div>
      </section>

      <section className="career-ideal-for career-section">
        <div className="career-container career-ideal-for-grid">
          <div className="career-ideal-for-content">
            <p className="career-section-eyebrow">Who This Is For</p>
            <h2>A focused review for people ready to improve their resume.</h2>

            <p>
              This service works best when you want to understand your resume’s
              current weaknesses and make the revisions yourself with clear,
              personalized direction.
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
              <h2>A straightforward review process.</h2>
            </div>

            <p>
              You provide the context. I provide a structured assessment and a
              clearer path forward.
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
              <p className="career-section-eyebrow">Review or Rewrite?</p>
              <h2>Choose the right level of support.</h2>
            </div>

            <p>
              Both services examine your resume carefully, but the final
              deliverables are different.
            </p>
          </div>

          <div className="career-comparison-grid">
            <article className="career-comparison-card career-comparison-card-current">
              <p className="career-comparison-label">This Service</p>
              <h3>Resume Review</h3>
              <p className="career-comparison-price">$25</p>

              <p>
                Best when you want a professional assessment and plan to revise
                the resume yourself.
              </p>

              <ul>
                <li>Detailed evaluation</li>
                <li>Section-by-section feedback</li>
                <li>Improvement recommendations</li>
                <li>Revision priorities</li>
                <li>You complete the rewrite</li>
              </ul>

              <a
                className="career-button career-button-primary"
                href="#purchase"
              >
                Choose Resume Review
              </a>
            </article>

            <article className="career-comparison-card">
              <p className="career-comparison-label">More Support</p>
              <h3>Resume Rewrite</h3>
              <p className="career-comparison-price">$50</p>

              <p>
                Best when you want your existing content reorganized and
                rewritten into a stronger complete resume.
              </p>

              <ul>
                <li>Complete resume rewrite</li>
                <li>Improved summary and skills</li>
                <li>Rewritten bullet points</li>
                <li>Stronger role alignment</li>
                <li>Completed revised document</li>
              </ul>

              <Link
                className="career-button career-button-secondary"
                href="/career/resume-rewrite"
              >
                Explore Resume Rewrite
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
              <h2>What the Resume Review does not include.</h2>
            </div>

            <p>
              Clear expectations help ensure you select the service that best
              matches the support you need.
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
              <h2>Resume Review FAQ</h2>
            </div>

            <p>
              Review the service details before submitting your resume.
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
            <p className="career-section-eyebrow">Resume Review</p>
            <h2>Get clear direction before your next application.</h2>

            <p>
              Submit one resume for a thorough review of its content, structure,
              presentation, and alignment with your target role.
            </p>

            <ul>
              <li>One resume</li>
              <li>Personalized review</li>
              <li>Career Intelligence Report</li>
              <li>Prioritized revision plan</li>
            </ul>
          </div>

          <aside className="career-purchase-card">
            <div className="career-purchase-card-header">
              <div>
                <p>Resume Review</p>
                <span>One-time purchase</span>
              </div>

              <strong>$25</strong>
            </div>

            <p>
              Payment and submission functionality will be connected before the
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
              Do not submit personal documents through the website until secure
              payment and file-submission systems are available.
            </p>
          </aside>
        </div>
      </section>

      <section className="career-final-cta">
        <div className="career-container career-final-cta-inner">
          <div>
            <p className="career-section-eyebrow">
              Not Sure Which Service You Need?
            </p>

            <h2>Compare your options before choosing.</h2>

            <p>
              Explore the complete Career Intelligence collection or choose a
              bundle for coordinated feedback across multiple platforms.
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
              href="/career/bundles"
            >
              Explore Bundles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}