import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Share your experience with Cyber Grad Chronicles Career Intelligence.",
};

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

const faqs = [
  ["Will my testimonial appear immediately?", "No. Every submission is reviewed before publication."],
  ["Do I have to use my full name?", "No. You can use your first name, initials, professional role, or remain anonymous."],
  ["Will my email address be published?", "No. Your email is only used to verify the submission or contact you about it."],
  ["Can I ask for my testimonial to be removed?", "Yes. Contact Cyber Grad Chronicles so the original submission can be verified."],
];

export default function TestimonialsPage() {
  return (
    <main className="career-page testimonials-page">
      <section className="testimonials-hero">
        <div className="career-container testimonials-hero-inner">
          <Link className="testimonials-back-link" href="/career">
            ← Career Intelligence
          </Link>
          <p className="career-section-eyebrow">Client experiences</p>
          <h1>What helped you move forward?</h1>
          <p className="testimonials-lede">
            Share a short, honest reflection about your Career Intelligence
            experience. Your feedback may help someone decide what kind of
            support would be useful for them.
          </p>
          <a className="career-button career-button-primary" href="#share">
            Share your experience <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="testimonials-stories" id="stories">
        <div className="career-container testimonials-narrow">
          <p className="career-section-eyebrow">Published stories</p>
          <h2>Stories will appear here as they are approved.</h2>
          <p>
            Testimonials are shared voluntarily and reviewed for privacy,
            clarity, and authenticity. Individual experiences are not promises
            of a specific career outcome.
          </p>
        </div>
      </section>

      <section className="testimonials-share" id="share">
        <div className="career-container testimonials-form-layout">
          <div className="testimonials-form-intro">
            <p className="career-section-eyebrow">Share your experience</p>
            <h2>A few thoughtful sentences are enough.</h2>
            <p>
              Tell us what you received, what stood out, or what changed for
              you. Please do not include confidential employer information,
              passwords, application IDs, or private links.
            </p>
          </div>

          <form
            className="testimonials-form"
            action="https://formspree.io/f/mdaqvrpb"
            method="POST"
          >
            <input type="hidden" name="_subject" value="New Career Intelligence Testimonial" />

            <div className="testimonials-form-row">
              <label>
                Your name *
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                Email address *
                <input name="email" type="email" autoComplete="email" required />
              </label>
            </div>

            <div className="testimonials-form-row">
              <label>
                Service received *
                <select name="service" defaultValue="" required>
                  <option value="" disabled>Select a service</option>
                  {serviceOptions.map((service) => <option value={service} key={service}>{service}</option>)}
                </select>
              </label>
              <label>
                Career stage
                <input name="career_stage" type="text" placeholder="Student, career changer, early career" />
              </label>
            </div>

            <fieldset>
              <legend>How should your name appear?</legend>
              <div className="testimonials-choice-grid">
                {[["full-name", "Full name"], ["first-name", "First name"], ["initials", "Initials"], ["role-only", "Professional role"], ["anonymous", "Anonymous"]].map(([value, label], index) => (
                  <label key={value}>
                    <input type="radio" name="attribution" value={value} required={index === 0} />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label>
              Your experience *
              <textarea name="testimonial" rows={7} minLength={30} maxLength={1500} placeholder="What was useful, what stood out, or what changed for you?" required />
              <small>Aim for two to five honest sentences.</small>
            </label>

            <label>
              Anything you would like to share privately?
              <textarea name="private_feedback" rows={4} maxLength={1000} placeholder="Optional. This will not be published." />
            </label>

            <label className="testimonials-checkbox">
              <input name="publication_permission" type="checkbox" value="approved" required />
              <span>I give Cyber Grad Chronicles permission to publish this testimonial using the attribution selected above. *</span>
            </label>

            <label className="testimonials-checkbox">
              <input name="editing_permission" type="checkbox" value="approved" required />
              <span>I understand that light edits may be made for clarity, length, grammar, or privacy. *</span>
            </label>

            <div className="testimonials-honeypot" aria-hidden="true">
              <label>Leave this field empty<input name="website" type="text" tabIndex={-1} /></label>
            </div>

            <button className="career-button career-button-primary" type="submit">
              Submit for review <span aria-hidden="true">→</span>
            </button>
            <p className="testimonials-form-note">
              Submissions do not publish automatically. Your email will not be displayed publicly.
            </p>
          </form>
        </div>
      </section>

      <section className="testimonials-faq">
        <div className="career-container testimonials-faq-inner">
          <div>
            <p className="career-section-eyebrow">Quick answers</p>
            <h2>Before you submit</h2>
          </div>
          <div className="testimonials-faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary><span>{question}</span><span aria-hidden="true">+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="career-final-cta testimonials-cta">
        <div className="career-container testimonials-cta-inner">
          <div>
            <p className="career-section-eyebrow">Keep building</p>
            <h2>Explore the resources behind Career Intelligence.</h2>
          </div>
          <Link className="career-button career-button-secondary" href="/career">
            Back to Career Intelligence
          </Link>
        </div>
      </section>
    </main>
  );
}
