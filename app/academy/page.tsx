import Footer from "../components/layout/Footer";
import LocalBanner from "../components/layout/Navbar";
import "./academy.css";

export default function AcademyPage() {
  return (
    <>
      <LocalBanner />

      <main className="academy-page">
        <div className="academy-coming-soon">
          <section className="academy-coming-soon-card">
            <p className="academy-eyebrow">
              Cyber Grad Chronicles Academy
            </p>

            <h1>The Academy Is Being Rebuilt</h1>

            <p className="academy-intro">
              A beginner-friendly cybersecurity learning space is being
              redesigned from the ground up.
            </p>

            <p>
              I&apos;m rethinking the curriculum, lesson structure, visuals,
              and learning paths so the Academy can be easier to follow,
              genuinely useful, and built around understanding instead of
              information overload.
            </p>

            <div className="academy-status">
              <span className="academy-status-dot" />

              <div className="academy-status-content">
                <p className="academy-status-label">Current Status</p>

                <p>
                  Curriculum planning, restructuring, and an unreasonable amount
                  of brainstorming.
                </p>
              </div>
            </div>

            <div className="academy-note">
              <p>
                <strong>The goal hasn&apos;t changed.</strong>
              </p>

              <p>
                The Academy will remain a place to learn cybersecurity concepts,
                protect your digital life, and build practical knowledge one
                step at a time.
              </p>
            </div>

            <p className="academy-closing">
              The library doors are temporarily closed while I rearrange the
              books.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}