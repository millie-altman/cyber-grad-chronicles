# AGENTS.md — Cyber Grad Chronicles

## Purpose
Cyber Grad Chronicles (CGC) is a founder-led cybersecurity education, research, career-development, and community platform. Its mission is to make cybersecurity and technology learning practical, accessible, encouraging, and credible while documenting the founder's real professional journey. Treat it as an evolving, sustainable product and business—not merely a portfolio or generic course template.

This file provides project-wide instructions for AI coding agents (including Codex). Follow more-specific `AGENTS.md` files if present in subdirectories. The repository and the founder's explicit instructions are the sources of truth; this document is guidance, not permission to invent features or rewrite established content.

## Repository and source-of-truth rules
- Repository: `millie-altman/cyber-grad-chronicles`.
- Production domain: `https://cybergradchronicles.com`.
- Deployment workflow: local VS Code → GitHub → Vercel. Never commit, push, deploy, change Vercel settings, or alter production data without explicit approval.
- **Inspect the checked-out working tree before coding.** The GitHub default branch may lag behind local changes. In particular, recent local work has involved Next.js 16.4.2 and Clerk authentication, whereas the last inspected GitHub `package.json` still showed Next.js 16.2.9 and no Clerk dependency. Do not overwrite newer local work with older remote assumptions.
- Read the relevant files, their imports, and nearby styling before editing. Prefer minimal, reversible diffs over complete rewrites.
- Do not treat roadmap links, placeholder pages, or navigation entries as evidence that a feature is functional.

## Verified repository foundations (GitHub default branch inspected 2026-10-20)
- Next.js App Router, React, TypeScript, and CSS; `app/` contains route pages and shared components.
- `package.json` scripts: `npm run dev`, `npm run build`, `npm start`, `npm run lint`.
- ESLint 9 with `eslint-config-next`; Tailwind CSS 4 tooling is installed. Inspect actual CSS usage before introducing Tailwind utilities.
- Shared navbar: `app/components/layout/Navbar.tsx`, importing `./navbar.css`.
- Root layout: `app/layout.tsx`; global styles: `app/globals.css`.
- Typography in the inspected layout: Libre Baskerville, Manrope, and JetBrains Mono, exposed through CSS variables.
- Site metadata includes SEO, Open Graph, Twitter cards, robots settings, and canonical domain.
- The GitHub README was still the starter Next.js README; don't rely on it as complete product documentation.

## Product areas and information architecture
Preserve the site's established structure and distinguish existing content from future functionality:
- **Academy** (`/academy`): introductory cybersecurity education, lessons, learning paths, quizzes/practice, and achievement links.
- **Career Intelligence** (`/career`): career guidance, resume support, LinkedIn and portfolio review resources, interview preparation, AI tools, and military-spouse career resources.
- **Research Lab** (`/research`): threat intelligence, labs/projects, career journal, and community-awareness writing.
- **Community / Military Spouse Hub** (`/military-spouse-hub`): practical resources, encouragement, and stories.
- **About the Founder** (`/about`), **Founder's Journey** (`/journey`), and **Credentials** (`/credentials`): the founder's story and work.
- **My Journey** (`/my-journey`) and `/my-journey/rewards`: visitor/member-facing personal journey and achievements; do not confuse with the founder's journey.
- **The Next Chapter** (`/next-chapter`): public-facing roadmap and planned features.
- **Connect** (`/connect`): outreach and inquiries.

The roadmap includes a founder-focused AI **Digital Twin**, career resource packages, Academy expansion, and possible community/mentorship features. These are planned/exploratory until the code and product owner confirm otherwise. Do not present them as launched, paid, or fully implemented.

## Brand, design, and voice
- Aesthetic: **dark academia meets cybersecurity**, with a cozy, intentional, refined tone—not a neon hacker dashboard.
- Gold accent: `#b88a44`; prefer existing CSS custom properties (e.g. `--accent`, `--accent-light`, `--text-primary`, `--text-secondary`) over hard-coded replacements.
- Preserve the existing serif-forward identity, legible contrast, restrained glows, dark backgrounds, editorial spacing, and responsive layout.
- Maintain the existing navigation hierarchy, dropdowns, footer, hero assets, and page identity unless a change is requested.
- Content should be personal, approachable, precise, grounded, and supportive without exaggeration, fearmongering, or generic corporate marketing.
- Never fabricate founder credentials, first-person experiences, research findings, lab results, external endorsements, testimonials, or source citations.
- Do not imply CGC is licensed, certified, affiliated, or endorsed by organizations unless verified.

## Engineering conventions
1. Use TypeScript and existing Next.js App Router patterns. Respect Server Component / Client Component boundaries; add `"use client"` only where necessary.
2. Use `next/link` for internal navigation and existing project conventions for external links.
3. Reuse components and CSS patterns; avoid adding packages, UI libraries, state managers, or database services without explaining the need and getting approval.
4. Make responsive and keyboard-accessible changes. Use semantic HTML, labels, visible focus states, and accessible menus/forms.
5. Preserve SEO metadata and public indexing for appropriate public content. Avoid accidentally indexing private member content.
6. Keep URLs and navigation targets accurate. Confirm that routes and fragment IDs exist before linking to them.
7. Separate content/data from UI logic where practical, but do not perform sweeping reorganizations during focused changes.
8. Handle loading, empty, failure, and signed-out states deliberately. Do not expose stack traces or sensitive errors to users.
9. Avoid silently modifying unrelated files, dependency versions, lockfiles, or global styles.

## Authentication, privacy, and security
Clerk integration is **in progress locally**; verify the actual installed `@clerk/nextjs` version and implementation before touching it. A prior local runtime error showed that `<SignedOut>` was unsupported by the installed Clerk Core 3 API. Never assume examples for older Clerk versions will work.

- Confirm `ClerkProvider`, middleware/proxy, routes, and components against the installed package and current official documentation.
- Treat `proxy.ts` (Next.js 16) and auth UI as separate concerns; rendering a login button does **not** secure a route.
- Keep public educational/research content publicly accessible unless explicitly instructed otherwise.
- For private user progress, rewards, profiles, uploads, or subscriptions, enforce authentication **and authorization on the server**. Scope every query and mutation to the authenticated user; never trust a client-supplied user ID.
- Never commit `.env.local`, API keys, Clerk secret keys, tokens, private data, or credentials. Only browser-safe `NEXT_PUBLIC_` values may reach the client, and only when appropriate.
- Validate and constrain inputs, file uploads, and external URLs. Use least privilege, avoid exposing personally identifiable information, and do not log secrets.
- If introducing AI features, defend against prompt injection, unsafe tool execution, data leakage, excessive agency, and untrusted retrieved content. Do not give an AI assistant privileged actions by default.
- If introducing payment/membership features, design server-side entitlement checks and verified webhooks; do not equate UI visibility with access control.
- Do not claim an audit is clean unless the relevant command actually confirms it. Distinguish development-only advisories from production dependencies.

## Content and education quality
- Preserve the author's original intent and voice. Do not rewrite personal stories or research articles unless asked.
- Explain technical concepts accurately, at an appropriate beginner-to-intermediate level, with useful examples and practical context.
- For cybersecurity labs, clearly differentiate safe demonstrations, defensive analysis, and real-world misuse; avoid instructions that facilitate harm.
- Link to trustworthy references when adding factual or time-sensitive claims. Check links and avoid invented citations.
- Never present placeholder quiz scoring, saved progress, rewards, or certificates as persistent unless a backing implementation exists.
- Keep resource accessibility central: readable mobile layouts, clear instructions, sensible contrast, and no unnecessary paywalls around existing public content.

## Workflow for every coding task
1. **Inspect:** identify relevant files, package versions, route structure, and current Git status. Check for uncommitted work.
2. **Plan:** describe the smallest viable change, assumptions, and any dependency/security impact.
3. **Implement:** edit only required files; preserve established behavior and design.
4. **Verify:** run `npm run lint` and `npm run build` where feasible; test relevant routes and responsive/auth states. A passing build does not prove runtime auth works.
5. **Report:** summarize files changed, behavior added, tests run and results, remaining risks, and exact manual steps. Clearly state if tests were not run.
6. **Stop before release:** wait for the founder's approval before commit, push, deployment, migrations, destructive changes, or production configuration changes.

For authentication changes, manually verify signed-out, signup, sign-in, signed-in, sign-out, and unauthorized direct URL access. For navigation changes, test desktop, keyboard focus, and mobile. For content changes, verify internal links and SEO.

## Decision-making and collaboration
- The founder is the primary creator, editor, and product decision-maker. Contributors and future educators should follow the same quality bar.
- Prefer sustainable, scalable self-led learning and digital resources over unnecessary manual workflows, while preserving human warmth and care.
- Do not introduce subscriptions, pricing, user tracking, third-party analytics, or data collection without an explicit product decision.
- When requirements are ambiguous or a proposed change risks breaking existing features, ask a concise clarifying question rather than guessing.
- Respect the distinction between **established**, **in development**, **planned**, and **exploring** features.

## Notes for future maintainers
This document combines facts verified from the GitHub default branch with product direction supplied by the founder. It is not an exhaustive repository inventory. Reconcile it with the current checkout whenever the architecture changes, and update it when new functionality is genuinely shipped.
