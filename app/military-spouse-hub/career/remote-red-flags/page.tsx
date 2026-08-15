import Link from "next/link";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import "../../military-spouse-hub.css";
import "../career.css";

const redFlagSections = [
  {
    id: "fake-jobs",
    title: "Fake Remote Job Red Flags",
    description:
      "Warning signs that a remote job posting or recruiter may not be legitimate.",
    resources: [
      {
        name: "Too Good to Be True Pay",
        summary:
          "High pay for little experience, vague duties, or instant hiring should raise suspicion.",
      },
      {
        name: "No Real Interview Process",
        summary:
          "Legitimate employers usually require interviews, verification, and clear communication.",
      },
      {
        name: "Personal Email Domains",
        summary:
          "Be cautious if a recruiter uses Gmail, Outlook, Telegram, WhatsApp, or text-only communication.",
      },
      {
        name: "Urgency and Pressure",
        summary:
          "Scammers often create urgency so you do not have time to verify the company.",
      },
      {
        name: "Vague Company Details",
        summary:
          "If you cannot verify the company, recruiter, website, or posting, slow down.",
      },
      {
        name: "Unusual Onboarding",
        summary:
          "Requests for banking details, IDs, or tax forms before a real offer can be risky.",
      },
    ],
  },
  {
    id: "common-scams",
    title: "Common Remote Work Scams",
    description:
      "Patterns commonly used to exploit job seekers and military spouses.",
    resources: [
      {
        name: "Fake Check Scams",
        summary:
          "Scammers send fake checks for equipment and ask you to send money back.",
      },
      {
        name: "Equipment Purchase Scams",
        summary:
          "A fake employer asks you to buy equipment from a specific vendor using your own money.",
      },
      {
        name: "Crypto Payment Scams",
        summary:
          "Jobs involving crypto transfers may be money-mule or laundering schemes.",
      },
      {
        name: "Training Fee Scams",
        summary:
          "Be cautious if a company requires payment for training before hiring.",
      },
      {
        name: "Package Forwarding Scams",
        summary:
          "Receiving and shipping packages may involve stolen goods or fraud.",
      },
      {
        name: "Data Entry Scams",
        summary:
          "Generic data entry jobs with high pay and low requirements are often abused by scammers.",
      },
    ],
  },
  {
    id: "verify",
    title: "How to Verify a Job",
    description:
      "Practical steps to slow down, verify, and protect yourself before moving forward.",
    resources: [
      {
        name: "Check the Company Website",
        summary:
          "Verify the role exists on the company’s official careers page.",
      },
      {
        name: "Verify the Recruiter",
        summary:
          "Look for a real LinkedIn profile, company domain, and history.",
      },
      {
        name: "Search the Job Title",
        summary:
          "Search lines from the posting to find duplicates or scam reports.",
      },
      {
        name: "Check the Email Domain",
        summary:
          "Legitimate recruiters usually use official company domains.",
      },
      {
        name: "Do Not Pay to Work",
        summary:
          "No legitimate employer should require money, gift cards, or equipment purchases.",
      },
      {
        name: "Trust Slow Discomfort",
        summary:
          "If it feels rushed, secretive, or inconsistent, pause and verify.",
      },
    ],
  },
];

const militarySpouseSafetyTips = [
  "Do not share deployment dates, unit information, exact location, or family schedules.",
  "Use a professional email that does not reveal personal family details.",
  "Avoid posting urgent financial need in public job groups.",
  "Be cautious with strangers offering private job help through DMs.",
  "Screenshot suspicious messages before blocking or reporting.",
  "Use official job boards and company career pages whenever possible.",
];

const reportResources = [
  {
    name: "FTC Report Fraud",
    summary:
      "Report job scams, fake checks, identity theft attempts, and online fraud.",
    url: "https://reportfraud.ftc.gov/",
  },
  {
    name: "FBI IC3",
    summary:
      "Report internet crime, cyber-enabled scams, and financial fraud.",
    url: "https://www.ic3.gov/",
  },
  {
    name: "USAJOBS",
    summary:
      "Use the official federal hiring platform for government jobs.",
    url: "https://www.usajobs.gov/",
  },
  {
    name: "MSEP Job Board",
    summary:
      "Search military spouse-friendly employers through SpouseWorks.",
    url: "https://spouseworks.militaryonesource.mil/portal/msep/jobs",
  },
];

export default function RemoteRedFlagsPage() {
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
              <span>Remote Red Flags</span>
            </nav>

            <p className="msh-eyebrow">Career • Remote Red Flags</p>

            <h1>
              Spot fake jobs <span>before they cost you.</span>
            </h1>

            <h2>Remote work can be powerful, but scams are common.</h2>

            <p>
              Remote work creates flexibility, but scammers know that military
              spouses and career changers often need portable opportunities.
              Learn how to recognize fake recruiters, fake jobs, equipment
              scams, and privacy risks before sharing sensitive information.
            </p>

            <div className="msh-hero-actions">
              <Link href="#red-flags" className="msh-button">
                View Red Flags →
              </Link>

              <Link
                href="/military-spouse-hub/career/job-boards"
                className="msh-button"
              >
                Safer Job Boards →
              </Link>
            </div>
          </div>
        </section>

        <section className="career-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Quick Jump</p>
            <h2>Check the warning sign before you continue.</h2>
          </div>

          <div className="career-subpage-grid">
            {redFlagSections.map((section) => (
              <Link
                href={`#${section.id}`}
                className="career-subpage-card"
                key={section.id}
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
            <p className="msh-eyebrow">Golden Rule</p>

            <h2>Never pay money to get a job.</h2>

            <p>
              If a company asks for gift cards, crypto, check deposits, wire
              transfers, or equipment payments, stop. That is your biggest
              warning sign.
            </p>
          </div>

          <Link
            href="/military-spouse-hub/career/job-boards"
            className="msh-button"
          >
            Safer Boards →
          </Link>
        </section>

        <section className="career-subpage-section" id="red-flags">
          {redFlagSections.map((section) => (
            <div className="career-prompt-block" id={section.id} key={section.id}>
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

        <section className="career-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Military Spouse Safety Tips</p>
            <h2>Protect your family and your information.</h2>
          </div>

          <div className="career-chip-grid">
            {militarySpouseSafetyTips.map((tip) => (
              <span key={tip}>{tip}</span>
            ))}
          </div>
        </section>

        <section className="career-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Report & Verify</p>
            <h2>Report scams or search safer job boards.</h2>
          </div>

          <div className="career-subpage-grid">
            {reportResources.map((resource) => (
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

        <section className="career-subpage-callout">
          <div>
            <p className="msh-eyebrow">Before You Apply</p>

            <h2>Pause, verify, then proceed.</h2>

            <p>
              Search the company, verify the recruiter, check the official
              careers page, and never send money or sensitive documents before
              you are confident the opportunity is real.
            </p>
          </div>

          <Link
            href="/military-spouse-hub/career/job-boards"
            className="msh-button"
          >
            Safer Job Boards →
          </Link>
        </section>

        <section className="career-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Recommended Next Step</p>
            <h2>Search safely and intentionally.</h2>
          </div>

          <div className="career-featured-grid">
            <Link
              href="/military-spouse-hub/career/job-boards"
              className="career-featured-card"
            >
              <h3>Job Boards</h3>
              <p>Use safer job boards and official company career pages.</p>
              <span>Find Jobs →</span>
            </Link>

            <Link
              href="/military-spouse-hub/career/resume"
              className="career-featured-card"
            >
              <h3>Resume Resources</h3>
              <p>Prepare your resume before applying widely.</p>
              <span>Resume Help →</span>
            </Link>

            <Link
              href="/military-spouse-hub/career/relocation-survival-kit"
              className="career-featured-card"
            >
              <h3>Relocation Survival Kit</h3>
              <p>Stay organized during PCS, moving, and transition periods.</p>
              <span>Plan Ahead →</span>
            </Link>

            <div className="career-quote-card">
              <p>
                “A legitimate opportunity can survive your questions. A scam
                usually cannot.”
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}