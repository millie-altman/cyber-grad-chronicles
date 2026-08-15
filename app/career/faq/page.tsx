import Link from "next/link";

const faqCategories = [
  {
    id: "general",
    eyebrow: "01",
    title: "General Questions",
    description:
      "Learn what Career Intelligence services are, who they are designed for, and what you can expect from the overall process.",
    questions: [
      {
        question: "What are Career Intelligence services?",
        answer:
          "Career Intelligence services provide personalized reviews, rewrites, and preparation materials for resumes, LinkedIn profiles, GitHub profiles, portfolios, and interviews. The goal is to help you present your real experience more clearly and strategically.",
      },
      {
        question: "Who are these services designed for?",
        answer:
          "The services are primarily designed for students, recent graduates, early-career professionals, cybersecurity and technology job seekers, military spouses, veterans, career changers, and professionals building technical portfolios.",
      },
      {
        question: "Can you help people outside cybersecurity?",
        answer:
          "Yes. My strongest focus is cybersecurity, technology, technical portfolios, and early-career candidates, but many principles involving resumes, LinkedIn, interviews, and professional presentation apply across industries.",
      },
      {
        question: "Are you a recruiter or hiring manager?",
        answer:
          "No. I am not presenting myself as a recruiter, hiring manager, or career coach with decades of hiring experience. My guidance is based on extensive research, continued career development, personal experience, industry guidance, and the same detailed process I use when evaluating career materials.",
      },
      {
        question: "Do you guarantee interviews or job offers?",
        answer:
          "No. Career materials are only one part of a hiring process. These services can help improve clarity, organization, positioning, and professional presentation, but they cannot guarantee recruiter responses, interviews, offers, or employment.",
      },
      {
        question: "Will you work with international clients?",
        answer:
          "International availability, payment support, tax requirements, and service limitations will be confirmed before launch. Career expectations and document standards can vary by country, so clients should identify the location and job market they are targeting.",
      },
    ],
  },
  {
    id: "choosing-service",
    eyebrow: "02",
    title: "Choosing a Service",
    description:
      "Compare reviews, rewrites, technical portfolio support, interview preparation, and bundled packages.",
    questions: [
      {
        question: "What is the difference between a Resume Review and Resume Rewrite?",
        answer:
          "A Resume Review provides detailed feedback, section-by-section recommendations, and a prioritized revision plan. You complete the changes yourself. A Resume Rewrite includes a complete rewrite and restructuring of one resume based on your real experience and target role.",
      },
      {
        question: "Should I choose a GitHub Review or Portfolio Review?",
        answer:
          "Choose a GitHub Review when you want focused feedback on repositories, READMEs, pinned projects, documentation, and technical evidence. Choose a Portfolio Review when you want your complete website experience evaluated, including navigation, content, project presentation, visual consistency, and recruiter usability.",
      },
      {
        question: "When should I purchase Interview Preparation?",
        answer:
          "Interview Preparation is best when you have a specific job posting and an upcoming or active interview process. It focuses on one target position and provides role-specific questions, technical review areas, talking points, company research guidance, and a preparation checklist.",
      },
      {
        question: "Should I choose an individual service or a bundle?",
        answer:
          "Choose an individual service when you only need support in one area. Choose a bundle when your resume, LinkedIn, GitHub, portfolio, or interview preparation need coordinated feedback around the same target role.",
      },
      {
        question: "Can I create a custom package?",
        answer:
          "Custom packages may be considered after launch, depending on workload, service compatibility, and the materials involved. Standard bundles will remain the simplest and most affordable way to combine services.",
      },
      {
        question: "Can I replace one service inside a bundle?",
        answer:
          "Bundle substitutions are not included by default because each package is priced around a specific combination of services. Custom substitutions may be evaluated separately before purchase.",
      },
    ],
  },
  {
    id: "resume",
    eyebrow: "03",
    title: "Resume Services",
    description:
      "Understand what is included in Resume Reviews and Resume Rewrites, along with document limits and targeting expectations.",
    questions: [
      {
        question: "How many resumes are included?",
        answer:
          "Each Resume Review or Resume Rewrite covers one resume version targeting one primary role or closely related job family. Additional versions or substantially different career directions require separate services.",
      },
      {
        question: "Do I need to provide a job posting?",
        answer:
          "A representative job posting is strongly recommended. It helps identify relevant responsibilities, qualifications, keywords, tools, and expectations. If you do not have a specific posting, you may provide a target job title and examples of similar positions.",
      },
      {
        question: "Can you help if I have limited experience?",
        answer:
          "Yes. Resume content may draw from education, coursework, labs, projects, internships, volunteer work, military experience, customer service, caregiving, leadership, certifications, and transferable skills.",
      },
      {
        question: "Will you create metrics for my bullet points?",
        answer:
          "No. I will never invent metrics. When exact numbers are unavailable, strong bullet points can still communicate scope, actions, tools, complexity, responsibilities, improvements, and outcomes accurately.",
      },
      {
        question: "Will my resume be ATS friendly?",
        answer:
          "Recommendations and rewrites will consider standard headings, readable formatting, relevant keywords, and clear document structure. No one can guarantee how every applicant tracking system will interpret a document.",
      },
      {
        question: "Do you create graphic or highly designed resumes?",
        answer:
          "The focus is clean, professional, readable formatting. Heavily designed templates, decorative graphics, complex charts, photographs, and layouts that may reduce readability or ATS compatibility are not the primary offering.",
      },
      {
        question: "Can you help with federal resumes?",
        answer:
          "Federal resumes require a different approach involving detailed duties, dates, hours worked, specialized experience, questionnaire alignment, and announcement-specific qualifications. A separate federal resume service may be introduced later.",
      },
    ],
  },
  {
    id: "linkedin",
    eyebrow: "04",
    title: "LinkedIn Reviews",
    description:
      "Learn how profiles are submitted, which sections are evaluated, and how your privacy is protected.",
    questions: [
      {
        question: "Do you need access to my LinkedIn account?",
        answer:
          "No. You should never provide your LinkedIn password, authentication code, or account credentials. A public profile link, screenshots, exported profile information, or copied text is sufficient.",
      },
      {
        question: "What sections will you review?",
        answer:
          "The review may include your headline, About section, experience, education, certifications, skills, Featured section, projects, recommendations, profile presentation, and overall recruiter readability.",
      },
      {
        question: "Will you rewrite my entire LinkedIn profile?",
        answer:
          "The standard LinkedIn Review provides feedback, recommendations, sample wording, and a prioritized update plan. A complete rewrite of every section is not included unless introduced as a separate service.",
      },
      {
        question: "Should LinkedIn match my resume exactly?",
        answer:
          "Your resume and LinkedIn profile should be consistent, but they do not need to be identical. LinkedIn provides more space for context, personality, projects, featured content, recommendations, and broader professional interests.",
      },
      {
        question: "Will you review my profile photo or banner?",
        answer:
          "The review may include general observations about professionalism, consistency, and branding. It does not include photography, image editing, or custom banner design.",
      },
      {
        question: "Can you guarantee more recruiter messages?",
        answer:
          "No. A stronger profile may improve how your experience is understood, but recruiter outreach depends on many factors, including hiring demand, location, experience, networking, keywords, and active job-search settings.",
      },
    ],
  },
  {
    id: "github-portfolio",
    eyebrow: "05",
    title: "GitHub and Portfolio Reviews",
    description:
      "Learn what technical work is evaluated, how many projects are included, and what these services do not cover.",
    questions: [
      {
        question: "How many GitHub repositories are included?",
        answer:
          "A GitHub Review includes an overall assessment of one profile and a closer review of up to five priority repositories selected by the client.",
      },
      {
        question: "Will you audit or debug my code?",
        answer:
          "No. The GitHub Review evaluates project presentation, repository organization, README quality, technical evidence, and recruiter readability. It is not a formal code audit, debugging service, penetration test, or vulnerability assessment.",
      },
      {
        question: "Can tutorial or coursework projects be included?",
        answer:
          "Yes. Guided projects are valid learning evidence when they are represented honestly. Documentation should explain the source, what you completed, what you changed, which decisions you made, and what you learned.",
      },
      {
        question: "Does my portfolio need to be finished?",
        answer:
          "No. A Portfolio Review can be useful before launch, during a redesign, or after the website is live. The portfolio must be accessible through a public or temporary review link.",
      },
      {
        question: "Will you redesign or code my portfolio?",
        answer:
          "No. The Portfolio Review provides recommendations related to content, structure, navigation, project presentation, readability, and visual consistency. It does not include mockups, coding, development, or rebuilding the website.",
      },
      {
        question: "Will you review the mobile version?",
        answer:
          "The review includes general observations about how the website appears and functions on smaller screens. It is not a complete device-by-device quality assurance or accessibility audit.",
      },
      {
        question: "Can you review a private GitHub repository?",
        answer:
          "Repositories must be accessible without sharing passwords, tokens, private keys, or confidential credentials. Public links are preferred. Secure alternatives may be evaluated before launch.",
      },
    ],
  },
  {
    id: "interviews",
    eyebrow: "06",
    title: "Interview Preparation",
    description:
      "Understand how the written preparation guide works and what information is needed for a targeted interview plan.",
    questions: [
      {
        question: "Is Interview Preparation a live mock interview?",
        answer:
          "No. The standard service provides a personalized written guide based on one job posting, your resume, interview stage, and areas of concern.",
      },
      {
        question: "What does the preparation guide include?",
        answer:
          "The guide may include company and role research priorities, likely behavioral questions, technical concepts to review, experience talking points, questions for the interviewer, and a final preparation checklist.",
      },
      {
        question: "Will you write complete interview answers for me?",
        answer:
          "The guide may include response frameworks, prompts, and talking points. You should practice answering in your own words so your responses remain accurate, flexible, and natural.",
      },
      {
        question: "Can you prepare me for a technical interview?",
        answer:
          "Yes. I can identify likely technical concepts, tools, scenarios, and frameworks based on the job posting. The service does not replace technical training or hands-on experience.",
      },
      {
        question: "Can you help with federal interviews?",
        answer:
          "Yes. Preparation may include structured behavioral questions, specialized experience, announcement qualifications, agency research, and relevant examples when the complete federal job announcement is provided.",
      },
      {
        question: "Can you help with several interviews?",
        answer:
          "Each service covers one target position and interview process. Separate positions with different responsibilities or qualifications require separate preparation guides.",
      },
      {
        question: "Will you complete a hiring assessment for me?",
        answer:
          "No. I will not complete live interview questions, technical assessments, take-home tests, certification exams, or restricted hiring materials on a candidate’s behalf.",
      },
    ],
  },
  {
    id: "process",
    eyebrow: "07",
    title: "Process and Deliverables",
    description:
      "Learn how submissions, reviews, reports, rewrites, and final materials will be handled.",
    questions: [
      {
        question: "How will I submit my materials?",
        answer:
          "A secure intake and submission process will be connected before launch. Clients should not send sensitive career documents through unsecured forms or informal website fields.",
      },
      {
        question: "What will I receive?",
        answer:
          "Deliverables depend on the service. Reviews generally include a structured Career Intelligence Report and prioritized action plan. Resume Rewrites include a completed resume draft. Interview Preparation includes a personalized written guide.",
      },
      {
        question: "How long will the process take?",
        answer:
          "Turnaround times will be published before launch and may vary by service complexity, bundle size, workload, and whether all required information was submitted correctly.",
      },
      {
        question: "When does the turnaround period begin?",
        answer:
          "The turnaround period should begin after payment is completed and all required materials have been received. Incomplete submissions may delay the start of the review.",
      },
      {
        question: "Will you contact me with questions?",
        answer:
          "Additional questions may be sent when important information is missing or unclear. Complete intake responses help prevent delays and improve the quality of the final deliverable.",
      },
      {
        question: "How will completed materials be delivered?",
        answer:
          "The final delivery method will be confirmed before launch. The goal is to use a secure system that supports document delivery without exposing private information.",
      },
      {
        question: "Can I submit updated materials after the review begins?",
        answer:
          "Major changes submitted after work begins may require additional time or a separate service. Final policies will explain when small corrections can be accepted.",
      },
    ],
  },
  {
    id: "revisions",
    eyebrow: "08",
    title: "Revisions and Follow-Up",
    description:
      "Understand the difference between corrections, revisions, additional versions, and ongoing career support.",
    questions: [
      {
        question: "Are revisions included?",
        answer:
          "Revision terms will be finalized before launch and may vary by service. Resume Rewrites may include a limited correction or revision period, while review services primarily provide feedback for the client to implement.",
      },
      {
        question: "What counts as a correction?",
        answer:
          "A correction addresses an error or misunderstanding in the delivered material, such as incorrect wording based on information that was provided accurately during intake.",
      },
      {
        question: "What counts as a new request?",
        answer:
          "A new target role, additional resume version, new project, different portfolio, separate interview, major career-direction change, or information submitted after completion may require a separate purchase.",
      },
      {
        question: "Can I ask follow-up questions?",
        answer:
          "A limited follow-up period may be included so clients can clarify recommendations. Exact limits and response windows will be published before launch.",
      },
      {
        question: "Do you provide ongoing career coaching?",
        answer:
          "No. These are defined review, rewrite, and preparation services. They do not include indefinite coaching, weekly calls, job-search management, networking outreach, or continuous document updates.",
      },
      {
        question: "Can you review my changes after I update everything?",
        answer:
          "A second review may require a new purchase depending on the service and the amount of material involved. Limited follow-up clarification is different from a complete reassessment.",
      },
    ],
  },
  {
    id: "privacy",
    eyebrow: "09",
    title: "Privacy and Security",
    description:
      "Learn what information should never be submitted and how to prepare career documents safely.",
    questions: [
      {
        question: "What personal information should I remove?",
        answer:
          "Remove information that is not necessary for the service, including your full street address, Social Security number, identification numbers, financial information, references, passwords, and unrelated personal records.",
      },
      {
        question: "Should I provide account passwords?",
        answer:
          "No. Never provide passwords, authentication codes, backup codes, personal access tokens, API keys, private keys, or administrator credentials.",
      },
      {
        question: "Can I submit confidential employer information?",
        answer:
          "No. Do not submit proprietary code, classified information, protected customer data, internal documents, confidential case details, restricted assessments, or information you are not authorized to share.",
      },
      {
        question: "Can I remove my contact information before submitting?",
        answer:
          "Yes. You may replace your address, phone number, or email with clearly marked placeholders when those details are not necessary for the review.",
      },
      {
        question: "Will my information be shared?",
        answer:
          "Privacy, retention, storage, and deletion policies will be published before launch. Client materials should not be used publicly, shared as examples, or included in testimonials without explicit permission.",
      },
      {
        question: "How long will files be retained?",
        answer:
          "A formal retention and deletion policy will be established before accepting client materials. Files should only be retained for the period necessary to complete the service and resolve approved follow-up requests.",
      },
      {
        question: "Will you use my documents to train AI systems?",
        answer:
          "A clear policy regarding AI-assisted tools, document handling, and third-party processing will be published before launch. Clients should be informed before their materials are processed through any external system.",
      },
    ],
  },
  {
    id: "payment",
    eyebrow: "10",
    title: "Payment, Cancellations, and Refunds",
    description:
      "Review the policies that will govern purchases, cancellations, missed deadlines, and service eligibility.",
    questions: [
      {
        question: "How will payment work?",
        answer:
          "Secure payment processing will be connected before launch. Payment details should never be submitted through an unsecured form, email, message, or document upload.",
      },
      {
        question: "When is payment required?",
        answer:
          "Payment will generally be required before work begins. The service timeline should not start until payment and all required materials have been received.",
      },
      {
        question: "Will refunds be available?",
        answer:
          "A formal refund policy will be published before launch. Refund eligibility may depend on whether work has started, whether materials were submitted, and whether the client meets the service requirements.",
      },
      {
        question: "Can I cancel after purchasing?",
        answer:
          "Cancellation terms will be explained before purchase. Once substantial review, writing, research, or preparation work has begun, full refunds may no longer be available.",
      },
      {
        question: "What happens if I never submit my materials?",
        answer:
          "Orders may expire after a defined submission period. The expiration, reminder, credit, and refund terms will be listed in the final service policy.",
      },
      {
        question: "What if my interview happens before the guide is ready?",
        answer:
          "Clients are responsible for checking published turnaround times before purchasing. Rush availability, if offered, will be listed separately and cannot be guaranteed.",
      },
      {
        question: "Are prices final?",
        answer:
          "Current page prices are planned launch prices and may be adjusted before services become available. The final amount shown at checkout will govern the purchase.",
      },
    ],
  },
];

const quickLinks = [
  {
    title: "Resume Review",
    description:
      "Detailed feedback for candidates who want to revise their own resume.",
    href: "/career/resume-review",
  },
  {
    title: "Resume Rewrite",
    description:
      "A complete rewrite for candidates who need stronger content and structure.",
    href: "/career/resume-rewrite",
  },
  {
    title: "LinkedIn Review",
    description:
      "Personalized recommendations for a clearer professional profile.",
    href: "/career/linkedin-review",
  },
  {
    title: "GitHub Review",
    description:
      "Focused feedback on repositories, documentation, and proof of work.",
    href: "/career/github-review",
  },
  {
    title: "Portfolio Review",
    description:
      "A complete assessment of your professional website and project presentation.",
    href: "/career/portfolio-review",
  },
  {
    title: "Interview Preparation",
    description:
      "A personalized preparation guide for one active opportunity.",
    href: "/career/interview-prep",
  },
];

export default function CareerFAQPage() {
  return (
    <main className="career-page career-faq-page">
      <section className="career-service-hero career-faq-hero">
        <div className="career-container career-service-hero-grid">
          <div className="career-service-hero-content">
            <div className="career-breadcrumbs" aria-label="Breadcrumb">
              <Link href="/career">Career Intelligence</Link>
              <span aria-hidden="true">/</span>
              <span>Frequently Asked Questions</span>
            </div>

            <p className="career-eyebrow">Career Intelligence FAQ</p>

            <h1>Understand the services before you submit your materials.</h1>

            <p className="career-service-hero-description">
              Review service expectations, document limits, privacy guidance,
              deliverables, payment policies, and the differences between each
              Career Intelligence option.
            </p>

            <div className="career-service-hero-actions">
              <a
                className="career-button career-button-primary"
                href="#faq-categories"
              >
                Browse Questions
              </a>

              <Link
                className="career-button career-button-secondary"
                href="/career"
              >
                View All Services
              </Link>
            </div>

            <ul
              className="career-service-hero-details"
              aria-label="Career Intelligence FAQ highlights"
            >
              <li>Service expectations</li>
              <li>Privacy and security</li>
              <li>Payment and revision policies</li>
            </ul>
          </div>

          <aside
            className="career-service-summary-card"
            aria-label="Frequently asked questions overview"
          >
            <div className="career-service-summary-header">
              <p>Service Guide</p>
              <span>Before You Purchase</span>
            </div>

            <p className="career-service-summary-price career-faq-count">
              <strong>{faqCategories.length}</strong>
              <span>Categories</span>
            </p>

            <p className="career-service-summary-description">
              Find answers about individual services, bundles, submissions,
              timelines, privacy, revisions, payments, and final deliverables.
            </p>

            <div className="career-service-summary-details">
              <div>
                <span>Primary Focus</span>
                <strong>Clear Expectations</strong>
              </div>

              <div>
                <span>Account Access</span>
                <strong>Never Required</strong>
              </div>

              <div>
                <span>Outcome Guarantees</span>
                <strong>Not Offered</strong>
              </div>

              <div>
                <span>Secure Intake</span>
                <strong>Coming Before Launch</strong>
              </div>
            </div>

            <a
              className="career-button career-button-primary career-button-full"
              href="#faq-categories"
            >
              Read the FAQ
            </a>
          </aside>
        </div>
      </section>

      <section className="career-service-introduction career-section">
        <div className="career-container career-service-introduction-grid">
          <div>
            <p className="career-section-eyebrow">Clarity Before Purchase</p>
            <h2>Know what each service can—and cannot—provide.</h2>
          </div>

          <div className="career-service-introduction-copy">
            <p>
              Career materials often contain personal information, professional
              history, technical work, and details about active job searches.
              You should understand how your materials will be used, what the
              service includes, and which information should never be submitted.
            </p>

            <p>
              These questions establish clear expectations before Career
              Intelligence services launch. Final turnaround, refund, revision,
              privacy, and file-retention policies should be published before
              payments or client documents are accepted.
            </p>
          </div>
        </div>
      </section>

      <section
        className="career-faq-navigation career-section"
        aria-labelledby="faq-navigation-title"
      >
        <div className="career-container">
          <div className="career-section-heading">
            <div>
              <p className="career-section-eyebrow">Browse by Topic</p>
              <h2 id="faq-navigation-title">Find the information you need.</h2>
            </div>

            <p>
              Select a category to move directly to the questions most relevant
              to your service or concern.
            </p>
          </div>

          <nav
            className="career-faq-category-grid"
            aria-label="Frequently asked question categories"
          >
            {faqCategories.map((category) => (
              <a
                className="career-faq-category-link"
                href={`#${category.id}`}
                key={category.id}
              >
                <span>{category.eyebrow}</span>

                <div>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>

                <span aria-hidden="true">↓</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section
        className="career-faq-categories career-section"
        id="faq-categories"
      >
        <div className="career-container">
          {faqCategories.map((category) => (
            <section
              className="career-faq-category-section"
              id={category.id}
              key={category.id}
              aria-labelledby={`${category.id}-title`}
            >
              <div className="career-faq-category-heading">
                <div>
                  <p className="career-section-eyebrow">
                    {category.eyebrow}
                  </p>

                  <h2 id={`${category.id}-title`}>{category.title}</h2>
                </div>

                <p>{category.description}</p>
              </div>

              <div className="career-faq-list">
                {category.questions.map((item) => (
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

              <a className="career-faq-back-link" href="#faq-categories">
                Back to FAQ categories
                <span aria-hidden="true"> ↑</span>
              </a>
            </section>
          ))}
        </div>
      </section>

      <section className="career-service-boundaries career-section">
        <div className="career-container">
          <div className="career-section-heading">
            <div>
              <p className="career-section-eyebrow">
                Important Service Principles
              </p>

              <h2>Every Career Intelligence service follows these standards.</h2>
            </div>

            <p>
              These principles protect the accuracy of your materials, your
              privacy, and the expectations surrounding each service.
            </p>
          </div>

          <div className="career-boundaries-grid">
            <article className="career-boundary-card">
              <span>01</span>
              <h3>No fabricated experience</h3>
              <p>
                Services will never invent qualifications, tools, projects,
                responsibilities, metrics, accomplishments, certifications, or
                professional experience.
              </p>
            </article>

            <article className="career-boundary-card">
              <span>02</span>
              <h3>No account credentials</h3>
              <p>
                Passwords, tokens, private keys, authentication codes,
                administrator access, and account credentials are never required.
              </p>
            </article>

            <article className="career-boundary-card">
              <span>03</span>
              <h3>No guaranteed outcomes</h3>
              <p>
                Career materials can improve presentation and alignment but
                cannot guarantee recruiter outreach, interviews, offers, or
                employment.
              </p>
            </article>

            <article className="career-boundary-card">
              <span>04</span>
              <h3>One clear target direction</h3>
              <p>
                Each service or bundle supports one primary role or closely
                related job family unless otherwise stated.
              </p>
            </article>

            <article className="career-boundary-card">
              <span>05</span>
              <h3>Defined deliverables</h3>
              <p>
                Every service includes specific document, profile, repository,
                website, revision, or interview limits.
              </p>
            </article>

            <article className="career-boundary-card">
              <span>06</span>
              <h3>Secure submission required</h3>
              <p>
                Client documents should not be accepted until secure payment,
                intake, storage, delivery, retention, and deletion systems are
                established.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="career-faq-services career-section">
        <div className="career-container">
          <div className="career-section-heading">
            <div>
              <p className="career-section-eyebrow">Explore the Services</p>
              <h2>Review the details for each Career Intelligence option.</h2>
            </div>

            <p>
              Every service page explains what is evaluated, what you will
              submit, what you will receive, and which boundaries apply.
            </p>
          </div>

          <div className="career-services-grid">
            {quickLinks.map((service, index) => (
              <article className="career-service-card" key={service.title}>
                <div className="career-service-card-header">
                  <span className="career-service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <Link className="career-text-link" href={service.href}>
                  View Service Details
                  <span aria-hidden="true"> →</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="career-faq-contact career-section">
        <div className="career-container career-faq-contact-grid">
          <div>
            <p className="career-section-eyebrow">Still Have a Question?</p>

            <h2>Review the service page before reaching out.</h2>

            <p>
              Questions about availability, eligibility, unusual materials, or
              service fit may be submitted through the official contact process
              once Career Intelligence services launch.
            </p>
          </div>

          <div className="career-faq-contact-card">
            <p className="career-faq-contact-label">Before Contacting</p>

            <ul>
              <li>Review the relevant service page</li>
              <li>Confirm your materials meet the service requirements</li>
              <li>Remove sensitive or confidential information</li>
              <li>Identify your primary target role</li>
              <li>Do not send documents before secure intake is available</li>
            </ul>

            <Link
              className="career-button career-button-secondary career-button-full"
              href="/connect"
            >
              Visit the Connect Page
            </Link>
          </div>
        </div>
      </section>

      <section className="career-final-cta">
        <div className="career-container career-final-cta-inner">
          <div>
            <p className="career-section-eyebrow">
              Ready to Compare Your Options?
            </p>

            <h2>Choose one focused service or a coordinated career bundle.</h2>

            <p>
              Review all Career Intelligence services, pricing, deliverables,
              and package options before deciding which level of support fits
              your current goals.
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
              Compare Bundles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}