import Link from "next/link";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import "../../military-spouse-hub.css";
import "../career.css";

const jobSections = [
  {
    id: "military-programs",
    title: "Military Spouse & Fellowship Programs",
    description:
      "Programs designed for military spouses, transition support, fellowships, and military-connected hiring pathways.",
    resources: [
      {
        name: "MSEP Job Board",
        summary: "Military spouse-friendly employers and career opportunities.",
        url: "https://spouseworks.militaryonesource.mil/portal/msep/jobs",
      },
      {
        name: "Hiring Our Heroes Fellowships",
        summary:
          "Fellowships and hiring pathways for the military community.",
        url: "https://www.hiringourheroes.org/career-services/fellowships/",
      },
      {
        name: "DoD SkillBridge",
        summary:
          "Transition training and internship opportunities for eligible service members.",
        url: "https://www.skillbridge.mil/",
      },
      {
        name: "Hiring Our Heroes SkillBridge",
        summary:
          "SkillBridge provider and fellowship pathways through Hiring Our Heroes.",
        url: "https://www.hiringourheroes.org/resources/skillbridge-program-providers/",
      },
    ],
  },
  {
    id: "remote-tech",
    title: "Remote, Tech & Cyber Job Boards",
    description:
      "Remote-first, tech-focused, and cybersecurity-specific job boards for portable career searches.",
    resources: [
      {
        name: "Dice",
        summary:
          "Tech and cybersecurity job board for IT, cloud, software, and security roles.",
        url: "https://www.dice.com/",
      },
      {
        name: "FlexJobs",
        summary: "Remote, flexible, hybrid, and part-time job listings.",
        url: "https://www.flexjobs.com/",
      },
      {
        name: "CyberSN",
        summary: "Cybersecurity-focused job board and career platform.",
        url: "https://cybersn.com/",
      },
      {
        name: "ClearanceJobs",
        summary:
          "Cleared roles for candidates with active or eligible security clearances.",
        url: "https://www.clearancejobs.com/",
      },
      {
        name: "We Work Remotely",
        summary:
          "Remote job board for tech, support, marketing, operations, and business roles.",
        url: "https://weworkremotely.com/",
      },
      {
        name: "Remote.co",
        summary: "Remote work listings and work-from-home resources.",
        url: "https://remote.co/remote-jobs/",
      },
    ],
  },
];

const jobBoardTips = [
  "Use multiple job boards instead of relying on one.",
  "Set alerts for target roles and locations.",
  "Save strong job descriptions for keyword tracking.",
  "Track applications, dates, and recruiter names.",
  "Tailor your resume before applying.",
  "Watch for scams before sharing sensitive information.",
];

export default function JobBoardsPage() {
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
              <span>Job Boards</span>
            </nav>

            <p className="msh-eyebrow">Career • Job Boards</p>

            <h1>
              Search with <span>strategy.</span>
            </h1>

            <h2>Job boards, fellowships, and portable career pathways.</h2>

            <p>
              Job boards are most useful when you treat them like a research
              tool, not just an application machine. Use them to find roles,
              identify keywords, study employer language, track patterns, and
              build a smarter application system.
            </p>

            <div className="msh-hero-actions">
              <Link href="#job-resources" className="msh-button">
                Explore Job Boards →
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

        <section className="career-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Quick Jump</p>
            <h2>Choose the job search path that fits your current goals.</h2>
            <p>
              Start with the programs, boards, and pathways that match your
              situation.
            </p>
          </div>

          <div className="career-subpage-grid">
            {jobSections.map((section) => (
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

        <section className="career-subpage-section" id="job-resources">
          {jobSections.map((section) => (
            <div key={section.id} id={section.id} className="career-prompt-block">
              <div className="msh-section-heading">
                <p className="msh-eyebrow">{section.title}</p>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
              </div>

              <div className="career-subpage-grid">
                {section.resources.map((resource) => (
                  <a
                    key={resource.name}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="career-subpage-card"
                  >
                    <h3>{resource.name}</h3>
                    <p>{resource.summary}</p>
                    <span>Visit Resource →</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="career-subpage-callout">
          <div>
            <p className="msh-eyebrow">Application Strategy</p>
            <h2>Tailor before you apply.</h2>
            <p>
              Before applying, match your resume language to the job
              description, update your LinkedIn to support the same target role,
              and save keywords from strong postings so you can reuse what
              works.
            </p>
          </div>

          <Link
            href="/military-spouse-hub/career/resume"
            className="msh-button"
          >
            Resume Help →
          </Link>
        </section>

        <section className="career-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Job Board Tips</p>
            <h2>Build a smarter application system.</h2>
          </div>

          <div className="career-chip-grid">
            {jobBoardTips.map((tip) => (
              <span key={tip}>{tip}</span>
            ))}
          </div>
        </section>

        <section className="career-subpage-callout">
          <div>
            <p className="msh-eyebrow">Next Step</p>
            <h2>Turn opportunities into interviews.</h2>
            <p>
              Job boards create options. Your resume, LinkedIn, networking, and
              interview prep convert those options into conversations and
              offers.
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
            <h2>Strengthen your application system.</h2>
          </div>

          <div className="career-featured-grid">
            <Link
              href="/military-spouse-hub/career/resume"
              className="career-featured-card"
            >
              <h3>Resume Resources</h3>
              <p>Match your experience to your target role clearly.</p>
              <span>Resume Help →</span>
            </Link>

            <Link
              href="/military-spouse-hub/career/linkedin"
              className="career-featured-card"
            >
              <h3>LinkedIn Optimization</h3>
              <p>Align your profile with your applications.</p>
              <span>LinkedIn Help →</span>
            </Link>

            <Link
              href="/military-spouse-hub/career/remote-red-flags"
              className="career-featured-card"
            >
              <h3>Remote Red Flags</h3>
              <p>Learn how to avoid scams during your search.</p>
              <span>Protect Yourself →</span>
            </Link>

            <div className="career-quote-card">
              <p>
                “The goal is not to apply everywhere. The goal is to apply with
                evidence, alignment, and strategy.”
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}