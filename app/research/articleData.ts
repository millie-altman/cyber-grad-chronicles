export type ResearchCategory =
  | "Featured"
  | "Threat Intelligence"
  | "Labs & Projects"
  | "Career Journal"
  | "Community Awareness";

export type ResearchDifficulty = "Beginner" | "Intermediate" | "Advanced";

export type ResearchArticle = {
  fileId: string;
  slug: string;
  title: string;
  originalTitle?: string;
  category: ResearchCategory;
  type: string;
  difficulty: ResearchDifficulty;
  description: string;
  image?: string;
  lastUpdated: string;
  quickStart: string[];
  note: string;
  keyTakeaways: string[];
  github?: string;
  related: string[];
};

export const researchArticles: ResearchArticle[] = [
  {
    fileId: "INT-001",
    slug: "blackcat-alphv",
    title: "The BlackCat / ALPHV Dossier",
    originalTitle: "BlackCat / ALPHV",
    category: "Threat Intelligence",
    type: "Ransomware Analysis",
    difficulty: "Intermediate",
    description:
      "A ransomware-as-a-service operation known for Rust-based payloads, aggressive extortion, and identity-focused intrusion paths.",
    image: "/images/research/blackcat-alphv.png",
    lastUpdated: "July 2026",
    quickStart: ["CTI Focus", "Ransomware", "RaaS", "Blue Team"],
    note:
      "When studying BlackCat / ALPHV, I recommend looking beyond the payload. The affiliate model, extortion pressure, and identity-focused access paths explain why this operation became so disruptive.",
    keyTakeaways: [
      "Ransomware-as-a-service operations rely heavily on affiliate activity.",
      "Identity compromise can matter as much as the malware payload.",
      "Extortion pressure often extends beyond encryption.",
      "Leak sites create reputational and business risk.",
      "CTI should connect malware behavior to the larger criminal ecosystem.",
    ],
    github:
      "https://github.com/millie-altman/malware-analysis/blob/main/reports/blackcat-alphv-analysis-report.md",
    related: ["lockbit", "cl0p", "ransomware-tic-brief"],
  },
  {
    fileId: "INT-002",
    slug: "cl0p",
    title: "The Cl0p File",
    originalTitle: "Cl0p",
    category: "Threat Intelligence",
    type: "Ransomware Analysis",
    difficulty: "Intermediate",
    description:
      "A ransomware and extortion group associated with large-scale data theft, file transfer exploitation, and mass victim notification campaigns.",
    image: "/images/research/clop.png",
    lastUpdated: "July 2026",
    quickStart: [
      "CTI Focus",
      "Ransomware",
      "Data Theft",
      "Vulnerability Management",
    ],
    note:
      "Cl0p is a strong reminder that trusted business software can become an attack path. I recommend studying it through the lens of third-party risk and vulnerability management.",
    keyTakeaways: [
      "Data theft can be the primary extortion method.",
      "Trusted enterprise tools can become major exposure points.",
      "File transfer exploitation can create mass victim impact.",
      "Third-party risk is a defensive priority.",
      "Rapid patching and asset visibility matter.",
    ],
    github:
      "https://github.com/millie-altman/malware-analysis/blob/main/reports/cl0p-analysis-report.md",
    related: ["blackcat-alphv", "lockbit", "ransomware-tic-brief"],
  },
  {
    fileId: "INT-003",
    slug: "lockbit",
    title: "The LockBit Ledger",
    originalTitle: "LockBit",
    category: "Threat Intelligence",
    type: "Ransomware Analysis",
    difficulty: "Intermediate",
    description:
      "A ransomware operation known for its affiliate model, rapid encryption, public leak sites, and widespread enterprise targeting.",
    image: "/images/research/lockbit.png",
    lastUpdated: "July 2026",
    quickStart: ["CTI Focus", "Ransomware", "Affiliate Model", "Enterprise Risk"],
    note:
      "LockBit is useful to study because of its scale. It shows how ransomware can operate like a criminal ecosystem with branding, affiliates, infrastructure, and pressure tactics.",
    keyTakeaways: [
      "Affiliate models increase ransomware scale.",
      "Leak sites add pressure beyond encryption.",
      "Identity security is a major defensive priority.",
      "Backups must be tested before an incident.",
      "Ransomware defense should begin before payload execution.",
    ],
    github:
      "https://github.com/millie-altman/malware-analysis/blob/main/reports/lockbit-analysis-report.md",
    related: ["blackcat-alphv", "cl0p", "wannacry"],
  },
  {
    fileId: "INT-004",
    slug: "wannacry",
    title: "The WannaCry Archive",
    originalTitle: "WannaCry",
    category: "Threat Intelligence",
    type: "Ransomware Analysis",
    difficulty: "Beginner",
    description:
      "A global ransomware outbreak that spread rapidly using worm-like behavior and exposed the impact of unpatched systems.",
    image: "/images/research/wannacry.png",
    lastUpdated: "July 2026",
    quickStart: ["CTI Focus", "Ransomware", "Patch Management", "Legacy Systems"],
    note:
      "WannaCry is one of the clearest examples of why patching matters. The biggest lesson is not just the malware — it is how delayed updates can turn one vulnerability into a global incident.",
    keyTakeaways: [
      "Unpatched systems can create widespread exposure.",
      "Worm-like behavior accelerates impact.",
      "Legacy systems increase organizational risk.",
      "Patch management is a core security control.",
      "Segmentation and backups reduce incident impact.",
    ],
    github:
      "https://github.com/millie-altman/malware-analysis/blob/main/reports/wanna-cry-analysis-report.md",
    related: ["lockbit", "blackcat-alphv", "ransomware-tic-brief"],
  },
  {
    fileId: "INT-005",
    slug: "ransomware-tic-brief",
    title: "The Ransomware Intelligence Brief",
    originalTitle: "Ransomware TIC Brief",
    category: "Threat Intelligence",
    type: "Finished Intelligence",
    difficulty: "Intermediate",
    description:
      "A finished intelligence brief analyzing ransomware trends, operational patterns, defensive implications, and stakeholder-focused recommendations.",
    image: "/images/research/tic-brief.png",
    lastUpdated: "July 2026",
    quickStart: [
      "CTI Focus",
      "Finished Intelligence",
      "Ransomware Trends",
      "Career Prep",
    ],
    note:
      "Finished intelligence should help someone understand risk and decide what to do next. I recommend reading this with stakeholder communication in mind, not just technical detail.",
    keyTakeaways: [
      "Finished intelligence should support decision-making.",
      "Ransomware analysis becomes more useful when it explains trends.",
      "Stakeholder-focused writing is a CTI skill.",
      "Threat activity should connect to defensive priorities.",
      "Clear communication matters as much as technical accuracy.",
    ],
    github:
      "https://github.com/millie-altman/threat-intelligence-portfolio/blob/main/finished-intelligence/ransomware-tic-brief.md",
    related: ["blackcat-alphv", "lockbit", "cl0p"],
  },
  {
    fileId: "ACT-001",
    slug: "scattered-spider",
    title: "The Scattered Spider Profile",
    originalTitle: "Scattered Spider",
    category: "Threat Intelligence",
    type: "Threat Actor Profile",
    difficulty: "Intermediate",
    description:
      "A cybercriminal actor known for social engineering, SIM swapping, help desk impersonation, and MFA fatigue attacks.",
    image: "/images/research/scattered-spider.png",
    lastUpdated: "July 2026",
    quickStart: ["CTI Focus", "Social Engineering", "Identity Abuse", "MFA Fatigue"],
    note:
      "Scattered Spider is one of the strongest examples of how social engineering can bypass strong technical controls. I recommend studying the human side of the intrusion path.",
    keyTakeaways: [
      "Identity-focused attacks can be highly effective.",
      "Help desk impersonation remains a serious attack path.",
      "MFA fatigue exploits human behavior.",
      "Verification procedures matter.",
      "Security teams must protect both systems and processes.",
    ],
    github:
      "https://github.com/millie-altman/threat-actor-profiles/blob/main/cybercriminal/scattered-spider.md",
    related: ["social-engineering-everyday", "phishing-red-flags", "apt29"],
  },
  {
    fileId: "ACT-002",
    slug: "apt29",
    title: "The Cozy Bear File",
    originalTitle: "APT29 / Cozy Bear",
    category: "Threat Intelligence",
    type: "Threat Actor Profile",
    difficulty: "Intermediate",
    description:
      "A Russian-linked espionage actor known for stealthy intelligence collection and long-term persistence.",
    image: "/images/research/apt29.png",
    lastUpdated: "July 2026",
    quickStart: ["CTI Focus", "Espionage", "Persistence", "Nation-State"],
    note:
      "APT29 is a lesson in patience. Their operations are often quiet, long-term, and designed for intelligence gathering rather than immediate disruption.",
    keyTakeaways: [
      "Espionage actors often prioritize long-term access.",
      "Persistence can be difficult to detect.",
      "Behavioral analysis matters.",
      "Strong logging supports long-term investigations.",
      "CTI requires strategic context, not just indicators.",
    ],
    github:
      "https://github.com/millie-altman/threat-actor-profiles/blob/main/nation-state/apt29-cozy-bear.md",
    related: ["volt-typhoon", "lazarus-group", "cti-research-lab"],
  },
  {
    fileId: "ACT-003",
    slug: "lazarus-group",
    title: "The Lazarus Dossier",
    originalTitle: "Lazarus Group",
    category: "Threat Intelligence",
    type: "Threat Actor Profile",
    difficulty: "Intermediate",
    description:
      "A North Korean threat actor linked to espionage, destructive malware, and financial theft.",
    image: "/images/research/lazarus-group.png",
    lastUpdated: "July 2026",
    quickStart: ["CTI Focus", "Financial Theft", "Destructive Malware", "Nation-State"],
    note:
      "Lazarus Group is important because of its range. It blends espionage, financial crime, and destructive capability in a way that makes motivation especially important to understand.",
    keyTakeaways: [
      "Lazarus blends financial and geopolitical objectives.",
      "Nation-state activity can overlap with cybercrime.",
      "Strategic context matters in CTI.",
      "Financial systems require strong monitoring.",
      "Actor motivation helps explain targeting.",
    ],
    github:
      "https://github.com/millie-altman/threat-actor-profiles/blob/main/nation-state/lazarus-group.md",
    related: ["apt29", "volt-typhoon", "wannacry"],
  },
  {
    fileId: "ACT-004",
    slug: "volt-typhoon",
    title: "The Volt Typhoon Watch",
    originalTitle: "Volt Typhoon",
    category: "Threat Intelligence",
    type: "Threat Actor Profile",
    difficulty: "Intermediate",
    description:
      "A Chinese state-linked actor associated with living-off-the-land techniques and critical infrastructure targeting.",
    image: "/images/research/volt-typhoon.png",
    lastUpdated: "July 2026",
    quickStart: [
      "CTI Focus",
      "Living-off-the-Land",
      "Critical Infrastructure",
      "Persistence",
    ],
    note:
      "Volt Typhoon is a lesson in subtlety. It shows how attackers can blend into normal system activity by abusing built-in tools instead of obvious malware.",
    keyTakeaways: [
      "Living-off-the-land activity can reduce obvious detection signals.",
      "Critical infrastructure targeting creates strategic risk.",
      "Normal tools can be used in abnormal ways.",
      "Behavioral baselines matter.",
      "Threat hunting helps identify subtle anomalies.",
    ],
    github:
      "https://github.com/millie-altman/threat-actor-profiles/blob/main/nation-state/volt-typhoon.md",
    related: ["apt29", "lazarus-group", "cti-research-lab"],
  },
  {
    fileId: "LAB-001",
    slug: "lessons-from-the-lab",
    title: "Notes from the Lab",
    originalTitle: "Lessons Learned from the Lab",
    category: "Labs & Projects",
    type: "Lab Reflection",
    difficulty: "Beginner",
    description:
      "A reflection on building labs, writing security tools, documenting failures, and turning hands-on work into portfolio proof.",
    image: "/images/research/lessons-from-the-lab.png",
    lastUpdated: "July 2026",
    quickStart: ["Hands-On", "Portfolio Projects", "CTI Focus", "Automation"],
    note:
      "Write down what you learned while the struggle is still fresh. Errors, confusing parts, and troubleshooting steps often show more growth than the polished final result.",
    keyTakeaways: [
      "Hands-on practice turns concepts into understanding.",
      "Small automation tools can improve workflows.",
      "Documentation is part of technical work.",
      "Frameworks help organize messy observations.",
      "Failure is part of the learning evidence.",
    ],
    github: "https://github.com/millie-altman",
    related: ["python-security-tools", "cti-research-lab", "ransomware-tic-brief"],
  },
  {
    fileId: "LAB-002",
    slug: "python-security-tools",
    title: "The Python Analyst Toolkit",
    originalTitle: "Python Security Tools: Automating Analyst Workflows",
    category: "Labs & Projects",
    type: "Project Write-Up",
    difficulty: "Beginner",
    description:
      "How I built Python tools for phishing analysis, header review, indicator enrichment, and repeatable analyst workflows.",
    image: "/images/research/python-security-tools.png",
    lastUpdated: "July 2026",
    quickStart: ["Python", "Security Automation", "SOC Workflow", "Beginner Friendly"],
    note:
      "Start with one repeatable task instead of trying to automate everything at once. Pick something simple, like checking URLs or organizing indicators, then build from there.",
    keyTakeaways: [
      "Small scripts can improve investigation consistency.",
      "Python should help answer security questions.",
      "Repeatable workflows are a strong beginner starting point.",
      "Automation supports analyst judgment.",
      "Clear documentation makes tools more useful.",
    ],
    github: "https://github.com/millie-altman/python-security-tools",
    related: ["lessons-from-the-lab", "cti-research-lab", "phishing-red-flags"],
  },
  {
    fileId: "LAB-003",
    slug: "cti-research-lab",
    title: "The CTI Research Workbench",
    originalTitle: "CTI Research Lab: Turning Activity into Intelligence",
    category: "Labs & Projects",
    type: "Project Write-Up",
    difficulty: "Intermediate",
    description:
      "A breakdown of my Wazuh, Sysmon, Kali Linux, Atomic Red Team, MITRE ATT&CK, and Diamond Model lab environment.",
    image: "/images/research/cti-research-lab.png",
    lastUpdated: "July 2026",
    quickStart: ["CTI Focus", "Threat Hunting", "MITRE ATT&CK", "Wazuh"],
    note:
      "Intelligence work gets stronger when you connect the why behind activity, not just the what. Practice explaining attacker behavior in plain language.",
    keyTakeaways: [
      "CTI connects technical activity to adversary behavior.",
      "MITRE ATT&CK helps structure analysis.",
      "The Diamond Model supports intrusion analysis.",
      "Documentation is part of investigation work.",
      "Strong analysis explains why activity matters.",
    ],
    github: "https://github.com/millie-altman/cti-research-lab",
    related: ["python-security-tools", "apt29", "volt-typhoon"],
  },
    {
    fileId: "CAR-001",
    slug: "get-to-know-me",
    title: "The Chronicle Begins",
    originalTitle: "Get to Know Me: The Story Behind Cyber Grad Chronicles",
    category: "Featured",
    type: "Personal Chronicle",
    difficulty: "Beginner",
    description:
      "The personal story behind this site, my cybersecurity journey, and why I decided to learn in public.",
    image: "/images/research/get-to-know-me.png",
    lastUpdated: "July 2026",
    quickStart: ["Start Here", "Personal Story", "Career Journey", "Cyber Grad Chronicles"],
    note:
      "Cyber Grad Chronicles is not just a polished portfolio; it is proof in progress. This site shows what I am learning, what I am building, and why I care about making cybersecurity feel more approachable.",
    keyTakeaways: [
      "Cyber Grad Chronicles is part portfolio, part learning hub, part research notebook, and part digital diary.",
      "The site documents progress instead of pretending the journey is perfect.",
      "Cybersecurity is technical, but it is also deeply human.",
      "Building in public creates proof, clarity, and momentum.",
      "This library is meant to help others learn while showing my growth.",
    ],
    related: [
      "building-from-alaska",
      "building-proof-before-opportunity",
      "military-spouse-cybersecurity",
      "qualified-capable-still-waiting",
    ],
  },
  {
    fileId: "CAR-002",
    slug: "building-from-alaska",
    title: "Building from the Interior",
    originalTitle: "Building a Cyber Career from Rural Alaska",
    category: "Career Journal",
    type: "Career Reflection",
    difficulty: "Beginner",
    description:
      "What I learned building a cybersecurity career from a place many people underestimate, and why proof mattered more than proximity.",
    image: "/images/research/building-from-alaska.png",
    lastUpdated: "July 2026",
    quickStart: ["Career Prep", "Learning in Public", "Military Spouse Journey", "Portfolio Building"],
    note:
      "If you are building from a place that feels overlooked, rural, or disconnected from the main cybersecurity hubs, document everything. Small labs, short write-ups, GitHub notes, and reflections can become proof that you are learning and staying consistent.",
    keyTakeaways: [
      "Location can create barriers, but it does not erase potential.",
      "A portfolio can become proof when opportunity is limited.",
      "Documentation is a career skill.",
      "Community-focused cybersecurity matters.",
      "You do not need permission to start building evidence of your growth.",
    ],
    related: [
      "military-spouse-cybersecurity",
      "lessons-from-the-lab",
      "building-proof-before-opportunity",
      "qualified-capable-still-waiting",
    ],
  },
  {
    fileId: "CAR-003",
    slug: "military-spouse-cybersecurity",
    title: "The Portable Career",
    originalTitle: "Breaking Into Cybersecurity as a Military Spouse",
    category: "Career Journal",
    type: "Career Reflection",
    difficulty: "Beginner",
    description:
      "How military life shaped the way I approach cybersecurity, resilience, and building a portable career.",
    image: "/images/research/military-spouse-cybersecurity.png",
    lastUpdated: "July 2026",
    quickStart: ["Military Spouse", "Career Reflection", "Career Prep", "Resilience"],
    note:
      "Adaptability is not a weakness in your resume; it is one of your greatest professional strengths. Rebuilding, solving unfamiliar problems, and continuing forward translate remarkably well into cybersecurity.",
    keyTakeaways: [
      "Military life naturally develops adaptability and resilience.",
      "Cybersecurity knowledge can travel with you.",
      "A visible portfolio creates stability when locations change.",
      "Community resources are more valuable when they are easy to discover.",
      "Career growth does not have to follow a traditional timeline.",
    ],
    related: [
      "building-from-alaska",
      "building-proof-before-opportunity",
      "qualified-capable-still-waiting",
      "digital-safety-military-families",
    ],
  },
  {
    fileId: "CAR-004",
    slug: "building-proof-before-opportunity",
    title: "Proof Before Permission",
    originalTitle: "Building Proof Before Opportunity",
    category: "Career Journal",
    type: "Career Reflection",
    difficulty: "Beginner",
    description:
      "Why I stopped waiting to be chosen and started building visible evidence through labs, projects, research, and public work.",
    image: "/images/research/building-proof-before-opportunity.png",
    lastUpdated: "July 2026",
    quickStart: ["Career Prep", "Portfolio Building", "Learning in Public", "Beginner Friendly"],
    note:
      "Stop treating your portfolio like something you only build after you are good enough. Your portfolio is part of how you become good enough. Small projects count when they show your thinking, consistency, and willingness to learn.",
    keyTakeaways: [
      "Proof builds confidence.",
      "Documentation builds clarity.",
      "Projects teach faster than passive study.",
      "Research sharpens analysis.",
      "Consistency compounds over time.",
    ],
    related: [
      "building-from-alaska",
      "lessons-from-the-lab",
      "military-spouse-cybersecurity",
      "qualified-capable-still-waiting",
    ],
  },
  {
  fileId: "CAR-005",
  slug: "qualified-capable-still-waiting",
  title: "Qualified, Capable, and Still Waiting",
  originalTitle:
    "Qualified, Capable, and Still Waiting: The Employment Gap for Military-Connected Professionals",
  category: "Career Journal",
  type: "Career Reflection",
  difficulty: "Beginner",
  description:
    "A personal look at veteran and military-spouse unemployment, underemployment, relocation barriers, and the gap between being qualified and being given an opportunity.",
  image: "/images/research/still-waiting.png",
  lastUpdated: "July 2026",
  quickStart: [
    "Military Spouse",
    "Veteran Employment",
    "Underemployment",
    "Career Reflection",
  ],
  note:
    "A prolonged job search can make you believe every rejection reflects a personal failure. My experience has taught me that someone can be qualified, prepared, and actively building while still waiting for the right opportunity. Military-connected professionals often navigate relocation, limited local markets, interrupted careers, and hiring systems that do not fully recognize their experience.",
  keyTakeaways: [
    "Unemployment does not automatically mean someone is unqualified.",
    "Underemployment can hide behind otherwise positive employment statistics.",
    "Military moves can interrupt careers and erase professional momentum.",
    "Veterans and military spouses often possess skills that hiring systems fail to recognize.",
    "Continued learning and portfolio building remain valuable before an employer offers a title.",
  ],
  related: [
    "military-spouse-cybersecurity",
    "building-from-alaska",
    "building-proof-before-opportunity",
    "get-to-know-me",
  ],
  },
  {
    fileId: "CAR-006",
    slug: "understanding-the-transition-gap",
    title: "The Transition Gap",
    originalTitle:
      "Understanding the Transition Gap: Rebuilding Identity Beyond the Uniform",
    category: "Career Journal",
    type: "Webinar Reflection",
    difficulty: "Beginner",
    description:
      "A reflection on military transition, identity, deservingness, and rebuilding an internal sense of legitimacy beyond roles, titles, and external validation.",
    image: "/images/research/transition-gap.png",
    lastUpdated: "July 2026",
    quickStart: [
      "Military Transition",
      "Identity",
      "Career Reflection",
      "Personal Growth",
    ],
    note:
      "Transition does not erase capability. It removes the external system that once reinforced identity, belonging, competence, and purpose. Rebuilding requires learning to recognize personal value without depending entirely on titles, feedback, or external approval.",
    keyTakeaways: [
      "The transition gap is created by the loss of an identity-reinforcing system, not the loss of capability.",
      "External rejection does not automatically reflect personal value or professional potential.",
      "Deservingness profiles influence how people interpret silence, rejection, belonging, and success.",
      "Confidence changes with circumstances, while internal legitimacy provides a more stable foundation.",
      "Military transition is part of a broader process of learning to define identity beyond roles and titles.",
    ],
    related: [
      "qualified-capable-still-waiting",
      "military-spouse-cybersecurity",
      "building-proof-before-opportunity",
      "building-from-alaska",
    ],
  },
  {
  fileId: "CAR-007",
  slug: "opportunity-finally-came",
  title: "The Opportunity Finally Came",
  originalTitle:
    "The Opportunity Finally Came: What Happens After Someone Finally Says Yes",
  category: "Career Journal",
  type: "Career Reflection",
  difficulty: "Beginner",
  description:
    "A reflection on landing my first professional IT role in Fairbanks, moving from portfolio proof into a real technology environment, and realizing that getting the opportunity was only the beginning.",
  image: "/images/research/opportunity-finally-came.png",
  lastUpdated: "August 2026",
  quickStart: [
    "Career Reflection",
    "IT Operations",
    "Breaking Into Tech",
    "Professional Growth",
  ],
  note:
    "Getting hired did not suddenly create the skills I had spent years building. The opportunity changed my environment, but the degree, certifications, projects, research, labs, and persistence that came before it are what prepared me to step into that environment and keep learning.",
  keyTakeaways: [
    "The first professional opportunity is a beginning, not a finish line.",
    "Portfolio projects and independent learning can prepare you for real-world responsibilities before you have the title.",
    "IT operations provides valuable context for understanding how technology and security function inside an organization.",
    "Career progress is better measured by the capabilities you are building than by job titles alone.",
    "Being hired validates an opportunity, not the moment your capability suddenly began.",
  ],
  related: [
    "qualified-capable-still-waiting",
    "building-proof-before-opportunity",
    "building-from-alaska",
    "military-spouse-cybersecurity",
  ],
  },
  {
    fileId: "AWR-001",
    slug: "securing-the-interior",
    title: "Securing the Interior",
    originalTitle: "Securing the Interior: A Local Approach",
    category: "Community Awareness",
    type: "Community Awareness Brief",
    difficulty: "Beginner",
    description:
      "A community-first look at scam patterns, cyber awareness, and digital safety in Interior Alaska.",
    image: "/images/research/securing-the-interior.png",
    lastUpdated: "July 2026",
    quickStart: ["Alaska", "Community Cybersecurity", "Scam Awareness", "Beginner Friendly"],
    note:
      "Make cybersecurity feel local. When people can connect cyber safety to rental listings, payroll requests, scam texts, or Facebook Marketplace posts, the advice becomes easier to remember and act on.",
    keyTakeaways: [
      "Cybersecurity awareness is strongest when it connects to real local experiences.",
      "Most everyday scams rely on urgency, trust, fear, or payment pressure.",
      "Community stories help make cyber risks easier to recognize.",
      "Official verification is one of the best defenses.",
      "Cybersecurity is community security too.",
    ],
    related: [
      "phishing-red-flags",
      "password-security",
      "digital-safety-military-families",
      "social-engineering-everyday",
    ],
  },
  {
    fileId: "AWR-002",
    slug: "phishing-red-flags",
    title: "The Alaska Phishing Files",
    originalTitle: "Phishing Red Flags: Real Stories from Alaska",
    category: "Community Awareness",
    type: "Community Threat Brief",
    difficulty: "Beginner",
    description:
      "Real phishing, smishing, vishing, payroll fraud, and social engineering stories shared by members of my Alaska community.",
    image: "/images/research/phishing-red-flags.png",
    lastUpdated: "July 2026",
    quickStart: ["Beginner Friendly", "Phishing", "Social Engineering", "Community Awareness"],
    note:
      "Treat urgency as the first warning sign. If a message, phone call, or DM makes you feel panicked, rushed, embarrassed, or pressured to act immediately, slow down. Scammers rely on speed because verification usually breaks the scam.",
    keyTakeaways: [
      "Most phishing attacks succeed by exploiting psychology rather than technology.",
      "Urgency, authority, fear, and trust appear across nearly every scam.",
      "Verification is one of the strongest defenses.",
      "Sharing scam experiences strengthens community awareness.",
      "Cyber awareness is most effective when it reflects real-world examples.",
    ],
    related: [
      "social-engineering-everyday",
      "password-security",
      "digital-safety-military-families",
      "securing-the-interior",
    ],
  },
  {
    fileId: "AWR-003",
    slug: "password-security",
    title: "The Password Primer",
    originalTitle: "Why Strong Passwords Still Matter",
    category: "Community Awareness",
    type: "Cyber Awareness Guide",
    difficulty: "Beginner",
    description:
      "A practical breakdown of password reuse, passphrases, credential stuffing, password managers, and account protection.",
    image: "/images/research/password.png",
    lastUpdated: "July 2026",
    quickStart: ["Beginner Friendly", "Cyber Awareness", "Passwords", "MFA"],
    note:
      "Start with your email password first. Your email is often the master key to resetting other accounts. If there is only one password you strengthen today, make it that one.",
    keyTakeaways: [
      "Password reuse creates risk across multiple accounts.",
      "Credential stuffing works because many people reuse passwords.",
      "Long passphrases can be both strong and memorable.",
      "Password managers make unique passwords easier to manage.",
      "MFA adds protection beyond the password.",
    ],
    related: [
      "phishing-red-flags",
      "social-engineering-everyday",
      "digital-safety-military-families",
    ],
  },
  {
    fileId: "AWR-004",
    slug: "social-engineering-everyday",
    title: "The Human Exploit",
    originalTitle: "Social Engineering in Everyday Life",
    category: "Community Awareness",
    type: "Cyber Awareness Guide",
    difficulty: "Beginner",
    description:
      "Understanding the psychology behind social engineering, why attackers target people first, and practical ways to recognize manipulation.",
    image: "/images/research/social-engineering-everyday.png",
    lastUpdated: "July 2026",
    quickStart: ["Social Engineering", "Cyber Awareness", "Scam Prevention", "Beginner Friendly"],
    note:
      "Pause first, verify second, respond last. If a message creates urgency, fear, or pressure, slow the conversation down before making a decision.",
    keyTakeaways: [
      "Social engineering targets people before technology.",
      "Most attacks rely on urgency, authority, fear, or trust.",
      "Verification is one of the strongest defenses.",
      "Awareness helps reduce phishing and scam attempts.",
      "Understanding human behavior is a cybersecurity skill.",
    ],
    related: [
      "phishing-red-flags",
      "password-security",
      "digital-safety-military-families",
      "securing-the-interior",
    ],
  },
  {
    fileId: "AWR-005",
    slug: "digital-safety-military-families",
    title: "The Military Family Safety Brief",
    originalTitle: "Digital Safety for Military Families",
    category: "Community Awareness",
    type: "Cyber Awareness Guide",
    difficulty: "Beginner",
    description:
      "Practical cybersecurity guidance designed around military life, relocation, deployments, and career transitions.",
    image: "/images/research/digital-safety-military-families.png",
    lastUpdated: "July 2026",
    quickStart: ["Military Families", "Cyber Awareness", "Scam Prevention", "Beginner Friendly"],
    note:
      "Urgency is often what attackers exploit. If someone is pushing you to act immediately—whether it is a rental, job offer, or paperwork—slow the situation down and verify before responding.",
    keyTakeaways: [
      "Military transitions create opportunities attackers can exploit.",
      "Most scams rely on urgency and trust.",
      "Verification should come before payment or sharing sensitive information.",
      "MFA and secure document storage reduce risk.",
      "Cyber awareness should fit real family situations.",
    ],
    related: [
      "social-engineering-everyday",
      "phishing-red-flags",
      "password-security",
      "military-spouse-cybersecurity",
    ],
  },
];

export function getResearchArticleBySlug(slug: string) {
  return researchArticles.find((article) => article.slug === slug);
}

export function getResearchArticlesByCategory(category: ResearchCategory) {
  return researchArticles.filter((article) => article.category === category);
}

export function getRelatedResearchArticles(slugs: string[]) {
  return slugs
    .map((slug) => getResearchArticleBySlug(slug))
    .filter(Boolean) as ResearchArticle[];
}