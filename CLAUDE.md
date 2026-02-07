# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Build for production
npm run deploy   # Build and deploy to GitHub Pages
npm run lint     # Run ESLint
npm run format   # Format with Prettier
```

## Architecture Overview

This is a personal portfolio website built with **Next.js 15** and **React 19**, deployed as a static site to GitHub Pages.

### Dual Router System

The project uses both Next.js routing systems during a migration:

- **`/app`** - App Router (TypeScript) - Modern components and layouts
- **`/pages`** - Pages Router (JavaScript) - Legacy entry points with `_app.js` and `_document.js`

Both routers coexist; new development should target `/app`.

### Styling Architecture

- **Primary**: Material-UI v6 with Emotion CSS-in-JS
- **Legacy**: SCSS modules in `/styles/scss/`
- **Theme Wrapper**: `/styles/makeStyles.js` wraps `tss-react` for MUI v4 compatibility
- **SSR Support**: Emotion configured in both `_document.js` and `ThemeRegistry.tsx`

Two theme configurations exist:
- `/app/theme.ts` - Dark theme (modern, Vercel-inspired)
- `/styles/theme.js` - Light theme (legacy green accent)

### Component Organization

- `/components/sections/` - Page sections (Hero, About, Skills, etc.) - TypeScript
- `/components/Profile/` - CV-related components - JavaScript
- `/components/layout/` - Navbar, Footer - TypeScript
- `/components/` root - Reusable UI (Card, Carousel, Grid, Parallax)

### Static Data

- `/constants/experience.js` - Work history data
- `/data/mockData.ts` - Mock data for development

## Deployment

Static export configured for GitHub Pages with subpath `/diegolibreros/`. The `deploy` script handles:
1. Clearing cache and output directories
2. Running `next build` (triggers static export in production)
3. Adding `.nojekyll` file
4. Publishing to GitHub Pages via `gh-pages`

Asset paths automatically prefix with `/diegolibreros/` in production builds.
