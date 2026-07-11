# SoberSend — Website

Persistent context for AI coding agents (Cursor, etc.) working in this repo.
Read this before making any changes.

## What this is

The marketing website for **SoberSend** — a recovery lifestyle brand and community.
Tagline: *Recovery, fully lived. Together.*

The homepage is a single static brand page (mission, values, the name, manifesto,
email signup). Separate subpages under **`/rememberwhen/`** support the Remember
When mobile app (App Store / Google Play compliance: landing, privacy, terms,
support).

## Deployment — read carefully, easy to break

- Hosted on **GitHub Pages** from the `main` branch, **root folder**. Pushing to
  `main` auto-deploys in ~1 minute. Live at **https://sobersend.com** (HTTPS enforced).
- A **`CNAME`** file at the repo root contains `sobersend.com`. **Never delete or
  rename it** — doing so breaks the custom domain.
- The homepage **must** stay as **`index.html`** at the repo root. GitHub Pages
  serves `index.html` as the site root; renaming it makes sobersend.com 404.
- **No build step.** No framework, no bundler, no `package.json`. Plain static
  files served as-is. Do **not** introduce a build pipeline, npm dependencies, or
  a framework unless explicitly asked.

## Tech

- **Homepage:** self-contained `index.html` (inline styles + small inline script).
- **Remember When subpages:** `rememberwhen/` folder with shared `styles.css`.
- **Vanilla JS, zero dependencies** (besides Google Fonts).
- Fonts: Bricolage Grotesque, Hanken Grotesk, JetBrains Mono.

## Design system — "flare"

Theme: recovery lifestyle, bold and warm. Typographic/graphic only (no photography).

**Brand name:** always **SoberSend** — one word, both S's capitalized. Never
"Sober Send" or "sobersend."

**Single accent:** `#FF4E1F` (flare orange). Do not add a second accent.

| Token   | Hex       | Role                          |
|---------|-----------|-------------------------------|
| ink     | `#14181C` | dark backgrounds, primary text on light |
| paper   | `#F5F1E7` | light page background         |
| panel   | `#1b2026` | dark section cards            |
| flare   | `#FF4E1F` | the one accent                |
| muted   | `#5b5548`, `#a19c8e`, `#8a8271`, `#c7c2b6`, `#3a352b` | secondary text (context-dependent) |

**Signature elements:** rotated-square flare mark, dashed vertical "flare lines"
with glowing dots in the hero, numbered section eyebrows (`01 · THE IDEA`, etc.).

**Quality floor — never regress:**
- Fully responsive down to mobile.
- Visible keyboard focus states (flare orange outline).
- `prefers-reduced-motion` respected.

## Page structure

**Homepage (`/`):** Sticky header → Hero → Mission → Values → The Name →
Manifesto → Join (email signup) → Footer.

**Remember When (`/rememberwhen/`):** App landing, privacy, terms, support —
keep these URLs stable for store listings.

## Email signup form

- POSTs **JSON** to Formspree: `https://formspree.io/f/xqevakzl`
- Headers: `Content-Type: application/json` and `Accept: application/json`.
- Hidden **`_gotcha`** honeypot — **keep it**.
- Do **not** change the endpoint without asking.

## How to work in this repo

- Make focused, minimal diffs; explain what changed and why.
- Preserve the design system, accessibility, and static-file constraint.
- **Never** remove or rename `CNAME` or root `index.html`.
- Deploy by committing and pushing to `main`. Live in ~1 minute.
