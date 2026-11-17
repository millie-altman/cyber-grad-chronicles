import Link from "next/link";
import { researchCategories } from "../../research/categories";
import "./footer.css";

const coreLinks = [
  { href: "/academy", label: "Academy" },
  { href: "/career", label: "Career Intelligence" },
  { href: "/research", label: "Research Lab" },
  { href: "/military-spouse-hub", label: "Community" },
  { href: "/about", label: "About the Founder" },
];

const journeyLinks = [
  { href: "/my-journey", label: "My Journey Dashboard" },
  { href: "/journey", label: "Founder's Journey" },
  { href: "/credentials", label: "Credentials" },
  { href: "/changelog", label: "What's New" },
  { href: "/next-chapter", label: "The Next Chapter" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/in/millieealtman/", label: "LinkedIn" },
  { href: "https://github.com/millie-altman", label: "GitHub" },
  { href: "https://www.instagram.com/cybergradchronicles", label: "Instagram" },
  { href: "https://www.tiktok.com/@cybergradchronicles", label: "TikTok" },
];

export default function Footer() {
  const navigationGroups = [
    { id: "core", title: "Explore CGC", links: coreLinks },
    {
      id: "research",
      title: "Research Library",
      links: researchCategories.map((category) => ({
        href: `/research#${category.id}`,
        label: category.label,
      })),
    },
    { id: "journey", title: "Keep Building", links: journeyLinks },
  ];

  return (
    <footer className="footer">
      <div className="footer-shell">
        <div className="footer-brand">
          <p className="footer-eyebrow">Cybersecurity · Learning · Resilience</p>
          <Link href="/" className="footer-brand-link">
            Cyber Grad <span>Chronicles</span>
          </Link>
          <p className="footer-description">
            A cybersecurity learning hub, research archive, and career resource
            for people building their path into cyber.
          </p>
          <Link href="/connect" className="footer-contact">
            Get in touch <span aria-hidden="true">→</span>
          </Link>
          <nav className="footer-socials" aria-label="CGC social profiles">
            {socialLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} (opens in a new tab)`}
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>
        </div>

        <nav className="footer-navigation" aria-label="Footer navigation">
          {navigationGroups.map((group) => (
            <section
              className="footer-column"
              aria-labelledby={`footer-${group.id}-heading`}
              key={group.id}
            >
              <h2 id={`footer-${group.id}-heading`}>{group.title}</h2>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>© 2026 Cyber Grad Chronicles · Built by Millie Altman</p>
          <p>Learning in public. Proof in progress.</p>
        </div>
      </div>
    </footer>
  );
}
