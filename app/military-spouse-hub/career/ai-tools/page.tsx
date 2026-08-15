import Link from "next/link";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import "../../military-spouse-hub.css";
import "../career.css";

const aiPromptSections = [
  {
    id: "resume-prompts",
    title: "Resume Prompts",
    description:
      "Translate experience, tailor bullet points, compare your resume against job descriptions, and turn nontraditional experience into clear value.",
    prompts: [
      {
        title: "Full Resume Rebuild",
        text: `I am applying for this position. Act as my personal resume strategist and rebuild my resume from scratch.

Use my background, education, certifications, projects, volunteer work, accomplishments, military spouse experience, relocations, portfolio, GitHub, and LinkedIn.

Cross-reference everything against the job posting below.

Requirements:
- 1 to 1.5 pages max
- Strong professional summary
- ATS compatible
- STAR-driven bullet points
- Keyword optimized
- Honest and accurate only
- Do not invent experience, tools, metrics, certifications, or job titles
- Emphasize transferable skills and relevant proof

My Background:
[PASTE HERE]

Job Posting:
[PASTE HERE]`,
      },
      {
        title: "Tailor Resume to Job",
        text: `Review my resume and the job description below. Extract keywords and rewrite my resume bullets to align better while staying honest.

Also identify:
- Missing keywords
- Strongest matching experience
- Weak areas I should not overstate
- Projects or volunteer work I can include

Resume:
[PASTE HERE]

Job Description:
[PASTE HERE]`,
      },
      {
        title: "Volunteer Work to Bullets",
        text: `Help me translate my volunteer work into professional resume bullets focused on leadership, communication, measurable impact, technical skill, problem-solving, and transferable experience.

Volunteer Work:
[PASTE HERE]

Target Role:
[PASTE HERE]`,
      },
      {
        title: "Explain a Career Gap",
        text: `Help me explain a career gap caused by relocation, caregiving, education, military life, or career transition. Keep it professional, confident, brief, and positive.

Give me:
- One resume version
- One LinkedIn version
- One interview answer
- One short networking version

Context:
[PASTE HERE]

Target Role:
[PASTE HERE]`,
      },
    ],
  },
  {
    id: "linkedin-prompts",
    title: "LinkedIn Prompts",
    description:
      "Improve your headline, About section, Featured section, experience descriptions, and profile keywords.",
    prompts: [
      {
        title: "Rewrite LinkedIn Headline",
        text: `Write 5 recruiter-friendly LinkedIn headlines based on my target role, certifications, skills, projects, and military spouse background.

Make them:
- Searchable
- Professional
- Specific
- Not too wordy
- Honest about my current level

Target Role:
[PASTE HERE]

Skills:
[PASTE HERE]

Certifications / Education:
[PASTE HERE]`,
      },
      {
        title: "Write LinkedIn About",
        text: `Write my LinkedIn About section based on my target role, background, certifications, projects, career direction, and military spouse experience.

Tone:
- Professional
- Warm
- Confident
- Nontraditional-path friendly
- Recruiter-friendly

Background:
[PASTE HERE]

Target Role:
[PASTE HERE]`,
      },
      {
        title: "Find LinkedIn Keywords",
        text: `Extract important LinkedIn keywords from this job description. Group them by skills, tools, certifications, frameworks, role keywords, and soft skills.

Then recommend where to place them:
- Headline
- About section
- Skills section
- Experience bullets
- Featured projects

Job Description:
[PASTE HERE]`,
      },
    ],
  },
  {
    id: "interview-prompts",
    title: "Interview Prompts",
    description:
      "Practice behavioral, technical, remote work, relocation, and military spouse career-transition answers.",
    prompts: [
      {
        title: "Practice Interview Questions",
        text: `Act as an interviewer for this role. Ask me 10 behavioral and technical questions, then critique my answers.

For each critique, tell me:
- What worked
- What was unclear
- What details I should add
- How to make it stronger in STAR format

Role:
[PASTE HERE]

Job Description:
[PASTE HERE]`,
      },
      {
        title: "Explain Relocation",
        text: `Help me answer interview questions about relocating as a military spouse in a confident, professional way without oversharing personal details.

Create:
- A 30-second answer
- A 1-minute answer
- A remote-work focused answer
- A relocation-to-new-city answer

Context:
[PASTE HERE]`,
      },
      {
        title: "Build STAR Answers",
        text: `Turn this experience into a STAR interview answer.

Make it:
- 1 to 3 minutes long
- Clear and organized
- Relevant to the role
- Honest and not exaggerated

Experience:
[PASTE HERE]

Question:
[PASTE HERE]

Target Role:
[PASTE HERE]`,
      },
    ],
  },
  {
    id: "career-pivot-prompts",
    title: "Career Pivot Prompts",
    description:
      "Use these when switching into cybersecurity, tech, remote work, government, or a new field.",
    prompts: [
      {
        title: "Career Pivot Plan",
        text: `Create a realistic 30/60/90-day plan for changing careers based on my background, skills, budget, constraints, and target role.

Include:
- Skills to build
- Projects to create
- Resume updates
- LinkedIn updates
- Networking actions
- Applications strategy
- What to avoid wasting time on

Background:
[PASTE HERE]

Target Role:
[PASTE HERE]

Current Skills:
[PASTE HERE]

Constraints:
[PASTE HERE]`,
      },
      {
        title: "Translate Experience",
        text: `Translate my previous experience into language that better fits my target role while staying honest and accurate.

Identify:
- Transferable skills
- Strong resume bullets
- Interview talking points
- LinkedIn wording
- Skills I still need to build

Past Experience:
[PASTE HERE]

Target Role:
[PASTE HERE]`,
      },
      {
        title: "Portfolio Project Ideas",
        text: `Suggest 5 portfolio projects for my target role. Include project goals, tools, deliverables, resume bullets, GitHub README ideas, and how to explain each project on LinkedIn.

Target Role:
[PASTE HERE]

Skill Level:
[PASTE HERE]

Tools I Know:
[PASTE HERE]`,
      },
    ],
  },
];

const aiTips = [
  "Never let AI invent experience.",
  "Fact-check every claim.",
  "Paste the job description first.",
  "Use AI for structure, not identity.",
  "Rewrite outputs in your voice.",
  "Save prompts that work well.",
  "Remove anything that sounds exaggerated.",
  "Use your real projects as proof.",
];

export default function AIToolsPage() {
  return (
    <>
      <Navbar />

      <main className="msh-page career-subpage">
        <section className="career-subpage-hero">
          <div className="career-subpage-hero-card">
            <nav className="msh-breadcrumbs">
              <Link href="/military-spouse-hub">Military Spouse Hub</Link>
              <span>›</span>
              <Link href="/military-spouse-hub/career">Career</Link>
              <span>›</span>
              <span>AI Tools</span>
            </nav>

            <p className="msh-eyebrow">Career • AI Tools</p>

            <h1>
              Use AI with <span>intention.</span>
            </h1>

            <h2>Prompts for resumes, LinkedIn, interviews, and career pivots.</h2>

            <p>
              AI can help you organize your career story, but it should never
              replace your judgment or your voice. Use these prompts to clarify
              your experience, strengthen your materials, and prepare with more
              confidence.
            </p>

            <div className="msh-hero-actions">
              <Link href="#ai-prompts" className="msh-button">
                View Prompts →
              </Link>

              <Link
                href="/military-spouse-hub/career/resume"
                className="msh-button"
              >
                Resume Resources →
              </Link>
            </div>
          </div>
        </section>

        <section className="career-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Quick Jump</p>
            <h2>Choose the prompt category you need.</h2>
            <p>Start with the task you are working on right now.</p>
          </div>

          <div className="career-subpage-grid">
            {aiPromptSections.map((section) => (
              <Link
                href={`#${section.id}`}
                className="career-subpage-card"
                key={section.id}
              >
                <h3>{section.title}</h3>
                <p>{section.description}</p>
                <span>Jump to Prompts →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="career-subpage-callout">
          <div>
            <p className="msh-eyebrow">Important</p>
            <h2>AI is a tool, not a replacement.</h2>
            <p>
              Always fact-check and personalize AI output. Never let AI invent
              certifications, experience, job titles, metrics, tools, or
              achievements. The best AI output still needs your judgment.
            </p>
          </div>

          <Link
            href="/military-spouse-hub/career/interview-prep"
            className="msh-button"
          >
            Interview Prep →
          </Link>
        </section>

        <section className="career-subpage-section" id="ai-prompts">
          {aiPromptSections.map((section) => (
            <div className="career-prompt-block" id={section.id} key={section.id}>
              <div className="msh-section-heading">
                <p className="msh-eyebrow">{section.title}</p>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
              </div>

              <div className="career-prompt-grid">
                {section.prompts.map((prompt) => (
                  <article className="career-prompt-card" key={prompt.title}>
                    <div className="career-prompt-card-header">
                      <h3>{prompt.title}</h3>
                    </div>

                    <pre className="career-prompt-box">
                      <code>{prompt.text}</code>
                    </pre>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="career-subpage-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">AI Safety Tips</p>
            <h2>Keep the output honest and useful.</h2>
          </div>

          <div className="career-chip-grid">
            {aiTips.map((tip) => (
              <span key={tip}>{tip}</span>
            ))}
          </div>
        </section>

        <section className="career-subpage-callout">
          <div>
            <p className="msh-eyebrow">Next Step</p>
            <h2>Turn AI output into a stronger career system.</h2>
            <p>
              Start with your resume, then LinkedIn, then interview prep. The
              goal is not to sound like AI — it is to clarify your real
              experience and communicate it better.
            </p>
          </div>

          <Link
            href="/military-spouse-hub/career/resume"
            className="msh-button"
          >
            Resume Resources →
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}