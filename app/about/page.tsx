import Link from "next/link";
import LocalBanner from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./about.css";

const aboutCards = [
  {
    icon: "✦",
    title: "My Purpose",
    text: "To inspire, educate, and connect with those who are passionate about cybersecurity, whether they are just starting out or deep in the field.",
  },
  {
    icon: "⌕",
    title: "What You’ll Find",
    text: "My journey, technical writeups, research, projects, certifications, and everything I am building as I grow in this ever-evolving industry.",
  },
  {
    icon: "♙",
    title: "Who It’s For",
    text: "Students, professionals, recruiters, military spouses, rural learners, and anyone who believes cybersecurity knowledge should be accessible.",
  },
  {
    icon: "♜",
    title: "Built With Intention",
    text: "Every section is designed with clarity, purpose, and the belief that knowledge should be shared, not hoarded.",
  },
];

export default function AboutPage() {
  return (
    <>
      <LocalBanner />

      <main className="about-page">
        <section className="about-hero">
          <div className="about-hero-overlay" />

          <div className="about-hero-copy">
            <p className="about-eyebrow">About Me</p>

            <h1>
              Why This Site <span>Exists</span>
            </h1>

            <div className="about-title-line" />

            <p>
              Cyber Grad Chronicles is my way of giving back, staying
              accountable, and helping others on their own cybersecurity journey.
            </p>

            <p>This is more than a website; it is a purpose.</p>

            <Link href="/journey" className="about-btn">
              Read My Journey
            </Link>
          </div>
        </section>

        <section className="about-intro">
          <p className="about-eyebrow">Cybersecurity • Education • Community</p>

          <h2>Cybersecurity is more than a profession; it is a calling.</h2>

          <p>
            I built this space to document the process of learning in public,
            building technical skills, researching real threats, and creating
            resources that make cybersecurity feel less intimidating and more
            accessible.
          </p>
        </section>

        <section className="about-card-grid">
          {aboutCards.map((card) => (
            <article className="about-card" key={card.title}>
              <div className="about-card-icon">{card.icon}</div>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </article>
          ))}
        </section>

        <section className="about-statement">
          <div className="about-statement-copy">
            <p className="about-eyebrow">The Bigger Why</p>

            <blockquote>
              I built this to hold myself accountable, share openly, and
              contribute positively to a community that has given me so much.
            </blockquote>

            <div className="about-title-line" />

            <div className="about-buttons">
              <Link href="/research" className="about-btn">
                Explore Research
              </Link>

              <Link href="/connect" className="about-btn secondary">
                Connect With Me
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}