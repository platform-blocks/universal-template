<p ta="center">
  <a href="https://plocks.dev/" rel="noopener" target="_blank"><img width="75" height="75" src="https://raw.githubusercontent.com/platform-blocks/plocks/HEAD/apps/docs/assets/favicon.png" alt="plocks logo"/></a>
</p>

<h1 ta="center">plocks Universal Template</h1>

<p ta="center">
  One <a href="https://expo.dev">Expo</a> codebase for <a href="https://plocks.dev">plocks</a> that ships native iOS and Android apps and a statically rendered website.
</p>

## Get started

```bash
npx create-expo-app@latest my-app --template https://github.com/platform-blocks/universal-template
cd my-app
npx expo start
```

Press `i` for iOS, `a` for Android, or `w` for web. Each file in [`app/`](./app) is a page; start with [`app/index.tsx`](./app/index.tsx).

Prefer GitHub? Click **Use this template**, clone your new repository, and run `npm install` before `npx expo start`.

## Build the website

```bash
npx expo export --platform web
```

Every page is prerendered to HTML in `dist/`, ready for any static host.

## What is plocks?

[plocks](https://plocks.dev) is an open-source UI component library for [React Native](https://reactnative.dev). You write your screens once and they run on iOS, Android, and the web, with light and dark themes and accessibility built in.

- [Browse 100+ UI components](https://plocks.dev/components) with live demos, from buttons and forms to navigation and overlays
- [Explore 24 chart types](https://plocks.dev/charts) you can add with `@plocks/charts`
- [See example screens](https://plocks.dev/examples) such as a dashboard, a login form, and a settings page
- [Read the getting started guide](https://plocks.dev/getting-started) for installation steps and the other starter templates

Have a question or an idea? Come say hi on [Discord](https://discord.gg/kbHjwzgXbc), or star the project on [GitHub](https://github.com/platform-blocks/plocks).
