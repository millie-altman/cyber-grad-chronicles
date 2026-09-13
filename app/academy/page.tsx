import Image from "next/image";
import Link from "next/link";
import { academyModules } from "./academyData";

export default function AcademyPage() {
  const lessonCount = academyModules.reduce(
    (count, module) => count + module.lessons.length,
    0,
  );

  return (
    <main className="academy-page">
      <section className="academy-hero">
        <div className="academy-shell academy-hero-grid">
          <div>
            <p className="academy-eyebrow">Cyber Grad Chronicles Academy</p>
            <h1>Cybersecurity, explained one clear lesson at a time.</h1>
            <p className="academy-lede">Build practical digital safety habits, understand common threats, and explore cybersecurity without assuming you already speak the language.</p>
            <div className="academy-actions">
              <a className="academy-button academy-button-primary" href="#modules">Explore modules</a>
              <Link className="academy-button academy-button-secondary" href="/academy/cybersecurity-101/what-is-cybersecurity">Start your first lesson</Link>
            </div>
          </div>
          <aside className="academy-overview" aria-label="Academy overview">
            <span>Learning library</span><strong>{academyModules.length} modules</strong><strong>{lessonCount} beginner lessons</strong>
            <p>No login, no assumed experience, and a practical action at the end of every lesson.</p>
          </aside>
        </div>
      </section>

      <section className="academy-section" id="modules">
        <div className="academy-shell">
          <div className="academy-section-heading">
            <div><p className="academy-eyebrow">Choose a learning path</p><h2>Start wherever you are.</h2></div>
            <p>Follow the modules in order for a broad foundation, or open the topic that is most useful today.</p>
          </div>
          <div className="academy-module-grid">
            {academyModules.map((module) => (
              <article className="academy-module-card" key={module.slug}>
                <Link href={`/academy/${module.slug}`} className="academy-module-image" aria-label={`Open ${module.title}`}>
                  <Image src={module.image} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                  <span>{module.number}</span>
                </Link>
                <div className="academy-module-content">
                  <p className="academy-module-meta">{module.lessons.length} lessons · Beginner</p>
                  <h3><Link href={`/academy/${module.slug}`}>{module.title}</Link></h3>
                  <p>{module.description}</p>
                  <ul aria-label={`${module.title} lessons`}>
                    {module.lessons.map((lesson) => <li key={lesson.slug}><Link href={`/academy/${module.slug}/${lesson.slug}`}>{lesson.title}<span aria-hidden="true">→</span></Link></li>)}
                  </ul>
                  <Link className="academy-text-link" href={`/academy/${module.slug}`}>View module <span aria-hidden="true">→</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="academy-method">
        <div className="academy-shell academy-method-grid">
          <div><p className="academy-eyebrow">How lessons work</p><h2>Learn it. Recognize it. Use it.</h2></div>
          <ol>
            <li><span>01</span><div><h3>Plain-language context</h3><p>Meet each idea without unexplained acronyms or unnecessary jargon.</p></div></li>
            <li><span>02</span><div><h3>Everyday examples</h3><p>Connect concepts to the apps, devices, and decisions you already use.</p></div></li>
            <li><span>03</span><div><h3>One practical takeaway</h3><p>Finish with a safe, manageable action that reinforces the lesson.</p></div></li>
          </ol>
        </div>
      </section>
    </main>
  );
}
