# Khalif's Console

The personal site of Khalif Cooper — a software engineer and community builder in Baltimore. A plain, fast place for projects, books, tools, and writing.

Built with [Next.js 16](https://nextjs.org) (App Router), React 19, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Editing content

All site content lives in one file: `lib/content.ts`. Edit the plain-text entries there to update:

- `site` — name, intro, and contact email
- `nav` — the pages in the menu and home grid
- `projects` — projects with a short story and a GitHub link
- `books`, `tools`, `thoughts` — the rest of the pages

Page layouts live in `app/`, shared components in `components/`.

## Deploy

Push to the main branch and deploy on [Vercel](https://vercel.com). Vercel Analytics is enabled in production via `@vercel/analytics`.
