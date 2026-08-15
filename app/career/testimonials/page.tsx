import Link from "next/link";

type CareerTestimonial = {
  id: string;
  name: string;
  role: string;
  service: string;
  quote: string;
  outcome: string;
  featured?: boolean;
};

const testimonials: CareerTestimonial[] = [];

const serviceOptions = [
  "Resume Review",
  "Resume Rewrite",
  "LinkedIn Review",
  "GitHub Review",
  "Portfolio Review",
  "Interview Preparation",
  "Career Intelligence Bundle",
  "Other",
];

const submissionGuidelines = [
  {
    number: "01",
    title: "Be honest",
    description:
      "Describe your genuine experience with the service, including what was useful and what changed afterward.",
  },
  {
    number: "02",
    title: "Protect your privacy",
    description:
      "Do not include private employer information, interview details, account credentials, or sensitive personal information.",
  },
  {
    number: "03",
    title: "Choose your attribution",
    description:
      "You may request to use your full name, first name, initials, professional role, or an anonymous label.",
  },
  {
    number: "04",
    title: "Expect moderation",
    description:
      "Submissions are reviewed before publishing and may be lightly edited for grammar, length, clarity, and privacy.",
  },
];

const frequentlyAskedQuestions = [
  {
    question: "Will my testimonial appear immediately?",
    answer:
      "No. Every submission is reviewed before publication. This protects clients from accidentally sharing private information and prevents spam or inappropriate content from appearing on the website.",
  },
  {
    question: "Do I have to use my full name?",
    answer:
      "No. You may choose your full name, first name, initials, professional role, or an anonymous attribution such as Cybersecurity Student or Career Changer.",
  },
  {
    question: "Will my email address be published?",
    answer:
      "No. Your email address is only used to verify the submission or contact you about clarification and permission. It will not be displayed publicly.",
  },
  {
    question: "Can my testimonial be edited?",
    answer:
      "Testimonials may be lightly edited for spelling, grammar, length, clarity, and removal of sensitive information. The meaning of your feedback will not be changed.",
  },
  {
    question: "Can I request that my testimonial be removed?",
    answer:
      "Yes. A published testimonial may be removed after the identity of the original submitter is reasonably verified.",
  },
  {
    question: "Do I need to report a job offer or interview?",
    answer:
      "No. Testimonials can focus on clarity, confidence, organization, understanding, or the quality of the review. Career Intelligence services do not guarantee interviews or employment outcomes.",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="career-page career-testimonials-page">
      <section className="career-service-hero career-testimonials-hero">
        <div className="career-container career-service-hero-grid">
          <div className="career-service-hero-content">
            <div className="career-breadcrumbs" aria-label="Breadcrumb">
              <Link href="/career">Career Intelligence</Link>
              <span aria-hidden="true">/</span>
              <span>Testimonials</span>
            </div>

            <p className="career-eyebrow">Client Experiences</p>

            <h1>Real feedback from people strengthening their careers.</h1>

            <p className="career-service-hero-description">
              Read how Career Intelligence reviews helped clients better
              understand, organize, and communicate their experience across
              resumes, professional profiles, technical projects, portfolios,
              and interviews.
            </p>

            <div className="career-service-hero-actions">
              <a
                className="career-button career-button-primary"
                href="#submit-testimonial"
              >
                Share Your Experience
              </a>

              <a
                className="career-button career-button-secondary"
                href="#client-stories"
              >
                Read Testimonials
              </a>
            </div>

            <ul
              className="career-service-hero-details"
              aria-label="Testimonial page highlights"
            >
              <li>Client-submitted feedback</li>
              <li>Reviewed before publishing</li>
              <li>Privacy-conscious attribution</li>
            </ul>
          </div>

          <aside
            className="career-service-summary-card"
            aria-label="Testimonial submission overview"
          >
            <div className="career-service-summary-header">
              <p>Share Your Experience</p>
              <span>Client Testimonial</span>
            </div>

            <p className="career-testimonial-summary-heading">
              Your feedback helps others make informed decisions.
            </p>

            <p className="career-service-summary-description">
              Tell future clients what you received, what stood out, and how the
              service helped you approach your career materials differently.
            </p>

            <div className="career-service-summary-details">
              <div>
                <span>Publication</span>
                <strong>Approval Required</strong>
              </div>

              <div>
                <span>Name Options</span>
                <strong>Public or Anonymous</strong>
              </div>

              <div>
                <span>Email Address</span>
                <strong>Never Published</strong>
              </div>

              <div>
                <span>Editing</span>
                <strong>Light Editing Only</strong>
              </div>
            </div>

            <a
              className="career-button career-button-primary career-button-full"
              href="#submit-testimonial"
            >
              Submit a Testimonial
            </a>
          </aside>
        </div>
      </section>

      <section className="career-service-introduction career-section">
        <div className="career-container career-service-introduction-grid">
          <div>
            <p className="career-section-eyebrow">Honest Client Feedback</p>
            <h2>Career progress is not limited to job offers.</h2>
          </div>

          <div className="career-service-introduction-copy">
            <p>
              Sometimes the most important result is finally understanding why a
              resume feels unfocused, how to explain a technical project, or what
              an interviewer may need to hear from your experience.
            </p>

            <p>
              Testimonials may describe improved clarity, confidence,
              organization, professional positioning, or preparedness. They are
              not presented as guarantees that every client will receive the same
              outcome.
            </p>
          </div>
        </div>
      </section>

      <section
        className="career-testimonials career-section"
        id="client-stories"
      >
        <div className="career-container">
          <div className="career-section-heading">
            <div>
              <p className="career-section-eyebrow">Client Stories</p>
              <h2>Experiences shared by Career Intelligence clients.</h2>
            </div>

            <p>
              Published testimonials are submitted voluntarily and reviewed for
              clarity, privacy, and authenticity before appearing on this page.
            </p>
          </div>

          {testimonials.length > 0 ? (
            <div className="career-testimonials-grid">
              {testimonials.map((testimonial) => (
                <article
                  className={`career-testimonial-card${
                    testimonial.featured
                      ? " career-testimonial-card-featured"
                      : ""
                  }`}
                  key={testimonial.id}
                >
                  {testimonial.featured && (
                    <span className="career-testimonial-badge">
                      Featured Experience
                    </span>
                  )}

                  <div
                    className="career-testimonial-quote-mark"
                    aria-hidden="true"
                  >
                    “
                  </div>

                  <blockquote>
                    <p>{testimonial.quote}</p>
                  </blockquote>

                  <div className="career-testimonial-outcome">
                    <span>Client Outcome</span>
                    <p>{testimonial.outcome}</p>
                  </div>

                  <footer className="career-testimonial-footer">
                    <div>
                      <strong>{testimonial.name}</strong>
                      <span>{testimonial.role}</span>
                    </div>

                    <p>{testimonial.service}</p>
                  </footer>
                </article>
              ))}
            </div>
          ) : (
            <div className="career-testimonials-empty">
              <p className="career-section-eyebrow">
                Client Stories Coming Soon
              </p>

              <h3>No testimonials have been published yet.</h3>

              <p>
                Verified client experiences will appear here after Career
                Intelligence services launch.
              </p>

              <a
                className="career-button career-button-primary"
                href="#submit-testimonial"
              >
                Share Your Experience
              </a>
            </div>
          )}

          <div className="career-testimonial-disclaimer">
            <span aria-hidden="true">i</span>

            <p>
              Testimonials reflect individual experiences and opinions. They do
              not represent guaranteed interviews, employment offers, salary
              increases, recruiter outreach, or other hiring outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="career-testimonial-guidelines career-section">
        <div className="career-container">
          <div className="career-section-heading">
            <div>
              <p className="career-section-eyebrow">Submission Guidelines</p>
              <h2>Share useful feedback without sharing private information.</h2>
            </div>

            <p>
              Submissions should describe your genuine experience while
              respecting your privacy, employers, and active job opportunities.
            </p>
          </div>

          <div className="career-principles-grid">
            {submissionGuidelines.map((guideline) => (
              <article
                className="career-principle-card"
                key={guideline.number}
              >
                <span className="career-principle-number">
                  {guideline.number}
                </span>

                <h3>{guideline.title}</h3>
                <p>{guideline.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="career-testimonial-form-section career-section"
        id="submit-testimonial"
      >
        <div className="career-container career-testimonial-form-grid">
          <div className="career-testimonial-form-content">
            <p className="career-section-eyebrow">Submit a Testimonial</p>

            <h2>Tell others about your Career Intelligence experience.</h2>

            <p>
              Focus on the service you received, what stood out, what you
              learned, and how the feedback changed the way you approached your
              career materials or interview preparation.
            </p>

            <div className="career-testimonial-form-notice">
              <span aria-hidden="true">i</span>

              <div>
                <h3>Submissions do not publish automatically.</h3>

                <p>
                  Every testimonial is reviewed before it appears publicly. You
                  may be contacted to confirm your submission or clarify your
                  publication preferences.
                </p>
              </div>
            </div>

            <ul className="career-testimonial-form-reminders">
              <li>Do not include confidential employer information.</li>
              <li>Do not name recruiters or interviewers without permission.</li>
              <li>Do not include passwords, application IDs, or private links.</li>
              <li>Your email address will not be published.</li>
            </ul>
          </div>

          <form
            className="career-testimonial-form"
            action="https://formspree.io/f/mdaqvrpb"
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Career Intelligence Testimonial"
            />

            <div className="career-form-field">
              <label htmlFor="name">Your name</label>

              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                maxLength={100}
                required
              />

              <p>
                This is used to verify your submission. You can choose a
                different public attribution below.
              </p>
            </div>

            <div className="career-form-field">
              <label htmlFor="email">Email address</label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={150}
                required
              />

              <p>Your email address will not be displayed publicly.</p>
            </div>

            <div className="career-form-field">
              <label htmlFor="service">
                Which service did you receive?
              </label>

              <select id="service" name="service" defaultValue="" required>
                <option value="" disabled>
                  Select a service
                </option>

                {serviceOptions.map((service) => (
                  <option value={service} key={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div className="career-form-field">
              <label htmlFor="professionalRole">
                How would you describe your career stage?
              </label>

              <input
                id="professionalRole"
                name="professionalRole"
                type="text"
                maxLength={100}
                placeholder="Example: Cybersecurity student or career changer"
                required
              />
            </div>

            <fieldset className="career-form-fieldset">
              <legend>How should your name appear publicly?</legend>

              <label className="career-form-choice">
                <input
                  type="radio"
                  name="attributionPreference"
                  value="full-name"
                  required
                />
                <span>Use my full name</span>
              </label>

              <label className="career-form-choice">
                <input
                  type="radio"
                  name="attributionPreference"
                  value="first-name"
                />
                <span>Use my first name only</span>
              </label>

              <label className="career-form-choice">
                <input
                  type="radio"
                  name="attributionPreference"
                  value="initials"
                />
                <span>Use my initials</span>
              </label>

              <label className="career-form-choice">
                <input
                  type="radio"
                  name="attributionPreference"
                  value="role-only"
                />
                <span>Use my professional role only</span>
              </label>

              <label className="career-form-choice">
                <input
                  type="radio"
                  name="attributionPreference"
                  value="anonymous"
                />
                <span>Publish anonymously</span>
              </label>
            </fieldset>

            <div className="career-form-field">
              <label htmlFor="publicName">
                Preferred public name or attribution
              </label>

              <input
                id="publicName"
                name="publicName"
                type="text"
                maxLength={100}
                placeholder="Example: Millie A., Cybersecurity Student, or Anonymous"
              />

              <p>
                Complete this field when you want an attribution different from
                your full submitted name.
              </p>
            </div>

            <div className="career-form-field">
              <label htmlFor="beforeService">
                What challenge were you facing before the service?
              </label>

              <textarea
                id="beforeService"
                name="beforeService"
                rows={5}
                maxLength={1000}
                required
              />
            </div>

            <div className="career-form-field">
              <label htmlFor="valuableFeedback">
                What part of the service was most valuable?
              </label>

              <textarea
                id="valuableFeedback"
                name="valuableFeedback"
                rows={5}
                maxLength={1000}
                required
              />
            </div>

            <div className="career-form-field">
              <label htmlFor="outcome">
                What changed after receiving the service?
              </label>

              <textarea
                id="outcome"
                name="outcome"
                rows={5}
                maxLength={1000}
                required
              />

              <p>
                Outcomes may include stronger clarity, confidence, organization,
                positioning, documentation, or interview preparation.
              </p>
            </div>

            <div className="career-form-field">
              <label htmlFor="testimonial">
                Write your public testimonial
              </label>

              <textarea
                id="testimonial"
                name="testimonial"
                rows={8}
                minLength={40}
                maxLength={1500}
                required
              />

              <p>
                Aim for two to five sentences describing your genuine
                experience.
              </p>
            </div>

            <div className="career-form-field">
              <label htmlFor="privateFeedback">
                Is there anything you want to share privately?
              </label>

              <textarea
                id="privateFeedback"
                name="privateFeedback"
                rows={4}
                maxLength={1000}
              />

              <p>
                Private feedback will not be included in the published
                testimonial.
              </p>
            </div>

            <fieldset className="career-form-fieldset">
              <legend>Publication permission</legend>

              <label className="career-form-choice career-form-choice-checkbox">
                <input
                  type="checkbox"
                  name="publicationPermission"
                  value="approved"
                  required
                />

                <span>
                  I give Cyber Grad Chronicles permission to publish my
                  testimonial on its website using the attribution preference
                  selected above.
                </span>
              </label>

              <label className="career-form-choice career-form-choice-checkbox">
                <input
                  type="checkbox"
                  name="editingPermission"
                  value="approved"
                  required
                />

                <span>
                  I understand that my testimonial may be lightly edited for
                  grammar, length, clarity, and privacy without changing its
                  meaning.
                </span>
              </label>

              <label className="career-form-choice career-form-choice-checkbox">
                <input
                  type="checkbox"
                  name="accuracyConfirmation"
                  value="confirmed"
                  required
                />

                <span>
                  I confirm that this testimonial reflects my genuine experience
                  and does not contain confidential or misleading information.
                </span>
              </label>
            </fieldset>

            <div className="career-form-field career-form-honeypot">
              <label htmlFor="website">
                Leave this field empty

                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </div>

            <button
              className="career-button career-button-primary career-button-full"
              type="submit"
            >
              Submit Testimonial for Review
            </button>

            <p className="career-form-submit-note">
              After submitting, you will see Formspree&apos;s confirmation page.
              Submission does not guarantee publication. Testimonials may be
              declined when they cannot be verified, contain sensitive
              information, or do not meet the publication guidelines.
            </p>
          </form>
        </div>
      </section>

      <section className="career-faq career-section">
        <div className="career-container">
          <div className="career-section-heading">
            <div>
              <p className="career-section-eyebrow">Common Questions</p>
              <h2>Testimonial FAQ</h2>
            </div>

            <p>
              Review how submissions, attribution, editing, publication, and
              removal requests are handled.
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
              View the complete Career Intelligence FAQ
              <span aria-hidden="true"> →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="career-testimonial-moderation career-section">
        <div className="career-container career-report-grid">
          <div className="career-report-content">
            <p className="career-section-eyebrow">Publication Process</p>

            <h2>Every testimonial is reviewed before going live.</h2>

            <p>
              Moderation protects clients and keeps the page trustworthy. A
              submission must have clear publication permission and should not
              expose private information or make unsupported claims.
            </p>

            <ul className="career-report-features">
              <li>Submission received through Formspree</li>
              <li>Identity or client status verified</li>
              <li>Privacy and consent reviewed</li>
              <li>Light editing completed when needed</li>
              <li>Approved attribution applied</li>
              <li>Testimonial manually added to the website</li>
            </ul>
          </div>

          <aside
            className="career-report-preview"
            aria-label="Testimonial moderation workflow"
          >
            <div className="career-report-preview-header">
              <p>Cyber Grad Chronicles</p>
              <span>Testimonial Review</span>
            </div>

            <div className="career-report-preview-body">
              <div className="career-report-preview-score">
                <span>Publication Status</span>
                <strong>Approval Required</strong>
              </div>

              <div className="career-report-preview-section">
                <span>01</span>
                <p>Submission Received</p>
              </div>

              <div className="career-report-preview-section">
                <span>02</span>
                <p>Permission Confirmed</p>
              </div>

              <div className="career-report-preview-section">
                <span>03</span>
                <p>Privacy Review</p>
              </div>

              <div className="career-report-preview-section">
                <span>04</span>
                <p>Content Approval</p>
              </div>

              <div className="career-report-preview-section">
                <span>05</span>
                <p>Manual Publication</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="career-final-cta">
        <div className="career-container career-final-cta-inner">
          <div>
            <p className="career-section-eyebrow">
              Explore Career Intelligence
            </p>

            <h2>Find the support that fits your current career goals.</h2>

            <p>
              Review individual services, compare bundles, and understand what
              each option includes before submitting your materials.
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