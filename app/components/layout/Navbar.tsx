import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
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
            <Link href="/academy#academy-library">Quizzes &amp; Practice</Link>
            <Link href="/my-journey/rewards">Achievements</Link>
            <Link href="/next-chapter">The Next Chapter</Link>
          </div>
        </div>

        <div className="nav-menu">
          <Link href="/career">Career Intelligence</Link>
          <div className="nav-dropdown">
            <Link href="/next-chapter#next-07">Career Roadmap</Link>
            <Link href="/next-chapter#next-02">Career Packages</Link>
            <Link href="/career/ai-tools">AI Tools</Link>
            <Link href="/career#military-spouse-resources">Military Spouse Resources</Link>
            <Link href="/career/resume-review">Resume Support</Link>
            <Link href="/career/linkedin-review">LinkedIn Review</Link>
            <Link href="/career/portfolio-review">Portfolio Tools</Link>
            <Link href="/career/interview-prep">Interview Preparation</Link>
            <Link href="/career/mentorship">Mentorship</Link>
          </div>
        </div>

        <div className="nav-menu">
          <Link href="/research">Research Lab</Link>
          <div className="nav-dropdown">
            <Link href="/research#threat-intelligence">Threat Intelligence</Link>
            <Link href="/research#labs-projects">Labs &amp; Projects</Link>
            <Link href="/research#career-journal">Career Journal</Link>
            <Link href="/research#community-awareness">Community Awareness</Link>
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
            <Link href="/journey">The Founder&apos;s Journey</Link>
            <Link href="/credentials">Credentials</Link>
            <a href="https://github.com/millie-altman" target="_blank" rel="noopener noreferrer">GitHub Projects</a>
            <Link href="/next-chapter#next-01">Digital Twin</Link>
            <Link href="/next-chapter">The Next Chapter</Link>
          </div>
        </div>

      </div>

      <div className="navbar-actions">
        <Show when="signed-in">
          <Link href="/my-journey" className="nav-journey-link">
            My Journey
          </Link>
        </Show>
        <div className="navbar-auth" aria-label="Account actions">
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button type="button" className="nav-auth-link">Sign in</button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button type="button" className="nav-auth-button">Sign up</button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
        <Link href="/connect" className="nav-button">
          Connect
        </Link>
      </div>

      <details className="navbar-mobile-menu">
        <summary aria-label="Open navigation menu">Menu</summary>
        <div className="navbar-mobile-panel">
          <Link href="/academy">Academy</Link>
          <Link href="/academy/cybersecurity-101">Lessons</Link>
          <Link href="/academy#academy-library">Quizzes &amp; Practice</Link>
          <Link href="/my-journey/rewards">Academy Achievements</Link>
          <Link href="/career">Career Intelligence</Link>
          <Link href="/career/bundles">Career Packages</Link>
          <Link href="/career/ai-tools">AI Tools</Link>
          <Link href="/career#military-spouse-resources">Military Spouse Resources</Link>
          <Link href="/career/resume-review">Resume Support</Link>
          <Link href="/career/linkedin-review">LinkedIn Review</Link>
          <Link href="/career/portfolio-review">Portfolio Tools</Link>
          <Link href="/career/interview-prep">Interview Preparation</Link>
          <Link href="/research">Research Lab</Link>
          <Link href="/research#threat-intelligence">Threat Intelligence</Link>
          <Link href="/research#labs-projects">Labs &amp; Projects</Link>
          <Link href="/research#career-journal">Career Journal</Link>
          <Link href="/research#community-awareness">Community Awareness</Link>
          <Link href="/military-spouse-hub">Community</Link>
          <Link href="/military-spouse-hub/where-to-start">Practical Resources</Link>
          <Link href="/military-spouse-hub/community/success-stories">Stories</Link>
          <Link href="/about">About the Founder</Link>
          <Link href="/next-chapter">The Next Chapter</Link>
          <Link href="/journey">The Founder&apos;s Journey</Link>
          <Link href="/changelog">Changelog</Link>
          <Link href="/connect">Connect</Link>
        </div>
      </details>
    </nav>
  );
}
