import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { researchArticles, ResearchCategory } from "./articleData";
import "./research.css";

const categories: {
  id: string;
  label: ResearchCategory;
  eyebrow: string;
  title: string;
  description: string;
}[] = [
  {
    id: "threat-intelligence",
    label: "Threat Intelligence",
    eyebrow: "Threat Intelligence",
    title: "Threat actors, ransomware, and finished intelligence.",
    description:
      "Actor profiles, ransomware analysis, malware case studies, and CTI-style intelligence products connected to my research archive.",
  },
  {
    id: "labs-projects",
    label: "Labs & Projects",
    eyebrow: "Labs & Projects",
    title: "Hands-on work turned into documented proof.",
    description:
      "Lab reflections, Python security tools, CTI environments, and project walkthroughs built to show practical skill development.",
  },
  {
    id: "career-journal",
    label: "Career Journal",
    eyebrow: "Career Journal",
    title: "The human side of building this career.",
    description:
      "Reflections on building from Alaska, military-spouse employment barriers, creating proof before opportunity, and documenting an unconventional cybersecurity journey.",
  },
  {
    id: "community-awareness",
    label: "Community Awareness",
    eyebrow: "Community Awareness",
    title: "Practical security education for real people.",
    description:
      "Plain-language guidance on phishing, passwords, social engineering, military family safety, and community cyber awareness.",
  },
];

const featuredArticle = researchArticles.find(
  (article) => article.slug === "get-to-know-me"
);

const featuredByCategory: Partial<Record<ResearchCategory, string>> = {
  "Threat Intelligence": "blackcat-alphv",
  "Labs & Projects": "cti-research-lab",
  "Career Journal": "opportunity-finally-came",
  "Community Awareness": "securing-the-interior",
};

function getArticlesByCategory(category: ResearchCategory) {
  return researchArticles.filter(
    (article) =>
      article.category === category && article.slug !== featuredArticle?.slug
  );
}

function FeaturedResearchCard({
  article,
}: {
  article: (typeof researchArticles)[number];
}) {
  return (
    <article className="featured-research-card card">
      {article.image ? (
        <div
          className="featured-research-image"
          style={{ backgroundImage: `url(${article.image})` }}
        />
      ) : (
        <div className="featured-research-image placeholder-image">
          <span>{article.type}</span>
        </div>
      )}

      <div className="featured-research-content">
        <div className="featured-research-meta">
          <span>{article.fileId}</span>
          <span>{article.type}</span>
          <span>{article.difficulty}</span>
        </div>

        <p className="research-eyebrow">Featured File</p>

        <h3>{article.title}</h3>

        <p>{article.description}</p>

        <div className="library-card-tags">
          {article.quickStart.slice(0, 4).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="featured-research-actions">
          <Link
            href={`/research/${article.slug}`}
            className="research-btn primary"
          >
            Open File
          </Link>

          {article.github && (
            <a
              href={article.github}
              target="_blank"
              rel="noopener noreferrer"
              className="research-btn secondary"
            >
              View GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ResearchArchiveItem({
  article,
}: {
  article: (typeof researchArticles)[number];
}) {
  return (
    <Link
      href={`/research/${article.slug}`}
      className="research-archive-item"
    >
      <div className="research-archive-id">
        <span>{article.fileId}</span>
      </div>

      <div className="research-archive-main">
        <div className="research-archive-heading">
          <h3>{article.title}</h3>
          <span>{article.type}</span>
        </div>

        <p>{article.description}</p>

        <div className="research-archive-tags">
          {article.quickStart.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="research-archive-open">
        <span>Open →</span>
      </div>
    </Link>
  );
}

function ResearchCard({
  article,
}: {
  article: (typeof researchArticles)[number];
}) {
  return (
    <Link
      href={`/research/${article.slug}`}
      className="library-card card with-image"
    >
      {article.image ? (
        <div
          className="library-card-image"
          style={{ backgroundImage: `url(${article.image})` }}
        />
      ) : (
        <div className="library-card-image placeholder-image">
          <span>{article.type}</span>
        </div>
      )}

      <div className="library-card-content">
        <div className="library-card-meta">
          <span>{article.type}</span>
          <span>{article.difficulty}</span>
        </div>

        <h3>{article.title}</h3>

        <p>{article.description}</p>

        <div className="library-card-tags">
          {article.quickStart.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <span className="library-card-link">Open file →</span>
      </div>
    </Link>
  );
}

export default function ResearchPage() {
  return (
    <>
      <Navbar />

      <main className="research-page intelligence-library">
        {/* HERO */}
        <section className="research-hero">
          <div className="research-overlay" />

          <div className="research-hero-copy">
            <p className="research-eyebrow">
              Threat Intelligence • Research • Learning in Public
            </p>

            <h1>
              Intelligence <span>Library</span>
            </h1>

            <div className="research-title-line" />

            <p>
              A curated archive of threat briefs, actor profiles, malware case
              studies, lab notes, career reflections, and cyber awareness
              resources built through documented practice.
            </p>

            <p>
              This is where Cyber Grad Chronicles becomes part research archive,
              part analyst notebook, and part proof-of-work portfolio.
            </p>

            <div className="research-buttons">
              <Link href="#threat-intelligence" className="research-btn primary">
                Browse Intelligence
              </Link>

              <Link
                href="/research/get-to-know-me"
                className="research-btn secondary"
              >
                Start With My Story
              </Link>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="research-intro">
          <p className="research-eyebrow">Intelligence Library</p>

          <h2>Research, reflection, and technical proof.</h2>

          <p>
            Browse threat intelligence, hands-on projects, career reflections,
            and practical cybersecurity resources built through documented
            learning and professional growth.
          </p>
        </section>

        {/* CATEGORY NAVIGATION */}
        <nav className="research-jump-strip" aria-label="Research categories">
          {categories.map((category) => (
            <a href={`#${category.id}`} key={category.id}>
              {category.eyebrow}
            </a>
          ))}
        </nav>

        {/* START HERE */}
        {featuredArticle && (
          <section className="research-section research-start-here">
            <div className="research-section-header">
              <p className="research-eyebrow">Start Here</p>

              <h2>The story behind Cyber Grad Chronicles.</h2>

              <p>
                New to the library? This reflection explains why I started
                building in public and what this archive is meant to document.
              </p>
            </div>

            <div className="featured-library-card">
              <ResearchCard article={featuredArticle} />
            </div>
          </section>
        )}

        {/* LIBRARY SECTIONS */}
        {categories.map((category) => {
          const articles = getArticlesByCategory(category.label);

          if (articles.length === 0) return null;

          const featuredSlug = featuredByCategory[category.label];

          const categoryFeaturedArticle = articles.find(
            (article) => article.slug === featuredSlug
          );

          const remainingArticles = articles.filter(
            (article) => article.slug !== featuredSlug
          );

          return (
            <section
              className="research-section"
              id={category.id}
              key={category.id}
            >
              <div className="research-section-header">
                <p className="research-eyebrow">{category.eyebrow}</p>

                <h2>{category.title}</h2>

                <p>{category.description}</p>
              </div>

              {categoryFeaturedArticle && (
                <FeaturedResearchCard article={categoryFeaturedArticle} />
              )}

              {remainingArticles.length > 0 && (
                <div className="research-archive-list">
                  <div className="research-archive-header">
                    <p className="research-eyebrow">Additional Files</p>
                    <span>{remainingArticles.length} entries</span>
                  </div>

                  {remainingArticles.map((article) => (
                    <ResearchArchiveItem
                      article={article}
                      key={article.slug}
                    />
                  ))}
                </div>
              )}
            </section>
          );
        })}

        {/* CLOSING CALLOUT */}
        <section className="research-callout">
          <div>
            <p className="research-eyebrow">Why This Library Exists</p>

            <h2>
              Building from Alaska taught me to document the work before
              the opportunity arrived.
            </h2>

            <p>
              <p>
                Every file in this library is part of that record: a lab, reflection,
                research brief, technical project, or resource created while building my
                path into technology and cybersecurity.
              </p>
            </p>

            <div className="research-buttons">
              <Link href="/journey" className="research-btn primary">
                Read the Journey
              </Link>

              <Link href="/credentials" className="research-btn secondary">
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