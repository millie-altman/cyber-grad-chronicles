import Link from "next/link";
import LocalBanner from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "../home.css";

const updates = [
  {
    date: "October 2026",
    title: "I moved across the country for my career",
    description: "A new Career Journal entry about moving from Alaska to Utah for a career opportunity, returning home four days later, and learning that changing direction does not erase how far you have come.",
    href: "/research/moved-across-the-country",
    items: ["Career Journal", "Resilience", "Life Transitions", "Military Spouse Journey"],
  },
  {
    date: "October 2026",
    title: "Rewards for your next step",
    description: "My Journey now includes downloadable resume templates, AI career prompts, GitHub-based portfolio walkthroughs, and reminders that you are not alone in the process.",
    href: "/my-journey/rewards",
    items: ["Resume templates", "AI career prompts", "Portfolio walkthroughs", "Encouraging notes"],
  },
  {
    date: "October 2026",
    title: "A clearer way forward",
    description: "Cyber Grad Chronicles is now organized around five connected core areas so learning, career development, research, community, and the founder story each have a clear home.",
    href: "/",
    items: ["Academy", "Career Intelligence", "Research Lab", "Community", "About the Founder"],
  },
  {
    date: "October 2026",
    title: "Your Command Center",
    description: "My Journey now gives visitors a focused place to see learning progress, milestones, career direction, and rewards without confusing it with the founder’s personal Journey page.",
    href: "/my-journey",
    items: ["Summary progress cards", "Learning path progress", "Career Path actions", "Milestone tracking"],
  },
  {
    date: "September 2026",
    title: "A more intentional visual system",
    description: "The platform is moving toward a warmer technical feel: charcoal surfaces, soft gold lighting, rounded cards, subtle glows, nature-inspired details, and a consistent type system.",
    href: "/",
    items: ["Elevated dashboard cards", "Circular progress visuals", "Polished hover states", "Global Libre Baskerville, Manrope, and JetBrains Mono typography"],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <LocalBanner />
      <main className="home-page cg-changelog-page">
        <section className="cg-changelog-hero">
          <p className="cg-eyebrow">The archive of progress</p>
          <h1>What&apos;s New</h1>
          <p>Follow the ideas, improvements, and small decisions shaping Cyber Grad Chronicles over time.</p>
        </section>

        <section className="cg-changelog-list" aria-label="Platform updates">
          {updates.map((update) => (
            <article
              className="cg-changelog-entry"
              id={update.title === "A clearer way forward" ? "clearer-way-forward" : update.title === "Your Command Center" ? "your-command-center" : update.title === "A more intentional visual system" ? "intentional-visual-system" : update.title === "Rewards for your next step" ? "rewards-for-your-next-step" : "moved-across-the-country"}
              key={update.title}
            >
              <p className="cg-latest-date">{update.date}</p>
              <div>
                <h2>{update.title}</h2>
                <p>{update.description}</p>
                <Link className="cg-changelog-link" href={update.href}>Explore this update →</Link>
                <ul>
                  {update.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <div className="cg-changelog-back">
          <Link href="/" className="cg-btn secondary">Back to the homepage</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
