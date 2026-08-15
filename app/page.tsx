import LocalBanner from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Link from "next/link";
import "./home.css";

export default function HomePage() {
  return (
    <>
      <LocalBanner />

      <main className="home-page">
        {/* HERO */}
        <section className="cg-hero">
          <div className="cg-hero-overlay" />

          <div className="cg-hero-content">
            <p className="cg-eyebrow">
              Cybersecurity • Learning • Careers • Resilience
            </p>

            <h1>
              Cyber Grad <span>Chronicles</span>
            </h1>

            <p className="cg-hero-text">
              A cybersecurity learning hub, portfolio, research archive, and
              career resource built for students, career changers, military
              spouses, and rural learners.
            </p>

            <div className="cg-buttons">
              <Link href="/academy" className="cg-btn primary">
                Visit the Academy
              </Link>

              <Link href="/career" className="cg-btn secondary">
                Explore Career Support
              </Link>
            </div>

            <Link href="/journey" className="cg-hero-text-link">
              Read the story behind Cyber Grad Chronicles
              <span aria-hidden="true"> →</span>
            </Link>
          </div>
        </section>

        {/* MISSION */}
        <section className="cg-intro">
          <p className="cg-eyebrow">Mission</p>

          <h2>You can never fail if you do not stop trying.</h2>

          <p>
            Cyber Grad Chronicles documents the process of learning, building,
            researching, failing forward, and proving that location,
            background, and an unconventional path do not define potential.
          </p>
        </section>

        {/* EXPLORE */}
        <section className="cg-section">
          <div className="cg-section-header">
            <p className="cg-eyebrow">Explore</p>

            <h2>Choose where you want to begin.</h2>

            <p>
              Explore cybersecurity research, career support, credentials,
              community resources, and the journey behind the work.
            </p>
          </div>

          <div className="cg-card-grid">
            <Link href="/academy" className="cg-card cg-card-featured">
              <span>01</span>

              <div className="cg-card-badge">In Progress</div>

              <h3>Academy</h3>

              <p>
                A beginner-friendly cybersecurity learning space currently being
                rebuilt with clearer lessons, practical learning paths, and a
                simpler experience.
              </p>

              <div className="cg-card-link">
                Preview the Academy
                <span aria-hidden="true"> →</span>
              </div>
            </Link>

            <Link href="/research" className="cg-card">
              <span>02</span>

              <h3>Research</h3>

              <p>
                Threat briefs, actor profiles, lab notes, cyber awareness
                articles, and career reflections.
              </p>

              <div className="cg-card-link">
                Explore the Archive
                <span aria-hidden="true"> →</span>
              </div>
            </Link>

            <Link href="/career" className="cg-card">
              <span>03</span>

              <h3>Career Intelligence</h3>

              <p>
                Personalized resume, LinkedIn, GitHub, portfolio, and interview
                support for people building their professional path.
              </p>

              <div className="cg-card-link">
                View Career Services
                <span aria-hidden="true"> →</span>
              </div>
            </Link>

            <Link href="/credentials" className="cg-card">
              <span>04</span>

              <h3>Credentials</h3>

              <p>
                Certifications, technical projects, academic achievements, and
                evidence of continued professional growth.
              </p>

              <div className="cg-card-link">
                View Credentials
                <span aria-hidden="true"> →</span>
              </div>
            </Link>

            <Link href="/military-spouse-hub" className="cg-card">
              <span>05</span>

              <h3>Military Spouse Hub</h3>

              <p>
                Career resources, education programs, funding options, remote
                work support, and relocation guidance.
              </p>

              <div className="cg-card-link">
                Explore the Hub
                <span aria-hidden="true"> →</span>
              </div>
            </Link>

            <Link href="/journey" className="cg-card">
              <span>06</span>

              <h3>Journey</h3>

              <p>
                Honest reflections on learning cybersecurity, building from
                Alaska, career transitions, resilience, and progress.
              </p>

              <div className="cg-card-link">
                Read the Journey
                <span aria-hidden="true"> →</span>
              </div>
            </Link>
          </div>
        </section>

        {/* CAREER INTELLIGENCE FEATURE */}
        <section className="cg-career-feature">
          <div className="cg-career-feature-content">
            <div>
              <p className="cg-eyebrow">Career Intelligence</p>

              <h2>Your experience deserves to be understood.</h2>

              <p>
                Career Intelligence provides detailed, personalized support for
                job seekers who need help communicating their skills,
                experience, projects, and professional direction.
              </p>
            </div>

            <div className="cg-career-feature-services">
              <Link href="/career/resume-review">
                <span>01</span>
                Resume Review
              </Link>

              <Link href="/career/resume-rewrite">
                <span>02</span>
                Resume Rewrite
              </Link>

              <Link href="/career/linkedin-review">
                <span>03</span>
                LinkedIn Review
              </Link>

              <Link href="/career/github-review">
                <span>04</span>
                GitHub Review
              </Link>

              <Link href="/career/portfolio-review">
                <span>05</span>
                Portfolio Review
              </Link>

              <Link href="/career/interview-prep">
                <span>06</span>
                Interview Preparation
              </Link>
            </div>
          </div>

          <div className="cg-buttons">
            <Link href="/career" className="cg-btn primary">
              Explore Career Intelligence
            </Link>

            <Link href="/career/bundles" className="cg-btn secondary">
              Compare Bundles
            </Link>
          </div>
        </section>

        {/* CALLOUT */}
        <section className="cg-callout">
          <p className="cg-eyebrow">Built with purpose</p>

          <h2>
            Cybersecurity education and career resources should be easier to
            find.
          </h2>

          <p>
            This platform brings together the lessons, tools, programs, study
            materials, professional guidance, and opportunities I wish I had
            when I started building a cybersecurity career from rural Alaska.
          </p>

          <div className="cg-buttons">
            <Link href="/military-spouse-hub" className="cg-btn primary">
              View Community Resources
            </Link>

            <Link href="/connect" className="cg-btn secondary">
              Connect With Me
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}