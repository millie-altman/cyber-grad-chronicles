import { researchCategories } from "../../research/categories";

type NavigationLink = { href: string; label: string; external?: boolean };
type NavigationGroup = {
  id: string;
  label: string;
  sections: { label?: string; links: NavigationLink[] }[];
};

export const navigationGroups: NavigationGroup[] = [
  {
    id: "academy",
    label: "Academy",
    sections: [{ links: [
      { href: "/academy", label: "Academy Overview" },
      { href: "/academy/cybersecurity-101", label: "Lessons" },
      { href: "/academy", label: "Learning Paths" },
      { href: "/academy#academy-library", label: "Quizzes & Practice" },
      { href: "/my-journey/rewards", label: "Achievements" },
      { href: "/next-chapter", label: "The Next Chapter" },
    ] }],
  },
  {
    id: "career",
    label: "Career Intelligence",
    sections: [
      { label: "Career resources", links: [
        { href: "/career", label: "Career Overview" },
        { href: "/career/resume-review", label: "Resume Support" },
        { href: "/career/linkedin-review", label: "LinkedIn Review" },
        { href: "/career/portfolio-review", label: "Portfolio Tools" },
        { href: "/career/interview-prep", label: "Interview Preparation" },
        { href: "/career/ai-tools", label: "AI Tools" },
        { href: "/research#career-field-notes", label: "Career Field Notes" },
      ] },
      { label: "Planning & support", links: [
        { href: "/career#military-spouse-resources", label: "Military Spouse Resources" },
        { href: "/career/mentorship", label: "Mentorship" },
        { href: "/next-chapter#next-07", label: "Career Roadmap" },
        { href: "/next-chapter#next-02", label: "Planned Career Packages" },
      ] },
    ],
  },
  {
    id: "research",
    label: "Research Lab",
    sections: [{ links: [
      { href: "/research", label: "Research Overview" },
      ...researchCategories.map((category) => ({
        href: `/research#${category.id}`, label: category.label,
      })),
    ] }],
  },
  {
    id: "community",
    label: "Community",
    sections: [{ links: [
      { href: "/military-spouse-hub", label: "Military Spouse Hub" },
      { href: "/military-spouse-hub/where-to-start", label: "Practical Resources" },
      { href: "/military-spouse-hub/community", label: "Encouragement" },
      { href: "/military-spouse-hub/community/success-stories", label: "Stories" },
    ] }],
  },
  {
    id: "founder",
    label: "About the Founder",
    sections: [{ links: [
      { href: "/about", label: "About the Founder" },
      { href: "/journey", label: "The Founder's Journey" },
      { href: "/credentials", label: "Credentials" },
      { href: "https://github.com/millie-altman", label: "GitHub Projects", external: true },
      { href: "/next-chapter#next-01", label: "Digital Twin Roadmap" },
      { href: "/next-chapter", label: "The Next Chapter" },
      { href: "/changelog", label: "What's New" },
    ] }],
  },
];
