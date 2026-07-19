# FlowTree website

The marketing website for FlowTree, a worktree-first macOS workspace for parallel Git and AI-assisted development.

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
- `/features/` — terminals, review, Git operations, context, and IDEs
- `/how-it-works/` — local architecture and networking boundaries
- `/faq/` — product FAQ and structured FAQ data
- `/privacy/` — plain-language application privacy summary
- `/pricing/` — honest pre-release pricing placeholder
- `/download/` — honest pre-release download placeholder

## Media placeholders

Product-media slots use `src/components/MediaPlaceholder.astro`. Each placeholder includes the intended asset type and a capture brief. Replace the component invocation with an image or video when the final asset is ready, retaining the supplied description as the basis for useful alt text or a caption.

Use one fictional repository and consistent worktree names across the complete capture set. Remove usernames, private paths, remote URLs, tokens, and notifications before exporting.
