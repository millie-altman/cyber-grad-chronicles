import Link from "next/link";

const preparationAreas = [
  {
    number: "01",
    title: "Role and Company Research",
    description:
      "Guidance on what to research about the organization, position, team, industry, responsibilities, and likely hiring priorities.",
  },
  {
    number: "02",
    title: "Behavioral Questions",
    description:
      "Personalized questions and talking points designed to help you explain your experience, decisions, challenges, teamwork, and results.",
  },
  {
    number: "03",
    title: "Technical Preparation",
    description:
      "A focused list of technical concepts, tools, frameworks, scenarios, and knowledge areas that may be relevant to the target role.",
  },
  {
    number: "04",
    title: "Experience Positioning",
    description:
      "Support identifying the strongest examples from your work, education, projects, military experience, volunteer work, or career transition.",
  },
  {
    number: "05",
    title: "Questions for the Interviewer",
    description:
      "Thoughtful questions that help you evaluate the opportunity while demonstrating preparation, curiosity, and professional judgment.",
  },
  {
    number: "06",
    title: "Interview Strategy",
    description:
      "Recommendations for organizing your responses, managing uncertainty, discussing gaps, and communicating clearly under pressure.",
  },
];

const includedItems = [
  "A review of one job posting",
  "Role and company research guidance",
  "A personalized interview preparation guide",
  "Likely behavioral interview questions",
  "Role-specific technical topics to review",
  "Recommended experience examples and talking points",
  "Questions to ask the interviewer",
  "Guidance for discussing career changes or experience gaps",
  "A final interview preparation checklist",
];

const submissionItems = [
  {
    title: "The job posting",
    description:
      "Provide the complete posting for the position you are interviewing for, including responsibilities and qualifications.",
  },
  {
    title: "Your current resume",
    description:
      "Your resume helps identify the experience, education, projects, and accomplishments most relevant to the interview.",
  },
  {
    title: "Interview details",
    description:
      "Share the scheduled date, interview format, expected length, interview stage, and any information you have about the interviewers.",
  },
  {
    title: "Your concerns",
    description:
      "Explain which questions, technical topics, experiences, or parts of the interview make you feel least prepared.",
  },
  {
    title: "Previous interview information",
    description:
      "Include recruiter notes, screening questions, prior interview topics, or anything the employer has already emphasized.",
  },
  {
    title: "Your strongest examples",
    description:
      "Share accomplishments, challenges, projects, or experiences you believe may be useful during the interview.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Purchase your preparation guide",
    description:
      "Complete your purchase and receive instructions for submitting the job posting, resume, interview details, and current concerns.",
  },
  {
    number: "02",
    title: "Share your interview context",
    description:
      "Provide the information needed to understand the position, hiring stage, employer expectations, and your professional background.",
  },
  {
    number: "03",
    title: "I analyze the opportunity",
    description:
      "I evaluate the job posting, qualifications, responsibilities, your experience, and the topics most likely to shape the interview.",
  },
  {
    number: "04",
    title: "Receive your preparation guide",
    description:
      "You receive personalized questions, technical review topics, talking points, research guidance, and a preparation checklist.",
  },
  {
    number: "05",
    title: "Practice with direction",
    description:
      "Use the guide to rehearse clear responses, strengthen your examples, review technical concepts, and prepare thoughtful questions.",
  },
];

const idealFor = [
  "Students preparing for their first professional interview",
  "Cybersecurity and technology job seekers",
  "Military spouses and veterans",
  "Career changers",
  "Candidates preparing for behavioral interviews",
  "Applicants expecting technical questions",
  "Professionals returning to interviewing after a long break",
  "Anyone unsure how to connect their experience to a role",
];

const preparationPrinciples = [
  {
    title: "Targeted",
    description:
      "Preparation is based on the actual position, employer, responsibilities, qualifications, and interview stage.",
  },
  {
    title: "Evidence-Based",
    description:
      "Your responses should be supported by real projects, accomplishments, decisions, lessons, and professional experiences.",
  },
  {
    title: "Practical",
    description:
      "The goal is to help you practice useful responses and review relevant topics rather than memorize perfect scripts.",
  },
  {
    title: "Authentic",
    description:
      "Strong interview preparation helps you communicate more clearly without pretending to have knowledge or experience you do not possess.",
  },
];

const commonInterviewChallenges = [
  {
    title: "Responses without structure",
    description:
      "The candidate has a relevant example but struggles to explain the situation, their actions, and the result in a clear sequence.",
  },
  {
    title: "Weak role alignment",
    description:
      "Answers describe past responsibilities without connecting them to the needs, risks, tools, or priorities of the target position.",
  },
  {
    title: "Overly broad technical review",
    description:
      "The candidate tries to study everything in cybersecurity instead of focusing on the concepts most relevant to the job posting.",
  },
  {
    title: "Underselling transferable skills",
    description:
      "Customer service, military life, education, leadership, operations, volunteer work, and career changes are treated as irrelevant.",
  },
  {
    title: "Memorized answers",
    description:
      "Responses sound rigid or generic because the candidate memorized exact wording instead of understanding the key points they want to communicate.",
  },
  {
    title: "No questions prepared",
    description:
      "The candidate reaches the end of the interview without thoughtful questions about the role, team, expectations, or work environment.",
  },
];

const notIncluded = [
  {
    title: "A live mock interview",
    description:
      "This service provides a personalized preparation guide and practice direction. It does not include a live video or telephone mock interview.",
  },
  {
    title: "Guaranteed interview results",
    description:
      "Preparation can improve confidence and communication, but it cannot guarantee advancement, an offer, or a specific hiring decision.",
  },
  {
    title: "Answers to restricted assessments",
    description:
      "I will not complete take-home assessments, certification exams, technical tests, or active interview questions on your behalf.",
  },
  {
    title: "Fabricated experience",
    description:
      "Preparation will never involve inventing projects, responsibilities, technical knowledge, accomplishments, or professional qualifications.",
  },
  {
    title: "Complete technical training",
    description:
      "The guide identifies relevant technical areas to review but does not replace formal coursework, certification training, or hands-on practice.",
  },
  {
    title: "Unlimited interview support",
    description:
      "The service covers one position and one interview process based on the materials submitted with the order.",
  },
];

const frequentlyAskedQuestions = [
  {
    question: "Is this a live mock interview?",
    answer:
      "No. The standard Interview Preparation service provides a personalized written guide with likely questions, talking points, technical review areas, employer research guidance, and a preparation checklist.",
  },
  {
    question: "How specific will the questions be?",
    answer:
      "Questions will be based on the job posting, responsibilities, qualifications, interview stage, and your background. They are predictions and preparation prompts, not confirmed questions from the employer.",
  },
  {
    question: "Will you write complete answers for me?",
    answer:
      "The guide may include response frameworks, talking points, and suggestions for organizing your examples. You should practice answering in your own words so your responses remain accurate and natural.",
  },
  {
    question: "Can you help with technical interviews?",
    answer:
      "Yes. I can identify likely concepts, tools, frameworks, and scenario topics based on the position. The service does not include completing live assessments or pretending you have technical knowledge you do not possess.",
  },
  {
    question: "What if I have limited professional experience?",
    answer:
      "Relevant examples may come from coursework, projects, labs, volunteer work, military experience, customer service, leadership, internships, caregiving, or other transferable situations.",
  },
  {
    question: "Can you prepare me for several positions?",
    answer:
      "Each purchase covers one position and interview process. Separate roles with significantly different duties or qualifications require separate preparation guides.",
  },
  {
    question: "How early should I purchase the service?",
    answer:
      "You should allow enough time to receive the guide, research the company, review technical topics, and practice your responses before the interview. Exact turnaround times will be listed before launch.",
  },
  {
    question: "Can you help me prepare for a federal interview?",
    answer:
      "Yes. The guide can support preparation for structured federal interviews when you provide the announcement, questionnaire context, agency information, and interview details.",
  },
];

export default function InterviewPrepPage() {
  return (
    <main className="career-page career-service-page">
      <section className="career-service-hero">
        <div className="career-container career-service-hero-grid">
          <div className="career-service-hero-content">
            <div className="career-breadcrumbs" aria-label="Breadcrumb">
              <Link href="/career">Career Intelligence</Link>
              <span aria-hidden="true">/</span>
              <span>Interview Preparation</span>
            </div>

            <p className="career-eyebrow">Career Intelligence Service</p>

            <h1>Interview Preparation</h1>

            <p className="career-service-hero-description">
              Prepare for your next interview with personalized questions,
              technical review topics, experience talking points, employer
              research guidance, and a clear plan for practicing effectively.
            </p>

            <div className="career-service-hero-actions">
              <a
                className="career-button career-button-primary"
                href="#purchase"
              >
                Purchase Interview Preparation
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
              aria-label="Interview Preparation highlights"
            >
              <li>One target position</li>
              <li>Personalized preparation guide</li>
              <li>Behavioral and technical focus</li>
            </ul>
          </div>

          <aside
            className="career-service-summary-card"
            aria-label="Interview Preparation service summary"
          >
            <div className="career-service-summary-header">
              <p>Interview Preparation</p>
              <span>Individual Service</span>
            </div>

            <p className="career-service-summary-price">
              <span>$</span>
              <strong>35</strong>
            </p>

            <p className="career-service-summary-description">
              A personalized preparation guide based on your target position,
              resume, interview stage, professional experience, and areas of
              concern.
            </p>

            <div className="career-service-summary-details">
              <div>
                <span>Service Type</span>
                <strong>Preparation Guide</strong>
              </div>

              <div>
                <span>Positions</span>
                <strong>One Target Role</strong>
              </div>

              <div>
                <span>Best For</span>
                <strong>Focused Interview Practice</strong>
              </div>

              <div>
                <span>Deliverable</span>
                <strong>Personalized Interview Guide</strong>
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
            <p className="career-section-eyebrow">Preparation With Direction</p>

            <h2>You do not need to prepare for every possible question.</h2>
          </div>

          <div className="career-service-introduction-copy">
            <p>
              Interview preparation can become overwhelming when you try to
              memorize dozens of answers, review an entire field, and predict
              every question an employer could possibly ask.
            </p>

            <p>
              A focused preparation strategy begins with the actual position.
              The job posting, employer, interview stage, and your own background
              provide clues about the experiences, technical concepts, and
              professional qualities the interview is most likely to explore.
            </p>
          </div>
        </div>
      </section>

      <section className="career-review-areas career-section" id="included">
        <div className="career-container">
          <div className="career-section-heading">
            <div>
              <p className="career-section-eyebrow">What We Prepare</p>

              <h2>Build confidence across the entire interview.</h2>
            </div>

            <p>
              Your preparation guide will focus on the areas most relevant to
              the role rather than providing a generic list of common interview
              questions.
            </p>
          </div>

          <div className="career-review-areas-grid">
            {preparationAreas.map((area) => (
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
            <p className="career-section-eyebrow">
              Your Preparation Guide Includes
            </p>

            <h2>Know what to study, practice, and communicate.</h2>

            <p>
              Your guide will help narrow your focus to the experiences,
              questions, and technical topics most relevant to the opportunity
              in front of you.
            </p>

            <Link className="career-text-link" href="/career/bundles">
              Add interview preparation to a bundle
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
                The Preparation Standard
              </p>

              <h2>Prepared does not have to mean scripted.</h2>
            </div>

            <p>
              The strongest preparation helps you understand your examples and
              key messages well enough to communicate naturally when questions
              are phrased differently than expected.
            </p>
          </div>

          <div className="career-principles-grid">
            {preparationPrinciples.map((principle, index) => (
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
              Personalized Interview Guide
            </p>

            <h2>A preparation plan built around one real opportunity.</h2>

            <p>
              The final guide will organize your preparation into clear
              categories so you can use your time effectively and avoid jumping
              between unrelated questions and technical topics.
            </p>

            <ul className="career-report-features">
              <li>Role and employer research priorities</li>
              <li>Likely behavioral questions</li>
              <li>Technical concepts to review</li>
              <li>Experience examples to prepare</li>
              <li>Questions for the interviewer</li>
              <li>Final preparation checklist</li>
            </ul>
          </div>

          <aside
            className="career-report-preview"
            aria-label="Example Interview Preparation guide structure"
          >
            <div className="career-report-preview-header">
              <p>Cyber Grad Chronicles</p>
              <span>Interview Preparation</span>
            </div>

            <div className="career-report-preview-body">
              <div className="career-report-preview-score">
                <span>Preparation Focus</span>
                <strong>Role Alignment</strong>
              </div>

              <div className="career-report-preview-section">
                <span>01</span>
                <p>Company and Role Research</p>
              </div>

              <div className="career-report-preview-section">
                <span>02</span>
                <p>Behavioral Questions</p>
              </div>

              <div className="career-report-preview-section">
                <span>03</span>
                <p>Technical Review Topics</p>
              </div>

              <div className="career-report-preview-section">
                <span>04</span>
                <p>Experience Talking Points</p>
              </div>

              <div className="career-report-preview-section">
                <span>05</span>
                <p>Final Interview Checklist</p>
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
                Common Interview Challenges
              </p>

              <h2>Preparation should solve the right problems.</h2>
            </div>

            <p>
              Many candidates know more than they are able to communicate during
              an interview. These challenges can make strong experience appear
              less relevant or less developed than it actually is.
            </p>
          </div>

          <div className="career-boundaries-grid">
            {commonInterviewChallenges.map((challenge, index) => (
              <article
                className="career-boundary-card"
                key={challenge.title}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{challenge.title}</h3>
                <p>{challenge.description}</p>
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

              <h2>Interview context makes the preparation specific.</h2>
            </div>

            <p>
              The job posting, interview stage, and your current concerns help
              determine where your preparation time should be focused.
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
              Do not submit confidential hiring assessments, active test
              questions, proprietary company information, protected personal
              data, login credentials, or materials you are not permitted to
              share.
            </p>
          </div>
        </div>
      </section>

      <section className="career-ideal-for career-section">
        <div className="career-container career-ideal-for-grid">
          <div className="career-ideal-for-content">
            <p className="career-section-eyebrow">Who This Is For</p>

            <h2>Built for candidates who want focused preparation.</h2>

            <p>
              This service is especially useful when you have an upcoming
              interview and want a clearer understanding of what to research,
              review, practice, and communicate.
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

              <h2>Prepare around the role, not generic advice.</h2>
            </div>

            <p>
              You provide the interview context. I create a structured guide
              around the employer’s needs and the strongest evidence from your
              background.
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
              <p className="career-section-eyebrow">
                Interview Prep or Career Bundle?
              </p>

              <h2>Prepare for one interview or strengthen the full application.</h2>
            </div>

            <p>
              Interview Preparation focuses on one active opportunity. A Career
              Intelligence bundle can align the materials that helped you reach
              the interview.
            </p>
          </div>

          <div className="career-comparison-grid">
            <article className="career-comparison-card career-comparison-card-current">
              <p className="career-comparison-label">This Service</p>
              <h3>Interview Preparation</h3>
              <p className="career-comparison-price">$35</p>

              <p>
                Best when you have an upcoming interview and need focused,
                role-specific preparation.
              </p>

              <ul>
                <li>One target position</li>
                <li>Behavioral question preparation</li>
                <li>Technical review topics</li>
                <li>Experience talking points</li>
                <li>Personalized preparation guide</li>
              </ul>

              <a
                className="career-button career-button-primary"
                href="#purchase"
              >
                Choose Interview Preparation
              </a>
            </article>

            <article className="career-comparison-card">
              <p className="career-comparison-label">Broader Support</p>
              <h3>Complete Career Review</h3>
              <p className="career-comparison-price">$145</p>

              <p>
                Best when you want coordinated support across your resume,
                LinkedIn, technical work, portfolio, and interview preparation.
              </p>

              <ul>
                <li>Resume Rewrite</li>
                <li>LinkedIn Review</li>
                <li>GitHub Review</li>
                <li>Portfolio Review</li>
                <li>Interview Preparation</li>
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

              <h2>What Interview Preparation does not include.</h2>
            </div>

            <p>
              Clear boundaries protect the honesty of your interview and define
              the difference between preparation, coaching, training, and
              completing hiring assessments.
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
              <h2>Interview Preparation FAQ</h2>
            </div>

            <p>
              Review the service details before submitting information about
              your upcoming interview.
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
            <p className="career-section-eyebrow">Interview Preparation</p>

            <h2>Walk into your interview with a clearer plan.</h2>

            <p>
              Submit one job posting, your resume, and your interview details for
              a personalized guide covering research, likely questions,
              technical review areas, experience examples, and final
              preparation.
            </p>

            <ul>
              <li>One target position</li>
              <li>Personalized interview guide</li>
              <li>Behavioral and technical preparation</li>
              <li>Final practice checklist</li>
            </ul>
          </div>

          <aside className="career-purchase-card">
            <div className="career-purchase-card-header">
              <div>
                <p>Interview Preparation</p>
                <span>One-time purchase</span>
              </div>

              <strong>$35</strong>
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
              Do not submit active assessments, confidential hiring materials,
              restricted interview questions, passwords, or proprietary company
              information.
            </p>
          </aside>
        </div>
      </section>

      <section className="career-final-cta">
        <div className="career-container career-final-cta-inner">
          <div>
            <p className="career-section-eyebrow">
              Prepare the Full Career Story
            </p>

            <h2>Make sure your interview supports your application materials.</h2>

            <p>
              Combine interview preparation with resume, LinkedIn, GitHub, or
              portfolio support through a Career Intelligence bundle.
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