# SpiderDeck

A free, browser-based Spider Solitaire site built around the two-suit game. The
playable table sits at the top of every game page, with rules, strategy, and FAQ
content underneath.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Play Spider Solitaire (two suits by default) |
| `/spider-solitaire-2-suits` | Two-suit table plus variant guide |
| `/spider-solitaire-1-suit` | One-suit beginner table |
| `/spider-solitaire-4-suits` | Four-suit expert table |
| `/how-to-play`, `/spider-solitaire-rules` | Tutorial and rules reference |
| `/spider-solitaire-strategy` | Strategy guide |
| `/guides` | Content hub |
| `/spider-solitaire-*` | Difficulty, Klondike comparison, mobile, no-download, unblocked, FAQ |
| `/about`, `/credits` | Site background and licensing |

## Languages

English is served at the root (`/`), Chinese at `/zh/`, and Japanese at `/ja/`.
The game UI, navigation, and all sixteen content pages are translated. Every
page emits canonical and hreflang alternates, and `sitemap.xml` lists all three
locales.

The game accepts `?suits=1`, `?suits=2`, or `?suits=4` on the homepage. Variant
routes lock the difficulty and start a matching game if the saved game differs.

## Tech stack

- Next.js 16 App Router with static export (`output: "export"`)
- React 19, TypeScript, Tailwind CSS 4
- Zustand with `localStorage` persistence
- Motion for dealing, dragging, and foundation animations

## Local development

Node 20.9+ is required; Node 22 LTS is recommended (`.node-version`).

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

Production build:

```bash
pnpm build
```

The static site is written to `out/`. The build also flattens Next's client
router segment payloads, which otherwise land in the wrong filenames when the
export is produced on Windows. Preview the export with any static file server:

```bash
npx serve out
```

## Deploying to Cloudflare Pages

- Build command: `pnpm build`
- Build output directory: `out`
- Environment variable: `NEXT_PUBLIC_SITE_URL=https://your-domain.example`

`NEXT_PUBLIC_SITE_URL` drives canonical URLs, Open Graph URLs, JSON-LD, the
sitemap, and `robots.txt`. Set it before building; the fallback is
`https://spiderdeck.wwkejishe.top`.

`public/_headers` adds long-lived caching for `/_next/static/*` and `/cards/*`
plus basic security headers.

## SEO assets

- `src/app/sitemap.ts` and `src/app/robots.ts` generate static XML/text.
- `src/lib/seo.ts` builds metadata and JSON-LD (`WebSite`, `Organization`,
  `WebApplication`/`VideoGame`, `WebPage`, `BreadcrumbList`, `FAQPage`).
- `public/og.jpg` is the 1200×630 social card.
- Each page defines its own title, description, canonical, and H1.

## Licensing

The game engine is adapted from
[Time2Code0/spider-solitaire](https://github.com/Time2Code0/spider-solitaire)
under the MIT license; the original license text is in [LICENSE](./LICENSE).

Card artwork is vendored from permissively licensed decks. See
[public/cards/NOTICE](./public/cards/NOTICE) and the license files inside each
deck directory.

SpiderDeck is an independent project and is not affiliated with Microsoft or
any other Spider Solitaire publisher. "Spider Solitaire" is used descriptively.
