import Link from "next/link";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import "../../military-spouse-hub.css";
import "../career.css";

const careerBreakReasons = [
  "Relocation / PCS moves",
  "Caregiving for children, family, or medical needs",
  "Education or degree completion",
  "Certifications and professional development",
  "Burnout recovery or mental health reset",
  "Career pivots into a new field",
];

const productiveBreakIdeas = [
  "Earn certifications aligned with your target role",
  "Build projects, labs, and portfolio work",
  "Volunteer in your target field",
  "Take short online courses or workshops",
  "Improve LinkedIn and resume materials",
  "Network with mentors and industry professionals",
  "Document your learning journey publicly",
  "Research job descriptions and skill gaps",
];

const reframingExamples = [
  {
    title: "Education Break",
    text: "Completed a degree, certifications, or technical training while preparing for a career transition.",
  },
  {
    title: "Relocation Break",
    text: "Managed a military relocation while maintaining professional development and preparing for reentry.",
  },
  {
    title: "Caregiving Break",
    text: "Provided family care while continuing skill development, organization, and long-term career planning.",
  },
  {
    title: "Career Pivot Break",
    text: "Used intentional time to reskill into a new field through education, labs, certifications, and projects.",
  },
];

export default function CareerBreaksPage() {
  return (
    <>
      <Navbar />

      <main className="msh-page career-subpage">
        <section className="career-subpage-hero">
          <div className="career-subpage-hero-card">
            <nav className="msh-breadcrumbs">
              <Link href="/military-spouse-hub">Military Spouse Hub</Link>
              <span>›</span>
              <Link href="/military-spouse-hub/career">Career</Link>
              <span>›</span>
              <span>Career Breaks</span>
            </nav>

            <p className="msh-eyebrow">Career • Career Breaks</p>

            <h1>
              Career breaks are <span>not career endings.</span>
            </h1>

            <h2>They are seasons that can still hold strategy, growth, and proof.</h2>

            <p>
              Military spouse careers often include relocation, caregiving,
              education, certification study, rebuilding, and pivots. A career
              break does not erase your skills. What matters is how you explain
              the season, what you continued building, and how you connect it to
              where you are going next.
            </p>

            <div className="msh-hero-actions">
              <Link
                href="/military-spouse-hub/career/linkedin"
                className="msh-button"
              >
                LinkedIn Tips →
              </Link>

              <Link
                href="/military-spouse-hub/career/resume"
                className="msh-button"
              >
                Resume Help →
              </Link>
            </div>
          </div>
        </section>

        <section className="career-subpage-callout">
          <div>
            <p className="msh-eyebrow">Perspective Shift</p>
            <h2>A pause can still be productive.</h2>
            <p>
              Sometimes the break is where the rebuilding happens. Learning,
              healing, relocating, upskilling, earning certifications, building
              projects, volunteering, or preparing for a career pivot are all
              forms of forward movement.
            </p>
          </div>

          <Link
            href="/military-spouse-hub/career/ai-tools"
            className="msh-button"
          >
            Reframe with AI →
          </Link>
        </section>

        <section className="career-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Common Reasons</p>
            <h2>Career breaks happen for real-life reasons.</h2>
            <p>
              You do not need to apologize for having a life that required
              adaptation.
            </p>
          </div>

          <div className="career-chip-grid">
            {careerBreakReasons.map((reason) => (
              <span key={reason}>{reason}</span>
            ))}
          </div>
        </section>

        <section className="career-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Intentional Growth</p>
            <h2>Ways to use a career break strategically.</h2>
          </div>

          <div className="career-subpage-grid career-break-grid">
            {productiveBreakIdeas.map((idea) => (
              <div className="career-subpage-card" key={idea}>
                <h3>{idea}</h3>
                <p>
                  Use this as proof of continued growth, commitment, and
                  readiness when updating your resume, LinkedIn, or interview
                  stories.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="career-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Professional Framing</p>
            <h2>How to explain the season.</h2>
            <p>
              Keep it brief, confident, and focused on what you built or learned.
            </p>
          </div>

          <div className="career-subpage-grid">
            {reframingExamples.map((item) => (
              <div className="career-subpage-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span>Use this framing →</span>
              </div>
            ))}
          </div>
        </section>

        <section className="career-subpage-callout">
          <div>
            <p className="msh-eyebrow">Reminder</p>
            <h2>Your timeline does not have to look like everyone else’s.</h2>
            <p>
              Career paths are rarely straight, especially for military spouses.
              Your value is not measured by whether your resume looks perfectly
              linear. It is measured by your skills, adaptability, growth, and
              readiness for the next step.
            </p>
          </div>

          <Link
            href="/military-spouse-hub/career/interview-prep"
            className="msh-button"
          >
            Interview Prep →
          </Link>
        </section>

        <section className="career-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Recommended Next Step</p>
            <h2>Turn your break into a strategy.</h2>
          </div>

          <div className="career-featured-grid">
            <Link
              href="/military-spouse-hub/career/resume"
              className="career-featured-card"
            >
              <h3>Resume Resources</h3>
              <p>Learn how to position your experience clearly.</p>
              <span>Open Resume Help →</span>
            </Link>

            <Link
              href="/military-spouse-hub/career/linkedin"
              className="career-featured-card"
            >
              <h3>LinkedIn Optimization</h3>
              <p>Use LinkedIn’s Career Break feature strategically.</p>
              <span>Update LinkedIn →</span>
            </Link>

            <Link
              href="/military-spouse-hub/career/ai-tools"
              className="career-featured-card"
            >
              <h3>AI Career Tools</h3>
              <p>Use AI prompts to translate your break into professional language.</p>
              <span>Use Prompts →</span>
            </Link>

            <div className="career-quote-card">
              <p>
                “A career break is not wasted time when you can explain what it
                taught you, built in you, or prepared you for.”
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}