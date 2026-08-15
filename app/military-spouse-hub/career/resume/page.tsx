import Link from "next/link";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import "../../military-spouse-hub.css";
import "../career.css";

const resumeResources = [
  {
    name: "Best Military Resume",
    summary:
      "Military-connected resume support and templates for service members, spouses, and veterans.",
    url: "https://bestmilitaryresume.com/",
  },
  {
    name: "USAJOBS Resume Builder",
    summary:
      "Federal resume builder for government applications that helps include the detail federal postings expect.",
    url: "https://www.usajobs.gov/Help/how-to/account/documents/resume/build/",
  },
  {
    name: "SpouseWorks Career Coaching",
    summary:
      "Career coaching, resume support, and employment tools for military spouses.",
    url: "https://spouseworks.militaryonesource.mil/portal/",
  },
  {
    name: "Hiring Our Heroes Resources",
    summary:
      "Workshops and tools for resumes, networking, interviews, and job search planning.",
    url: "https://www.hiringourheroes.org/resources/",
  },
  {
    name: "Canva Resume Templates",
    summary:
      "Free visual resume templates that can be customized for different roles.",
    url: "https://www.canva.com/resumes/templates/",
  },
  {
    name: "Google Docs Resume Templates",
    summary:
      "Simple resume templates available through Google Docs for clean starter formatting.",
    url: "https://docs.google.com/",
  },
];

const resumeTypes = [
  {
    title: "Targeted Resume",
    text: "Best for private-sector roles. Keep it focused on one target role and use language from the job description.",
  },
  {
    title: "Federal Resume",
    text: "Best for USAJOBS. Usually longer and more detailed, with dates, hours, duties, and specialized experience.",
  },
  {
    title: "Cyber / Tech Resume",
    text: "Best for security, IT, cloud, and technical roles. Highlight tools, labs, projects, certifications, and hands-on proof.",
  },
  {
    title: "Career Pivot Resume",
    text: "Best when changing fields. Lead with transferable skills, projects, education, volunteer work, and role-aligned keywords.",
  },
];

const resumeTips = [
  "Create separate resumes for cyber, tech, remote, federal, and general roles.",
  "Use job description keywords naturally.",
  "Translate volunteer work into professional experience.",
  "Include certifications near the top when relevant.",
  "Quantify results whenever possible.",
  "Do not apologize for career gaps.",
  "Use projects to prove hands-on skills.",
  "Keep formatting clean and easy to skim.",
];

export default function ResumePage() {
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
              <span>Resume</span>
            </nav>

            <p className="msh-eyebrow">Career • Resume</p>

            <h1>
              Explain your <span>value clearly.</span>
            </h1>

            <h2>Build a resume that makes your path easier to understand.</h2>

            <p>
              Military spouse resumes often include relocations, volunteer work,
              career pivots, education, caregiving, and gaps. That experience
              still counts — it just needs clear positioning, strong keywords,
              and proof that connects your background to the role.
            </p>

            <div className="msh-hero-actions">
              <Link href="#resume-resources" className="msh-button">
                Resume Resources →
              </Link>

              <Link
                href="/military-spouse-hub/career/linkedin"
                className="msh-button"
              >
                LinkedIn Tips →
              </Link>
            </div>
          </div>
        </section>

        <section className="career-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Resume Types</p>
            <h2>Choose the right version for the role.</h2>
            <p>
              One master resume is helpful, but every application should be
              tailored to the job you actually want.
            </p>
          </div>

          <div className="career-subpage-grid">
            {resumeTypes.map((type) => (
              <div className="career-subpage-card" key={type.title}>
                <h3>{type.title}</h3>
                <p>{type.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="career-subpage-section" id="resume-resources">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Resume Resources</p>
            <h2>Templates, builders, coaching, and spouse-friendly support.</h2>
            <p>
              Use these tools to build a resume that fits your current target
              role and career season.
            </p>
          </div>

          <div className="career-subpage-grid">
            {resumeResources.map((resource) => (
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
        </section>

        <section className="career-subpage-callout">
          <div>
            <p className="msh-eyebrow">Resume Reminder</p>

            <h2>Your path is not broken.</h2>

            <p>
              A nontraditional path can still show leadership, adaptability,
              resilience, communication, self-directed learning, technical
              growth, and problem-solving when framed clearly.
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
            <p className="msh-eyebrow">Resume Tips</p>
            <h2>Make your resume easier to scan.</h2>
          </div>

          <div className="career-chip-grid">
            {resumeTips.map((tip) => (
              <span key={tip}>{tip}</span>
            ))}
          </div>
        </section>

        <section className="career-subpage-callout">
          <div>
            <p className="msh-eyebrow">Next Step</p>

            <h2>Pair your resume with LinkedIn.</h2>

            <p>
              Your resume and LinkedIn should tell the same story with the same
              target role, keywords, projects, and direction. Recruiters should
              not have to guess what you are aiming for.
            </p>
          </div>

          <Link
            href="/military-spouse-hub/career/linkedin"
            className="msh-button"
          >
            LinkedIn Tips →
          </Link>
        </section>

        <section className="career-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Recommended Next Step</p>
            <h2>Build the rest of your career system.</h2>
          </div>

          <div className="career-featured-grid">
            <Link
              href="/military-spouse-hub/career/linkedin"
              className="career-featured-card"
            >
              <h3>LinkedIn Optimization</h3>
              <p>Make your profile match your resume and target role.</p>
              <span>LinkedIn Help →</span>
            </Link>

            <Link
              href="/military-spouse-hub/career/job-boards"
              className="career-featured-card"
            >
              <h3>Job Boards</h3>
              <p>Find spouse-friendly, remote, federal, tech, and cyber roles.</p>
              <span>Find Roles →</span>
            </Link>

            <Link
              href="/military-spouse-hub/career/interview-prep"
              className="career-featured-card"
            >
              <h3>Interview Prep</h3>
              <p>Turn resume bullets into confident interview stories.</p>
              <span>Practice Answers →</span>
            </Link>

            <div className="career-quote-card">
              <p>
                “Your resume does not need to explain every detail of your life.
                It needs to show the value you bring next.”
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}