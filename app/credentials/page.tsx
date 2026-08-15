import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./credentials.css";

const experience = [
  {
    title: "IT Operations Coordinator",
    company: "Brice Inc.",
    location: "Fairbanks, Alaska",
    dates: "2026–Present",
    description:
      "Supporting IT operations across a multi-company construction environment while improving device management, software administration, vendor coordination, troubleshooting, and operational processes.",
    focus: [
      "IT Operations",
      "Device Lifecycle",
      "Systems Administration",
      "Process Automation",
    ],
    metrics: [
      {
        value: "50+",
        label: "Starlink Devices Consolidated",
      },
      {
        value: "10+",
        label: "Subsidiaries Supported",
      },
      {
        value: "Lifecycle",
        label: "Device Management Ownership",
      },
      {
        value: "Automation",
        label: "Workflow Improvement",
      },
    ],
    highlights: [
      "Centralizing device procurement, deployment, tracking, and retirement across multiple subsidiaries.",
      "Building internal tooling to track Starlink equipment and consolidate fragmented device and account management.",
      "Managing software administration, vendor relationships, licensing, and technology transitions.",
      "Providing technical troubleshooting across hardware, software, Microsoft tools, HCSS, Document Crunch, Trimble/Spectrum, and related business systems.",
      "Improving documentation, data-entry workflows, process standardization, and operational efficiency.",
    ],
  },
];

const certifications = [
  {
    title: "CompTIA Security+",
    type: "Verified",
    link: "https://www.credly.com/badges/e46844d0-12ec-438f-a86b-2ee6e5a9b77a/public_url",
  },
  {
    title: "Google Cybersecurity Certificate",
    type: "Verified",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/T7S9WKQBXUES",
  },
  {
    title: "NCAE-Cyber Defense",
    type: "Verified",
    link: "https://www.credly.com/badges/6b08e170-fc93-4d72-bd78-8fc296403ea7/public_url",
  },
  {
    title: "Microsoft Office Specialist",
    type: "Verified",
    link: "https://www.credly.com/badges/ecd18267-0425-4f74-ab58-d12851f41b90/public_url",
  },
  {
    title: "B.S. Cybersecurity",
    type: "Verified",
    link: "https://www.parchment.com/lp/award/a869175a-334a-4a78-8bd9-ea7a4b437736",
  },
  {
    title: "Cybersecurity Certificate - AMU",
    type: "Completed",
  },
  {
    title: "Cybercrime Certificate - AMU",
    type: "Completed",
  },
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    type: "In Progress",
  },
  {
    title: "CompTIA CySA+",
    type: "In Progress",
  },
];

const projects = [
  {
    title: "Threat Intelligence Portfolio",
    tag: "Finished Intelligence",
    description:
      "Finished intelligence products, ransomware research, defensive architecture analysis, threat briefs, and analyst-style reporting.",
    link: "https://github.com/millie-altman/threat-intelligence-portfolio",
    writeup: "/research/ransomware-tic-brief",
  },
  {
    title: "CTI Research Lab",
    tag: "Lab Build",
    description:
      "Hands-on CTI environment using Wazuh, Sysmon, Kali Linux, Atomic Red Team, MITRE ATT&CK, and the Diamond Model.",
    link: "https://github.com/millie-altman/cti-research-lab",
    writeup: "/research/cti-research-lab",
  },
  {
    title: "Threat Actor Profiles",
    tag: "Adversary Research",
    description:
      "Structured profiles focused on adversary motivations, targeting, behaviors, TTPs, and defensive takeaways.",
    link: "https://github.com/millie-altman/threat-actor-profiles",
    writeup: "/research/scattered-spider",
  },
  {
    title: "Malware Analysis",
    tag: "Malware Research",
    description:
      "Malware and ransomware analysis covering BlackCat/ALPHV, Cl0p, LockBit, WannaCry, and broader defensive implications.",
    link: "https://github.com/millie-altman/malware-analysis",
    writeup: "/research/blackcat-alphv",
  },
  {
    title: "Python Security Tools",
    tag: "Automation",
    description:
      "Python tools for phishing analysis, email-header review, indicator enrichment, and repeatable analyst workflows.",
    link: "https://github.com/millie-altman/python-security-tools",
    writeup: "/research/python-security-tools",
  },
];

const skillGroups = [
  {
    title: "IT Operations",
    skills: [
      "Systems Administration",
      "Technical Troubleshooting",
      "Device Lifecycle Management",
      "Vendor Coordination",
      "Software Administration",
      "Process Documentation",
    ],
  },
  {
    title: "Threat Intelligence",
    skills: [
      "Cyber Threat Intelligence",
      "Threat Actor Research",
      "Ransomware Research",
      "Malware Analysis",
      "MITRE ATT&CK",
      "OSINT",
    ],
  },
  {
    title: "Security Operations",
    skills: [
      "SOC Investigation",
      "Phishing Analysis",
      "Security Documentation",
      "Defensive Analysis",
      "Incident Triage",
    ],
  },
  {
    title: "Technical",
    skills: [
      "Python Automation",
      "Cloud Fundamentals",
      "Wazuh",
      "Sysmon",
      "Wireshark",
      "Microsoft Ecosystem",
    ],
  },
];

const selectedWritings = [
  {
    title: "The Opportunity Finally Came",
    description:
      "What changed when years of building proof became my first professional IT opportunity.",
    link: "/research/opportunity-finally-came",
  },
  {
    title: "Proof Before Permission",
    description:
      "Why I stopped waiting to be chosen and started building visible evidence of what I could do.",
    link: "/research/building-proof-before-opportunity",
  },
  {
    title: "The CTI Research Workbench",
    description:
      "How I built a hands-on environment for threat intelligence, ATT&CK mapping, detection, and adversary analysis.",
    link: "/research/cti-research-lab",
  },
  {
    title: "Building from the Interior",
    description:
      "A reflection on building a cybersecurity career from Fairbanks, Alaska, and documenting the work anyway.",
    link: "/research/building-from-alaska",
  },
];

export default function CredentialsPage() {
  return (
    <>
      <Navbar />

      <main className="credentials-page">
        {/* HERO */}
        <section className="credentials-hero">
          <div className="credentials-overlay" />

          <div className="credentials-hero-copy">
            <p className="credentials-eyebrow">
              Credentials • Experience • Proof
            </p>

            <h1>
              Intelligence is built.
              <span>Resilience is earned.</span>
            </h1>

            <div className="credentials-title-line" />

            <p>
              A focused snapshot of my professional IT experience,
              cybersecurity education, certifications, threat intelligence
              research, technical projects, and hands-on work.
            </p>

            <div className="credentials-actions">
              <a
                href="https://github.com/millie-altman"
                target="_blank"
                rel="noopener noreferrer"
                className="credentials-btn primary"
              >
                View GitHub
              </a>

              <Link href="/connect" className="credentials-btn secondary">
                Connect With Me
              </Link>
            </div>
          </div>
        </section>

        {/* CURRENT DIRECTION */}
        <section className="credential-section current-direction">
          <div className="credential-section-heading centered">
            <p className="credentials-eyebrow">Current Direction</p>

            <h2>IT Operations to Cybersecurity</h2>

            <p>
              I currently work in IT operations while continuing to build
              toward cybersecurity and threat intelligence. The role is
              strengthening my understanding of the systems, devices, vendors,
              users, and business processes security teams are responsible for
              protecting.
            </p>
          </div>

          <div className="credential-stat-grid">
            <div className="credential-stat-card">
              <strong>IT</strong>
              <span>Operations Coordinator</span>
            </div>

            <div className="credential-stat-card">
              <strong>5+</strong>
              <span>Portfolio Repositories</span>
            </div>

            <div className="credential-stat-card">
              <strong>9</strong>
              <span>Credentials Listed</span>
            </div>

            <div className="credential-stat-card">
              <strong>CTI</strong>
              <span>Long-Term Cyber Focus</span>
            </div>
          </div>
        </section>

        {/* PROFESSIONAL EXPERIENCE */}
        <section className="credential-section experience-section">
          <div className="credential-section-heading">
            <p className="credentials-eyebrow">Professional Experience</p>

            <h2>Experience in a production environment.</h2>

            <p>
              Hands-on responsibility for technology operations, systems,
              vendors, devices, software, troubleshooting, and process
              improvement inside a multi-company business environment.
            </p>
          </div>

          {experience.map((role) => (
            <article className="experience-dossier" key={role.title}>
              <div className="experience-dossier-sidebar">
                <p className="credential-tag">{role.dates}</p>

                <h3>{role.title}</h3>

                <p className="experience-company">
                  {role.company}
                  <br />
                  {role.location}
                </p>

                <div className="experience-focus">
                  {role.focus.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>

              <div className="experience-dossier-main">
                <p className="experience-summary">{role.description}</p>

                <div className="experience-impact-grid">
                  {role.metrics.map((metric) => (
                    <div key={metric.label}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>

                <ul className="experience-highlights">
                  {role.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        {/* FEATURED WORK */}
        <section className="credential-section">
          <div className="credential-section-heading">
            <p className="credentials-eyebrow">Featured Work</p>

            <h2>Projects that show the work.</h2>

            <p>
              Research, labs, automation, and intelligence products that
              demonstrate how I investigate, document, and communicate
              cybersecurity problems.
            </p>
          </div>

          <div className="project-showcase">
            {projects.map((project, index) => (
              <article
                className={
                  index === 0
                    ? "project-card project-card-featured"
                    : "project-card"
                }
                key={project.title}
              >
                <p className="credential-tag">{project.tag}</p>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="card-links">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub →
                  </a>

                  <Link href={project.writeup}>Write-Up →</Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <section className="credential-section">
          <div className="credential-section-heading">
            <p className="credentials-eyebrow">
              Education &amp; Certifications
            </p>

            <h2>Verified, completed, and continuing.</h2>

            <p>
              Formal education, industry credentials, and continued technical
              development supporting both my current IT role and long-term
              cybersecurity path.
            </p>
          </div>

          <div className="credential-list">
            {certifications.map((item) => (
              <article className="credential-row" key={item.title}>
                <div>
                  <p className="credential-tag">{item.type}</p>
                  <h3>{item.title}</h3>
                </div>

                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify →
                  </a>
                ) : (
                  <span>{item.type}</span>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="credential-section">
          <div className="credential-section-heading">
            <p className="credentials-eyebrow">Skills</p>

            <h2>Technical and analytical capabilities.</h2>

            <p>
              Professional IT operations experience paired with cybersecurity
              skills developed through research, labs, projects, coursework,
              and independent practice.
            </p>
          </div>

          <div className="skill-group-grid">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>

                <div className="skills-cloud">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SELECTED WRITING */}
        <section className="credential-section">
          <div className="credential-section-heading">
            <p className="credentials-eyebrow">Selected Writing</p>

            <h2>Research, reflection, and analyst growth.</h2>

            <p>
              Selected entries that show both the technical work and the
              progression behind the portfolio.
            </p>
          </div>

          <div className="writing-list">
            {selectedWritings.map((post) => (
              <Link
                href={post.link}
                className="writing-row"
                key={post.title}
              >
                <div>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                </div>

                <span>Read →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* RESUME */}
        <section className="resume-callout">
          <div>
            <p className="credentials-eyebrow">Resume</p>

            <h2>View my current technology and cybersecurity resume.</h2>

            <p>
              My resume includes my professional IT operations experience,
              cybersecurity education, certifications, technical projects,
              threat intelligence research, and hands-on lab work.
            </p>
          </div>

          <div className="credentials-actions">
            <a
              href="https://drive.google.com/file/d/1olX37XlBy3I4YZ5RUBb-fYb_nvNjwkIt/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="credentials-btn primary"
            >
              View Resume
            </a>

            <Link href="/connect" className="credentials-btn secondary">
              Connect With Me
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}