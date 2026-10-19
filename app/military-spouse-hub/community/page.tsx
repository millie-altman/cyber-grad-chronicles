import Link from "next/link";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import EncouragementFlashcard from "./EncouragementFlashcard";
import "../military-spouse-hub.css";
import "./encouragement.css";

const reminders = [
  ["01", "You still count", "Your goals do not become less important because someone else’s orders set the timeline."],
  ["02", "A move is not a reset", "You carry skills, relationships, lessons, and proof with you—even when the address changes."],
  ["03", "Small progress is real progress", "One application, one lesson, one conversation, or one hour of rest can be a meaningful next step."],
  ["04", "You are not behind", "Your path may be interrupted, redirected, or rebuilt. It is still yours, and it is still moving."],
];

const paths = [
  { title: "Read Success Stories", text: "Find stories of pivots, education wins, remote work, and starting again.", href: "/military-spouse-hub/community/success-stories" },
  { title: "Find Your Starting Point", text: "Choose a practical next step for career, education, relocation, or encouragement.", href: "/military-spouse-hub/where-to-start" },
  { title: "Build Career Momentum", text: "Explore resumes, LinkedIn, interviews, job boards, and portable career resources.", href: "/career" },
  { title: "Keep Learning", text: "Find scholarships, certifications, platforms, and learning paths that meet you where you are.", href: "/military-spouse-hub/education" },
];

export default function CommunityPage() {
  return <><Navbar /><main className="msh-page encouragement-page">
    <section className="encouragement-hero"><div className="encouragement-hero-overlay" /><div className="encouragement-hero-content"><nav className="msh-breadcrumbs"><Link href="/military-spouse-hub">Military Spouse Hub</Link><span>›</span><span>Community</span></nav><p className="msh-eyebrow">Community · Encouragement · You Belong Here</p><h1>You are not building alone.</h1><p>Military spouse life can ask you to begin again before you are ready. This space is a reminder that your goals still matter, your progress still counts, and there are people who understand the weight of carrying a career through change.</p><div className="msh-hero-actions"><Link href="#reminders" className="msh-button">Find a reminder</Link><Link href="/military-spouse-hub/community/success-stories" className="msh-button secondary">Read real stories</Link></div></div></section>

    <section className="encouragement-intro"><p className="msh-eyebrow">A place to come back to</p><h2>You do not have to be strong every minute to keep going.</h2><p>Some seasons are for applying. Some are for learning. Some are for resting, grieving, adapting, or figuring out what you want next. None of those seasons make you less ambitious or less capable.</p></section>

    <section className="encouragement-reminders" id="reminders"><div className="msh-section-heading centered"><p className="msh-eyebrow">Keep These Close</p><h2>Reminders for the days that feel heavy.</h2><p>Save the one you need today. Come back when the next move, delay, rejection, or transition makes you question your place.</p></div><div className="encouragement-reminder-grid">{reminders.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="encouragement-card-section"><EncouragementFlashcard /></section>

    <section className="encouragement-personal"><div className="encouragement-personal-copy"><p className="msh-eyebrow">From Millie’s Journey</p><h2>Proof can begin before opportunity arrives.</h2><p>Building a career through military spouse life has meant adapting to uncertainty, relocation, and seasons that did not look like the plan. It has also meant continuing to create proof, even when the next opportunity was not visible yet.</p><p className="encouragement-quote">“I was told building this career from Alaska would be difficult, so I started documenting the proof anyway.”</p><Link href="/journey" className="msh-button">Read the founder’s journey →</Link></div><div className="encouragement-personal-image" aria-hidden="true" /></section>

    <section className="encouragement-paths"><div className="msh-section-heading centered"><p className="msh-eyebrow">Support for the Next Step</p><h2>Encouragement can become momentum.</h2><p>You do not have to solve everything at once. Start with the kind of support that fits today.</p></div><div className="encouragement-path-grid">{paths.map((path) => <Link href={path.href} key={path.title}><h3>{path.title}</h3><p>{path.text}</p><span>Explore →</span></Link>)}</div></section>

    <section className="encouragement-closing"><p className="msh-eyebrow">A Note Before You Go</p><h2>Your life is not an obstacle to your future.</h2><p>You are allowed to want a career, an education, creative work, community, rest, and a future that feels like yours. Keep going in the way that is possible today. You are not alone in it.</p><Link href="/connect" className="msh-button">Stay connected →</Link></section>
  </main><Footer /></>;
}
