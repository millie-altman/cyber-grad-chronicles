import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Link from "next/link";
import "../military-spouse-hub.css";
import "./community.css";

const storyCards = [
  {
    tag: "Relocation to Resilience",
    title: "From Uncertainty to Purpose",
    text: "After multiple moves, she built a career path that gave her freedom, clarity, and fulfillment.",
    href: "/military-spouse-hub/community/success-stories",
    image: "/images/military-spouse-hub/relocation.png",
  },
  {
    tag: "Career Reinvention",
    title: "A New Chapter, A Stronger Me",
    text: "A career break became the reset she needed to launch a new professional path.",
    href: "/military-spouse-hub/career/career-breaks",
    image: "/images/military-spouse-hub/career-resources.png",
  },
  {
    tag: "Education & Growth",
    title: "Degree in Progress, Future in Focus",
    text: "Pursuing education while supporting the mission because personal goals matter too.",
    href: "/military-spouse-hub/education",
    image: "/images/military-spouse-hub/education.png",
  },
];

const communityStats = [
  ["Real Stories", "Shared by military spouses building nontraditional paths"],
  ["Global Perspective", "Support that moves across duty stations and time zones"],
  ["Career Momentum", "Encouragement for education, remote work, and reinvention"],
  ["Stronger Together", "A reminder that you do not have to build alone"],
];

const communityPaths = [
  {
    title: "Success Stories",
    text: "Read examples of military spouses navigating education, work, relocation, and reinvention.",
    href: "/military-spouse-hub/community/success-stories",
  },
  {
    title: "Career Support",
    text: "Turn encouragement into action with resumes, LinkedIn, job boards, and interview prep.",
    href: "/military-spouse-hub/career",
  },
  {
    title: "Education Resources",
    text: "Find funded learning, scholarships, cybersecurity platforms, and skill-building options.",
    href: "/military-spouse-hub/education",
  },
];

export default function CommunityPage() {
  return (
    <>
      <Navbar />

      <main className="msh-page community-mockup-page">
        <section className="community-hero">
          <div className="community-hero-copy">
            <nav className="msh-breadcrumbs">
              <Link href="/military-spouse-hub">Military Spouse Hub</Link>
              <span>›</span>
              <span>Community</span>
            </nav>

            <p className="msh-eyebrow">Community</p>

            <h1>Community</h1>

            <h2>Real stories. Real people. Real impact.</h2>

            <p>
              Military spouse life can feel isolating when every season brings
              change. This space is for stories, support, encouragement, and
              reminders that your goals still matter no matter where duty calls.
            </p>
          </div>
        </section>

        <section className="community-stats">
          {communityStats.map(([label, text]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>✦</strong>
              <p>{text}</p>
            </div>
          ))}
        </section>

        <section className="community-personal-story">
          <div className="community-personal-story-card">
            <p className="msh-eyebrow">Personal Story</p>

            <h2>Why this space exists.</h2>

            <p>
              This section will hold a personal note about military spouse life,
              starting over, building a career through uncertainty, and why
              community matters when the path feels isolating.
            </p>

            <p>
              Placeholder: Add your story here — the moves, the setbacks, the
              growth, the career-building moments, and the reason you created
              this hub.
            </p>

            <Link href="/about" className="msh-button">
              Read More →
            </Link>
          </div>
        </section>

        <section className="community-stories">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Featured Success Stories</p>
            <h2>Stories that make the path feel possible.</h2>
            <p>
              Explore snapshots of resilience, reinvention, education, and
              career-building through military life.
            </p>
          </div>

          <div className="community-story-grid">
            {storyCards.map((story) => (
              <Link
                href={story.href}
                className="community-story-card"
                key={story.title}
              >
                <img src={story.image} alt="" />

                <div>
                  <span>{story.tag}</span>
                  <h3>{story.title}</h3>
                  <p>{story.text}</p>
                  <small>Read Story →</small>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="community-lower-grid">
          <div className="community-spotlight-card">
            <p className="msh-eyebrow">Community Spotlight</p>

            <div className="community-spotlight-inner">
              <img
                src="/images/military-spouse-hub/community.png"
                alt="Community spotlight"
              />

              <div>
                <h3>Meet Amber</h3>
                <span>Navy Spouse & Freelance Writer</span>
                <p>
                  Amber turned her writing skills into a portable freelance
                  career that gave her flexibility, confidence, and a way to
                  keep building through relocation.
                </p>

                <Link href="/military-spouse-hub/community/success-stories">
                  Read Amber’s Story →
                </Link>
              </div>
            </div>
          </div>

          <div className="community-quote-card">
            <p>
              “We may not wear the uniform, but we are part of the mission. Our
              stories, goals, and futures matter too.”
            </p>
          </div>
        </section>

        <section className="community-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Find Your Next Step</p>
            <h2>Community should lead to momentum.</h2>
          </div>

          <div className="community-cluster-grid">
            {communityPaths.map((path) => (
              <Link
                href={path.href}
                className="community-subpage-card"
                key={path.title}
              >
                <h3>{path.title}</h3>
                <p>{path.text}</p>
                <span>Explore →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="community-connect-card">
          <div>
            <p className="msh-eyebrow">Stay Connected</p>
            <p>
              Use community as a source of support, strategy, and encouragement
              while you build your next chapter.
            </p>
          </div>

          <Link
            href="/military-spouse-hub/community/success-stories"
            className="msh-button"
          >
            View Stories →
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}