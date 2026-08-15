import Link from "next/link";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import "../../military-spouse-hub.css";
import "../career.css";

const linkedinSections = [
  {
    id: "profile",
    title: "Profile Optimization",
    description:
      "Make your profile easy to understand, searchable, and clearly connected to your target role.",
    resources: [
      {
        name: "Headline",
        summary:
          "Use your target role, key skills, certifications, and military spouse career focus.",
        url: "https://www.linkedin.com/",
      },
      {
        name: "About Section",
        summary:
          "Tell your story clearly: who you are, what you do, what you are building, and where you are going.",
        url: "https://www.linkedin.com/",
      },
      {
        name: "Featured Section",
        summary:
          "Pin your portfolio, GitHub, projects, certifications, research, or best work.",
        url: "https://www.linkedin.com/help/linkedin/answer/a507663",
      },
      {
        name: "Skills & Keywords",
        summary:
          "Add keywords from job descriptions so recruiters can understand and find your profile.",
        url: "https://www.linkedin.com/",
      },
    ],
  },
  {
    id: "spouse-strategy",
    title: "Military Spouse Strategy",
    description:
      "Use LinkedIn to explain relocation, career breaks, volunteer work, and portable career goals with confidence.",
    resources: [
      {
        name: "Career Breaks",
        summary:
          "Use career breaks for relocation, caregiving, education, professional development, or transition periods.",
        url: "https://www.linkedin.com/help/linkedin/answer/a507663",
      },
      {
        name: "Volunteer Experience",
        summary:
          "Add volunteer leadership, community work, unpaid experience, and project-based contributions.",
        url: "https://www.linkedin.com/help/linkedin/answer/a567163",
      },
      {
        name: "Location Tips",
        summary:
          "Use remote, relocating, or target-city language when appropriate without oversharing personal details.",
        url: "https://www.linkedin.com/",
      },
      {
        name: "LinkedIn Premium through HOH",
        summary:
          "Hiring Our Heroes may provide a LinkedIn Premium code after qualifying event participation.",
        url: "https://www.hiringourheroes.org/career-services/education-networking/linkedin-premium-for-the-military-community/",
      },
    ],
  },
];

const quickTips = [
  "Use a clear target-role headline.",
  "Mention remote or relocation goals carefully.",
  "Add certifications and projects.",
  "Use the Featured section like a mini portfolio.",
  "Connect with recruiters, mentors, and people in your field.",
  "Post small updates about what you are learning.",
];

export default function LinkedInPage() {
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
              <span>LinkedIn</span>
            </nav>

            <p className="msh-eyebrow">Career • LinkedIn</p>

            <h1>
              Make your profile <span>easy to understand.</span>
            </h1>

            <h2>Help recruiters connect your experience to your target role.</h2>

            <p>
              LinkedIn can help military spouses explain career pivots,
              relocation, volunteer experience, certifications, projects,
              education, and remote-friendly goals in one searchable place. The
              goal is clarity: your profile should quickly show what you do,
              what you are building, and where you are headed next.
            </p>

            <div className="msh-hero-actions">
              <Link href="#linkedin-resources" className="msh-button">
                LinkedIn Resources →
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
            <h2>Update one profile area at a time.</h2>
            <p>
              Start with the section that needs the most clarity, then build
              from there.
            </p>
          </div>

          <div className="career-subpage-grid">
            {linkedinSections.map((section) => (
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

        <section className="career-subpage-section" id="linkedin-resources">
          {linkedinSections.map((section) => (
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
                    <span>Open Resource →</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="career-subpage-callout">
          <div>
            <p className="msh-eyebrow">Profile Strategy</p>

            <h2>Your profile should match your target role.</h2>

            <p>
              Keep your headline, About section, skills, projects, and resume
              aligned around the same career direction so your story feels
              clear, consistent, and recruiter-friendly.
            </p>
          </div>

          <Link
            href="/military-spouse-hub/career/ai-tools"
            className="msh-button"
          >
            Use AI Career Tools →
          </Link>
        </section>

        <section className="career-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Quick Tips</p>
            <h2>Small updates that make a big difference.</h2>
          </div>

          <div className="career-chip-grid">
            {quickTips.map((tip) => (
              <span key={tip}>{tip}</span>
            ))}
          </div>
        </section>

        <section className="career-subpage-callout">
          <div>
            <p className="msh-eyebrow">Next Step</p>

            <h2>Update one section at a time.</h2>

            <p>
              Start with your headline, then your About section, then your
              Featured section. You do not have to fix everything in one sitting.
              The goal is steady improvement and clearer positioning.
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
            <p className="msh-eyebrow">Recommended Next Step</p>
            <h2>Connect your profile to your job search.</h2>
          </div>

          <div className="career-featured-grid">
            <Link
              href="/military-spouse-hub/career/resume"
              className="career-featured-card"
            >
              <h3>Resume Resources</h3>
              <p>Make your resume and LinkedIn tell the same story.</p>
              <span>Resume Help →</span>
            </Link>

            <Link
              href="/military-spouse-hub/career/job-boards"
              className="career-featured-card"
            >
              <h3>Job Boards</h3>
              <p>Use profile keywords while searching for roles.</p>
              <span>Search Boards →</span>
            </Link>

            <Link
              href="/military-spouse-hub/career/interview-prep"
              className="career-featured-card"
            >
              <h3>Interview Prep</h3>
              <p>Turn your profile story into confident interview answers.</p>
              <span>Prepare Answers →</span>
            </Link>

            <div className="career-quote-card">
              <p>
                “Your LinkedIn profile should make your next step easier to see.”
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}