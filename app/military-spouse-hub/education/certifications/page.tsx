import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import Link from "next/link";
import "../../military-spouse-hub.css";
import "../education.css";

const certificationRoadmap = [
  {
    stage: "Foundation",
    certs: ["Google Cybersecurity", "CompTIA A+", "ITF+"],
    purpose:
      "Learn basic IT, security concepts, Linux, logs, and beginner workflows.",
  },
  {
    stage: "Core Technical",
    certs: ["Network+", "Security+"],
    purpose:
      "Build strong networking and security fundamentals used across nearly every cyber path.",
  },
  {
    stage: "Specialization",
    certs: ["CySA+", "CCNA", "AZ-900", "AWS Cloud Practitioner"],
    purpose:
      "Start narrowing into blue team, cloud, networking, or analyst-focused roles.",
  },
  {
    stage: "Advanced Growth",
    certs: ["SC-200", "BTL1", "GCIA", "GSEC"],
    purpose:
      "Grow into specialized security analysis, DFIR, detection engineering, or advanced blue team roles.",
  },
];

const careerMatches = [
  {
    role: "SOC Analyst",
    certs: "Security+, Network+, CySA+, BTL1",
  },
  {
    role: "Threat Intelligence",
    certs: "Security+, CySA+, OSINT training, malware research",
  },
  {
    role: "Cloud Security",
    certs: "AZ-900, AWS CCP, Security+, SC-900",
  },
  {
    role: "Digital Forensics / DFIR",
    certs: "CySA+, GCFA, GSEC, BTL1",
  },
  {
    role: "GRC",
    certs: "Security+, cloud fundamentals, NIST-focused learning",
  },
  {
    role: "Networking",
    certs: "Network+, CCNA, Security+",
  },
];

const studyResources = [
  {
    name: "Professor Messer",
    text: "Free CompTIA-focused video courses and study groups.",
    url: "https://www.professormesser.com/",
  },
  {
    name: "Jason Dion",
    text: "Practice exams and structured courses for CompTIA certifications.",
    url: "https://www.udemy.com/user/jason-dion/",
  },
  {
    name: "TryHackMe",
    text: "Hands-on labs for Security+, CySA+, SOC, and practical analyst skills.",
    url: "https://tryhackme.com/",
  },
  {
    name: "Hack The Box Academy",
    text: "Deeper technical labs for blue team, red team, and specialized learning.",
    url: "https://academy.hackthebox.com/",
  },
  {
    name: "Microsoft Learn",
    text: "Official Azure training for AZ-900, SC-900, and cloud security learning.",
    url: "https://academy.microsoft.com/",
  },
  {
    name: "AWS Skill Builder",
    text: "Official AWS training for Cloud Practitioner and cloud fundamentals.",
    url: "https://skillbuilder.aws/",
  },
];

const discountNotes = [
  "CompTIA offers academic pricing through their Academic Store.",
  "MyCAA may cover eligible certifications for qualifying military spouses.",
  "Libraries often provide free Udemy, LinkedIn Learning, or Gale resources.",
  "Hiring Our Heroes may offer LinkedIn Premium access after events.",
];

export default function CertificationsPage() {
  return (
    <>
      <Navbar />

      <main className="msh-page education-subpage">
        <section className="education-subpage-hero">
          <div className="education-subpage-hero-card">
            <nav className="msh-breadcrumbs">
              <Link href="/military-spouse-hub">Military Spouse Hub</Link>
              <span>›</span>
              <Link href="/military-spouse-hub/education">Education</Link>
              <span>›</span>
              <span>Certifications</span>
            </nav>

            <p className="msh-eyebrow">Education • Certifications</p>

            <h1>
              Certifications with <span>direction.</span>
            </h1>

            <h2>Choose certs that support your target role.</h2>

            <p>
              Certifications can build confidence, structure your learning, and
              show commitment to a new path. The goal is not to collect every
              cert — it is to choose the next one that supports where you want
              to go.
            </p>

            <div className="msh-hero-actions">
              <Link href="#roadmap" className="msh-button">
                View Roadmap →
              </Link>

              <Link href="#career-match" className="msh-button secondary">
                Match by Career →
              </Link>
            </div>
          </div>
        </section>

        {/* ROADMAP */}
        <section className="education-subpage-section" id="roadmap">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Certification Roadmap</p>
            <h2>Build in layers.</h2>
          </div>

          <div className="education-split-panel">
            {certificationRoadmap.map((step) => (
              <div className="education-split-card" key={step.stage}>
                <h3>{step.stage}</h3>
                <p>{step.purpose}</p>

                <ul>
                  {step.certs.map((cert) => (
                    <li key={cert}>{cert}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CAREER MATCHES */}
        <section className="education-subpage-section" id="career-match">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Career Match</p>
            <h2>Recommended certs by niche.</h2>
          </div>

          <div className="education-notice-grid">
            {careerMatches.map((match) => (
              <div className="education-notice-card" key={match.role}>
                <h3>{match.role}</h3>
                <p>{match.certs}</p>
                <span>Suggested Path</span>
              </div>
            ))}
          </div>
        </section>

        {/* STUDY RESOURCES */}
        <section className="education-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Study Resources</p>
            <h2>Prep smarter.</h2>
          </div>

          <div className="education-subpage-grid">
            {studyResources.map((resource) => (
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="education-subpage-card"
                key={resource.name}
              >
                <h3>{resource.name}</h3>
                <p>{resource.text}</p>
                <span>Visit Resource →</span>
              </a>
            ))}
          </div>
        </section>

        {/* DISCOUNTS */}
        <section className="education-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Discount Notes</p>
            <h2>Check before you pay full price.</h2>
          </div>

          <div className="education-notice-grid">
            {discountNotes.map((note) => (
              <div className="education-notice-card" key={note}>
                <h3>Resource Tip</h3>
                <p>{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CALLOUT */}
        <section className="education-subpage-callout">
          <div>
            <p className="msh-eyebrow">Strategy Reminder</p>

            <h2>One cert + one project is powerful.</h2>

            <p>
              The strongest combination is usually one aligned certification and
              one project or lab that proves you understand the material. That
              creates stronger interviews than collecting disconnected certs.
            </p>
          </div>

          <Link href="/military-spouse-hub/career" className="msh-button">
            Explore Career Paths →
          </Link>
        </section>

        <section className="education-bottom-line">
          <p>Choose the next cert that supports your future, not your fear.</p>
        </section>
      </main>

      <Footer />
    </>
  );
}