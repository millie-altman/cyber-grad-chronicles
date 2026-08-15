import Link from "next/link";
import LocalBanner from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./connect.css";

const contactReasons = [
  "Cybersecurity collaboration",
  "Military spouse resources",
  "Portfolio or project questions",
  "Research or awareness topics",
  "Speaking, writing, or partnership ideas",
];

const socialLinks = [
  {
    title: "Email",
    text: "Best for direct messages, collaboration, and professional inquiries.",
    href: "mailto:cybergradchronicles@gmail.com",
    label: "Send email →",
  },
  {
    title: "LinkedIn",
    text: "Connect professionally and follow my cybersecurity career updates.",
    href: "https://www.linkedin.com/in/millieealtman/",
    label: "Open LinkedIn →",
  },
  {
    title: "GitHub",
    text: "View my cybersecurity projects, labs, tools, and research repositories.",
    href: "https://github.com/millie-altman",
    label: "Open GitHub →",
  },
  {
    title: "Spotify",
    text: "Listen to the playlists that keep me focused during studying, labs, research, and building Cyber Grad Chronicles.",
    href: "https://open.spotify.com/user/hvkuifisbso5ex16co10hnkr6",
    label: "Open Spotify →",
  },
  {
    title: "TikTok",
    text: "Follow Cyber Grad Chronicles for learning, resources, and updates.",
    href: "https://www.tiktok.com/@cybergradchronicles",
    label: "Open TikTok →",
  },
  {
    title: "Instagram",
    text: "Follow visual updates, resources, and Cyber Grad Chronicles posts.",
    href: "https://www.instagram.com/cybergradchronicles",
    label: "Open Instagram →",
  },
];

export default function ConnectPage() {
  return (
    <>
      <LocalBanner />

      <main className="connect-page">
        <section className="connect-hero">
          <div className="connect-overlay" />

          <div className="connect-hero-copy">
            <p className="connect-eyebrow">Connect • Collaborate • Community</p>

            <h1>
              Let&apos;s <span>Connect</span>
            </h1>

            <p>
              Reach out for cybersecurity conversations, collaboration ideas,
              resource sharing, portfolio questions, or community-focused cyber
              awareness work.
            </p>

            <div className="connect-buttons">
              <a href="mailto:cybergradchronicles@gmail.com" className="connect-btn">
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/in/millieealtman/"
                target="_blank"
                rel="noopener noreferrer"
                className="connect-btn secondary"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section className="connect-intro">
          <p className="connect-eyebrow">Best Reasons To Reach Out</p>
          <h2>Cybersecurity, resources, and shared learning.</h2>

          <div className="connect-reason-list">
            {contactReasons.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="connect-section">
          <div className="connect-section-header">
            <p className="connect-eyebrow">Find Me Online</p>
            <h2>Profiles and platforms.</h2>
          </div>

          <div className="connect-card-grid">
            {socialLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="connect-card card"
              >
                <h3>{link.title}</h3>
                <p>{link.text}</p>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="connect-form-section">
          <div className="connect-form-shell">
            <div className="connect-form-copy">
              <p className="connect-eyebrow">Message</p>
              <h2>Send a note.</h2>

              <p>
                Use the form for questions, collaboration ideas, resource
                suggestions, or professional contact. Please do not send
                sensitive information through this form.
              </p>

              <div className="connect-mini-grid">
                <span>Cybersecurity</span>
                <span>Military Spouses</span>
                <span>Research</span>
                <span>Projects</span>
              </div>
            </div>

            <form
              className="connect-form card"
              action="https://formspree.io/f/mpqgdjge"
              method="POST"
            >
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" required />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  rows={6}
                  required
                />
              </label>

              <button className="connect-btn" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </section>

        <section className="connect-callout">
          <div>
            <p className="connect-eyebrow">Community Note</p>
            <h2>Built for connection, not gatekeeping.</h2>

            <p>
              Cyber Grad Chronicles exists to make cybersecurity learning,
              career resources, and military spouse pathways easier to find and
              easier to understand.
            </p>

            <div className="connect-buttons">
              <Link href="/military-spouse-hub" className="connect-btn">
                Military Spouse Resources
              </Link>

              <Link href="/credentials" className="connect-btn secondary">
                View Credentials
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}