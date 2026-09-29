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
      {
        slug: "how-devices-connect",
        title: "How Devices Connect to the Internet",
        duration: "4 min lesson",
        introduction: "Opening a website involves several systems working together. Understanding their basic roles helps you describe connection problems and recognize where security protections apply.",
        sections: [
          {
            title: "Follow a simple connection",
            body: "Your device connects to a local network through Wi-Fi or a cable. A router moves traffic between networks. Your internet service provider carries traffic beyond your home. The website runs on another computer, often in a provider's data center. A problem at any step can stop a page from loading."
          },
          {
            title: "Names, addresses, and services",
            body: "An IP address identifies a network endpoint. The Domain Name System, or DNS, helps translate a name such as example.com into an address a device can use. Ports help direct traffic to particular services. These concepts describe how traffic reaches a destination; they do not prove that the destination is trustworthy."
          },
          {
            title: "Separate connection from trust",
            body: "Imagine that a shopping page loads successfully but asks for an unusual payment. Connectivity is working, yet the transaction may still be unsafe. HTTPS encrypts the connection to the domain you reached; it does not establish that the business is honest.",
            tips: [
              "Describe whether one site or every site fails to load.",
              "Check the full domain before entering account details.",
              "Use device settings to inspect your own connection; do not test other people's networks."
            ]
          }
        ],
        takeaway: "Draw a path from your device to a website and label the device, router, provider, DNS lookup, and destination."
      },
      {
        slug: "authentication-and-authorization",
        title: "Authentication and Authorization",
        duration: "4 min lesson",
        introduction: "Signing in and being allowed to perform an action are different decisions. Knowing the difference helps explain account permissions, shared devices, and least privilege.",
        sections: [
          {
            title: "Prove an identity",
            body: "Authentication checks a claim about who is signing in. Passwords, passkeys, and additional verification methods can help establish that claim. A successful sign-in identifies an account; it does not mean every resource should become available to it."
          },
          {
            title: "Decide what the identity may do",
            body: "Authorization determines which actions an account can take. A student may view a class document while an instructor can edit it. Both people can authenticate successfully while receiving different permissions. Least privilege means granting the access needed for a task rather than every available capability."
          },
          {
            title: "Check the action, not just the login",
            body: "Suppose a shared folder contains a schedule and private application records. Someone helping edit the schedule does not automatically need the private records. Separate resources or narrower permissions can reduce accidental exposure.",
            tips: [
              "Use individual accounts instead of sharing passwords.",
              "Distinguish viewing, editing, sharing, and administration.",
              "Review access when a person's responsibilities change."
            ]
          }
        ],
        takeaway: "For a fictional class folder, write which actions a student, instructor, and administrator should each be allowed to perform."
      },
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
      {
        slug: "safer-browsing-and-downloads",
        title: "Safer Browsing and Downloads",
        duration: "4 min lesson",
        introduction: "Search results, advertisements, and browser pop-ups can lead to convincing imitations. A short verification routine helps you reach the service or download you actually intended to use.",
        sections: [
          {
            title: "Start from a trusted route",
            body: "Use a known bookmark or a provider's official website when downloading software or opening an important account. A sponsored result or familiar logo is not proof of identity. Inspect the full domain rather than trusting a page title or a brand name somewhere in the address."
          },
          {
            title: "Notice unexpected installation requests",
            body: "A page claiming that your device is infected may be trying to push a download or a support call. Close the page and check device security through the tools already installed. Do not run commands, install extensions, or bypass browser warnings because a webpage tells you to."
          },
          {
            title: "Practice with a fictional example",
            body: "You search for a document reader and land on a page offering an urgent 'security update.' Instead of installing it, open the software vendor's known site independently and check its download or update instructions.",
            tips: [
              "Review whether a browser extension needs the access it requests.",
              "Remove extensions you no longer use.",
              "Keep the browser updated through its built-in update process."
            ]
          }
        ],
        takeaway: "Review the extensions in your own browser and remove one you no longer need, or confirm why each remaining extension is necessary."
      },
      {
        slug: "sharing-screenshots-and-documents",
        title: "Share Screenshots and Documents Safely",
        duration: "4 min lesson",
        introduction: "A useful screenshot can also reveal account details, private messages, or recovery information. Review what a file exposes before sharing it in a class, support ticket, or public post.",
        sections: [
          {
            title: "Look beyond the main subject",
            body: "Browser tabs, address bars, notifications, account names, and background windows may disclose information unrelated to your question. Documents can also contain comments, revision history, hidden sheets, or metadata. Check the actual file you will send, not only its first visible page."
          },
          {
            title: "Remove information rather than covering it",
            body: "A shape placed over text in an editable document may be removable. Use an appropriate redaction or export process, then reopen the result and check what remains visible or selectable. For screenshots, crop unnecessary areas and inspect the final image. Never publish passwords, access tokens, or recovery codes."
          },
          {
            title: "Choose the smallest audience",
            body: "A help request may need a private attachment rather than a public link. Share only the details needed to explain the issue. If an actual secret was exposed, deleting the post alone is insufficient: revoke or replace that secret through the official account controls.",
            tips: [
              "Use invented data in portfolio demonstrations.",
              "Check who can open the link.",
              "Inspect the exported copy before sending it."
            ]
          }
        ],
        takeaway: "Create a screenshot using fictional information, crop it to the relevant area, and check the final saved image for unintended details."
      },
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
      {
        slug: "recognize-impersonation-scams",
        title: "Recognize Impersonation Scams",
        duration: "4 min lesson",
        introduction: "An attacker can pretend to be a colleague, recruiter, support technician, or family member. The important question is whether the request can be verified independently.",
        sections: [
          {
            title: "Familiar appearance is weak evidence",
            body: "Names, profile photos, logos, and caller information can be copied or misleading. A message arriving from a real account may also be unsafe if that account has been compromised. Treat the requested action as something to assess separately from the displayed identity."
          },
          {
            title: "Watch for a changed process",
            body: "A fictional recruiter asks you to install a remote-control tool before discussing a role. A supposed colleague wants a one-time code to fix an account. Both requests move beyond an ordinary conversation into sensitive access. Urgency and demands for secrecy make independent verification especially important."
          },
          {
            title: "Verify through a separate route",
            body: "Use contact information you already trust, such as an established company directory or official support page. Do not rely on a phone number or link provided in the suspicious message. If the request involves a work account, follow the organization's reporting process.",
            tips: [
              "Pause before granting remote access.",
              "Do not relay sign-in or recovery codes.",
              "Preserve the message for reporting without forwarding it broadly."
            ]
          }
        ],
        takeaway: "Write a short verification response for a fictional unexpected support request, naming the independent channel you would use."
      },
      {
        slug: "credential-attacks-explained",
        title: "Credential Attacks Explained",
        duration: "4 min lesson",
        introduction: "Attackers do not always need to break software to access an account. They may guess passwords, reuse stolen credentials, or trick someone into approving a sign-in.",
        sections: [
          {
            title: "Different routes to the same account",
            body: "Password guessing tries possible passwords. Password spraying tries a small number of common passwords against many accounts. Credential stuffing reuses username and password combinations stolen elsewhere. These are different techniques, even though each can lead to an unauthorized sign-in."
          },
          {
            title: "A reused password connects accounts",
            body: "Imagine two unrelated services share the same email address and password. If one service exposes that combination, the other account becomes a possible target. Unique passwords limit this connection between breaches. A password manager can make unique credentials easier to maintain."
          },
          {
            title: "Recognize suspicious prompts",
            body: "Repeated verification prompts you did not initiate are not a reason to approve one. Deny or ignore them and review the account through its official app or site. Additional authentication helps, but stolen sessions and deceptive approval requests mean activity monitoring still matters.",
            tips: [
              "Protect the email account used for recovery.",
              "Avoid reused passwords.",
              "Report unexpected work-account authentication prompts to the appropriate team."
            ]
          }
        ],
        takeaway: "Using your password manager's review tools if available, identify one reused password and replace it with a unique one."
      },
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
      {
        slug: "read-security-alerts-and-logs",
        title: "Read Security Alerts and Logs",
        duration: "4 min lesson",
        introduction: "A log records activity. An alert calls attention to activity that may deserve review. Neither automatically proves an attack, but both can help you investigate carefully.",
        sections: [
          {
            title: "Identify the basic facts",
            body: "Look for the timestamp and time zone, account, device, action, and result. A failed sign-in differs from a successful one. An unfamiliar location can be a clue, but network routing, travel, and VPN use can make location estimates misleading."
          },
          {
            title: "Build a short timeline",
            body: "Consider a fictional record showing several failed sign-ins followed by a successful sign-in. Ask whether the person recognizes the successful session and whether a known device was used. Keep observations separate from conclusions: 'five failures occurred' is a fact; 'the account was stolen' needs more evidence."
          },
          {
            title: "Respond through trusted controls",
            body: "Open the account's official security page rather than following an alert email's link. Review sessions and account changes. For workplace systems, report your observations rather than making disruptive changes outside your authority.",
            tips: [
              "Record times with their time zone.",
              "Avoid sharing logs that contain private details or secrets.",
              "Distinguish what happened from what you suspect happened."
            ]
          }
        ],
        takeaway: "Write a three-line timeline for a fictional sign-in alert, followed by one question you would investigate before drawing a conclusion."
      },
      {
        slug: "make-a-personal-response-plan",
        title: "Make a Personal Security Response Plan",
        duration: "4 min lesson",
        introduction: "When a device is lost or an account is inaccessible, it is harder to make clear decisions. A short plan helps you find trusted recovery routes and prioritize what matters.",
        sections: [
          {
            title: "Identify dependencies",
            body: "Email often supports recovery for other accounts. A phone may hold authentication apps or receive verification messages. List which important services depend on those devices and accounts so you can recognize a recovery problem before an incident occurs."
          },
          {
            title: "Prepare trusted recovery options",
            body: "Keep official support routes, a trusted contact, and the location of recovery materials accessible without relying entirely on the device you might lose. Protect the recovery materials themselves. A plan can record where they are stored without placing passwords or codes into an ordinary shared document."
          },
          {
            title: "Rehearse without disrupting anything",
            body: "Imagine your phone is unavailable. Could you reach your recovery information and contact the relevant provider from another trusted device? Walk through the steps without signing out every account or deleting anything. At work, follow the organization's response process instead of a personal plan.",
            tips: [
              "Record whom to notify.",
              "Keep an inventory of important accounts.",
              "Review the plan after changing devices or recovery methods."
            ]
          }
        ],
        takeaway: "Draft a one-page lost-phone plan listing trusted contacts, official recovery routes, and where protected recovery materials are stored."
      },
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
      {
        slug: "cloud-sharing-permissions",
        title: "Understand Cloud Sharing Permissions",
        duration: "4 min lesson",
        introduction: "Cloud sharing is a decision about audience and capability. A link can be easy to send while giving more access than the recipient actually needs.",
        sections: [
          {
            title: "Separate audience from permission",
            body: "An audience might be named people, members of an organization, or anyone with a link. Permission might allow viewing, commenting, or editing. A restricted audience with editing rights is different from a public viewing link. Check both settings before sharing."
          },
          {
            title: "Understand inherited access",
            body: "A file may receive permissions from its parent folder or shared workspace. Removing a direct invitation may not remove access granted through another route. The exact behavior varies by service, so use the platform's access review tools to inspect effective sharing."
          },
          {
            title: "Apply the idea to a small project",
            body: "For a fictional group assignment, classmates may need editing access while a reviewer needs only viewing access. When the project ends, review whether everyone still needs access. Avoid placing unrelated personal records in the shared project folder.",
            tips: [
              "Use named recipients when practical.",
              "Review link access separately from invitations.",
              "Check sharing again when moving a file between folders."
            ]
          }
        ],
        takeaway: "Create an empty practice document and inspect its audience and permission options without publishing it or entering sensitive information."
      },
      {
        slug: "connected-apps-and-cloud-access",
        title: "Connected Apps and Cloud Access",
        duration: "4 min lesson",
        introduction: "Connecting an app to an account may let it read or change information without asking for your password again. Review that access as carefully as a file-sharing invitation.",
        sections: [
          {
            title: "Read the requested scope",
            body: "A calendar helper might request calendar access, while a storage integration might request access to files. The permission request describes what the app could do, not merely what you expect it to do. Broad access should have a clear purpose connected to your task."
          },
          {
            title: "Access can outlast the session",
            body: "An integration may use tokens to act after the initial sign-in. Closing its browser tab does not necessarily remove permission. Services usually provide a way to review connected apps and revoke access, though the settings and effects differ by provider."
          },
          {
            title: "Review before and after use",
            body: "Suppose a one-time document converter requests ongoing access to all stored files. Consider whether an approved tool with narrower access can meet the need. Revoking an integration can stop future access, but may not erase copies of data the app already received.",
            tips: [
              "Check the publisher and permission description.",
              "Avoid connecting work accounts to unapproved apps.",
              "Remove integrations that no longer serve a purpose."
            ]
          }
        ],
        takeaway: "Open one personal account's connected-app settings and review the purpose and scope of each integration before making any changes."
      },
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
      {
        slug: "risk-and-controls-in-plain-language",
        title: "Risk and Controls in Plain Language",
        duration: "4 min lesson",
        introduction: "Risk describes what could go wrong and why it matters. A control is a measure intended to reduce that risk. Clear descriptions make decisions easier to explain and review.",
        sections: [
          {
            title: "Write a concrete scenario",
            body: "Instead of saying 'email is risky,' describe an event: an unauthorized person accesses a shared mailbox and reads private requests. Identify the information or service affected, the conditions that make the event possible, and the likely consequences."
          },
          {
            title: "Connect controls to the scenario",
            body: "Individual accounts, restricted permissions, additional authentication, and access reviews may reduce different parts of the risk. A control can prevent an event, help detect it, or support recovery. Explain which role a proposed measure serves rather than treating every measure as interchangeable."
          },
          {
            title: "Recognize remaining risk",
            body: "Controls have limits. A team might reduce exposure while still accepting a defined level of remaining risk. That decision needs an appropriate owner, a reason, and a review point. A beginner exercise can use qualitative labels such as low, medium, and high without pretending they are precise measurements.",
            tips: [
              "State assumptions explicitly.",
              "Assign responsibility for reviewing the decision.",
              "Revisit the assessment when the system or data changes."
            ]
          }
        ],
        takeaway: "For a fictional shared mailbox, write one risk scenario, two relevant controls, and one uncertainty that remains."
      },
      {
        slug: "data-classification-and-handling",
        title: "Data Classification and Handling",
        duration: "4 min lesson",
        introduction: "Data classification connects information to handling expectations. The labels are useful only when people understand where the data may be stored, who may see it, and how to share it.",
        sections: [
          {
            title: "Classify by context and impact",
            body: "An organization may use labels such as public, internal, or restricted, but names and meanings vary. Use its actual policy. A public event announcement and a list of private applicant details need different handling even if both are ordinary documents."
          },
          {
            title: "Follow the information through its life",
            body: "Consider collection, storage, access, sharing, retention, and disposal. An approved storage location does not make every sharing choice appropriate. A label also does not enforce permissions by itself; settings and working practices must support the intended protection."
          },
          {
            title: "Ask when instructions conflict",
            body: "If someone asks you to move restricted information into a personal account for convenience, pause and use the approved reporting or exception process. Retention requirements and authorized holds can affect deletion decisions, so do not remove workplace records based only on a general preference to keep less data.",
            tips: [
              "Use fictional records for training.",
              "Check the approved audience and storage location.",
              "Ask the data owner when classification is unclear."
            ]
          }
        ],
        takeaway: "Classify three fictional documents using an example policy, then specify an appropriate audience and storage location for each."
      },
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
      {
        slug: "write-a-security-project-case-study",
        title: "Write a Security Project Case Study",
        duration: "4 min lesson",
        introduction: "A project becomes easier to assess when a reader can understand the problem, your contribution, and the evidence. A small, well-explained exercise can show useful thinking.",
        sections: [
          {
            title: "Lead with the question",
            body: "Describe what you wanted to learn and the environment you used. State the authorization boundary for testing. If the work followed a tutorial, name that fact and distinguish the guided steps from your own decisions or extensions."
          },
          {
            title: "Show evidence and limitations",
            body: "Explain the actions you performed and what you observed. A redacted screenshot, configuration excerpt, or synthetic log can support a conclusion. Include a limitation: a test in a small lab does not demonstrate that a control works in every organization."
          },
          {
            title: "Make the result understandable",
            body: "Use a simple structure: goal, setup, method, findings, limitations, and next step. Describe what changed in your understanding, not just the tools you installed. Avoid claiming production experience, a professional role, or measured results that the exercise did not establish.",
            tips: [
              "Use synthetic data where possible.",
              "Remove secrets and personal details.",
              "Explain one decision and the evidence behind it."
            ]
          }
        ],
        takeaway: "Draft a six-heading case study for an existing exercise and write two sentences under findings describing only what you actually observed."
      },
      {
        slug: "communicate-security-findings",
        title: "Communicate Security Findings Clearly",
        duration: "4 min lesson",
        introduction: "Security work includes helping someone else decide what to do. A useful finding connects an observation to its possible impact and a practical next step.",
        sections: [
          {
            title: "Separate observation from interpretation",
            body: "An observation might be that a practice folder permits anyone with its link to view it. A possible consequence is unintended disclosure if private files are added. That is different from claiming that someone has already accessed or stolen information."
          },
          {
            title: "Write for the person making the decision",
            body: "A technical teammate may need the setting and reproduction steps. A manager may need the affected process, uncertainty, and suggested owner. Both need a clear explanation without unnecessary jargon or exaggerated urgency."
          },
          {
            title: "Make a bounded recommendation",
            body: "For the practice folder, suggest reviewing its intended audience and restricting access if public sharing is unnecessary. Name how to verify the change. Include assumptions so the recipient can correct them before acting.",
            tips: [
              "Start with the main finding.",
              "Use plain language for the impact.",
              "Include an owner or next question when responsibility is unclear."
            ]
          }
        ],
        takeaway: "Write a short fictional finding with four labels: observation, possible impact, recommended action, and verification."
      },
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
      {
        slug: "turn-objectives-into-practice",
        title: "Turn Study Objectives into Practice",
        duration: "4 min lesson",
        introduction: "An exam topic becomes easier to understand when you can explain it and apply it. Small exercises help connect a study plan to evidence of learning.",
        sections: [
          {
            title: "Translate the verb",
            body: "An objective asking you to compare concepts requires more than recognizing their names. An objective asking you to troubleshoot requires a method for distinguishing causes. Rewrite one objective as an action you can demonstrate in your own words."
          },
          {
            title: "Choose a safe exercise",
            body: "For access control, sketch viewing and editing permissions for a fictional team. For networking, draw a connection path and explain each component. Not every topic needs a paid lab or a complex environment; the exercise should match the learning goal."
          },
          {
            title: "Check understanding without notes",
            body: "Explain what you did, why it worked, and when the result might differ. If you cannot answer, identify the missing concept and revisit it. Keep a small record linking the objective, practice activity, and unresolved questions.",
            tips: [
              "Use the current official objectives for the exam you are studying.",
              "Practice only on authorized systems.",
              "Avoid treating a copied walkthrough as independent understanding."
            ]
          }
        ],
        takeaway: "Choose one topic from your study plan and write a ten-minute exercise plus a question that would show whether you understood it."
      },
      {
        slug: "review-practice-questions",
        title: "Learn from Practice Questions",
        duration: "4 min lesson",
        introduction: "A practice score is a signal about a particular question set. The most useful review explains the reasoning behind your answer and identifies what to study next.",
        sections: [
          {
            title: "Classify the mistake",
            body: "A wrong answer can reflect a missing concept, a misread condition, unfamiliar terminology, or rushing. A correct guess can hide the same gap. Record why you chose the answer before reading the explanation so you can identify what actually needs attention."
          },
          {
            title: "Explain the alternatives",
            body: "For a fictional question about recovering lost files, explain why a tested backup addresses recovery while a firewall addresses a different concern. Understanding the alternatives helps you distinguish controls rather than memorizing a letter or phrase."
          },
          {
            title: "Vary the evidence of readiness",
            body: "Combine practice questions with explanations from memory and small authorized exercises. Repeatedly seeing the same questions can improve a score without improving understanding. Use legitimate study materials and follow the assessment provider's rules; do not use leaked exam questions.",
            tips: [
              "Track topics rather than only percentages.",
              "Revisit a missed concept after a delay.",
              "Do not treat one practice score as a guarantee of an exam result."
            ]
          }
        ],
        takeaway: "Create an error-log entry for one legitimate practice question: topic, reason for your answer, missing concept, and next practice step."
      },
    ],
  },
];

export const getAcademyModule = (slug: string) => academyModules.find((item) => item.slug === slug);
export function getAcademyLesson(moduleSlug: string, lessonSlug: string) {
  const academyModule = getAcademyModule(moduleSlug);
  return { academyModule, lesson: academyModule?.lessons.find((item) => item.slug === lessonSlug) };
}
