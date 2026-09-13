import type { Metadata } from "next";
import Link from "next/link";
import MentorshipInterest from "../../components/career/MentorshipInterest";

export const metadata: Metadata = {
  title: "Mentorship Interest",
  description:
    "Share your cybersecurity learning and career goals with Cyber Grad Chronicles.",
};

export default function MentorshipPage() {
  return (
    <main className="career-page">
      <section className="career-service-hero">
        <div className="career-container">
          <Link className="career-back-link" href="/career">
            ← Career Readiness
          </Link>
          <p className="career-eyebrow">
            Mentorship · Honest Guidance · Practical Direction
          </p>
          <h1>Build your path with someone who understands the long way in.</h1>
          <p className="career-hero-description">
            Mentorship interest is for beginners, military spouses, career
            changers, and early-career professionals looking for realistic
            conversation about cybersecurity learning, visible proof, setbacks,
            and next steps.
          </p>
        </div>
      </section>
      <MentorshipInterest />
    </main>
  );
}
