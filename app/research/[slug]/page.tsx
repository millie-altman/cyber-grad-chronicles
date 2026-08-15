import Link from "next/link";
import { notFound } from "next/navigation";

import LocalBanner from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import { researchArticles } from "../articleData";
import { contentMap } from "../content";
import "../research.css";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return researchArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ResearchArticlePage({ params }: Props) {
  const { slug } = await params;

  const article = researchArticles.find((article) => article.slug === slug);

  if (!article) {
    notFound();
  }

  const ArticleContent = contentMap[article.slug];

  const relatedArticles = researchArticles.filter(
    (a) => a.slug !== article.slug && article.related?.includes(a.slug)
  );

  return (
    <>
      <LocalBanner />

      <main className="research-page research-watermark">
        <article className="library-article blog-post">
          <Link href="/research" className="back-link">
            ← Back to Intelligence Library
          </Link>

          <p className="eyebrow">
            {article.category}
            {article.type && ` • ${article.type}`}
          </p>

          <h1 className="blog-title">{article.title}</h1>

          <p className="blog-meta">{article.description}</p>

          <div className="quick-start-tags">
            {article.quickStart.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <p className="last-updated">Last Updated: {article.lastUpdated}</p>

          {article.image && (
            <div
              className="library-article-hero"
              style={{ backgroundImage: `url(${article.image})` }}
            />
          )}

          <section className="article-section">
            {ArticleContent ? (
              <ArticleContent />
            ) : (
              <p>
                This article is currently being expanded as part of my
                Intelligence Library. Check back soon for additional notes,
                research, and analysis.
              </p>
            )}
          </section>

          <section className="personal-note">
            <h2>Millie's Perspective</h2>
            <p>{article.note}</p>
          </section>

          <section className="article-section">
            <h2>Key Takeaways</h2>

            <ul>
              {article.keyTakeaways.map((takeaway) => (
                <li key={takeaway}>{takeaway}</li>
              ))}
            </ul>
          </section>

          {article.github && (
            <section className="github-callout">
              <h2>Project Repository</h2>

              <p>
                Interested in the complete project, lab documentation, or
                research notes? Explore the full repository on GitHub.
              </p>

              <a
                href={article.github}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn"
              >
                View on GitHub →
              </a>
            </section>
          )}

          {relatedArticles.length > 0 && (
            <section className="related-pages">
              <h2>Related Reading</h2>

              <div className="related-page-grid">
                {relatedArticles.map((related) => (
                  <Link key={related.slug} href={`/research/${related.slug}`}>
                    <span>{related.title}</span>
                    <small>{related.description}</small>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="lesson-navigation">
            <Link href="/research">← Back to Intelligence Library</Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}