# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js App Router portfolio. `app/page.tsx` assembles the home page, `app/layout.tsx` defines the shared layout, and `app/api/contact/route.ts` handles contact submissions. Page sections live in `components/sections/`; shared UI primitives are in `components/ui/`. Put reusable hooks in `hooks/`, helpers in `lib/`, images and verification files in `public/`, and global styles in `app/globals.css` or `styles/` as appropriate. There is currently no test directory.

## Build, Test, and Development Commands

- `npm ci`: install dependencies from `package-lock.json`.
- `npm run dev`: start the local development server.
- `npm run build`: create a production build; `npm run start` serves that build.
- `npx tsc --noEmit`: check TypeScript. Run this separately because `next.config.mjs` allows builds with TypeScript errors.
- `npm run lint`: declared in `package.json`, but ESLint and its configuration are not currently included. Set them up before using this as a required check.

The repository also has `pnpm-lock.yaml`; keep the lockfile for the package manager you use consistent with dependency changes.

## Coding Style & Naming Conventions

Use TypeScript and TSX, two-space indentation, and the existing no-semicolon style. Follow nearby files for quote style. Name React components in PascalCase, hooks with a `use` prefix, and files in lowercase kebab case (for example, `theme-provider.tsx`). Prefer the `@/` import alias. Use Tailwind utility classes and the existing `cn` helper for conditional classes. No formatter configuration is committed.

## Testing Guidelines

No automated test framework or coverage threshold is configured. For changes, run the TypeScript check and production build, then smoke-test the affected page at desktop and mobile widths. For contact changes, verify both valid and invalid submissions. If adding tests, add a runner and use `*.test.ts` or `*.test.tsx` names.

## Commit & Pull Request Guidelines

Recent commits use short subjects such as `fix email` and `add sitemap and rebots`; no formal convention is established. Use a concise, action-oriented subject that names the change. Pull requests should explain the change, list validation performed, link a relevant issue when one exists, and include screenshots for visible UI changes.

## Configuration & Agent Notes

Copy `.env.example` to `.env.local` and set `RESEND_API_KEY` for the contact endpoint. Never commit credentials. Agents should summarize implemented changes and the next implementation step, if any. If a terminal command cannot be run, provide the exact command for the contributor to run manually.
