import { ArrowDownToLine, BookOpen, Lightbulb, MessageCircleHeart, Sparkles } from "lucide-react";
import Link from "next/link";
import LocalBanner from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import "../../home.css";

const resumeTemplates = [
  { title: "Baseline Resume Template", description: "A clean starting point for organizing your experience, skills, projects, and education.", href: "/downloads/rewards/01-Baseline-Resume-Template.docx" },
  { title: "USAJOBS Federal Resume Template", description: "A structured template for translating your experience into a federal application format.", href: "/downloads/rewards/02-USAJOBS-Federal-Resume-Template.docx" },
  { title: "Tailored Resume Template", description: "A focused version for matching your strongest evidence to a specific role or posting.", href: "/downloads/rewards/03-Tailored-Resume-Template.docx" },
];

const prompts = [
  "Help me turn this project into a clear resume bullet using action, method, and outcome.",
  "Ask me five questions that will uncover evidence for a cybersecurity career story.",
  "Compare this job description to my experience and identify the three strongest matches.",
];

const projects = [
  { title: "CTI Research Lab", text: "Walk through a threat intelligence project from question, collection, and analysis to a finished intelligence product.", href: "/research/cti-research-lab", github: "https://github.com/millie-altman/cti-research-lab" },
  { title: "Python Security Tools", text: "Use a small automation project as a model for documenting purpose, constraints, technical decisions, and lessons learned.", href: "/research/python-security-tools", github: "https://github.com/millie-altman/python-security-tools" },
  { title: "Ransomware TIC Brief", text: "Study how research becomes a concise, audience-aware brief that demonstrates analysis and communication skills.", href: "/research/ransomware-tic-brief", github: "https://github.com/millie-altman/threat-intelligence-portfolio" },
];

export default function RewardsPage() {
  return (
    <>
      <LocalBanner />
      <main className="home-page cg-rewards-page">
        <section className="cg-rewards-hero">
          <p className="cg-eyebrow">My Journey · Rewards</p>
          <div className="cg-rewards-title-row">
            <div>
              <h1>Tools for your next step.</h1>
              <p>Save what helps, return when you need it, and remember that progress does not have to happen all at once.</p>
            </div>
            <Sparkles className="cg-command-sparkle" aria-hidden="true" />
          </div>
        </section>

        <section className="cg-reward-stack" aria-label="Available rewards">
          <article className="cg-reward-row">
            <div className="cg-reward-icon"><ArrowDownToLine size={22} aria-hidden="true" /></div>
            <div className="cg-reward-content">
              <p className="cg-eyebrow">Career toolkit</p>
              <h2>Resume templates</h2>
              <p>Start with structure, then make the story yours. These templates are here to reduce the blank-page feeling.</p>
              <div className="cg-reward-links">
                {resumeTemplates.map((template) => <a href={template.href} download key={template.title}><strong>{template.title}</strong><span>{template.description}</span><em>Download template →</em></a>)}
              </div>
            </div>
          </article>

          <article className="cg-reward-row">
            <div className="cg-reward-icon"><Lightbulb size={22} aria-hidden="true" /></div>
            <div className="cg-reward-content">
              <p className="cg-eyebrow">AI career prompts</p>
              <h2>Prompts that help you think.</h2>
              <p>Use AI as a thinking partner, not a replacement for your voice. Start with one prompt and edit every answer until it sounds like you.</p>
              <div className="cg-prompt-list">
                {prompts.map((prompt, index) => <div key={prompt}><span>0{index + 1}</span><p>{prompt}</p></div>)}
              </div>
            </div>
          </article>

          <article className="cg-reward-row">
            <div className="cg-reward-icon"><BookOpen size={22} aria-hidden="true" /></div>
            <div className="cg-reward-content">
              <p className="cg-eyebrow">Portfolio practice</p>
              <h2>Projects you can learn from.</h2>
              <p>Explore project walkthroughs based on work from Millie&apos;s GitHub, then use the same questions to shape your own project evidence.</p>
              <div className="cg-project-list">
                {projects.map((project) => <div className="cg-project-reward" key={project.title}><strong>{project.title}</strong><span>{project.text}</span><em><Link href={project.href}>Read walkthrough</Link> · <a href={project.github} target="_blank" rel="noopener noreferrer">Open GitHub</a></em></div>)}
              </div>
            </div>
          </article>

          <aside className="cg-encouragement-note">
            <MessageCircleHeart size={24} aria-hidden="true" />
            <div>
              <p className="cg-eyebrow">A note for the road</p>
              <h2>You are not alone in this journey.</h2>
              <p>You do not need to know every answer before you begin. One lesson, one project, one honest revision, and one small next step still count. Come back tomorrow and continue from where you are.</p>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
