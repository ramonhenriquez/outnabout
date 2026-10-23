# OutNAbout

A private, invite-only social discovery and outing-planning site for a small group of friends.

Built with Astro, React, TypeScript, and Tailwind CSS. Supabase (auth, database, permissions) will be added in a later milestone.

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start the dev server at `localhost:4321`    |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run preview` | Preview the production build locally        |
| `npm run check`   | Type-check `.astro` and `.ts` files         |

## Project structure

```text
src/
├── components/
│   ├── ui/              Reusable UI: Button, Card, PageHeader, EmptyState, FeatureNotice, ImagePlaceholder
│   ├── SiteHeader.astro Desktop + mobile navigation
│   ├── SiteFooter.astro
│   ├── ThemeScript.astro  Applies the saved theme before first paint
│   └── ThemeToggle.astro
├── layouts/AppLayout.astro  Shared page shell (head, skip link, header, footer)
├── lib/
│   ├── navigation.ts    Primary nav items
│   └── paths.ts         Base-path aware `url()` helper
├── pages/               Home, Explore, Collections, Outings, Profile, 404
└── styles/global.css    Tailwind import + light/dark design tokens
```

## Base paths and deployment

The site is deployed to a GitHub Pages **project site** (`https://<owner>.github.io/<repo>/`), so it is served from a sub-path. Two environment variables control this at build time:

- `SITE_URL` — e.g. `https://your-username.github.io`
- `BASE_PATH` — e.g. `/outnabout` (defaults to `/`)

Always build internal links with `url()` from `src/lib/paths.ts` — never hard-code `"/explore"`.

To test a sub-path build locally:

```sh
BASE_PATH=/outnabout npm run build && BASE_PATH=/outnabout npm run preview
```

The workflow in `.github/workflows/deploy.yml` sets both variables from the repository name and deploys on every push to `main`. To enable it, go to **Settings → Pages** in the GitHub repo and set **Source** to **GitHub Actions**.

## Placeholders

Features that need Supabase are marked in the UI with the `FeatureNotice` component, and their action buttons are disabled. Search the code for `FeatureNotice` to find each one.

## Theme

Light/dark mode follows the OS until the user picks one; the choice is stored in `localStorage` under `outnabout-theme`. Colors are semantic tokens (`bg-surface`, `text-ink`, `border-line`, `text-accent`, ...) defined in `src/styles/global.css`.
