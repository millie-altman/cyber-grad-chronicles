import type { ResearchCategory } from "./articleData";

export const researchCategories: {
  id: string;
  label: ResearchCategory;
  eyebrow: string;
  title: string;
  description: string;
}[] = [
  {
    id: "threat-intelligence",
    label: "Threat Intelligence",
    eyebrow: "Threat Intelligence",
    title: "Threat actors, ransomware, and finished intelligence.",
    description:
      "Actor profiles, ransomware analysis, malware case studies, and CTI-style intelligence products connected to my research archive.",
  },
  {
    id: "ai-security-research",
    label: "AI Security Research",
    eyebrow: "AI Security Research",
    title: "Agent security, trust boundaries, and emerging risks.",
    description:
      "Research and source analysis on prompt injection, tool permissions, and the security implications of autonomous AI systems.",
  },
  {
    id: "labs-projects",
    label: "Labs & Projects",
    eyebrow: "Labs & Projects",
    title: "Hands-on work turned into documented proof.",
    description:
      "Lab reflections, Python security tools, CTI environments, and project walkthroughs built to show practical skill development.",
  },
  {
    id: "career-field-notes",
    label: "Career Field Notes",
    eyebrow: "Career Field Notes",
    title: "Practical guidance for your next career step.",
    description:
      "Clear, grounded resources for presenting your experience, navigating applications, and building a credible career in technology and cybersecurity.",
  },
  {
    id: "career-journal",
    label: "Career Journal",
    eyebrow: "Career Journal",
    title: "The human side of building this career.",
    description:
      "Personal reflections on building from Alaska, military life, career transitions, and the milestones and setbacks of an unconventional cybersecurity journey.",
  },
  {
    id: "community-awareness",
    label: "Community Awareness",
    eyebrow: "Community Awareness",
    title: "Practical security education for real people.",
    description:
      "Plain-language guidance on phishing, passwords, social engineering, military family safety, and community cyber awareness.",
  },
];

export const featuredResearchSlugs: Partial<Record<ResearchCategory, string>> = {
  "Threat Intelligence": "blackcat-alphv",
  "AI Security Research": "prompt-injection",
  "Labs & Projects": "cti-research-lab",
  "Career Field Notes": "common-resume-mistakes",
  "Career Journal": "opportunity-finally-came",
  "Community Awareness": "securing-the-interior",
};

