import type { Metadata } from "next";
import Link from "next/link";
import LocalBanner from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChangelogExplorer, { type ChangelogItem } from "./ChangelogExplorer";
import "../home.css";

export const metadata: Metadata = {
  alternates: { canonical: "/changelog" },
};

const updates: ChangelogItem[] = [
  { date: "October 2026", title: "The Next Chapter is taking shape", description: "A new planning hub organizes upcoming Digital Twin, Career Intelligence, Academy, Research Lab, Community, and founder-focused features across the five core areas of the Chronicles.", href: "/next-chapter", items: ["Digital Twin", "Career Roadmap", "Academy practice", "Future platform features"] },
  { date: "October 2026", title: "Career Intelligence is free while it grows", description: "Resume, LinkedIn, portfolio, and mentorship pages now share a simpler experience with focused inquiry forms, clear support options, helpful resources, and no costs while the service is being built out.", href: "/career", items: ["Resume Review and Rewrite", "Portfolio and GitHub options", "LinkedIn resources", "Free while building"] },
  { date: "October 2026", title: "A clearer path through the platform", description: "Navigation now connects Research Lab sections, Career Intelligence resources, The Next Chapter, and the Founder's Journey with more direct links and clearer labels.", href: "/", items: ["Research section links", "Next Chapter navigation", "Career resource links", "Founder's Journey label"] },
  { date: "October 2026", title: "I moved across the country for my career", description: "A new Career Journal entry about moving from Alaska to Utah for a career opportunity, returning home four days later, and learning that changing direction does not erase how far you have come.", href: "/research/moved-across-the-country", items: ["Career Journal", "Resilience", "Life Transitions", "Military Spouse Journey"] },
  { date: "October 2026", title: "Rewards for your next step", description: "My Journey now includes downloadable resume templates, AI career prompts, GitHub-based portfolio walkthroughs, and reminders that you are not alone in the process.", href: "/my-journey/rewards", items: ["Resume templates", "AI career prompts", "Portfolio walkthroughs", "Encouraging notes"] },
  { date: "October 2026", title: "A clearer way forward", description: "Cyber Grad Chronicles is now organized around five connected core areas so learning, career development, research, community, and the founder story each have a clear home.", href: "/", items: ["Academy", "Career Intelligence", "Research Lab", "Community", "About the Founder"] },
  { date: "October 2026", title: "Your Command Center", description: "My Journey now gives visitors a focused place to see learning progress, milestones, career direction, and rewards without confusing it with the founder's personal Journey page.", href: "/my-journey", items: ["Summary progress cards", "Learning path progress", "Career Path actions", "Milestone tracking"] },
  { date: "September 2026", title: "A more intentional visual system", description: "The platform is moving toward a warmer technical feel: charcoal surfaces, soft gold lighting, rounded cards, subtle glows, nature-inspired details, and a consistent type system.", href: "/", items: ["Elevated dashboard cards", "Circular progress visuals", "Polished hover states", "Global typography"] },
];

const planned: ChangelogItem[] = [
  { date: "Coming next", title: "Digital Twin", description: "A connected, interactive view of the founder story, credentials, projects, research, and career direction behind the Chronicles.", href: "/next-chapter#next-01", items: ["Interactive profile", "Career timeline", "Connected proof", "Archive navigation"] },
  { date: "Coming next", title: "Career Roadmap", description: "A guided path connecting learning, credentials, projects, applications, and interviews to practical career direction.", href: "/next-chapter#next-07", items: ["Starting points", "Career milestones", "Multiple pathways", "Recommended resources"] },
  { date: "Coming next", title: "Academy Quizzes & Practice", description: "Low-pressure knowledge checks and scenario-based practice for building confidence through repetition.", href: "/next-chapter#next-03", items: ["Lesson checks", "Scenario questions", "Practice modes", "Progress indicators"] },
  { date: "Coming next", title: "Academy Achievements", description: "Visible milestones for lessons, quizzes, labs, projects, and consistent learning progress.", href: "/next-chapter#next-04", items: ["Learning markers", "Project milestones", "Progress record", "Shareable proof"] },
  { date: "Coming next", title: "Research Intelligence", description: "A deeper research experience connecting intelligence files, technical projects, sources, and practical takeaways.", href: "/next-chapter#next-06", items: ["Intelligence products", "Research collections", "Analyst notes", "Archive discovery"] },
  { date: "Coming next", title: "Community & Connection", description: "More resources, stories, and shared momentum for learners, career changers, military spouses, and early-career professionals.", href: "/next-chapter#next-08", items: ["Resource collections", "Community stories", "Career transition", "Shared momentum"] },
];

export default function ChangelogPage() {
  return <><LocalBanner /><main className="home-page cg-changelog-page"><section className="cg-changelog-hero"><p className="cg-eyebrow">The archive of progress</p><h1>What&apos;s New</h1><p>Follow the ideas, improvements, and small decisions shaping Cyber Grad Chronicles over time.</p></section><ChangelogExplorer updates={updates} planned={planned} /><div className="cg-changelog-back"><Link href="/" className="cg-btn secondary">Back to the homepage</Link></div></main><Footer /></>;
}
