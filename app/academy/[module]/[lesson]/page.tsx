import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { academyModules, getAcademyLesson } from "../../academyData";

export function generateStaticParams() {
  return academyModules.flatMap((module) =>
    module.lessons.map((lesson) => ({ module: module.slug, lesson: lesson.slug })),
  );
}

export async function generateMetadata({ params }: PageProps<"/academy/[module]/[lesson]">): Promise<Metadata> {
  const values = await params;
  const { lesson } = getAcademyLesson(values.module, values.lesson);
  return lesson ? { title: lesson.title, description: lesson.introduction, alternates: { canonical: `/academy/${values.module}/${lesson.slug}` } } : {};
}

export default async function LessonPage({ params }: PageProps<"/academy/[module]/[lesson]">) {
  const values = await params;
  const { academyModule, lesson } = getAcademyLesson(values.module, values.lesson);
  if (!academyModule || !lesson) notFound();

  const index = academyModule.lessons.findIndex((item) => item.slug === lesson.slug);
  const previous = academyModule.lessons[index - 1];
  const next = academyModule.lessons[index + 1];
  const moduleIndex = academyModules.findIndex((item) => item.slug === academyModule.slug);
  const nextModule = academyModules[moduleIndex + 1];

  return (
    <main className="academy-page academy-lesson-page">
      <header className="academy-lesson-header">
        <div className="academy-reading-shell">
          <nav className="academy-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/academy">Academy</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/academy/${academyModule.slug}`}>{academyModule.title}</Link>
          </nav>
          <p className="academy-eyebrow">Lesson {index + 1} of {academyModule.lessons.length} &middot; Module {academyModule.number}</p>
          <h1>{lesson.title}</h1>
          <p className="academy-lesson-deck">{lesson.introduction}</p>
          <p className="academy-lesson-duration">{lesson.duration} &middot; Beginner friendly</p>
          <nav className="academy-reading-links" aria-label="On this page">
            {lesson.sections.map((section, sectionIndex) => (
              <a key={section.title} href={`#lesson-section-${sectionIndex + 1}`}>{section.title}</a>
            ))}
            <a href="#lesson-takeaway">Practical takeaway</a>
          </nav>
        </div>
      </header>

      <article className="academy-lesson-body academy-reading-shell">
        {lesson.sections.map((section, sectionIndex) => (
          <section id={`lesson-section-${sectionIndex + 1}`} key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
            {section.tips && <ul>{section.tips.map((tip) => <li key={tip}>{tip}</li>)}</ul>}
          </section>
        ))}
        <aside className="academy-takeaway" id="lesson-takeaway">
          <p className="academy-eyebrow">Practical takeaway</p>
          <h2>Try this today</h2>
          <p>{lesson.takeaway}</p>
        </aside>
      </article>

      <nav className="academy-module-outline academy-reading-shell" aria-label="Lessons in this module">
        <h2>In this module</h2>
        <ol>
          {academyModule.lessons.map((item, lessonIndex) => (
            <li key={item.slug}>
              <Link href={`/academy/${academyModule.slug}/${item.slug}`} aria-current={item.slug === lesson.slug ? "page" : undefined}>
                <span>{lessonIndex + 1}. {item.title}</span>
                <small>{item.slug === lesson.slug ? "You are here" : item.duration}</small>
              </Link>
            </li>
          ))}
        </ol>
      </nav>

      <nav className="academy-lesson-navigation academy-reading-shell" aria-label="Lesson navigation">
        {previous ? (
          <Link href={`/academy/${academyModule.slug}/${previous.slug}`}><span>Previous lesson</span><strong>&larr; {previous.title}</strong></Link>
        ) : (
          <Link href={`/academy/${academyModule.slug}`}><span>Back to module</span><strong>&larr; {academyModule.title}</strong></Link>
        )}
        {next ? (
          <Link className="academy-next-link" href={`/academy/${academyModule.slug}/${next.slug}`}><span>Next lesson</span><strong>{next.title} &rarr;</strong></Link>
        ) : nextModule ? (
          <Link className="academy-next-link" href={`/academy/${nextModule.slug}`}><span>Next module</span><strong>{nextModule.title} &rarr;</strong></Link>
        ) : (
          <Link className="academy-next-link" href="/academy"><span>Keep exploring</span><strong>All Academy modules &rarr;</strong></Link>
        )}
      </nav>
    </main>
  );
}
