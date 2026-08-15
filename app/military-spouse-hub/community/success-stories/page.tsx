import LocalBanner from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import Link from "next/link";
import "../../military-spouse-hub.css";
import "../community.css";

const storyCategories = [
  {
    title: "Career Pivots",
    description:
      "Stories from spouses who changed industries, restarted careers, or broke into cyber, tech, federal, and remote work.",
  },
  {
    title: "Education Wins",
    description:
      "Journeys involving degrees, certifications, MyCAA, scholarships, self-study, and free learning pathways.",
  },
  {
    title: "Remote Work Wins",
    description:
      "How military spouses built flexible, portable careers that could survive relocation and constant change.",
  },
];

const featuredStories = [
  {
    title: "Starting Over After PCS",
    text: "A spouse who rebuilt her resume after a cross-country move and landed her first remote role in under six months.",
  },
  {
    title: "From Caregiving to Cybersecurity",
    text: "Turning a long career gap into a structured learning path with certifications, labs, and a new professional identity.",
  },
  {
    title: "Building a Degree Through Deployments",
    text: "Finishing school while balancing military life, uncertainty, and the emotional weight of long-distance seasons.",
  },
];

const reflectionPrompts = [
  "What changed your career direction?",
  "What resource helped you the most?",
  "What was harder than expected?",
  "What advice would you give another military spouse?",
  "What are you proud of now?",
  "What would you do differently?",
];

export default function SuccessStoriesPage() {
  return (
    <>
      <LocalBanner />

      <main className="msh-page community-subpage">
        <section className="community-subpage-hero">
          <div className="community-subpage-hero-card">
            <nav className="msh-breadcrumbs">
              <Link href="/military-spouse-hub">Military Spouse Hub</Link>
              <span>›</span>
              <Link href="/military-spouse-hub/community">Community</Link>
              <span>›</span>
              <span>Success Stories</span>
            </nav>

            <p className="msh-eyebrow">Community • Success Stories</p>

            <h1>
              Proof that progress <span>is not linear.</span>
            </h1>

            <h2>Real stories from nontraditional paths.</h2>

            <p>
              This space exists for military spouse pivots, education wins,
              remote work breakthroughs, cybersecurity journeys, and reminders
              that starting over does not mean starting from zero.
            </p>

            <div className="msh-hero-actions">
              <Link href="#stories" className="msh-button">
                Explore Stories
              </Link>

              <Link href="/connect" className="msh-button secondary">
                Share Your Story
              </Link>
            </div>
          </div>
        </section>

        <section className="community-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Story Categories</p>
            <h2>Ways progress can look.</h2>
            <p>
              Not every success story looks the same. These are the paths we
              want to highlight.
            </p>
          </div>

          <div className="community-highlight-grid">
            {storyCategories.map((story) => (
              <article className="community-subpage-card" key={story.title}>
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                <span>Coming Soon</span>
              </article>
            ))}
          </div>
        </section>

        <section className="community-subpage-section" id="stories">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Featured Stories</p>
            <h2>Snapshots of resilience.</h2>
          </div>

          <div className="community-journal-grid">
            {featuredStories.map((story) => (
              <article className="community-journal-card" key={story.title}>
                <h3>{story.title}</h3>
                <p>{story.text}</p>
                <span>Community Archive</span>
              </article>
            ))}
          </div>
        </section>

        <section className="community-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Reflection Prompts</p>
            <h2>Questions for future submissions.</h2>
          </div>

          <div className="msh-chip-grid">
            {reflectionPrompts.map((prompt) => (
              <span key={prompt}>{prompt}</span>
            ))}
          </div>
        </section>

        <section className="community-subpage-callout">
          <div>
            <p className="msh-eyebrow">Community Reminder</p>

            <h2>Your progress still counts.</h2>

            <p>
              A certification. A first project. A stronger resume. A hard
              season survived. A brave application sent. These all count.
            </p>
          </div>

          <Link href="/military-spouse-hub/community" className="msh-button">
            Back to Community
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}