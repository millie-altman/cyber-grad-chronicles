import Link from "next/link";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import "../../military-spouse-hub.css";
import "../career.css";

const federalSections = [
  {
    id: "where-to-start",
    title: "Where to Start",
    description:
      "Begin with official federal hiring sites, military spouse hiring pathways, and agencies that commonly hire cyber and IT talent.",
    resources: [
      {
        name: "USAJOBS",
        summary:
          "The official federal hiring platform. Most civilian government jobs begin here.",
        url: "https://www.usajobs.gov/",
      },
      {
        name: "Military Spouse Hiring Authority",
        summary:
          "A noncompetitive hiring path for eligible military spouses that can support federal hiring opportunities.",
        url: "https://www.usajobs.gov/help/working-in-government/unique-hiring-paths/military-spouses/",
      },
      {
        name: "DoD Civilian Careers",
        summary:
          "Civilian jobs directly within the Department of Defense, including IT, cyber, admin, and mission support roles.",
        url: "https://www.dodciviliancareers.com/",
      },
      {
        name: "CISA Careers",
        summary:
          "Cybersecurity, infrastructure security, incident response, risk, and national security roles.",
        url: "https://www.cisa.gov/careers",
      },
    ],
  },
  {
    id: "resume-help",
    title: "Federal Resume Help",
    description:
      "Federal resumes are usually longer, more detailed, and more structured than private-sector resumes.",
    resources: [
      {
        name: "USAJOBS Resume Builder",
        summary:
          "Use the built-in resume builder to format experience, dates, hours, duties, and details correctly.",
        url: "https://www.usajobs.gov/Help/how-to/account/documents/resume/build/",
      },
      {
        name: "OPM Qualification Standards",
        summary:
          "Use this to understand qualification requirements by grade, series, education, and specialized experience.",
        url: "https://www.opm.gov/policy-data-oversight/classification-qualifications/general-schedule-qualification-standards/",
      },
      {
        name: "Federal Occupation Search",
        summary:
          "Find job series numbers and understand how federal occupations are categorized.",
        url: "https://www.opm.gov/policy-data-oversight/classification-qualifications/general-schedule-qualification-standards/#url=List-by-Occupational-Series",
      },
    ],
  },
  {
    id: "cyber-it-series",
    title: "Cyber & IT Job Series",
    description:
      "Useful federal series for IT, cybersecurity, intelligence, cybercrime, investigations, and mission support.",
    resources: [
      {
        name: "2210 — Information Technology Management",
        summary:
          "The main federal IT series. Includes cybersecurity, systems, networking, cloud, support, and security operations roles.",
        url: "https://www.opm.gov/policy-data-oversight/classification-qualifications/general-schedule-qualification-standards/2200/information-technology-it-management-series-2210/",
      },
      {
        name: "0132 — Intelligence Series",
        summary:
          "Useful for intelligence analysis, CTI, OSINT, threat research, and national security-adjacent roles.",
        url: "https://www.opm.gov/policy-data-oversight/classification-qualifications/general-schedule-qualification-standards/0100/intelligence-series-0132/",
      },
      {
        name: "1801 — Inspection & Investigation",
        summary:
          "Useful for cybercrime, investigations, fraud, enforcement, compliance, and investigative support careers.",
        url: "https://www.opm.gov/policy-data-oversight/classification-qualifications/general-schedule-qualification-standards/1800/general-inspection-investigation-enforcement-and-compliance-series-1801/",
      },
    ],
  },
];

const federalTips = [
  "Federal resumes are often 3–5 pages, not 1 page.",
  "Include hours worked per week for each role.",
  "Include exact dates by month and year.",
  "Mirror keywords from the announcement.",
  "Read the specialized experience section carefully.",
  "Save every application and questionnaire answer.",
  "Use the resume builder when you are unsure.",
  "Do not assume a private-sector resume is enough.",
];

const gsLevels = [
  "GS-5 to GS-7 = entry level",
  "GS-9 = early professional",
  "GS-11 to GS-12 = mid-level",
  "GS-13+ = advanced or specialized",
];

export default function FederalJobsPage() {
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
              <span>Federal Jobs</span>
            </nav>

            <p className="msh-eyebrow">Career • Federal Jobs</p>

            <h1>
              Learn the federal <span>hiring system.</span>
            </h1>

            <h2>Federal applications have their own language, rhythm, and rules.</h2>

            <p>
              Federal jobs can offer stability, benefits, mission-driven work,
              cyber and IT pathways, remote or hybrid options, and military
              spouse hiring authorities. The process is slower and more
              structured than private-sector hiring, but once you understand the
              system, it becomes much easier to navigate.
            </p>

            <div className="msh-hero-actions">
              <Link href="#federal-resources" className="msh-button">
                Federal Resources →
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
            <h2>Federal hiring has its own language.</h2>
            <p>
              Start with one area and build your application system from there.
            </p>
          </div>

          <div className="career-subpage-grid">
            {federalSections.map((section) => (
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

        <section className="career-subpage-callout">
          <div>
            <p className="msh-eyebrow">Important</p>
            <h2>Federal hiring works differently.</h2>
            <p>
              Your federal resume needs more detail than a standard resume. You
              may need to include hours worked per week, exact dates, detailed
              duties, specialized experience, education, certifications, and
              wording that directly matches the announcement.
            </p>
          </div>

          <Link
            href="/military-spouse-hub/career/resume"
            className="msh-button"
          >
            Federal Resume Help →
          </Link>
        </section>

        <section className="career-subpage-section" id="federal-resources">
          {federalSections.map((section) => (
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

        <section className="career-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">GS Levels</p>
            <h2>Understanding federal grades.</h2>
            <p>
              GS levels vary by agency, occupation, education, specialized
              experience, and location, but this gives you a starting point.
            </p>
          </div>

          <div className="career-chip-grid">
            {gsLevels.map((level) => (
              <span key={level}>{level}</span>
            ))}
          </div>
        </section>

        <section className="career-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Federal Resume Tips</p>
            <h2>Before you apply.</h2>
          </div>

          <div className="career-chip-grid">
            {federalTips.map((tip) => (
              <span key={tip}>{tip}</span>
            ))}
          </div>
        </section>

        <section className="career-subpage-callout">
          <div>
            <p className="msh-eyebrow">Next Step</p>
            <h2>Build your federal application system.</h2>
            <p>
              Save announcements, track questionnaires, keep a master federal
              resume, and tailor each submission to the specialized experience
              section. Federal applications reward detail and consistency.
            </p>
          </div>

          <Link
            href="/military-spouse-hub/career/job-boards"
            className="msh-button"
          >
            Job Boards →
          </Link>
        </section>

        <section className="career-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Recommended Next Step</p>
            <h2>Keep building from here.</h2>
          </div>

          <div className="career-featured-grid">
            <Link
              href="/military-spouse-hub/career/resume"
              className="career-featured-card"
            >
              <h3>Resume Resources</h3>
              <p>Prepare a federal-style resume with required details.</p>
              <span>Resume Help →</span>
            </Link>

            <Link
              href="/military-spouse-hub/career/job-boards"
              className="career-featured-card"
            >
              <h3>Job Boards</h3>
              <p>Find federal, cyber, tech, and spouse-friendly openings.</p>
              <span>Search Boards →</span>
            </Link>

            <Link
              href="/military-spouse-hub/career/interview-prep"
              className="career-featured-card"
            >
              <h3>Interview Prep</h3>
              <p>Practice structured answers for government and cyber roles.</p>
              <span>Prepare Answers →</span>
            </Link>

            <div className="career-quote-card">
              <p>
                “Federal hiring is not fast, but it is learnable. Build a
                system and reuse what works.”
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}