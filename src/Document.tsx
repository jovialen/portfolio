import type { ParentProps } from 'solid-js';
import { HydrationScript } from '@solidjs/web';
import { LOCALES } from './i18n/locale';
import { STORAGE_KEYS } from './preferenceKeys';
import { DEFAULT_TEXT_SIZE, DEFAULT_THEME, TEXT_SIZES, THEME_IDS } from './theme/themes';

const TITLE = 'Nicolai Frigaard';
const DESCRIPTION =
  'Computer science student at NTNU. Systems programming in Rust and C, full-stack web, and the projects in between.';

/*
 * Applies saved preferences to <html> before first paint, so a visitor with
 * a light theme or large text never sees a flash of the defaults. The app
 * takes over once it mounts (usePreferencesSync). Same keys and validation as
 * src/preferences.ts, generated from the same constants.
 */
const preferencesScript = `(function(){try{
var d=document.documentElement,s=localStorage,
l=s.getItem(${JSON.stringify(STORAGE_KEYS.lang)}),
t=s.getItem(${JSON.stringify(STORAGE_KEYS.theme)}),
z=s.getItem(${JSON.stringify(STORAGE_KEYS.size)});
if(${JSON.stringify(LOCALES)}.indexOf(l)>=0)d.lang=l==="no"?"nb":l;
if(${JSON.stringify(THEME_IDS)}.indexOf(t)>=0)d.dataset.theme=t;
if(${JSON.stringify(TEXT_SIZES)}.indexOf(z)>=0)d.dataset.size=z;
}catch(e){}})();`;

// The document shell (the index.html replacement), picked up by the
// src/Document.* convention; it must render the full <html> and ships no
// client JS beyond the inline preferences script. <HydrationScript /> is
// stripped from the prerendered shell in client mode and activates under
// `ssr: true`.
export default function Document(props: ParentProps) {
  return (
    <html lang="en" data-theme={DEFAULT_THEME} data-size={DEFAULT_TEXT_SIZE}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          // Built at compile time from the app's own constants; no external input.
          // oxlint-disable-next-line solid/no-innerhtml
          innerHTML={preferencesScript}
        />
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="theme-color" content="#0e1014" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content="https://nicolai.frigaard.no/" />

        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&display=swap"
        />
        <HydrationScript />
      </head>
      <body>{props.children}</body>
    </html>
  );
}
