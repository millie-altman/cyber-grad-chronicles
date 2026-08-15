import Link from "next/link";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import "../../military-spouse-hub.css";
import "../career.css";

const interviewSections = [
  {
    id: "behavioral",
    title: "Behavioral Interview Prep",
    description:
      "Turn your experience into clear examples using structure, confidence, and role alignment.",
    resources: [
      {
        name: "STAR Method",
        summary:
          "Use Situation, Task, Action, and Result to turn your experience into clear interview answers.",
      },
      {
        name: "Career Gap Questions",
        summary:
          "Prepare short, confident answers about relocation, caregiving, education, or career transitions.",
      },
      {
        name: "Volunteer Experience",
        summary:
          "Practice explaining volunteer work as leadership, project management, communication, and problem-solving.",
      },
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Interview Prep",
    description:
      "Prepare for cyber-specific questions about alerts, incidents, threat intelligence, and scenarios.",
    resources: [
      {
        name: "SOC & Analyst Questions",
        summary:
          "Prepare for alerts, triage, logs, phishing, malware, incident response, and escalation questions.",
      },
      {
        name: "Threat Intelligence Questions",
        summary:
          "Practice explaining IOCs, TTPs, MITRE ATT&CK, threat actors, OSINT, and intelligence reporting.",
      },
      {
        name: "Scenario Questions",
        summary:
          "Walk through what you would check first, what evidence matters, and when you would escalate.",
      },
    ],
  },
  {
    id: "military-spouse",
    title: "Military Spouse Interview Strategy",
    description:
      "Answer relocation, remote-readiness, and portable career questions without over-explaining personal details.",
    resources: [
      {
        name: "Relocation Wording",
        summary:
          "Explain relocation plans professionally without sharing sensitive family or military details.",
      },
      {
        name: "Remote Readiness",
        summary:
          "Highlight communication, organization, adaptability, documentation, and independent work habits.",
      },
      {
        name: "Portable Career Framing",
        summary:
          "Show that your career path is intentional, resilient, and aligned with the role.",
      },
    ],
  },
];

const practiceQuestions = [
  "Tell me about yourself.",
  "Why are you interested in this role?",
  "Tell me about a time you solved a difficult problem.",
  "Tell me about a time you had to learn something quickly.",
  "How do you handle competing priorities?",
  "How would you explain a technical issue to a nontechnical person?",
  "What would you do if you received a suspicious email?",
  "How do you stay organized while working remotely?",
  "How do you handle career changes or relocation?",
  "Why should we hire you?",
];

const answerTips = [
  "Keep answers focused and under two minutes.",
  "Use specific examples instead of vague statements.",
  "Connect your answer back to the job description.",
  "Avoid over-explaining personal military details.",
  "Practice out loud before the interview.",
  "Prepare questions to ask the interviewer.",
];

export default function InterviewPrepPage() {
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
              <span>Interview Prep</span>
            </nav>

            <p className="msh-eyebrow">Career • Interview Prep</p>

            <h1>
              Practice with <span>confidence.</span>
            </h1>

            <h2>
              Prepare clear answers for career pivots, cyber roles, and
              military spouse questions.
            </h2>

            <p>
              Interviews are easier when you have examples ready. This page
              helps you prepare for behavioral questions, cybersecurity
              scenarios, relocation conversations, remote work questions, and
              career gap explanations without sounding over-rehearsed.
            </p>

            <div className="msh-hero-actions">
              <Link href="#interview-sections" className="msh-button">
                Start Practicing →
              </Link>

              <Link
                href="/military-spouse-hub/career/ai-tools"
                className="msh-button"
              >
                AI Practice Tools →
              </Link>
            </div>
          </div>
        </section>

        <section className="career-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Quick Jump</p>
            <h2>Choose the interview area you want to practice first.</h2>
            <p>Start with the part that feels most urgent.</p>
          </div>

          <div className="career-subpage-grid">
            {interviewSections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className="career-subpage-card"
              >
                <h3>{section.title}</h3>
                <p>{section.description}</p>
                <span>Jump to Section →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="career-subpage-section" id="interview-sections">
          {interviewSections.map((section) => (
            <div key={section.id} id={section.id} className="career-prompt-block">
              <div className="msh-section-heading">
                <p className="msh-eyebrow">{section.title}</p>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
              </div>

              <div className="career-subpage-grid">
                {section.resources.map((resource) => (
                  <div className="career-subpage-card" key={resource.name}>
                    <h3>{resource.name}</h3>
                    <p>{resource.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="career-subpage-callout">
          <div>
            <p className="msh-eyebrow">Interview Reminder</p>
            <h2>You do not need a perfect path.</h2>
            <p>
              You need clear examples, honest confidence, and a way to connect
              your experience back to the role. A strong answer explains what
              happened, what you did, what changed, and why it matters.
            </p>
          </div>

          <Link
            href="/military-spouse-hub/career/ai-tools"
            className="msh-button"
          >
            Practice With AI →
          </Link>
        </section>

        <section className="career-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Practice Questions</p>
            <h2>Questions to rehearse before interviews.</h2>
          </div>

          <div className="career-chip-grid">
            {practiceQuestions.map((question) => (
              <span key={question}>{question}</span>
            ))}
          </div>
        </section>

        <section className="career-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Answer Tips</p>
            <h2>Keep your answers clear and role-focused.</h2>
          </div>

          <div className="career-chip-grid">
            {answerTips.map((tip) => (
              <span key={tip}>{tip}</span>
            ))}
          </div>
        </section>

        <section className="career-subpage-callout">
          <div>
            <p className="msh-eyebrow">Next Step</p>
            <h2>Use AI to practice before the real interview.</h2>
            <p>
              Paste a job description into your AI tool and ask it to interview
              you for that role. Practice your answers out loud, then refine
              them until they sound natural and specific.
            </p>
          </div>

          <Link
            href="/military-spouse-hub/career/ai-tools"
            className="msh-button"
          >
            AI Career Tools →
          </Link>
        </section>

        <section className="career-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Recommended Next Step</p>
            <h2>Prepare your whole application story.</h2>
          </div>

          <div className="career-featured-grid">
            <Link
              href="/military-spouse-hub/career/resume"
              className="career-featured-card"
            >
              <h3>Resume Resources</h3>
              <p>Turn your experience into clear resume bullets.</p>
              <span>Resume Help →</span>
            </Link>

            <Link
              href="/military-spouse-hub/career/linkedin"
              className="career-featured-card"
            >
              <h3>LinkedIn Optimization</h3>
              <p>Make your online story match your interview story.</p>
              <span>Update LinkedIn →</span>
            </Link>

            <Link
              href="/military-spouse-hub/career/job-boards"
              className="career-featured-card"
            >
              <h3>Job Boards</h3>
              <p>Use job descriptions to practice targeted answers.</p>
              <span>Find Roles →</span>
            </Link>

            <div className="career-quote-card">
              <p>
                “Confidence comes from preparation, not pretending your path was
                perfect.”
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}