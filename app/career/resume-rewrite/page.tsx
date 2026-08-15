import Link from "next/link";

const rewriteAreas = [
  {
    number: "01",
    title: "Professional Summary",
    description:
      "A focused introduction that communicates your experience, strengths, target direction, and professional value without relying on generic buzzwords.",
  },
  {
    number: "02",
    title: "Core Skills",
    description:
      "A clearer skills section organized around the tools, knowledge areas, and capabilities most relevant to your target role.",
  },
  {
    number: "03",
    title: "Professional Experience",
    description:
      "Rewritten bullet points that emphasize actions, responsibilities, accomplishments, technical evidence, and measurable outcomes.",
  },
  {
    number: "04",
    title: "Projects and Technical Work",
    description:
      "Stronger project descriptions that explain what you built, which tools you used, what problem you addressed, and what you learned.",
  },
  {
    number: "05",
    title: "Education and Certifications",
    description:
      "Improved placement and presentation of degrees, certifications, training, honors, and relevant coursework.",
  },
  {
    number: "06",
    title: "Role Alignment",
    description:
      "Reorganized content and targeted language that better supports the position, field, or career direction you are pursuing.",
  },
];

const includedItems = [
  "A complete rewrite of one resume",
  "A rewritten professional summary",
  "An improved and organized skills section",
  "Rewritten professional experience bullet points",
  "Improved project and technical experience descriptions",
  "Education and certification formatting recommendations",
  "Role-specific keyword and alignment improvements",
  "A polished final resume draft",
  "A brief explanation of major strategic changes",
];

const submissionItems = [
  {
    title: "Your current resume",
    description:
      "Submit the most complete version you have, even if the formatting or content still needs significant work.",
  },
  {
    title: "Your target role",
    description:
      "Identify the position, career field, or professional direction the rewritten resume should support.",
  },
  {
    title: "A representative job posting",
    description:
      "Provide one job posting that reflects the responsibilities, skills, and qualifications you want the resume to target.",
  },
  {
    title: "Your career history",
    description:
      "Include any relevant experience, projects, certifications, education, volunteer work, or accomplishments that may be missing from your current resume.",
  },
  {
    title: "Your measurable results",
    description:
      "Share numbers, outcomes, improvements, recognition, volume, time saved, customers served, or other results whenever available.",
  },
  {
    title: "Your preferences",
    description:
      "Explain any formatting preferences, length requirements, concerns, or information you want handled carefully.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Purchase your rewrite",
    description:
      "Complete your purchase and receive instructions for submitting your resume, target role, and supporting information.",
  },
  {
    number: "02",
    title: "Complete the intake",
    description:
      "Provide the context needed to accurately represent your experience, qualifications, career goals, and accomplishments.",
  },
  {
    number: "03",
    title: "I evaluate your materials",
    description:
      "I review your existing resume, job posting, background information, and the professional story your materials need to communicate.",
  },
  {
    number: "04",
    title: "Your resume is rewritten",
    description:
      "I reorganize and rewrite the document to improve clarity, impact, role alignment, readability, and overall presentation.",
  },
  {
    number: "05",
    title: "Receive your completed draft",
    description:
      "You receive a polished resume draft along with a summary of the most important changes and recommendations.",
  },
];

const idealFor = [
  "Students and recent graduates",
  "Cybersecurity and technology job seekers",
  "Military spouses and veterans",
  "Career changers entering a new field",
  "Applicants using an outdated resume",
  "Professionals struggling to describe their impact",
  "Candidates with strong projects but limited experience",
  "Job seekers targeting a specific role",
];

const rewritePrinciples = [
  {
    title: "Accurate",
    description:
      "Your rewritten resume will only include experience, tools, accomplishments, and qualifications you have actually earned.",
  },
  {
    title: "Targeted",
    description:
      "Content will be prioritized based on your target role, experience level, career direction, and representative job posting.",
  },
  {
    title: "Readable",
    description:
      "The document will be organized so recruiters and hiring managers can quickly understand your strongest qualifications.",
  },
  {
    title: "Natural",
    description:
      "Your resume should sound polished and professional without becoming robotic, exaggerated, or filled with empty corporate language.",
  },
];

const notIncluded = [
  {
    title: "Invented experience or metrics",
    description:
      "I will not fabricate responsibilities, technologies, accomplishments, job titles, certifications, or measurable results.",
  },
  {
    title: "Guaranteed interviews or employment",
    description:
      "A stronger resume can improve how your experience is presented, but it cannot guarantee recruiter responses, interviews, or job offers.",
  },
  {
    title: "Multiple targeted resumes",
    description:
      "This service includes one rewritten resume targeting one general role or closely related group of positions.",
  },
  {
    title: "Federal resume preparation",
    description:
      "Federal resumes require significantly different content, formatting, dates, hours, duties, and specialized-experience documentation.",
  },
  {
    title: "Unlimited revisions",
    description:
      "The service includes the completed draft and the revision terms listed at purchase. It does not include indefinite rewriting or ongoing career support.",
  },
  {
    title: "Graphic resume design",
    description:
      "The focus is a clean, professional, readable resume rather than decorative graphics, complex columns, charts, or heavily designed templates.",
  },
];

const frequentlyAskedQuestions = [
  {
    question: "Will you change everything on my resume?",
    answer:
      "I will make the changes needed to improve clarity, impact, organization, and role alignment. Strong content may be preserved or refined rather than rewritten simply for the sake of changing it.",
  },
  {
    question: "Do I need to provide a job posting?",
    answer:
      "A representative job posting is strongly recommended. It helps identify relevant responsibilities, qualifications, terminology, tools, and keywords. If you do not have one specific posting, you may provide a target job title and several example roles.",
  },
  {
    question: "Can you rewrite a resume with limited experience?",
    answer:
      "Yes. Early-career resumes can draw from education, projects, labs, volunteer work, internships, military experience, customer service, leadership, certifications, and transferable skills.",
  },
  {
    question: "Will my resume be ATS friendly?",
    answer:
      "The resume will be written and organized with applicant tracking systems in mind, including standard headings, readable formatting, relevant keywords, and clearly structured content. No one can guarantee how every ATS will interpret a document.",
  },
  {
    question: "Can you tailor my resume to several jobs?",
    answer:
      "One Resume Rewrite targets one primary role or closely related job family. Positions with substantially different responsibilities or qualification requirements may require separate targeted versions.",
  },
  {
    question: "Will you write achievements when I do not have metrics?",
    answer:
      "Yes, but I will not invent numbers. Strong bullet points can still communicate scope, complexity, actions, tools, responsibilities, improvements, and outcomes without fabricated metrics.",
  },
  {
    question: "Can you rewrite a federal resume?",
    answer:
      "This service is intended for private-sector resumes. Federal resumes typically require several pages of detailed duties, dates, hours worked, salary information, and evidence of specialized experience.",
  },
  {
    question: "What file formats will I receive?",
    answer:
      "The final delivery format will be confirmed before launch. The goal is to provide an editable document and a PDF version whenever the selected submission and delivery systems support both formats.",
  },
];

export default function ResumeRewritePage() {
  return (
    <main className="career-page career-service-page">
      <section className="career-service-hero">
        <div className="career-container career-service-hero-grid">
          <div className="career-service-hero-content">
            <div className="career-breadcrumbs" aria-label="Breadcrumb">
              <Link href="/career">Career Intelligence</Link>
              <span aria-hidden="true">/</span>
              <span>Resume Rewrite</span>
            </div>

            <p className="career-eyebrow">Career Intelligence Service</p>

            <h1>Resume Rewrite</h1>

            <p className="career-service-hero-description">
              Transform an outdated, unfocused, or underperforming resume into a
              clearer, stronger document built around your experience, career
              goals, and target role.
            </p>

            <div className="career-service-hero-actions">
              <a
                className="career-button career-button-primary"
                href="#purchase"
              >
                Purchase Resume Rewrite
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
              aria-label="Resume Rewrite highlights"
            >
              <li>One complete resume</li>
              <li>Personalized rewrite</li>
              <li>Targeted positioning</li>
            </ul>
          </div>

          <aside
            className="career-service-summary-card"
            aria-label="Resume Rewrite service summary"
          >
            <div className="career-service-summary-header">
              <p>Resume Rewrite</p>
              <span>Individual Service</span>
            </div>

            <p className="career-service-summary-price">
              <span>$</span>
              <strong>50</strong>
            </p>

            <p className="career-service-summary-description">
              A complete rewrite of your existing resume with stronger content,
              organization, bullet points, skills, and role alignment.
            </p>

            <div className="career-service-summary-details">
              <div>
                <span>Service Type</span>
                <strong>Complete Rewrite</strong>
              </div>

              <div>
                <span>Documents</span>
                <strong>One Resume</strong>
              </div>

              <div>
                <span>Best For</span>
                <strong>Full Transformation</strong>
              </div>

              <div>
                <span>Deliverable</span>
                <strong>Polished Resume Draft</strong>
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
            <p className="career-section-eyebrow">A Stronger Professional Story</p>
            <h2>Your experience may be stronger than your resume shows.</h2>
          </div>

          <div className="career-service-introduction-copy">
            <p>
              Many resumes undersell the person behind them. Responsibilities
              are listed without context, technical projects are reduced to tool
              names, transferable skills are overlooked, and strong
              accomplishments disappear inside vague bullet points.
            </p>

            <p>
              A Resume Rewrite rebuilds the document around the value you
              actually bring. Your experience will be reorganized and rewritten
              so employers can more easily understand what you have done, how you
              contributed, which skills you used, and where you are prepared to
              go next.
            </p>
          </div>
        </div>
      </section>

      <section className="career-review-areas career-section" id="included">
        <div className="career-container">
          <div className="career-section-heading">
            <div>
              <p className="career-section-eyebrow">What I Rewrite</p>
              <h2>Every major section works toward the same career goal.</h2>
            </div>

            <p>
              The rewrite is not limited to correcting grammar. It improves how
              your experience is organized, described, prioritized, and aligned
              with the work you want to pursue.
            </p>
          </div>

          <div className="career-review-areas-grid">
            {rewriteAreas.map((area) => (
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
            <p className="career-section-eyebrow">Your Rewrite Includes</p>
            <h2>A polished resume built from your real experience.</h2>

            <p>
              The completed document will be based on the information you
              provide. The stronger and more complete your intake materials are,
              the more accurately the resume can represent your background and
              accomplishments.
            </p>

            <Link
              className="career-text-link"
              href="/career/resume-review"
            >
              Only need feedback?
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
              <p className="career-section-eyebrow">The Rewrite Standard</p>
              <h2>Professional does not have to mean exaggerated.</h2>
            </div>

            <p>
              The goal is to strengthen your presentation without losing your
              voice, misrepresenting your background, or filling the page with
              language that does not sound like you.
            </p>
          </div>

          <div className="career-principles-grid">
            {rewritePrinciples.map((principle, index) => (
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
            <p className="career-section-eyebrow">The Final Deliverable</p>

            <h2>A completed resume and a clearer strategy.</h2>

            <p>
              You will receive more than a document with different wording. The
              rewrite will reflect intentional decisions about what belongs on
              the page, which information should lead, and how your background
              should be positioned for your target role.
            </p>

            <ul className="career-report-features">
              <li>Rewritten professional summary</li>
              <li>Reorganized skills section</li>
              <li>Stronger experience bullet points</li>
              <li>Improved project descriptions</li>
              <li>Role-aligned keywords</li>
              <li>Summary of major changes</li>
            </ul>
          </div>

          <aside
            className="career-report-preview"
            aria-label="Example Resume Rewrite deliverable"
          >
            <div className="career-report-preview-header">
              <p>Cyber Grad Chronicles</p>
              <span>Resume Rewrite</span>
            </div>

            <div className="career-report-preview-body">
              <div className="career-report-preview-score">
                <span>Primary Goal</span>
                <strong>Clearer Positioning</strong>
              </div>

              <div className="career-report-preview-section">
                <span>01</span>
                <p>Professional Summary</p>
              </div>

              <div className="career-report-preview-section">
                <span>02</span>
                <p>Core Skills</p>
              </div>

              <div className="career-report-preview-section">
                <span>03</span>
                <p>Professional Experience</p>
              </div>

              <div className="career-report-preview-section">
                <span>04</span>
                <p>Projects and Education</p>
              </div>

              <div className="career-report-preview-section">
                <span>05</span>
                <p>Final Recommendations</p>
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
              <h2>Your intake provides the evidence behind the rewrite.</h2>
            </div>

            <p>
              I can only write from the information available. Sharing complete,
              accurate context helps prevent valuable experience from being
              overlooked.
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
              Please remove information that is not necessary for the rewrite,
              including your full street address, Social Security number,
              identification numbers, references, classified information,
              protected client information, or confidential employer data.
            </p>
          </div>
        </div>
      </section>

      <section className="career-ideal-for career-section">
        <div className="career-container career-ideal-for-grid">
          <div className="career-ideal-for-content">
            <p className="career-section-eyebrow">Who This Is For</p>
            <h2>Built for job seekers who need more than comments.</h2>

            <p>
              This service is best for people who know their current resume is
              not representing them effectively and want a completed rewrite
              rather than handling every revision themselves.
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
              <h2>From scattered information to a focused resume.</h2>
            </div>

            <p>
              The rewrite begins with context. Your experience, goals, and
              target role guide every major content decision.
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
              <p className="career-section-eyebrow">Rewrite or Review?</p>
              <h2>Select the support that matches your workload.</h2>
            </div>

            <p>
              The Resume Review gives you direction. The Resume Rewrite completes
              the major writing and restructuring for you.
            </p>
          </div>

          <div className="career-comparison-grid">
            <article className="career-comparison-card">
              <p className="career-comparison-label">Feedback Only</p>
              <h3>Resume Review</h3>
              <p className="career-comparison-price">$25</p>

              <p>
                Best when you want detailed recommendations and feel comfortable
                completing the revisions yourself.
              </p>

              <ul>
                <li>Detailed evaluation</li>
                <li>Section-by-section feedback</li>
                <li>Priority recommendations</li>
                <li>Revision checklist</li>
                <li>You rewrite the document</li>
              </ul>

              <Link
                className="career-button career-button-secondary"
                href="/career/resume-review"
              >
                Explore Resume Review
              </Link>
            </article>

            <article className="career-comparison-card career-comparison-card-current">
              <p className="career-comparison-label">This Service</p>
              <h3>Resume Rewrite</h3>
              <p className="career-comparison-price">$50</p>

              <p>
                Best when you want your existing content rewritten and
                reorganized into a complete, stronger resume.
              </p>

              <ul>
                <li>Complete resume rewrite</li>
                <li>Rewritten summary and skills</li>
                <li>Stronger bullet points</li>
                <li>Improved role alignment</li>
                <li>Completed resume draft</li>
              </ul>

              <a
                className="career-button career-button-primary"
                href="#purchase"
              >
                Choose Resume Rewrite
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="career-service-boundaries career-section">
        <div className="career-container">
          <div className="career-section-heading">
            <div>
              <p className="career-section-eyebrow">Service Boundaries</p>
              <h2>What the Resume Rewrite does not include.</h2>
            </div>

            <p>
              These boundaries protect the accuracy of your resume and establish
              clear expectations before the service begins.
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
              <h2>Resume Rewrite FAQ</h2>
            </div>

            <p>
              Review the service details before submitting your career
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
            <p className="career-section-eyebrow">Resume Rewrite</p>
            <h2>Present your experience with greater clarity and confidence.</h2>

            <p>
              Submit one existing resume and your supporting career information
              for a complete, personalized rewrite targeting one primary role or
              closely related job family.
            </p>

            <ul>
              <li>One complete resume rewrite</li>
              <li>Personalized content and positioning</li>
              <li>Improved bullet points and skills</li>
              <li>Polished final resume draft</li>
            </ul>
          </div>

          <aside className="career-purchase-card">
            <div className="career-purchase-card-header">
              <div>
                <p>Resume Rewrite</p>
                <span>One-time purchase</span>
              </div>

              <strong>$50</strong>
            </div>

            <p>
              Payment, intake, revision, and secure document-submission
              functionality will be connected before Career Intelligence
              services officially launch.
            </p>

            <button
              className="career-button career-button-primary career-button-full"
              type="button"
              disabled
            >
              Purchasing Coming Soon
            </button>

            <p className="career-purchase-note">
              Do not submit resumes or personal career information through the
              website until secure intake and payment systems are available.
            </p>
          </aside>
        </div>
      </section>

      <section className="career-final-cta">
        <div className="career-container career-final-cta-inner">
          <div>
            <p className="career-section-eyebrow">
              Strengthen More Than Your Resume
            </p>

            <h2>Build a consistent professional presence.</h2>

            <p>
              Pair your resume rewrite with LinkedIn, GitHub, or portfolio
              feedback through a Career Intelligence bundle.
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