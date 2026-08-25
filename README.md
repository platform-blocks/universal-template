# universal-template

Cross-platform [Expo](https://expo.dev) starter for [Platform Blocks](https://platform-blocks.com) — one codebase that ships native iOS and Android apps **and** a statically rendered, SEO-ready website. Website-style pages with shared header navigation, per-route meta tags, and flash-free dark mode.

## Use this template

Click **Use this template** on GitHub to create your own repository from it, or scaffold directly:

```bash
npx create-expo-app@latest my-app --template https://github.com/platform-blocks/universal-template
```

## Get started

```bash
npm install
npx expo start
```

Press `i` for iOS simulator, `a` for Android emulator, or `w` for web.

Build the website:

```bash
npx expo export --platform web
```

Every route in `app/` becomes its own prerendered HTML file in `dist/` — deployable to any static host (GitHub Pages, Netlify, Vercel, ...).

## What's inside

- [`@platform-blocks/ui`](https://www.npmjs.com/package/@platform-blocks/ui) with all required peer dependencies installed
- **Website-style pages** — a landing page and about page with a shared [`SiteHeader`](./components/SiteHeader.tsx), navigable natively on mobile and as real URLs on the web
- **Per-route SEO** — `expo-router/head` sets each page's title and meta description in the static export
- **Flash-free dark mode** — a pre-hydration script in [`app/+html.tsx`](./app/+html.tsx) applies the visitor's saved theme before first paint; the [`ThemeToggle`](./components/ThemeToggle.tsx) cycles light → dark → auto and persists
- **Jest** (`jest-expo`) with an example component test, **ESLint**, **TypeScript** strict, **EAS** build profiles stubbed

## Scripts

| Script | What it does |
| --- | --- |
| `npm start` | Start the Expo dev server |
| `npm test` | Run the Jest test suite |
| `npm run lint` | Lint with ESLint |
| `npm run typecheck` | Type-check with `tsc --noEmit` |

## Learn more

- [Getting started](https://platform-blocks.com/getting-started) — installation, provider, first component
- [Components](https://platform-blocks.com/components) — every component with live demos
- [expo-template](https://github.com/platform-blocks/expo-template) — app-style starter with tab navigation
- [expo-min-template](https://github.com/platform-blocks/expo-min-template) — the minimal starter

## License

MIT
