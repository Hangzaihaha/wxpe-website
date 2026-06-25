# WXPE Premium Corporate Website Prototype

First-version Next.js landing page for WXPE, a Malaysia-based localized green energy and digital energy solution provider.

## Design Audit Summary

The corrected direction moves away from an AI-generated cyberpunk feel. The earlier direction risked feeling too neon, too dashboard-like, too decorative, too generic, too infographic-heavy, too dependent on generated visuals, too weak on enterprise trust, and too light on realistic industrial context.

## Premium Direction

WXPE should feel mature, international, engineering-driven and commercially credible. The page now prioritizes strong typography, clear section hierarchy, restrained blue/green accents, realistic media slots, clean comparison layouts, calm motion, and business language around pilot projects, localization and flexible energy models.

## Design System

- Color: near-black and deep navy base, clean white text, soft gray secondary text, restrained energy blue and green accents.
- Typography: modern system sans-serif, large editorial headings, readable body copy, no negative letter spacing.
- Spacing: generous vertical rhythm, content-first grids, stable responsive constraints.
- Components: shadcn-style Button, Sheet, Input, Textarea and Field primitives with custom WXPE tokens.
- Cards: 8px radius, subtle borders, quiet hover states, no nested cards or heavy glow.
- Images: temporary staging only. Real WXPE assets should trigger section-level redesign, not simple file replacement.
- Motion: subtle fade-up reveal, restrained hover, no fast particles or cyber HUD effects.

## Run Locally

### One-click Windows preview

Double-click `start-wxpe-website.cmd` in the project root.

The script will:

- open the correct WXPE project folder automatically
- use `pnpm dev` when pnpm is available
- fall back to `npm run dev` when pnpm is not available
- print the preview URL
- open the site in your default browser
- keep the command window open so logs and errors stay visible

Preview URL:

```text
http://localhost:3000
```

If port `3000` is busy, the script will try port `3001` and print the correct URL.

### Manual terminal start

PowerShell:

```powershell
cd "C:\Users\henry\Documents\Codex\2026-06-25\you-are-a-world-class-web"
pnpm install
pnpm dev
```

If pnpm is not installed:

```powershell
cd "C:\Users\henry\Documents\Codex\2026-06-25\you-are-a-world-class-web"
npm install
npm run dev
```

`localhost` only works while the dev server is running. If the command window is closed, or the dev server is stopped with `Ctrl+C`, the browser will no longer be able to open `http://localhost:3000`.

### Basic command reference

```bash
pnpm install
pnpm dev
```

## Real Assets To Add Next

Add real WXPE product photos, factory photos, project photos, office photos, videos, logo assets, certificates and company documents. When those arrive, redesign the hero, mobility, localization and proof sections around the actual asset story and credibility evidence.
