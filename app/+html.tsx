import { ScrollViewStyleReset } from 'expo-router/html';
import { type PropsWithChildren } from 'react';

/**
 * Web-only root HTML for every statically rendered page.
 *
 * The inline script resolves the reader's colour scheme (saved choice first,
 * then the OS preference) and stamps it on <html> before first paint, so
 * dark-mode readers never see a light flash. The prerendered markup itself
 * carries light-theme styles, so for dark readers the script also holds the
 * content invisible until React has restyled it — ContentReveal in
 * app/_layout.tsx lifts the class, and the timer below is the fallback.
 */
export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <ScrollViewStyleReset />
        <style dangerouslySetInnerHTML={{ __html: baseStyles }} />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

const baseStyles = `
body {
  background-color: #fff;
  margin: 0;
  padding: 0;
}

/* Auto mode: the provider leaves both theme classes off <html>, so the OS
   preference decides the backdrop. */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #000;
  }
}

/* An explicit light/dark choice beats the OS preference above. The classes are
   stamped by the pre-hydration script below and kept in sync by the provider. */
html.platform-blocks-light,
html.platform-blocks-light body {
  background-color: #fff;
}

html.platform-blocks-dark,
html.platform-blocks-dark body {
  background-color: #000;
}

#root {
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100vw;
}

/* Dark readers: hold the light-styled prerendered content invisible (dark
   backdrop only) until hydration restyles it. Removed by ContentReveal in
   app/_layout.tsx, or by the script's fallback timer. */
html.platform-blocks-content-pending #root {
  visibility: hidden;
}
`;

const themeScript = `
(function() {
  var root = document.documentElement;
  var scheme = 'light';
  try {
    var saved = null;
    try { saved = localStorage.getItem('platform-blocks-theme-mode'); } catch (storageError) {}

    if (saved === 'dark' || saved === 'light') {
      scheme = saved;
    } else {
      scheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    root.classList.remove('platform-blocks-light', 'platform-blocks-dark');
    root.classList.add('platform-blocks-' + scheme);
    root.style.colorScheme = scheme;
    root.style.backgroundColor = scheme === 'dark' ? '#000000' : '#ffffff';

    if (scheme === 'dark') {
      root.classList.add('platform-blocks-content-pending');
      setTimeout(function () {
        root.classList.remove('platform-blocks-content-pending');
      }, 4000);
    }
  } catch (e) {
    // Leave whatever resolved above in place; never downgrade to light here.
  }
})();
`;
