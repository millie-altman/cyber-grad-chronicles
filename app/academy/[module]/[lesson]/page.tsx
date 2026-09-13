import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { academyModules, getAcademyLesson } from "../../academyData";

export function generateStaticParams() {
  return academyModules.flatMap((module) => module.lessons.map((lesson) => ({ module: module.slug, lesson: lesson.slug })));
}

export async function generateMetadata({ params }: PageProps<"/academy/[module]/[lesson]">): Promise<Metadata> {
  const values = await params;
  const { lesson } = getAcademyLesson(values.module, values.lesson);
  return lesson ? { title: lesson.title, description: lesson.introduction } : {};
}

export default async function LessonPage({ params }: PageProps<"/academy/[module]/[lesson]">) {
  const values = await params;
  const { academyModule, lesson } = getAcademyLesson(values.module, values.lesson);
  if (!academyModule || !lesson) notFound();
  const index = academyModule.lessons.findIndex((item) => item.slug === lesson.slug);
  const previous = academyModule.lessons[index - 1];
  const next = academyModule.lessons[index + 1];
  return (
    <main className="academy-page academy-lesson-page">
      <header className="academy-lesson-header"><div className="academy-reading-shell">
        <Link className="academy-back-link" href={`/academy/${academyModule.slug}`}>← {academyModule.title}</Link>
        <p className="academy-eyebrow">Module {academyModule.number} · Lesson {String(index + 1).padStart(2, "0")}</p><h1>{lesson.title}</h1><p className="academy-lesson-deck">{lesson.introduction}</p><p className="academy-lesson-duration">{lesson.duration} · Beginner friendly</p>
      </div></header>
      <article className="academy-lesson-body academy-reading-shell">
        {lesson.sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p>{section.body}</p>{section.tips && <ul>{section.tips.map((tip) => <li key={tip}>{tip}</li>)}</ul>}</section>)}
        <aside className="academy-takeaway"><p className="academy-eyebrow">Practical takeaway</p><h2>Try this today</h2><p>{lesson.takeaway}</p></aside>
      </article>
      <nav className="academy-lesson-navigation academy-reading-shell" aria-label="Lesson navigation">
        {previous ? <Link href={`/academy/${academyModule.slug}/${previous.slug}`}><span>Previous lesson</span><strong>← {previous.title}</strong></Link> : <Link href="/academy"><span>Back to</span><strong>← Academy home</strong></Link>}
        {next ? <Link className="academy-next-link" href={`/academy/${academyModule.slug}/${next.slug}`}><span>Next lesson</span><strong>{next.title} →</strong></Link> : <Link className="academy-next-link" href="/academy"><span>Module complete</span><strong>Explore more modules →</strong></Link>}
      </nav>
    </main>
  );
}
