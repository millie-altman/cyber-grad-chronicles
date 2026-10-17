import Link from "next/link";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-shell">
        <div className="footer-brand">
          <p className="footer-eyebrow">Cybersecurity · Learning · Resilience</p>
          <h3>Cyber Grad Chronicles</h3>
          <p>A cybersecurity learning hub, research archive, and career resource for people building their path into cyber.</p>
        </div>

        <div className="footer-column">
          <h4>Core Areas</h4>
          <Link href="/academy">Academy</Link>
          <Link href="/career">Career Intelligence</Link>
          <Link href="/research">Research Lab</Link>
          <Link href="/military-spouse-hub">Community</Link>
          <Link href="/about">About the Founder</Link>
        </div>

        <div className="footer-column">
          <h4>Keep Building</h4>
          <Link href="/my-journey">My Journey Dashboard</Link>
          <Link href="/journey">Founder&apos;s Journey</Link>
          <Link href="/credentials">Credentials</Link>
          <Link href="/changelog">Changelog / What&apos;s New</Link>
          <Link href="/connect">Connect</Link>
        </div>

        <div className="footer-column">
          <h4>Connect</h4>
          <a href="https://www.linkedin.com/in/millieealtman/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/millie-altman" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.instagram.com/cybergradchronicles" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.tiktok.com/@cybergradchronicles" target="_blank" rel="noopener noreferrer">TikTok</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Cyber Grad Chronicles · Built by Millie Altman · Learning in public · Proof in progress.</p>
      </div>
    </footer>
  );
}
