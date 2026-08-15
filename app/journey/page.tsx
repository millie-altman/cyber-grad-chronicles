import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./journey.css";

const timeline = [
  {
    year: "July 2023",
    title: "Moving to Alaska",
    text: "I moved to Alaska and started adjusting to an entirely new environment, community, and pace of life. It was the beginning of a major transition and the first step into a completely new chapter.",
  },
  {
    year: "August 2023",
    title: "Getting married",
    text: "A month later, I got married and officially stepped into military spouse life, learning quickly how much flexibility, resilience, and rebuilding would become part of my life.",
  },
  {
    year: "August 2024",
    title: "Starting school",
    text: "I started my B.S. in Cybersecurity with a concentration in cybercrime. This was the moment the interest became a real commitment.",
  },
  {
    year: "2024–2026",
    title: "Building the foundation",
    text: "Through school, certifications, hands-on labs, research, and technical projects, I started building the foundation that would shape my path toward cybersecurity and threat intelligence.",
  },
  {
    year: "Alaska",
    title: "Building from a place people underestimated",
    text: "I was told building this career from Alaska would be difficult, so I started documenting the proof anyway: projects, research notes, labs, certifications, and this site.",
  },
  {
    year: "Proof",
    title: "Turning learning into visible work",
    text: "I built GitHub repositories, threat briefs, malware write-ups, Python tools, CTI labs, and Cyber Grad Chronicles to turn learning into visible evidence instead of waiting for someone else to validate the work.",
  },
  {
    year: "2026",
    title: "Graduating and continuing to build",
    text: "I completed my B.S. in Cybersecurity and kept building beyond the degree through certifications, portfolio projects, research, and hands-on practice.",
  },
  {
    year: "August 2026",
    title: "The opportunity finally came",
    text: "I accepted an IT Operations Coordinator position in Fairbanks, Alaska. After years of building proof through school, labs, certifications, projects, and research, I finally had the opportunity to bring that foundation into a professional technology environment.",
  },
  {
    year: "Now",
    title: "Building experience from the inside",
    text: "My work now includes IT operations, systems administration, vendor coordination, software and licensing management, device lifecycle support, documentation, troubleshooting, and process improvement. I am learning how technology actually operates inside an organization and how security connects to those everyday systems and decisions.",
  },
  {
    year: "Cyber Grad Chronicles",
    title: "Documenting the next chapter",
    text: "Cyber Grad Chronicles continues to evolve with me. What started as a place to document learning and prove what I could do is now also a record of what happens after the first opportunity: learning on the job, building professional experience, and continuing toward cybersecurity.",
  },
  {
    year: "Future",
    title: "Continuing toward cybersecurity",
    text: "The goal is still cybersecurity and threat intelligence. The path now includes a stronger operational foundation, real-world IT experience, and a better understanding of the systems, people, and business decisions security is meant to protect.",
  },
  {
    year: "Long Term",
    title: "Germany and graduate school",
    text: "Long-term, I plan to build a cybersecurity career in Europe and pursue my master’s degree in Germany, focusing on threat intelligence, cybercrime, and adversary behavior.",
  },
];

const reflections = [
  {
    title: "The Opportunity Finally Came",
    text: "What changed when years of building proof and waiting finally became my first professional IT opportunity.",
    link: "/research/opportunity-finally-came",
  },
  {
    title: "Proof Before Permission",
    text: "Why I stopped waiting to be chosen and started building visible evidence through labs, research, projects, and public work.",
    link: "/research/building-proof-before-opportunity",
  },
  {
    title: "Qualified, Capable, and Still Waiting",
    text: "The chapter before the opportunity: what prolonged rejection taught me about the gap between preparation and being chosen.",
    link: "/research/qualified-capable-still-waiting",
  },
  {
    title: "Building from the Interior",
    text: "The reflection behind building proof from a place people did not expect.",
    link: "/research/building-from-alaska",
  },
  {
    title: "The Portable Career",
    text: "How relocation, military spouse life, and rebuilding shaped the kind of career I wanted to create.",
    link: "/research/military-spouse-cybersecurity",
  },
];

export default function JourneyPage() {
  return (
    <>
      <Navbar />

      <main className="journey-page">
        {/* HERO */}
        <section className="journey-hero">
          <div className="journey-overlay" />

          <div className="journey-hero-copy">
            <p className="journey-eyebrow">Journey • Resilience • Proof</p>

            <h1>
              The path behind <span>the proof.</span>
            </h1>

            <div className="journey-title-line" />

            <p>
              This is the personal side of Cyber Grad Chronicles: the story of
              building a career in technology from Alaska, navigating military
              spouse life, creating proof before opportunity, and now learning
              what comes after the first professional IT role.
            </p>

            <p>
              The technical proof lives on my Credentials page. This page is the
              timeline behind it.
            </p>

            <div className="journey-buttons">
              <Link href="/credentials" className="journey-btn primary">
                View Credentials
              </Link>

              <Link
                href="/research/opportunity-finally-came"
                className="journey-btn secondary"
              >
                Read the Latest Chapter
              </Link>
            </div>
          </div>
        </section>

        {/* CORE BELIEF */}
        <section className="journey-intro">
          <p className="journey-eyebrow">Core Belief</p>

          <h2>You can never fail if you do not stop trying.</h2>

          <p>
            This journey is not about a perfect path. It is about persistence,
            rebuilding, creating visible proof, earning opportunities, and then
            continuing to grow once those opportunities arrive.
          </p>

          <div className="journey-mini-grid">
            <span>Alaska</span>
            <span>Military Spouse</span>
            <span>IT Operations</span>
            <span>Cybersecurity</span>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="journey-section">
          <div className="journey-section-header">
            <p className="journey-eyebrow">Timeline</p>

            <h2>The story in milestones.</h2>

            <p>
              From starting over in Alaska to building proof, graduating,
              landing my first professional IT role, and continuing toward
              cybersecurity.
            </p>
          </div>

          <div className="journey-timeline">
            {timeline.map((item) => (
              <article
                className="journey-timeline-item card"
                key={item.title}
              >
                <p className="journey-tag">{item.year}</p>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* TURNING POINT */}
        <section className="journey-turning-point">
          <p className="journey-eyebrow">The Turning Point</p>

          <h2>
            I built the proof before I had the opportunity. Then the opportunity
            finally came.
          </h2>

          <p>
            The labs, research, certifications, projects, applications, and
            hours spent building from Alaska eventually led to my first
            professional IT role in Fairbanks.
          </p>

          <p>
            The challenge is different now. Instead of only proving that I can
            do the work, I get to learn how technology operates inside a real
            organization, build professional experience, and strengthen the
            foundation I will eventually bring into cybersecurity.
          </p>

          <div className="journey-buttons">
            <Link
              href="/research/opportunity-finally-came"
              className="journey-btn primary"
            >
              Read the New Chapter
            </Link>

            <Link
              href="/research/building-proof-before-opportunity"
              className="journey-btn secondary"
            >
              Read Proof Before Permission
            </Link>
          </div>
        </section>

        {/* CAREER JOURNAL */}
        <section className="journey-section journey-journal-section">
          <div className="journey-section-header">
            <p className="journey-eyebrow">Career Journal</p>

            <h2>Reflections along the way.</h2>

            <p>
              The parts of the journey that do not fit neatly on a resume:
              relocation, rejection, uncertainty, building proof, getting the
              opportunity, and figuring out what comes next.
            </p>
          </div>

          <div className="journey-card-grid">
            {reflections.map((post) => (
              <Link
                href={post.link}
                className="journey-card"
                key={post.title}
              >
                <h3>{post.title}</h3>

                <p>{post.text}</p>

                <span>Read reflection →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* NEXT CHAPTER */}
        <section className="journey-closing">
          <p className="journey-eyebrow">The Next Chapter</p>

          <h2>Getting the opportunity was not the finish line.</h2>

          <p>
            Working in IT operations is giving me a different kind of education:
            seeing how systems, vendors, devices, documentation, users, budgets,
            and security decisions connect inside a real organization.
          </p>

          <p>
            The goal is still cybersecurity and threat intelligence. The path
            just looks different now that I am building professional experience
            from the inside.
          </p>

          <div className="journey-closing-links">
            <Link href="/research">Explore the Research →</Link>

            <Link href="/credentials">View Credentials →</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}