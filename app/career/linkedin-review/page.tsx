import Link from "next/link";

const reviewAreas = [
  {
    number: "01",
    title: "Profile Headline",
    description:
      "Whether your headline clearly communicates your professional direction, strengths, target roles, and relevant keywords.",
  },
  {
    number: "02",
    title: "About Section",
    description:
      "How effectively your About section introduces your background, goals, experience, technical interests, and professional value.",
  },
  {
    number: "03",
    title: "Experience",
    description:
      "Whether your experience descriptions provide enough context, impact, technical evidence, and alignment with your target career path.",
  },
  {
    number: "04",
    title: "Projects and Featured Content",
    description:
      "How well your projects, portfolio, GitHub, articles, certifications, and other proof of work are presented and prioritized.",
  },
  {
    number: "05",
    title: "Skills and Credentials",
    description:
      "Whether your listed skills, certifications, education, and training support the professional direction shown throughout your profile.",
  },
  {
    number: "06",
    title: "Recruiter Readability",
    description:
      "How quickly a recruiter or hiring manager can understand your background, qualifications, interests, and next career goal.",
  },
];

const includedItems = [
  "A complete review of your current LinkedIn profile",
  "Headline feedback and recommendations",
  "About section feedback",
  "Experience section review",
  "Project and Featured section recommendations",
  "Skills, education, and certification feedback",
  "Profile organization and readability recommendations",
  "Keyword and role-alignment guidance",
  "A prioritized LinkedIn action plan",
];

const submissionItems = [
  {
    title: "Your LinkedIn profile",
    description:
      "Provide a public profile link or screenshots of each section you want reviewed.",
  },
  {
    title: "Your target role",
    description:
      "Share the job title, career field, or professional direction you want your profile to support.",
  },
  {
    title: "A representative job posting",
    description:
      "Include a job posting whenever possible so the review can evaluate role alignment and relevant terminology.",
  },
  {
    title: "Your current resume",
    description:
      "Your resume helps identify inconsistencies, missing experience, and opportunities to strengthen your overall professional story.",
  },
  {
    title: "Your profile concerns",
    description:
      "Explain which sections feel incomplete, unclear, outdated, or difficult to write.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Purchase your review",
    description:
      "Complete your purchase and receive instructions for submitting your LinkedIn profile and supporting information.",
  },
  {
    number: "02",
    title: "Share your profile",
    description:
      "Provide your LinkedIn link or screenshots, target role, resume, and any specific questions you want addressed.",
  },
  {
    number: "03",
    title: "I evaluate each section",
    description:
      "I review your profile for clarity, consistency, role alignment, proof of work, keywords, and recruiter readability.",
  },
  {
    number: "04",
    title: "Receive your feedback",
    description:
      "You receive organized recommendations identifying what is working, what is missing, and which sections should be improved first.",
  },
  {
    number: "05",
    title: "Update with direction",
    description:
      "Use your action plan and sample recommendations to strengthen your profile without guessing what to change.",
  },
];

const idealFor = [
  "Students and recent graduates",
  "Cybersecurity and technology job seekers",
  "Military spouses and veterans",
  "Career changers",
  "Professionals with incomplete LinkedIn profiles",
  "Applicants receiving limited recruiter engagement",
  "Job seekers building a personal brand",
  "Candidates preparing for an active job search",
];

const profilePrinciples = [
  {
    title: "Clear",
    description:
      "A visitor should quickly understand your professional direction, relevant experience, and strongest qualifications.",
  },
  {
    title: "Consistent",
    description:
      "Your LinkedIn profile should support the same professional story as your resume, portfolio, GitHub, and other career materials.",
  },
  {
    title: "Evidence-Based",
    description:
      "Projects, accomplishments, certifications, writing, and technical work should provide proof behind the claims in your profile.",
  },
  {
    title: "Authentic",
    description:
      "Your profile should sound professional without becoming exaggerated, generic, or disconnected from how you naturally communicate.",
  },
];

const notIncluded = [
  {
    title: "A complete profile rewrite",
    description:
      "This service provides detailed feedback and recommendations but does not include rewriting every section of your LinkedIn profile.",
  },
  {
    title: "Direct account access",
    description:
      "I will not request your LinkedIn password, sign into your account, or make changes directly on your behalf.",
  },
  {
    title: "Guaranteed recruiter outreach",
    description:
      "An improved profile may strengthen your professional presentation, but it cannot guarantee recruiter messages, interviews, or job offers.",
  },
  {
    title: "Fabricated experience",
    description:
      "Recommendations will not include inventing job duties, projects, metrics, certifications, tools, or accomplishments.",
  },
  {
    title: "Ongoing profile management",
    description:
      "This review covers the profile submitted with your order and does not include continuous updates, posting, networking, or account management.",
  },
];

const frequentlyAskedQuestions = [
  {
    question: "Do I need a public LinkedIn profile?",
    answer:
      "No. You may provide screenshots or exported profile information instead. The screenshots should clearly show each section you want reviewed.",
  },
  {
    question: "Will you rewrite my headline or About section?",
    answer:
      "The review may include sample wording, stronger positioning ideas, and recommendations for specific sections. A complete rewrite of every section is not included unless offered as a separate service.",
  },
  {
    question: "Do you need access to my LinkedIn account?",
    answer:
      "No. You should never provide your password or sign-in information. A public link, screenshots, or copied profile text is sufficient.",
  },
  {
    question: "Can you help me choose target job titles?",
    answer:
      "The review can identify whether your current profile supports the roles you are pursuing and may recommend closely related titles. It is not a complete career coaching or labor-market research service.",
  },
  {
    question: "Should my LinkedIn profile match my resume?",
    answer:
      "The two should be consistent, but they do not need to be identical. LinkedIn gives you more room for context, personality, projects, featured work, recommendations, and broader professional interests.",
  },
  {
    question: "Can you review a profile outside cybersecurity?",
    answer:
      "Yes. My primary focus is cybersecurity, technology, early-career professionals, military spouses, veterans, and career changers, but the core principles of LinkedIn presentation apply across many industries.",
  },
  {
    question: "Will you help improve my profile photo or banner?",
    answer:
      "The review can provide general feedback on professionalism, consistency, and branding. It does not include photography, image editing, or custom banner design.",
  },
];

export default function LinkedInReviewPage() {
  return (
    <main className="career-page career-service-page">
      <section className="career-service-hero">
        <div className="career-container career-service-hero-grid">
          <div className="career-service-hero-content">
            <div className="career-breadcrumbs" aria-label="Breadcrumb">
              <Link href="/career">Career Intelligence</Link>
              <span aria-hidden="true">/</span>
              <span>LinkedIn Review</span>
            </div>

            <p className="career-eyebrow">Career Intelligence Service</p>

            <h1>LinkedIn Review</h1>

            <p className="career-service-hero-description">
              Strengthen your professional presence with a detailed assessment
              of your headline, About section, experience, projects, skills,
              credentials, and overall recruiter readability.
            </p>

            <div className="career-service-hero-actions">
              <a
                className="career-button career-button-primary"
                href="#purchase"
              >
                Purchase LinkedIn Review
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
              aria-label="LinkedIn Review highlights"
            >
              <li>One LinkedIn profile</li>
              <li>Section-by-section feedback</li>
              <li>Personalized action plan</li>
            </ul>
          </div>

          <aside
            className="career-service-summary-card"
            aria-label="LinkedIn Review service summary"
          >
            <div className="career-service-summary-header">
              <p>LinkedIn Review</p>
              <span>Individual Service</span>
            </div>

            <p className="career-service-summary-price">
              <span>$</span>
              <strong>30</strong>
            </p>

            <p className="career-service-summary-description">
              A detailed review of your profile content, positioning,
              consistency, proof of work, and alignment with your target role.
            </p>

            <div className="career-service-summary-details">
              <div>
                <span>Service Type</span>
                <strong>Review and Feedback</strong>
              </div>

              <div>
                <span>Profiles</span>
                <strong>One LinkedIn Profile</strong>
              </div>

              <div>
                <span>Best For</span>
                <strong>Professional Visibility</strong>
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
            <p className="career-section-eyebrow">Beyond an Online Resume</p>
            <h2>Your profile should explain where you are going.</h2>
          </div>

          <div className="career-service-introduction-copy">
            <p>
              LinkedIn is often one of the first places recruiters, hiring
              managers, classmates, mentors, and professional contacts look when
              they want to understand your background.
            </p>

            <p>
              A strong profile does more than repeat your resume. It connects
              your experience, education, projects, certifications, interests,
              and career direction into one clear professional story. This
              review helps identify where that story is strong and where
              important context or evidence may be missing.
            </p>
          </div>
        </div>
      </section>

      <section className="career-review-areas career-section" id="included">
        <div className="career-container">
          <div className="career-section-heading">
            <div>
              <p className="career-section-eyebrow">What I Evaluate</p>
              <h2>Every section should support your professional direction.</h2>
            </div>

            <p>
              Your profile will be reviewed as a complete professional presence,
              not as a collection of unrelated sections.
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
            <h2>Detailed recommendations for your complete profile.</h2>

            <p>
              Your feedback will focus on the profile you currently have, the
              roles you are targeting, and the professional message a visitor
              receives when viewing your page.
            </p>

            <Link className="career-text-link" href="/career/bundles">
              Pair this review with your resume
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
              <p className="career-section-eyebrow">The Profile Standard</p>
              <h2>Visible, credible, and still authentically yours.</h2>
            </div>

            <p>
              A strong LinkedIn profile should make your experience easier to
              understand without turning your professional identity into a list
              of keywords.
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

            <h2>Know which profile updates matter most.</h2>

            <p>
              Your review will organize recommendations by priority so you can
              address major positioning and content issues before spending time
              on smaller refinements.
            </p>

            <ul className="career-report-features">
              <li>Overall profile impression</li>
              <li>Headline and About feedback</li>
              <li>Experience section recommendations</li>
              <li>Project and Featured section guidance</li>
              <li>Keyword and role alignment</li>
              <li>Prioritized update checklist</li>
            </ul>
          </div>

          <aside
            className="career-report-preview"
            aria-label="Example LinkedIn Review report structure"
          >
            <div className="career-report-preview-header">
              <p>Cyber Grad Chronicles</p>
              <span>LinkedIn Review</span>
            </div>

            <div className="career-report-preview-body">
              <div className="career-report-preview-score">
                <span>Review Focus</span>
                <strong>Professional Visibility</strong>
              </div>

              <div className="career-report-preview-section">
                <span>01</span>
                <p>First Impression</p>
              </div>

              <div className="career-report-preview-section">
                <span>02</span>
                <p>Headline and About</p>
              </div>

              <div className="career-report-preview-section">
                <span>03</span>
                <p>Experience and Skills</p>
              </div>

              <div className="career-report-preview-section">
                <span>04</span>
                <p>Projects and Evidence</p>
              </div>

              <div className="career-report-preview-section">
                <span>05</span>
                <p>Profile Action Plan</p>
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
              <h2>Context helps create a more useful review.</h2>
            </div>

            <p>
              Your target role, resume, and current concerns help determine
              whether your LinkedIn profile is presenting the right information.
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
              Never provide your LinkedIn password or account login information.
              A public profile link, screenshots, or copied profile text is
              sufficient for the review.
            </p>
          </div>
        </div>
      </section>

      <section className="career-ideal-for career-section">
        <div className="career-container career-ideal-for-grid">
          <div className="career-ideal-for-content">
            <p className="career-section-eyebrow">Who This Is For</p>
            <h2>Professional guidance for profiles still taking shape.</h2>

            <p>
              This service works best when you want an outside perspective on
              how your profile presents your background, goals, and professional
              identity.
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
              <h2>A structured path to a stronger profile.</h2>
            </div>

            <p>
              You provide your current profile and professional direction. I
              identify the updates that can make your experience clearer and
              more consistent.
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
              <p className="career-section-eyebrow">LinkedIn or Resume?</p>
              <h2>Strengthen one document or align your full presence.</h2>
            </div>

            <p>
              Your resume and LinkedIn profile should tell a consistent story
              while making the best use of each platform.
            </p>
          </div>

          <div className="career-comparison-grid">
            <article className="career-comparison-card career-comparison-card-current">
              <p className="career-comparison-label">This Service</p>
              <h3>LinkedIn Review</h3>
              <p className="career-comparison-price">$30</p>

              <p>
                Best when you want detailed recommendations for your profile,
                visibility, content, and professional positioning.
              </p>

              <ul>
                <li>Headline and About feedback</li>
                <li>Experience review</li>
                <li>Skills and credential guidance</li>
                <li>Project presentation feedback</li>
                <li>You update the profile</li>
              </ul>

              <a
                className="career-button career-button-primary"
                href="#purchase"
              >
                Choose LinkedIn Review
              </a>
            </article>

            <article className="career-comparison-card">
              <p className="career-comparison-label">Combined Support</p>
              <h3>Career Bundle</h3>
              <p className="career-comparison-price">From $65</p>

              <p>
                Best when you want your resume, LinkedIn, and technical
                platforms evaluated together as one professional presence.
              </p>

              <ul>
                <li>Coordinated feedback</li>
                <li>Cross-platform consistency</li>
                <li>Stronger professional positioning</li>
                <li>Resume and LinkedIn alignment</li>
                <li>Bundle pricing</li>
              </ul>

              <Link
                className="career-button career-button-secondary"
                href="/career/bundles"
              >
                Explore Career Bundles
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
              <h2>What the LinkedIn Review does not include.</h2>
            </div>

            <p>
              Clear boundaries protect your privacy and establish what you will
              receive from the service.
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
              <h2>LinkedIn Review FAQ</h2>
            </div>

            <p>
              Review the service details before sharing your profile
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
            <p className="career-section-eyebrow">LinkedIn Review</p>
            <h2>Build a profile that supports your next career move.</h2>

            <p>
              Submit one LinkedIn profile for a detailed review of its content,
              organization, professional positioning, and alignment with your
              target role.
            </p>

            <ul>
              <li>One LinkedIn profile</li>
              <li>Section-by-section assessment</li>
              <li>Career Intelligence Report</li>
              <li>Prioritized profile action plan</li>
            </ul>
          </div>

          <aside className="career-purchase-card">
            <div className="career-purchase-card-header">
              <div>
                <p>LinkedIn Review</p>
                <span>One-time purchase</span>
              </div>

              <strong>$30</strong>
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
              Do not provide passwords, account credentials, or private login
              information at any point during the review process.
            </p>
          </aside>
        </div>
      </section>

      <section className="career-final-cta">
        <div className="career-container career-final-cta-inner">
          <div>
            <p className="career-section-eyebrow">
              Present a Consistent Career Story
            </p>

            <h2>Connect your LinkedIn profile to the rest of your work.</h2>

            <p>
              Combine your LinkedIn review with resume, GitHub, or portfolio
              feedback for a more complete assessment.
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