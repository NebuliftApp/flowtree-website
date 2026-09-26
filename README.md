# FlowTree website

The website for FlowTree, a macOS app for Git worktrees, terminal sessions, and code review.

## Local development

```sh
npm install
npm run dev
npm run build
npm run preview
```

The site is built with Astro and Tailwind CSS. It is configured for GitHub Pages at `/flowtree-website/`.

## Routes

- `/` — concise product overview
- `/worktrees/` — flagship worktree workflow
- `/features/` — terminals, terminal profiles, quick commands, linked files, review, and merge queues
- `/how-it-works/` — local Git and terminal operation, plus network boundaries (linked from the footer)
- `/faq/` — product FAQ and structured FAQ data (`src/data/faq.ts`)
- `/pricing/` — Free and Pro plans. Public checkout remains closed until launch; the app's licensing configuration must use live Lemon Squeezy IDs before then
- `/download/` — public release status and system requirements; no installer link is published yet
- `/privacy/`, `/terms/` — privacy policy, licence terms, and refunds
- `/licenses/` — third-party open-source licences, rendered from `src/data/third-party-licenses.json` (a copy of the app's `ThirdPartyLicenses.json`; keep them in sync)
- `404` — custom not-found page

Product media lives in `public/images/` and is rendered through `src/components/ProductMedia.astro`.
