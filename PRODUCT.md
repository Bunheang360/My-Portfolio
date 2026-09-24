# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: peers and the developer community (classmates at CADT, Cambodian dev circles, other student developers) who land on chhengbunheang.dev from a link, Telegram, LinkedIn, or GitHub and want to see what Bunheang builds and how well. Secondary: recruiters and internship leads who skim for stack, experience, and a CV.

## Product Purpose

Personal portfolio of Chheng Bunheang, a fourth-year Computer Science student at CADT and fullstack developer in Phnom Penh. Success: a visitor leaves knowing what he builds (fullstack web, backend, mobile, desktop), sees the range of shipped projects, and either reaches out via the contact form / Telegram or downloads the CV.

## Positioning

Breadth of real shipped student and intern work across the whole stack: a B2C marketplace built during an internship (Storia, ECAM Solution), a live competition leaderboard used by real participants (CFCC), AI-assisted tools (AUREA, Motify), and desktop, mobile, and web apps. Fullstack range is the claim, not a single specialty.

## Operating Context

- Single-page Next.js App Router site deployed at chhengbunheang.dev (Vercel analytics present).
- Visitors mostly arrive on mobile from chat apps or on desktop from LinkedIn.
- Reference and friendly rival: a friend's portfolio at chheangsovannpanha.dev (dark, editorial serif, expandable project rows). Take inspiration, do not copy.

## Capabilities and Constraints

- Contact form posts to `app/api/contact/route.ts` (Resend). Must keep working.
- CV download at `/downloads/chheng-bunheang-cv.pdf`.
- Certificates images at `/public/certificates/`.
- Stack: Next.js 16, React 19, Tailwind v4, `motion`, lucide-react, react-icons.
- No project screenshots, live URLs, or GitHub repo links yet. GitHub profile URL is currently a placeholder (`https://github.com`).

## Brand Commitments

- Name: Chheng Bunheang. Role label: Fullstack Developer.
- Owner asked for a futuristic, dark, techy direction with a strong project showcase and bento-style information layout, better than the friend's site.
- Standing preference (chosen 2026-09-24 over two rolled directions): the category standard, a dark developer portfolio with bento grid, executed at full craft. Quality bar: Raycast.com's finish and detail, and it must clearly outclass chheangsovannpanha.dev.

## Evidence on Hand

- Projects (9): Room Rental Management System v2 (in progress), Motify, Storia Shop, AUREA Fee Estimator, Real-Time Chat Web App, FitTrack, Room Rental Management System (Java), CFCC Leaderboard System, Automata Visualizer. Content in `components/sections/projects.tsx`.
- Experience (2): ECAM Solution intern (May–Aug 2026), CADT Freshman Coding Competition organizer (May–Jul 2025).
- Certifications (3): HackerRank Java (Basic), Udemy Java Masterclass 2025, Udemy Full-Stack Web Development Bootcamp.
- Profile photo `/public/profile.jpg`; CV PDF.
- Absent, do not fabricate: project screenshots, user counts, metrics, testimonials, GitHub stats. Any project visuals are illustrative and must be labeled or replaceable.

## Product Principles

1. Show the work doing its job; every project reads as a real system, not a tag list.
2. Range over hype: honest dates, roles, and statuses.
3. One clear path to contact and one to the CV from anywhere.
4. Fast on a phone over mobile data.

## Accessibility & Inclusion

WCAG AA contrast on dark surfaces, full keyboard navigation, `prefers-reduced-motion` respected for all motion and canvas effects.
