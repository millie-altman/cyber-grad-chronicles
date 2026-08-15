import Link from "next/link";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-shell">
        {/* BRAND */}
        <div className="footer-brand">
          <p className="footer-eyebrow">
            Cybersecurity • Learning • Resilience
          </p>

          <h3>Cyber Grad Chronicles</h3>

          <p>
            A cybersecurity learning hub, research archive, and career resource
            for people building their path into cyber.
          </p>
        </div>

        {/* EXPLORE */}
        <div className="footer-column">
          <h4>Explore</h4>

          <Link href="/academy">Academy</Link>
          <Link href="/research">Research</Link>
          <Link href="/career">Career</Link>
          <Link href="/journey">Journey</Link>
        </div>

        {/* RESOURCES */}
        <div className="footer-column">
          <h4>Resources</h4>

          <Link href="/credentials">Credentials</Link>
          <Link href="/military-spouse-hub">
            Military Spouse Hub
          </Link>
          <Link href="/about">About</Link>
          <Link href="/connect">Connect</Link>
        </div>

        {/* CONNECT */}
        <div className="footer-column">
          <h4>Connect</h4>

          <a
            href="https://www.linkedin.com/in/millieealtman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/millie-altman"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.instagram.com/cybergradchronicles"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://www.tiktok.com/@cybergradchronicles"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Cyber Grad Chronicles · Built by Millie Altman ·
          Learning in public · Proof in progress.
        </p>
      </div>
    </footer>
  );
}