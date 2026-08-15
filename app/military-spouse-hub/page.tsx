import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Link from "next/link";
import "./military-spouse-hub.css";
import "./military-spouse-home.css";

const sections = [
  {
    title: "Career",
    description:
      "Find jobs, build your brand, prepare for interviews, and grow your career — wherever life takes you.",
    href: "/military-spouse-hub/career",
    items: [
      "AI Tools",
      "Career Breaks",
      "Federal Jobs",
      "Interview Prep",
      "Job Boards",
      "LinkedIn",
      "Relocation Survival Kit",
      "Remote Red Flags",
      "Resume",
    ],
  },
  {
    title: "Education",
    description:
      "Invest in your future with degrees, certifications, and learning resources that fit your life.",
    href: "/military-spouse-hub/education",
    items: ["Certifications", "Degree", "Learning Paths & Resources"],
  },
  {
    title: "Community",
    description:
      "Read stories, share experiences, and find encouragement from those who get it.",
    href: "/military-spouse-hub/community",
    items: ["Success Stories"],
  },
  {
    title: "Where to Start",
    description:
      "New here? Start with the basics and find the right path for you.",
    href: "/military-spouse-hub/where-to-start",
    items: [],
  },
];

const resources = [
  {
    title: "MilSpouse Career Roadmap",
    href: "/military-spouse-hub/where-to-start",
  },
  {
    title: "Remote Work Red Flags",
    href: "/military-spouse-hub/career/remote-red-flags",
  },
  {
    title: "Scholarships & Financial Aid",
    href: "/military-spouse-hub/education",
  },
  {
    title: "Resume Templates",
    href: "/military-spouse-hub/career/resume",
  },
];

export default function MilitarySpouseHubPage() {
  return (
    <>
      <Navbar />

      <main className="msh-page">
        {/* HERO */}
        <section className="msh-hero-split">
          <div className="msh-hero-left">
            <p className="msh-eyebrow">Support. Resources. Opportunity.</p>

            <h1>
              Behind the Mission,
              <br />
              Ahead of the Next
              <span> Chapter.</span>
            </h1>

            <p>
              Practical tools, real support, and a community that understands
              the journey. Build the life and career you deserve, on your terms.
            </p>

            <Link href="#hub-sections" className="msh-button">
              Explore the Hub →
            </Link>
          </div>

          <div className="msh-hero-right">
            <img
              src="/images/military-spouse-hub/hero.png"
              alt="Military spouse workspace"
            />
          </div>
        </section>

        {/* SECTION INTRO */}
        <section className="msh-compass-bg">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Explore Our Sections</p>
            <h2>Resources for Every Step of the Journey</h2>
          </div>

          <div className="msh-grid-four" id="hub-sections">
            {sections.map((section) => (
              <Link
                href={section.href}
                key={section.title}
                className="msh-tall-card"
              >
                <h3>{section.title}</h3>

                <p>{section.description}</p>

                {section.items.length > 0 && (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                <span>Explore →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* FEATURED RESOURCES */}
        <section className="msh-feature-band">
          <div className="msh-feature-card">
            <p className="msh-eyebrow">Featured Resources</p>

            <ul>
              {resources.map((resource) => (
                <li key={resource.title}>
                  <Link href={resource.href}>{resource.title} →</Link>
                </li>
              ))}
            </ul>

            <Link href="/military-spouse-hub/career" className="msh-button">
              View All Resources →
            </Link>
          </div>

          <div className="msh-image-card">
            <img
              src="/images/military-spouse-hub/desk.png"
              alt="Military spouse planning journal"
            />
          </div>

          <div className="msh-quote-card">
            <h3>The path may change. The mission doesn't.</h3>

            <p>
              You’ve already proven you can adapt to anything. Now, let’s build
              the future you’re moving toward.
            </p>

            <span>// Resilience is strategy</span>
          </div>
        </section>

        {/* FOOTER STATEMENT */}
        <section className="msh-bottom-statement">
          <p>Military spouses don’t just support the mission.</p>
          <h2>We drive our own.</h2>
        </section>
      </main>

      <Footer />
    </>
  );
}