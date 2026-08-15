import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Link from "next/link";
import "../military-spouse-hub.css";
import "./where-to-start.css";

const startingPoints = [
  {
    title: "I Need Community",
    description:
      "Find Discord groups, Slack channels, women in cybersecurity communities, and military-connected networking spaces.",
    href: "/military-spouse-hub/community",
    icon: "♙",
  },
  {
    title: "I Need Education",
    description:
      "Find MyCAA, scholarships, learning platforms, certifications, and beginner-friendly cyber resources.",
    href: "/military-spouse-hub/education",
    icon: "⌂",
  },
  {
    title: "I Need a Job",
    description:
      "Find spouse-friendly job boards, fellowships, federal roles, remote jobs, and cyber career paths.",
    href: "/military-spouse-hub/career/job-boards",
    icon: "✦",
  },
  {
    title: "I’m Relocating Soon",
    description:
      "Use the relocation survival kit to keep your career moving through PCS and transitions.",
    href: "/military-spouse-hub/career/relocation-survival-kit",
    icon: "⌖",
  },
  {
    title: "I’m Worried About Scams",
    description:
      "Learn how to spot fake remote jobs, fake recruiters, and equipment scams.",
    href: "/military-spouse-hub/career/remote-red-flags",
    icon: "⚠",
  },
  {
    title: "I Don’t Know My Path Yet",
    description:
      "Use AI prompts, career pivots, and self-discovery tools to explore options.",
    href: "/military-spouse-hub/career/ai-tools",
    icon: "◇",
  },
];

const timelineSteps = [
  {
    number: "01",
    title: "Name the need",
    text: "Start with what feels most urgent: support, education, work, relocation, safety, or direction.",
  },
  {
    number: "02",
    title: "Choose one path",
    text: "Pick one section and ignore the rest for now. Clarity comes from movement, not overplanning.",
  },
  {
    number: "03",
    title: "Take one action",
    text: "Update one resume section, join one group, save one job, research one scholarship, or schedule one study session.",
  },
  {
    number: "04",
    title: "Build momentum",
    text: "Small steps compound. Return here whenever life shifts and choose the next useful step.",
  },
];

const quickWins = [
  "Update your resume.",
  "Join one community.",
  "Pick one skill to build.",
  "Save 3 target jobs.",
  "Research one scholarship.",
  "Schedule one study session.",
];

export default function WhereToStartPage() {
  return (
    <>
      <Navbar />

      <main className="msh-page where-start-page">
        <section className="where-start-hero">
          <div>
            <nav className="msh-breadcrumbs">
              <Link href="/military-spouse-hub">Military Spouse Hub</Link>
              <span>›</span>
              <span>Where to Start</span>
            </nav>

            <p className="msh-eyebrow">Pathfinding</p>

            <h1>
              Where to
              <br />
              <span>Start</span>
            </h1>

            <h2>Your next step starts with your current need.</h2>

            <p>
              You do not need a five-year plan right now. You only need your
              next useful step. Choose what feels most urgent today and build
              forward from there.
            </p>

            <div className="msh-hero-actions">
              <Link href="#starting-points" className="msh-button">
                Find My Starting Point →
              </Link>

              <Link href="/military-spouse-hub" className="msh-button">
                Back to Hub →
              </Link>
            </div>
          </div>
        </section>

        <section className="where-path-section" id="starting-points">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Choose Your Path</p>
            <h2>Start where you are.</h2>
            <p>The best next step is the one that solves today’s problem.</p>
          </div>

          <div className="where-path-grid">
            {startingPoints.map((point) => (
              <Link href={point.href} className="where-path-card" key={point.title}>
                <div className="where-path-icon">{point.icon}</div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
                <span>Start Here →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="where-timeline-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Pathfinding Timeline</p>
            <h2>Make it simple.</h2>
          </div>

          <div className="where-timeline">
            {timelineSteps.map((step) => (
              <article className="where-timeline-item" key={step.number}>
                <div className="where-timeline-marker">{step.number}</div>

                <div className="where-timeline-card">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="where-quick-win-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Quick Wins</p>
            <h2>Need momentum fast?</h2>
          </div>

          <div className="where-quick-win-grid">
            {quickWins.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="where-final-card">
          <div className="where-final-inner">
            <div>
              <p className="msh-eyebrow">Start Small</p>
              <h2>Progress compounds.</h2>
              <p>
                One certification. One resume update. One connection. One
                application. One study session. That is how momentum builds.
              </p>
            </div>

            <Link href="/military-spouse-hub/community" className="msh-button">
              Find Community →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}