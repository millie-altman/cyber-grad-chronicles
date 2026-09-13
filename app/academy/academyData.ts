export type Lesson = {
  slug: string;
  title: string;
  duration: string;
  introduction: string;
  sections: { title: string; body: string; tips?: string[] }[];
  takeaway: string;
};

export type AcademyModule = {
  slug: string;
  number: string;
  title: string;
  description: string;
  image: string;
  lessons: Lesson[];
};

export const academyModules: AcademyModule[] = [
  {
    slug: "cybersecurity-101", number: "01", title: "Cybersecurity 101",
    description: "Learn what cybersecurity protects, why it matters, and how everyday choices affect digital safety.", image: "/images/academy/101-academy.png",
    lessons: [
      { slug: "what-is-cybersecurity", title: "What Is Cybersecurity?", duration: "7 min read", introduction: "Cybersecurity is the practice of protecting devices, accounts, networks, and information from harm or unauthorized access. You already make security decisions whenever you unlock a phone, open an email, or sign in to an app.", sections: [
        { title: "What are we protecting?", body: "Security goals are often grouped into confidentiality, integrity, and availability. These mean keeping information private, keeping it accurate, and keeping it accessible to authorized people when they need it." },
        { title: "Risk in plain language", body: "Risk appears when a threat can use a weakness to affect something valuable. A reused password is a weakness; a criminal trying leaked passwords is a threat; losing access to email is a possible impact. Good security reduces risk in practical layers." },
      ], takeaway: "List three digital things you value—such as email, photos, or banking—and enable the strongest available sign-in protection on the most important one." },
      { slug: "your-digital-footprint", title: "Understand Your Digital Footprint", duration: "6 min read", introduction: "Your digital footprint is the information created when you browse, post, shop, use apps, or appear in other people’s content. Some is intentional, while some is collected quietly in the background.", sections: [
        { title: "Active and passive information", body: "Posts, comments, profile details, and photos form your active footprint. Device identifiers, approximate location, browsing activity, and app analytics can form a passive footprint. Deleting a post does not guarantee every copy disappears." },
        { title: "Reduce unnecessary exposure", body: "Birthdays, routines, workplaces, pet names, and travel plans can help someone guess passwords or impersonate you.", tips: ["Make personal profiles private where practical", "Remove unused accounts and connected apps", "Avoid posting travel details in real time"] },
      ], takeaway: "View one social profile while signed out, then remove one detail you do not need to share publicly." },
    ],
  },
  {
    slug: "cyber-awareness-essentials", number: "02", title: "Cyber Awareness Essentials",
    description: "Practice safer passwords, updates, browsing, messaging, and account recovery in daily life.", image: "/images/academy/awareness-academy.png",
    lessons: [
      { slug: "strong-sign-ins", title: "Passwords, Passkeys, and MFA", duration: "8 min read", introduction: "A strong sign-in protects an account even when another website is breached. The safest practical setup combines a unique credential with an additional verification method.", sections: [
        { title: "Make every account unique", body: "Password reuse turns one company’s breach into a key for many accounts. A password manager can create and store long, unique passwords. Passkeys use cryptography tied to your device and resist ordinary password phishing." },
        { title: "Add another layer", body: "Multi-factor authentication asks for another proof after a password. An authenticator app, passkey, or security key is generally safer than a text message, though any MFA is usually better than none.", tips: ["Protect email and financial accounts first", "Store recovery codes safely and offline", "Never approve a sign-in prompt you did not initiate"] },
      ], takeaway: "Turn on MFA for your primary email and save its recovery codes somewhere you can reach if your phone is lost." },
      { slug: "updates-backups-and-recovery", title: "Updates, Backups, and Recovery", duration: "7 min read", introduction: "Prevention matters, but recovery matters too. Updates close known weaknesses, while backups help you recover from device failure, theft, mistakes, or ransomware.", sections: [
        { title: "Update promptly", body: "Operating systems, browsers, apps, routers, and smart devices receive security fixes. Automatic updates reduce the time a known weakness remains open. Download updates only through device settings, an official app store, or the vendor website." },
        { title: "Keep recoverable copies", body: "A useful backup is separate from the original and tested occasionally. Important files can be copied to a reputable cloud service and an external drive that is disconnected when not in use.", tips: ["Back up irreplaceable files first", "Confirm you can restore a sample file", "Review account recovery details"] },
      ], takeaway: "Enable automatic phone updates and confirm your most important photos or documents exist in a second location." },
    ],
  },
  {
    slug: "threats", number: "03", title: "Threats", description: "Understand phishing, social engineering, malware, scams, and the warning signs attackers leave behind.", image: "/images/academy/threats-academy.png",
    lessons: [
      { slug: "phishing-and-social-engineering", title: "Phishing and Social Engineering", duration: "8 min read", introduction: "Social engineering manipulates people into sharing information or taking an unsafe action. Phishing delivers that pressure through email, text, calls, social media, or fake websites.", sections: [
        { title: "Notice the pressure", body: "Attackers use urgency, fear, curiosity, or authority: an account will close, a package failed, a boss needs gift cards, or a prize is waiting. A familiar logo or caller name is not proof of identity; both can be copied." },
        { title: "Verify another way", body: "Do not use contact details in the suspicious message. Open the official app, type the known website yourself, or call a trusted number.", tips: ["Inspect the full sender address", "Preview links before opening", "Treat unexpected attachments as untrusted", "Never share one-time codes"] },
      ], takeaway: "When a message asks you to act urgently, stop and verify it through an official channel before responding." },
      { slug: "malware-and-ransomware", title: "Malware and Ransomware Basics", duration: "7 min read", introduction: "Malware is software designed to cause harm, steal information, spy, or provide unauthorized access. Ransomware blocks access to data or systems and demands payment.", sections: [
        { title: "How infections happen", body: "Malware can arrive through malicious attachments, fake downloads, compromised websites, pirated software, or unpatched devices. Warning signs include unfamiliar programs, redirects, disabled security tools, or unexpected account activity." },
        { title: "Limit the damage", body: "Use supported software, trusted app sources, standard user accounts, and reliable backups.", tips: ["Disconnect a suspected device from networks", "Use a trusted device to change exposed passwords", "Seek qualified help for a work device"] },
      ], takeaway: "Uninstall one unused application and confirm your device’s built-in protection and automatic updates are enabled." },
    ],
  },
  {
    slug: "defense", number: "04", title: "Defense", description: "Apply layers of protection and learn what to do when an account or device may be compromised.", image: "/images/academy/defense-academy.png",
    lessons: [
      { slug: "defense-in-depth-at-home", title: "Defense in Depth at Home", duration: "7 min read", introduction: "Defense in depth means using several protections so one mistake or failed control does not expose everything.", sections: [
        { title: "Build practical layers", body: "Unique passwords and MFA protect accounts. Updates and trusted downloads protect devices. Router security protects the home network. Backups support recovery. No single layer is perfect, but several layers make an attacker’s job harder." },
        { title: "Secure the home network", body: "Change the router’s default administrator password, use WPA2 or WPA3 encryption, install firmware updates, and create a guest network for visitors or less-trusted smart devices.", tips: ["Disable remote administration unless needed", "Do not publish your Wi-Fi password", "Replace unsupported routers"] },
      ], takeaway: "Open your router or provider app and check for an update and a unique administrator password." },
      { slug: "respond-to-a-compromised-account", title: "Respond to a Compromised Account", duration: "8 min read", introduction: "Unexpected sign-ins, reset notices, messages you did not send, or changed recovery details can indicate compromise. A calm sequence of actions can contain the damage.", sections: [
        { title: "Regain control", body: "On a trusted device, use the official app or website. Change the password, sign out other sessions, enable MFA, and review recovery methods, forwarding rules, connected apps, and recent activity." },
        { title: "Recover and learn", body: "Change reused passwords elsewhere, tell contacts about scams sent from the account, and use the provider’s official recovery process if locked out.", tips: ["Report fraudulent transactions promptly", "Keep records when money or identity data is involved", "Do not pay strangers promising instant recovery"] },
      ], takeaway: "Review active sessions and recovery methods on one important account, then remove anything unfamiliar." },
    ],
  },
  {
    slug: "cloud", number: "05", title: "Cloud", description: "Make safer choices when sharing files, granting app access, and using public Wi-Fi.", image: "/images/academy/cloud-academy.png",
    lessons: [
      { slug: "cloud-basics", title: "The Cloud in Plain Language", duration: "6 min read", introduction: "The cloud is a collection of remote computers that provide storage, applications, and services over a network. Webmail, photo backup, streaming, and shared documents are familiar examples.", sections: [
        { title: "Shared responsibility", body: "A provider secures its platform, while you still control passwords, sharing choices, devices, and much of the data placed there. A secure provider cannot prevent every account mistake." },
        { title: "Share deliberately", body: "Links may be public, limited to named people, or editable by anyone who receives them. Check permissions before sending and remove access when collaboration ends.", tips: ["Avoid storing data you do not need", "Review connected third-party apps", "Use expiration dates when available"] },
      ], takeaway: "Review one cloud folder and remove an old public link or collaborator who no longer needs access." },
      { slug: "public-wifi-and-mobile-safety", title: "Public Wi-Fi and Mobile Safety", duration: "7 min read", introduction: "Public networks are convenient but outside your control. Encrypted websites help, yet fake hotspots, unsafe downloads, shoulder surfing, and stolen devices remain concerns.", sections: [
        { title: "Connect with care", body: "Confirm the network name with staff, prefer mobile data for sensitive work, keep file sharing off, and never bypass browser security warnings. A VPN does not make fake sites, scams, or malware safe." },
        { title: "Protect the device", body: "Use a strong screen lock, enable device tracking, hide sensitive notification previews, and keep physical control of the device.", tips: ["Turn off automatic Wi-Fi joining", "Forget public networks after use", "Never install a profile requested by a random hotspot"] },
      ], takeaway: "Disable automatic connection to open Wi-Fi and make sure device tracking is enabled on your phone." },
    ],
  },
  {
    slug: "governance", number: "06", title: "Governance", description: "Explore policies, privacy, data handling, and the human decisions that guide secure organizations.", image: "/images/academy/governance-academy.png",
    lessons: [
      { slug: "policies-and-acceptable-use", title: "Why Security Policies Matter", duration: "6 min read", introduction: "A security policy records expectations and responsibilities. It turns broad goals into repeatable decisions about devices, accounts, access, and reporting.", sections: [
        { title: "Policy supports people", body: "Useful policies explain what is protected, who is responsible, and what action to take. People also need training, workable tools, and a safe way to ask questions or report mistakes." },
        { title: "Follow workplace boundaries", body: "Work devices and accounts may be monitored, retained, or managed differently from personal ones. Keep personal data off work systems and use approved storage and apps.", tips: ["Know how to report a suspicious message", "Ask before installing software", "Lock the screen when stepping away"] },
      ], takeaway: "Find your school or employer’s security policy and locate its instructions for reporting a suspicious message." },
      { slug: "privacy-and-data-minimization", title: "Privacy and Data Minimization", duration: "7 min read", introduction: "Privacy is about appropriate control and use of personal information. Data minimization reduces risk by collecting, sharing, and keeping only what is genuinely needed.", sections: [
        { title: "Recognize sensitive data", body: "Contact details, identifiers, financial records, health information, location, credentials, and private communications can cause harm if misused. Several ordinary details combined can become highly identifying." },
        { title: "Use permission thoughtfully", body: "App permissions should match an app’s purpose. A flashlight does not need contacts; a photo editor may need selected photos but not permanent access to the entire library.", tips: ["Choose approximate location when possible", "Remove permissions from unused apps", "Delete old sensitive downloads"] },
      ], takeaway: "Review five phone apps and remove one permission that is not needed for the app’s purpose." },
    ],
  },
  {
    slug: "careers", number: "07", title: "Careers", description: "Discover common security roles and create a realistic, ethical path for building beginner experience.", image: "/images/academy/careers-academy.png",
    lessons: [
      { slug: "cybersecurity-career-paths", title: "Cybersecurity Career Paths", duration: "8 min read", introduction: "Cybersecurity is a collection of specialties, not one job. Roles can focus on technology, investigations, risk, communication, policy, software, identity, cloud, or education.", sections: [
        { title: "Examples of the work", body: "Security operations analysts investigate alerts. Risk professionals connect controls to business needs. Application security specialists help developers. Incident responders contain and study events. Titles vary, so read responsibilities carefully." },
        { title: "Start with foundations", body: "Networking, operating systems, identity, troubleshooting, clear writing, and ethical judgment support many specialties.", tips: ["Choose one role to research", "Compare several real job descriptions", "Build a small project demonstrating one relevant skill"] },
      ], takeaway: "Save three job descriptions for one role and highlight the skills that appear in all three." },
      { slug: "build-a-safe-home-lab", title: "Build a Safe Beginner Lab", duration: "7 min read", introduction: "A home lab lets you learn through experiments on systems you own or are explicitly authorized to use. Clear boundaries keep practice legal, ethical, and contained.", sections: [
        { title: "Create a controlled space", body: "Virtual machines and beginner platforms provide isolated or intentionally vulnerable environments. Never scan, test, or attempt to access public systems without explicit authorization. Curiosity is not permission." },
        { title: "Document what you learn", body: "Explain the goal, setup, actions, observations, mistakes, and lessons. Remove credentials and personal information before publishing.", tips: ["Use snapshots before changes", "Keep vulnerable machines off public networks", "Explain why each setting matters"] },
      ], takeaway: "Create a one-page lab plan naming the system, learning goal, safety boundary, and evidence you will capture." },
    ],
  },
  {
    slug: "certifications", number: "08", title: "Certifications", description: "Understand what certifications can prove and choose learning goals without chasing every credential.", image: "/images/academy/academy-certifications.png",
    lessons: [
      { slug: "what-certifications-can-do", title: "What Certifications Can—and Cannot—Do", duration: "6 min read", introduction: "A certification can provide structure, vocabulary, and evidence that you passed an assessment. It is one part of a learning path, not a guarantee of experience or employment.", sections: [
        { title: "Use credentials for a purpose", body: "A good choice aligns with a target role, builds missing knowledge, and fits your time and budget. Check employer needs, renewal costs, exam format, and official objectives." },
        { title: "Pair knowledge with evidence", body: "Practice labs, documented projects, volunteer work, and clear explanations show how you apply what you studied.", tips: ["Check real job postings first", "Budget for renewals", "Do not overstate your ability"] },
      ], takeaway: "Write one sentence explaining the role or skill a certification would support before spending money on it." },
      { slug: "make-a-study-plan", title: "Make a Sustainable Study Plan", duration: "7 min read", introduction: "A study plan works when it fits real life. Consistent, focused sessions usually beat occasional marathons, especially when reading is combined with recall and practice.", sections: [
        { title: "Plan from the objective", body: "Start with the official topic list. Mark what you know, what needs review, and what is new. Give difficult domains more sessions and leave time for mixed practice." },
        { title: "Track understanding honestly", body: "Close the material and explain concepts from memory. Review why each practice answer was right or wrong, and adjust when life changes.", tips: ["Schedule short focused sessions", "Mix notes, labs, and explanations", "Protect sleep before an exam"] },
      ], takeaway: "Schedule three 25-minute sessions this week: learn one objective, practice it, then explain it from memory." },
    ],
  },
];

export const getAcademyModule = (slug: string) => academyModules.find((item) => item.slug === slug);
export function getAcademyLesson(moduleSlug: string, lessonSlug: string) {
  const academyModule = getAcademyModule(moduleSlug);
  return { academyModule, lesson: academyModule?.lessons.find((item) => item.slug === lessonSlug) };
}
