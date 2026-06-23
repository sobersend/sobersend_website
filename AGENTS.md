# Sober Send — Website

Persistent context for AI coding agents (Cursor, etc.) working in this repo.
Read this before making any changes.

## What this is

The marketing website for **Sober Send** — an independent app studio whose tagline
is "Apps that improve your life." It builds small apps for an active, sober life.

This repo is a **single-page static homepage**. It includes a product "manifest"
that is intended to grow over time into a small product marketplace. The first
product is **Remember When** (currently in development).

## Deployment — read carefully, easy to break

- Hosted on **GitHub Pages** from the `main` branch, **root folder**. Pushing to
  `main` auto-deploys in ~1 minute. Live at **https://sobersend.com** (HTTPS enforced).
- A **`CNAME`** file at the repo root contains `sobersend.com`. **Never delete or
  rename it** — doing so breaks the custom domain.
- The homepage **must** stay as **`index.html`** at the repo root. GitHub Pages
  serves `index.html` as the site root; renaming it makes sobersend.com 404.
- **No build step.** No framework, no bundler, no `package.json`. These are plain
  static files served as-is. Do **not** introduce a build pipeline, npm
  dependencies, or a framework unless explicitly asked.

## Tech

- Everything lives in **one self-contained `index.html`**: HTML + an inline
  `<style>` block + a small inline `<script>`.
- **Vanilla JS, zero dependencies.**
- Fonts load from **Google Fonts**: Bricolage Grotesque, Hanken Grotesk,
  JetBrains Mono.
- Keep everything in this single file unless asked to split CSS/JS out.

## Design system — "first light"

Theme: clear-headed dawn / momentum. Preserve it on every change.

**Colors** are CSS variables in `:root`. Use them — do not hardcode hexes or invent
new colors. There is exactly **one accent** (`--coral`); do not add other accents.

| Variable    | Hex       | Role                          |
|-------------|-----------|-------------------------------|
| `--ink`     | `#0A1E24` | base background (pre-dawn sky) |
| `--ink-2`   | `#0C2832` | panels                        |
| `--horizon` | `#16424A` | borders / horizon line        |
| `--cream`   | `#F4EDDF` | primary text                  |
| `--sage`    | `#93A8A2` | secondary / muted text        |
| `--coral`   | `#FF6B3D` | the single accent (sunrise)   |

**Fonts by role:**
- Bricolage Grotesque → display / headlines / product names
- Hanken Grotesk → body copy
- JetBrains Mono → eyebrows, labels, status tags, numbers

**Signature elements:** a soft "first light" sunrise glow + horizon line behind the
hero, and a mono "manifest" of numbered products (01, 02 …).

**Quality floor — never regress:**
- Fully responsive down to mobile.
- Visible keyboard focus states (coral outline).
- `prefers-reduced-motion` respected (disables the ambient glow + entrance animations).

## Page structure

Top bar (wordmark + EST. 2026) → Hero ("Apps that improve your life.") →
"The manifest" (`01` Remember When `[In development]`, `02` Next project `[Queued]`
— placeholder for marketplace growth) → Email signup → Footer.

The Remember When description line is **placeholder copy** to be replaced later.

## Email signup form

- POSTs **JSON** to Formspree: `https://formspree.io/f/xqevakzl`
- Headers: `Content-Type: application/json` and `Accept: application/json`.
- A hidden **`_gotcha`** honeypot field is included in the submission for spam
  filtering — **keep it**.
- Free Formspree tier = 50 submissions/month. Do **not** change the endpoint
  without asking.

## How to work in this repo

- Make focused, minimal diffs; explain what changed and why.
- Always preserve the design system, accessibility, and the no-build/static-file
  constraint.
- **Never** remove or rename `CNAME` or `index.html`.
- Deploy by committing and pushing to `main` (e.g.
  `git add -A && git commit -m "..." && git push`). It goes live in ~1 minute.
