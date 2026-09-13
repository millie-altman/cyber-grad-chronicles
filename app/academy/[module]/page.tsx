import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { academyModules, getAcademyModule } from "../academyData";

export function generateStaticParams() {
  return academyModules.map((module) => ({ module: module.slug }));
}

export async function generateMetadata({ params }: PageProps<"/academy/[module]">): Promise<Metadata> {
  const academyModule = getAcademyModule((await params).module);
  return academyModule ? { title: academyModule.title, description: academyModule.description } : {};
}

export default async function ModulePage({ params }: PageProps<"/academy/[module]">) {
  const academyModule = getAcademyModule((await params).module);
  if (!academyModule) notFound();
  return (
    <main className="academy-page academy-module-page">
      <section className="academy-module-hero"><div className="academy-shell academy-module-hero-grid">
        <div><Link className="academy-back-link" href="/academy">← All Academy modules</Link><p className="academy-eyebrow">Module {academyModule.number} · Beginner</p><h1>{academyModule.title}</h1><p className="academy-lede">{academyModule.description}</p></div>
        <div className="academy-module-cover"><Image src={academyModule.image} alt="" fill priority sizes="(max-width: 800px) 100vw, 40vw" /></div>
      </div></section>
      <section className="academy-section"><div className="academy-shell academy-module-layout">
        <div><p className="academy-eyebrow">Inside this module</p><h2>{academyModule.lessons.length} lessons to build your foundation.</h2><p className="academy-module-intro">Read in order or choose the lesson that answers your question today. Each lesson ends with one practical, low-risk action.</p></div>
        <ol className="academy-lesson-list">{academyModule.lessons.map((lesson, index) => <li key={lesson.slug}><Link href={`/academy/${academyModule.slug}/${lesson.slug}`}><span className="academy-lesson-number">{String(index + 1).padStart(2, "0")}</span><span><strong>{lesson.title}</strong><small>{lesson.duration}</small></span><span className="academy-lesson-arrow" aria-hidden="true">→</span></Link></li>)}</ol>
      </div></section>
    </main>
  );
}
