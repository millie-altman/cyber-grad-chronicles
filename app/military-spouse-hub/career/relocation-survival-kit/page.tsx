import Link from "next/link";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import "../../military-spouse-hub.css";
import "../career.css";

const timeline = [
  {
    time: "6 Months Out",
    tasks: [
      "Choose your target location or remote-work preference.",
      "Update your resume with your newest skills, projects, certifications, and volunteer work.",
      "Update your LinkedIn headline, About section, location preferences, and Featured section.",
      "Research employers near the gaining duty station or target city.",
      "Start networking with people in the new area before you move.",
      "Create a job application tracker.",
    ],
  },
  {
    time: "3 Months Out",
    tasks: [
      "Begin applying for remote, hybrid, and relocation-friendly roles.",
      "Set job alerts for your target location and target roles.",
      "Prepare a short relocation explanation for interviews.",
      "Reach out to recruiters, alumni, military spouse groups, and local tech communities.",
      "Review childcare, transportation, workspace, and schedule needs.",
      "Save job descriptions so you can tailor your resume quickly.",
    ],
  },
  {
    time: "1 Month Out",
    tasks: [
      "Confirm your resume and LinkedIn both tell the same career story.",
      "Follow up on applications and networking messages.",
      "Schedule interviews around moving dates when possible.",
      "Prepare a simple remote-work setup plan.",
      "Download copies of resumes, certifications, transcripts, and portfolio links.",
      "Give yourself buffer time. Moving is exhausting.",
    ],
  },
  {
    time: "Move Week",
    tasks: [
      "Pause non-urgent applications if needed.",
      "Keep a copy of important career documents accessible.",
      "Protect your devices, chargers, IDs, and work equipment during travel.",
      "Avoid scheduling major interviews on heavy travel or delivery days.",
      "Use short check-ins instead of trying to do everything.",
      "Focus on stabilization, not perfection.",
    ],
  },
  {
    time: "First 30 Days After Arrival",
    tasks: [
      "Update your LinkedIn location if it supports your job search.",
      "Refresh job alerts for the new area.",
      "Join local tech, cybersecurity, spouse, or professional groups.",
      "Reconnect with people you messaged before the move.",
      "Rebuild your routine slowly.",
      "Apply consistently once your household has stabilized.",
    ],
  },
];

const relocationResources = [
  {
    name: "Military OneSource Relocation",
    summary:
      "Official relocation support, planning tools, and military family resources.",
    url: "https://www.militaryonesource.mil/moving-pcs/",
  },
  {
    name: "Plan My Move",
    summary:
      "Military OneSource tool for creating a customized PCS moving checklist.",
    url: "https://planmymove.militaryonesource.mil/",
  },
  {
    name: "SpouseWorks",
    summary:
      "Career coaching, education support, and employment resources for military spouses.",
    url: "https://spouseworks.militaryonesource.mil/portal/",
  },
  {
    name: "MSEP Job Search",
    summary: "Military spouse-friendly employers and job opportunities.",
    url: "https://spouseworks.militaryonesource.mil/portal/msep/jobs",
  },
  {
    name: "Hiring Our Heroes",
    summary:
      "Military spouse fellowships, hiring events, networking, and career resources.",
    url: "https://www.hiringourheroes.org/",
  },
  {
    name: "USAJOBS Military Spouse Path",
    summary: "Federal hiring information for eligible military spouses.",
    url: "https://www.usajobs.gov/help/working-in-government/unique-hiring-paths/military-spouses/",
  },
];

const linkedInLocationTips = [
  "Use your target city if you are actively relocating and comfortable doing so.",
  "Use Remote if you are focused on remote-first roles.",
  "Mention relocation timing only if it helps your search.",
  "Avoid oversharing unit, base, deployment, or family details.",
  "Connect with professionals in your gaining location before arriving.",
  "Follow companies and recruiters in your target city.",
];

const survivalTips = [
  "Keep a career folder in cloud storage.",
  "Save copies of certifications and transcripts.",
  "Keep a master resume and targeted versions.",
  "Use a job tracker during the move.",
  "Give yourself grace during move week.",
  "Restart with small daily tasks after arrival.",
];

export default function RelocationSurvivalKitPage() {
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
              <span>Relocation Survival Kit</span>
            </nav>

            <p className="msh-eyebrow">Career • Relocation Survival Kit</p>

            <h1>
              Keep your career <span>moving too.</span>
            </h1>

            <h2>Career continuity for PCS season and relocation.</h2>

            <p>
              PCS season, relocation, housing changes, job searching, and family
              responsibilities can make career momentum feel impossible. This
              timeline gives you a practical way to prepare, pause, restart, and
              protect your progress without doing everything at once.
            </p>

            <div className="msh-hero-actions">
              <Link href="#pcs-timeline" className="msh-button">
                View Timeline →
              </Link>

              <Link
                href="/military-spouse-hub/career/ai-tools"
                className="msh-button"
              >
                AI Career Tools →
              </Link>
            </div>
          </div>
        </section>

        <section className="career-subpage-section" id="pcs-timeline">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">PCS Career Timeline</p>
            <h2>Before, during, and after a move.</h2>
            <p>
              Use this as a flexible guide, not another impossible checklist.
            </p>
          </div>

          <div className="career-timeline">
            {timeline.map((phase, index) => (
              <article className="career-timeline-item" key={phase.time}>
                <div className="career-timeline-marker">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="career-timeline-card">
                  <h3>{phase.time}</h3>

                  <ul>
                    {phase.tasks.map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="career-subpage-callout">
          <div>
            <p className="msh-eyebrow">Reminder</p>
            <h2>Moving is a major life event.</h2>
            <p>
              You are not behind if productivity drops during PCS season or
              relocation. The goal is continuity, not perfection. Protect the
              basics, pause when needed, and restart with small steps after
              arrival.
            </p>
          </div>

          <Link
            href="/military-spouse-hub/where-to-start"
            className="msh-button"
          >
            Where to Start →
          </Link>
        </section>

        <section className="career-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Relocation Resources</p>
            <h2>Tools for moving and career planning.</h2>
          </div>

          <div className="career-subpage-grid">
            {relocationResources.map((resource) => (
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="career-subpage-card"
                key={resource.name}
              >
                <h3>{resource.name}</h3>
                <p>{resource.summary}</p>
                <span>Visit Resource →</span>
              </a>
            ))}
          </div>
        </section>

        <section className="career-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">LinkedIn Location Strategy</p>
            <h2>Make your location work for your search.</h2>
          </div>

          <div className="career-chip-grid">
            {linkedInLocationTips.map((tip) => (
              <span key={tip}>{tip}</span>
            ))}
          </div>
        </section>

        <section className="career-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Career Survival Tips</p>
            <h2>Small systems that reduce stress.</h2>
          </div>

          <div className="career-chip-grid">
            {survivalTips.map((tip) => (
              <span key={tip}>{tip}</span>
            ))}
          </div>
        </section>

        <section className="career-subpage-callout">
          <div>
            <p className="msh-eyebrow">Next Step</p>
            <h2>Prepare before the chaos starts.</h2>
            <p>
              Organize your resume, LinkedIn, documents, and job search tracker
              early so it is easier to restart after the move. Your future self
              will thank you.
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
            <h2>Protect your career momentum.</h2>
          </div>

          <div className="career-featured-grid">
            <Link
              href="/military-spouse-hub/career/resume"
              className="career-featured-card"
            >
              <h3>Resume Resources</h3>
              <p>Keep your resume ready before the move gets chaotic.</p>
              <span>Resume Help →</span>
            </Link>

            <Link
              href="/military-spouse-hub/career/linkedin"
              className="career-featured-card"
            >
              <h3>LinkedIn Optimization</h3>
              <p>Update your profile for remote or target-location roles.</p>
              <span>LinkedIn Help →</span>
            </Link>

            <Link
              href="/military-spouse-hub/career/remote-red-flags"
              className="career-featured-card"
            >
              <h3>Remote Red Flags</h3>
              <p>Stay safe while searching during transition periods.</p>
              <span>Protect Yourself →</span>
            </Link>

            <div className="career-quote-card">
              <p>
                “The move may interrupt your routine, but it does not erase your
                progress.”
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}