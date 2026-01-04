# Portfolio Site

A minimalist personal portfolio built with Next.js (App Router) showcasing sections for hero, about, skills, projects, philosophy, and contact.

## Tech Stack
- Next.js 16 / React 19
- TypeScript
- Tailwind CSS 4

## Project Structure
- App shell: [`app/layout.tsx`](app/layout.tsx)
- Entry page & nav logic: [`app/page.tsx`](app/page.tsx)
- Sections: [`Hero`](app/components/Hero.tsx), [`About`](app/components/About.tsx), [`Skills`](app/components/Skills.tsx), [`Projects`](app/components/Projects.tsx), [`Philosophy`](app/components/Philosophy.tsx), [`Footer`](app/components/Footer.tsx)
- Shared layout block: [`Section`](app/components/Section.tsx)
- Data models: [`types`](app/Utils/types.ts)
- Content data: [`constants`](app/Utils/constants.ts)
- Global styles: [`globals.css`](app/globals.css)
- Config: [`next.config.ts`](next.config.ts), [`tsconfig.json`](tsconfig.json), [`eslint.config.mjs`](eslint.config.mjs), [`postcss.config.mjs`](postcss.config.mjs), [`package.json`](package.json)

## Getting Started
```sh
npm install
npm run dev
# open http://localhost:3000
```

## Scripts
- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — start built app
- `npm run lint` — lint codebase

## Customization
Edit section content in [`app/Utils/constants.ts`](app/Utils/constants.ts) and adjust layout/styles in the components under [`app/components`](app/components).
