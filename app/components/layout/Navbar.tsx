import Link from "next/link";
import "./navbar.css";

export default function LocalBanner() {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <Link href="/" className="navbar-logo">
        CYBER GRAD <span>CHRONICLES</span>
      </Link>

      <div className="navbar-links">
        <div className="nav-menu">
          <Link href="/academy">Academy</Link>
          <div className="nav-dropdown">
            <Link href="/academy">Overview</Link>
            <Link href="/academy/cybersecurity-101">Lessons</Link>
            <Link href="/academy">Learning Paths</Link>
            <Link href="/academy/threats">Quizzes &amp; Practice</Link>
            <Link href="/academy">Achievements</Link>
          </div>
        </div>

        <div className="nav-menu">
          <Link href="/career">Career Intelligence</Link>
          <div className="nav-dropdown">
            <Link href="/career">Career Roadmap</Link>
            <Link href="/career/resume-review">Resume Support</Link>
            <Link href="/career/portfolio-review">Portfolio Tools</Link>
            <Link href="/career/interview-prep">Interview Preparation</Link>
            <Link href="/career/mentorship">Mentorship</Link>
          </div>
        </div>

        <div className="nav-menu">
          <Link href="/research">Research Lab</Link>
          <div className="nav-dropdown">
            <Link href="/research/cti-research-lab">Threat Intelligence</Link>
            <Link href="/research/prompt-injection">AI Research</Link>
            <Link href="/research/ransomware-tic-brief">Ransomware Analysis</Link>
            <Link href="/research/python-security-tools">Technical Projects</Link>
            <Link href="/research">Research Archive</Link>
          </div>
        </div>

        <div className="nav-menu">
          <Link href="/military-spouse-hub">Community</Link>
          <div className="nav-dropdown">
            <Link href="/military-spouse-hub">Military Spouse Hub</Link>
            <Link href="/military-spouse-hub/where-to-start">Practical Resources</Link>
            <Link href="/military-spouse-hub/community">Encouragement</Link>
            <Link href="/military-spouse-hub/community/success-stories">Stories</Link>
          </div>
        </div>

        <div className="nav-menu">
          <Link href="/about">About the Founder</Link>
          <div className="nav-dropdown">
            <Link href="/journey">My Journey</Link>
            <Link href="/credentials">Credentials</Link>
            <Link href="/about">Experience</Link>
            <a href="https://github.com/millie-altman" target="_blank" rel="noopener noreferrer">GitHub Projects</a>
            <Link href="/about">Future Digital Twin</Link>
          </div>
        </div>
      </div>

      <div className="navbar-actions">
        <Link href="/my-journey" className="nav-journey-link">
          My Journey
        </Link>
        <Link href="/connect" className="nav-button">
          Connect
        </Link>
      </div>
    </nav>
  );
}
