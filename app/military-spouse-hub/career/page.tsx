import Link from "next/link";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import "../military-spouse-hub.css";
import "./career.css";

const careerTopics = [
  {
    title: "AI Tools",
    summary:
      "Use AI prompts for resumes, STAR stories, interview prep, and career pivots.",
    href: "/military-spouse-hub/career/ai-tools",
    icon: "✺",
  },
  {
    title: "Career Breaks",
    summary:
      "Learn how to explain gaps caused by PCS, caregiving, education, or life transitions.",
    href: "/military-spouse-hub/career/career-breaks",
    icon: "◷",
  },
  {
    title: "Federal Jobs",
    summary:
      "Understand USAJOBS, spouse preference, GS levels, and federal hiring pathways.",
    href: "/military-spouse-hub/career/federal-jobs",
    icon: "♜",
  },
  {
    title: "Interview Prep",
    summary:
      "Prepare for behavioral, technical, and relocation questions with confidence.",
    href: "/military-spouse-hub/career/interview-prep",
    icon: "☏",
  },
  {
    title: "Job Boards",
    summary:
      "Curated boards for military spouses, remote work, fellowships, and cybersecurity.",
    href: "/military-spouse-hub/career/job-boards",
    icon: "⌕",
  },
  {
    title: "LinkedIn",
    summary:
      "Build your digital brand and become discoverable to recruiters and hiring teams.",
    href: "/military-spouse-hub/career/linkedin",
    icon: "in",
  },
  {
    title: "Relocation Kit",
    summary:
      "Protect your momentum during PCS with planning tools, timelines, and resets.",
    href: "/military-spouse-hub/career/relocation-survival-kit",
    icon: "⌖",
  },
  {
    title: "Remote Red Flags",
    summary:
      "Learn how to spot fake jobs, recruiter scams, and suspicious hiring practices.",
    href: "/military-spouse-hub/career/remote-red-flags",
    icon: "⚑",
  },
  {
    title: "Resume",
    summary:
      "Build portable resumes that communicate your value clearly in any market.",
    href: "/military-spouse-hub/career/resume",
    icon: "☷",
  },
];

const featuredResources = [
  {
    title: "Military Spouse Career Toolkit",
    summary:
      "A step-by-step resource guide for building a flexible, portable career.",
    href: "/military-spouse-hub/where-to-start",
    label: "Start Here →",
  },
  {
    title: "PCS Career Planning Workbook",
    summary:
      "Map your next move before relocation disrupts your goals.",
    href: "/military-spouse-hub/career/relocation-survival-kit",
    label: "View Workbook →",
  },
  {
    title: "Remote Job Safety Checklist",
    summary:
      "Protect yourself from scams before accepting remote opportunities.",
    href: "/military-spouse-hub/career/remote-red-flags",
    label: "Review Checklist →",
  },
];

export default function CareerPage() {
  return (
    <>
      <Navbar />

      <main className="msh-page career-mockup-page">
        {/* HERO */}
        <section className="career-mockup-hero">
          <div className="career-hero-copy">
            <nav className="msh-breadcrumbs">
              <Link href="/military-spouse-hub">Military Spouse Hub</Link>
              <span>›</span>
              <span>Career</span>
            </nav>

            <p className="msh-eyebrow">Career Resources</p>

            <h1>Career</h1>

            <h2>Build a career that moves with you.</h2>

            <p>
              Military spouse careers are rarely linear. Whether you’re
              rebuilding after relocation, returning after caregiving, or
              starting over in a new field, this hub helps you create a
              portable, resilient career system.
            </p>

            <div className="msh-hero-actions">
              <Link href="#career-topics" className="msh-button">
                Explore Resources →
              </Link>

              <Link
                href="/military-spouse-hub/where-to-start"
                className="msh-button"
              >
                Start Here →
              </Link>
            </div>

            <div className="career-hero-stats">
              <div>
                <strong>Portable Skills</strong>
                <span>Build value anywhere</span>
              </div>

              <div>
                <strong>Flexible Options</strong>
                <span>Adapt to changing seasons</span>
              </div>

              <div>
                <strong>Career Systems</strong>
                <span>Create stability through structure</span>
              </div>
            </div>
          </div>

          <div className="career-hero-image">
            <img
              src="/images/military-spouse-hub/hero.png"
              alt="Military spouse workspace"
            />
          </div>
        </section>

        {/* TOPICS */}
        <section className="career-topic-section" id="career-topics">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Career Topics</p>
            <h2>Your Toolkit</h2>
            <p>
              Choose the area you need most right now and build forward from
              there.
            </p>
          </div>

          <div className="career-topic-grid">
            {careerTopics.map((topic) => (
              <Link
                href={topic.href}
                className="career-topic-card"
                key={topic.title}
              >
                <div className="career-topic-icon">{topic.icon}</div>

                <h3>{topic.title}</h3>

                <p>{topic.summary}</p>

                <span>Open Resource →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* FEATURED */}
        <section className="career-featured-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Featured Resources</p>
            <h2>Start with structure.</h2>
          </div>

          <div className="career-featured-grid">
            {featuredResources.map((resource) => (
              <Link
                href={resource.href}
                className="career-featured-card"
                key={resource.title}
              >
                <h3>{resource.title}</h3>
                <p>{resource.summary}</p>
                <span>{resource.label}</span>
              </Link>
            ))}

            <div className="career-quote-card">
              <p>
                “A nontraditional path is still a valid path. Progress is not
                always linear.”
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}