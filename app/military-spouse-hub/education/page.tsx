import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Link from "next/link";
import "../military-spouse-hub.css";
import "./education.css";

const educationSections = [
  {
    id: "spouseworks",
    title: "SpouseWorks & MyCAA",
    description:
      "Official spouse education, career coaching, scholarships, and support programs.",
    image: "/images/military-spouse-hub/mycaa.png",
    resources: [
      ["SpouseWorks", "Career coaching, employment support, education tools, and spouse career resources.", "https://spouseworks.militaryonesource.mil/portal/"],
      ["SpouseWorks Scholarship / MyCAA", "Funding support for eligible spouses pursuing portable career training, certifications, or education.", "https://mycaa.militaryonesource.mil/mycaa/"],
      ["Military OneSource", "Official military family resource hub for education, employment, relocation, and support.", "https://www.militaryonesource.mil/"],
      ["MSEP Job Search", "Military spouse-friendly employers and job opportunities.", "https://spouseworks.militaryonesource.mil/portal/msep/jobs"],
    ],
  },
  {
    id: "funded-learning",
    title: "Free & Funded Learning",
    description: "Training options to check before paying out of pocket.",
    image: "/images/military-spouse-hub/scholarship.png",
    resources: [
      ["Udemy Business through SpouseWorks", "Free Udemy course access for eligible military spouses through Military OneSource.", "https://www.militaryonesource.mil/benefits/udemy-online-courses/"],
      ["Udemy through Local Library", "Many libraries offer free Udemy, Gale, LinkedIn Learning, or similar course access.", "https://www.udemy.com/"],
      ["LinkedIn Premium through HOH", "Complimentary LinkedIn Premium may be available after qualifying Hiring Our Heroes event participation.", "https://www.hiringourheroes.org/career-services/education-networking/linkedin-premium-for-the-military-community/"],
      ["Coursera", "Self-paced courses and certificates in tech, business, data, and cybersecurity.", "https://www.coursera.org/"],
      ["Hiring Our Heroes", "Fellowships, networking events, workshops, and career resources for the military community.", "https://www.hiringourheroes.org/"],
    ],
  },
  {
    id: "cyber-platforms",
    title: "Cyber Learning Platforms",
    description:
      "Hands-on and self-paced resources for cybersecurity skill building.",
    image: "/images/military-spouse-hub/online-learning.png",
    resources: [
      ["TryHackMe", "Beginner-friendly cybersecurity labs, rooms, and guided learning paths.", "https://tryhackme.com/"],
      ["Hack The Box", "Hands-on labs, CTFs, academy modules, and practical security training.", "https://www.hackthebox.com/"],
      ["Microsoft Learn", "Free Microsoft training for Azure, security, AI, and cloud fundamentals.", "https://academy.microsoft.com/"],
      ["Cisco Skills for All", "Free networking, cybersecurity, and tech career training from Cisco.", "https://skillsforall.com/"],
      ["Cybrary", "Cybersecurity courses, certification prep, and role-based learning paths.", "https://www.cybrary.it/"],
      ["Google Cybersecurity Certificate", "Beginner-friendly cybersecurity certificate hosted through Coursera.", "https://www.coursera.org/professional-certificates/google-cybersecurity"],
    ],
  },
];

const benefits = [
  ["Financial Support", "Grants, scholarships, tuition assistance, and fee waivers can help reduce education costs."],
  ["Flexible Learning", "Online programs and self-paced courses can fit around PCS moves, caregiving, and work."],
  ["Career Growth", "Certifications and degree programs can strengthen your skills and advance your career."],
  ["New Skills", "Build technical, professional, and cybersecurity skills for today’s workforce."],
  ["Community", "Connect with programs and networks that support military spouse learners."],
];

const learningPathways = [
  ["Explore", "Identify your interests, strengths, goals, and career direction."],
  ["Plan", "Research programs, costs, benefits, timelines, and requirements."],
  ["Learn", "Enroll in courses and build your knowledge step by step."],
  ["Apply", "Turn your learning into labs, projects, resumes, and interviews."],
  ["Grow", "Continue learning and advancing your career over time."],
  ["Thrive", "Create the life, career, and future you deserve."],
];

const faqs = [
  ["Do I need experience to start cybersecurity?", "No. You can build proof through labs, projects, certifications, volunteer work, home labs, writeups, and beginner-friendly platforms."],
  ["Do I need a cybersecurity degree?", "Not always. A degree can help, but certifications, IT support, projects, internships, fellowships, and self-study can also open doors."],
  ["How many certifications do I need?", "Usually fewer than you think. Start with one certification that matches your target role, then build projects around it."],
  ["Should I start with IT first?", "It depends on your background. IT, networking, cloud, and help desk can build foundations, but SOC, GRC, CTI, and internships are also possible paths."],
  ["What should I learn first?", "Start with networking, operating systems, security fundamentals, authentication, cloud basics, phishing, malware, logs, and incident response."],
  ["Do I need to know how to code?", "You do not need to be a software engineer. Basic Python, PowerShell, or Bash can help, but many roles focus on analysis and documentation."],
];

export default function EducationPage() {
  return (
    <>
      <Navbar />

      <main className="msh-page education-mockup-page">
        <section className="education-hero">
          <div className="education-hero-copy">
            <nav className="msh-breadcrumbs">
              <Link href="/military-spouse-hub">Military Spouse Hub</Link>
              <span>›</span>
              <span>Education</span>
            </nav>

            <p className="msh-eyebrow">Education</p>
            <h1>Education</h1>
            <h2>Knowledge. Opportunity. Freedom.</h2>

            <p>
              Access resources, scholarships, certifications, and learning
              platforms built to empower military spouses at every step of
              their academic and professional journey.
            </p>

            <div className="msh-hero-actions">
              <Link href="#education-resources" className="msh-button">
                Explore Resources →
              </Link>

              <Link href="/military-spouse-hub/education/certifications" className="msh-button">
                Certifications Roadmap →
              </Link>
            </div>
          </div>
        </section>

        <section className="education-benefits">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Education Benefits</p>
            <h2>Learning that works around real life.</h2>
          </div>

          <div className="education-benefit-grid">
            {benefits.map(([title, text]) => (
              <div className="education-benefit-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="education-resource-section" id="education-resources">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Resource Library</p>
            <h2>Start with free, funded, and spouse-connected support.</h2>
          </div>

          <div className="education-resource-grid">
            {educationSections.map((section) => (
              <a href={`#${section.id}`} className="education-resource-card" key={section.id}>
                <img src={section.image} alt="" />
                <div>
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                  <span>Jump to Section →</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="education-detail-section">
          {educationSections.map((section) => (
            <div className="education-detail-block" id={section.id} key={section.id}>
              <div className="msh-section-heading centered">
                <p className="msh-eyebrow">{section.title}</p>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
              </div>

              <div className="education-detail-grid">
                {section.resources.map(([name, summary, url]) => (
                  <a href={url} target="_blank" rel="noopener noreferrer" className="education-detail-card" key={name}>
                    <h3>{name}</h3>
                    <p>{summary}</p>
                    <span>Visit Resource →</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="education-pathway-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Learning Pathways</p>
            <h2>Turn learning into proof.</h2>
          </div>

          <div className="education-path-grid">
            {learningPathways.map(([title, text]) => (
              <div className="education-path-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="education-faq-section">
          <div className="msh-section-heading centered">
            <p className="msh-eyebrow">Cybersecurity FAQ</p>
            <h2>Common questions when getting started.</h2>
          </div>

          <div className="education-faq-grid">
            {faqs.map(([question, answer]) => (
              <div className="education-faq-card" key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="education-study-card">
          <div>
            <p className="msh-eyebrow">Study Strategy</p>
            <h2>Build a plan that survives real life.</h2>
            <p>
              Military life changes fast. Keep your study plan flexible,
              realistic, and focused on one next step at a time.
            </p>
          </div>

          <Link href="/military-spouse-hub/community" className="msh-button">
            Find Community →
          </Link>
        </section>

        <section className="education-bottom-line">
          <p>You’re building more than a resume — you’re building freedom.</p>
        </section>
      </main>

      <Footer />
    </>
  );
}