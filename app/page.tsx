import LocalBanner from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Link from "next/link";
import "./home.css";

const coreAreas = [
  { number: "01", title: "Academy", href: "/academy", description: "Build practical cybersecurity knowledge through lessons, learning paths, quizzes, achievements, and module completion.", link: "Start learning" },
  { number: "02", title: "Career Intelligence", href: "/career", description: "Turn experience into direction with career roadmaps, resume and portfolio tools, interview preparation, and mentorship.", link: "Plan your next move" },
  { number: "03", title: "Research Lab", href: "/research", description: "Explore threat intelligence, AI research, ransomware analysis, technical projects, and field notes from the lab.", link: "Enter the lab" },
  { number: "04", title: "Community", href: "/military-spouse-hub", description: "Find encouragement, stories, practical resources, and a supportive starting point for military-connected learners.", link: "Find your community" },
  { number: "05", title: "About the Founder", href: "/about", description: "Follow the journey, credentials, experience, GitHub projects, and the future vision for a digital twin.", link: "Meet the founder" },
];

export default function HomePage() {
  return (
    <>
      <LocalBanner />
      <main className="home-page">
        <section className="cg-hero">
          <div className="cg-hero-overlay" />
          <div className="cg-hero-content">
            <p className="cg-eyebrow">Cybersecurity · Learning · Careers · Resilience</p>
            <h1>Cyber Grad <span>Chronicles</span></h1>
            <p className="cg-hero-text">A cybersecurity learning and career platform for students, career changers, military spouses, and rural learners building what comes next.</p>
            <div className="cg-buttons">
              <Link href="/academy" className="cg-btn primary">Visit the Academy</Link>
              <Link href="/my-journey" className="cg-btn secondary">View My Journey</Link>
            </div>
            <Link href="/journey" className="cg-hero-text-link">Read the story behind Cyber Grad Chronicles <span aria-hidden="true"> →</span></Link>
          </div>
        </section>

        <section className="cg-intro">
          <p className="cg-eyebrow">One platform, five ways forward</p>
          <h2>You can never fail if you do not stop trying.</h2>
          <p>Cyber Grad Chronicles brings learning, career development, research, community, and the founder&apos;s story into one connected experience. Start with the area that meets you where you are, then follow the path that fits what you are building.</p>
        </section>

        <section className="cg-section" aria-labelledby="core-areas-heading">
          <div className="cg-section-header">
            <p className="cg-eyebrow">Explore the platform</p>
            <h2 id="core-areas-heading">Choose where you want to begin.</h2>
            <p>Each area has its own purpose, while the whole platform works together to support your growth.</p>
          </div>
          <div className="cg-card-grid cg-core-grid">
            {coreAreas.map((area) => (
              <Link href={area.href} className="cg-card" key={area.title}>
                <span>{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <div className="cg-card-link">{area.link}<span aria-hidden="true"> →</span></div>
              </Link>
            ))}
          </div>
        </section>

        <section className="cg-journey-feature">
          <div>
            <p className="cg-eyebrow">Optional progress dashboard</p>
            <h2>Make your progress visible.</h2>
            <p>My Journey is a personal dashboard for tracking Academy modules, career activities, achievements, and next steps. It is separate from the founder&apos;s personal Journey page, so your progress and the story behind the platform stay easy to understand.</p>
          </div>
          <Link href="/my-journey" className="cg-btn primary">Explore My Journey</Link>
        </section>

        <section className="cg-career-feature">
          <div className="cg-career-feature-content">
            <div>
              <p className="cg-eyebrow">Career Intelligence</p>
              <h2>Your experience deserves to be understood.</h2>
              <p>Get focused support for communicating your skills, experience, projects, and professional direction.</p>
            </div>
            <div className="cg-career-feature-services">
              <Link href="/career/resume-review"><span>01</span>Resume Review</Link>
              <Link href="/career/resume-rewrite"><span>02</span>Resume Rewrite</Link>
              <Link href="/career/linkedin-review"><span>03</span>LinkedIn Review</Link>
              <Link href="/career/github-review"><span>04</span>GitHub Review</Link>
              <Link href="/career/portfolio-review"><span>05</span>Portfolio Review</Link>
              <Link href="/career/interview-prep"><span>06</span>Interview Preparation</Link>
            </div>
          </div>
          <div className="cg-buttons">
            <Link href="/career" className="cg-btn primary">Explore Career Intelligence</Link>
            <Link href="/career/bundles" className="cg-btn secondary">Compare Bundles</Link>
          </div>
        </section>

        <section className="cg-callout">
          <p className="cg-eyebrow">Built with purpose</p>
          <h2>There is more than one way to build a cybersecurity career.</h2>
          <p>This platform brings together the lessons, tools, research, professional guidance, and community resources I wish I had when I started building from rural Alaska.</p>
          <div className="cg-buttons">
            <Link href="/military-spouse-hub" className="cg-btn primary">View Community Resources</Link>
            <Link href="/connect" className="cg-btn secondary">Connect With Me</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
