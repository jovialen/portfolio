import { createEffect, createStore } from 'solid-js';
import { htmlLang, isLocale, type Locale, type Localized } from './i18n/locale';
import {
  DEFAULT_TEXT_SIZE,
  DEFAULT_THEME,
  isTextSize,
  isThemeId,
  type TextSize,
  type ThemeId,
} from './theme/themes';
import { STORAGE_KEYS } from './preferenceKeys';

/*
 * Visitor preferences: language, theme and text size. Loaded from
 * localStorage, saved when the visitor changes one, and mirrored onto <html>
 * as `lang`, `data-theme` and `data-size`. The inline script in Document.tsx
 * applies the same attributes before first paint, from the same constants.
 */

export interface Preferences {
  lang: Locale;
  theme: ThemeId;
  size: TextSize;
}

// Typed against Preferences, so adding a preference without a key fails typecheck.
const KEYS: Record<keyof Preferences, string> = STORAGE_KEYS;

const DEFAULTS: Preferences = { lang: 'en', theme: DEFAULT_THEME, size: DEFAULT_TEXT_SIZE };

function read(key: string): string | null {
  try {
    return globalThis.localStorage?.getItem(key) ?? null;
  } catch {
    return null; // Storage blocked (private mode, disabled cookies).
  }
}

function write(key: string, value: string) {
  try {
    globalThis.localStorage?.setItem(key, value);
  } catch {
    // Storage blocked: the choice still applies for this visit.
  }
}

export function loadPreferences(): Preferences {
  const lang = read(KEYS.lang);
  const theme = read(KEYS.theme);
  const size = read(KEYS.size);
  return {
    lang: isLocale(lang) ? lang : DEFAULTS.lang,
    theme: isThemeId(theme) ? theme : DEFAULTS.theme,
    size: isTextSize(size) ? size : DEFAULTS.size,
  };
}

const [prefs, setPrefs] = createStore<Preferences>(loadPreferences());
export { prefs };

export function setLanguage(lang: Locale) {
  setPrefs((p) => {
    p.lang = lang;
  });
  write(KEYS.lang, lang);
}

export function setTheme(theme: ThemeId) {
  setPrefs((p) => {
    p.theme = theme;
  });
  write(KEYS.theme, theme);
}

export function setTextSize(size: TextSize) {
  setPrefs((p) => {
    p.size = size;
  });
  write(KEYS.size, size);
}

/** The current locale. Reactive. */
export function locale(): Locale {
  return prefs.lang;
}

/**
 * Pick the current locale's value. Reactive: call it where Solid tracks
 * reads (JSX, a memo, an effect's compute), not at the top of a component.
 */
export function tr<T>(value: Localized<T>): T {
  return value[prefs.lang];
}

/**
 * Mirror preferences onto <html>. Call once, from the root component, so the
 * effects have an owner. Persisting happens in the setters instead, so only an
 * explicit choice is saved; a first visit stores nothing and keeps following
 * the defaults.
 */
export function usePreferencesSync() {
  createEffect(
    () => prefs.lang,
    (lang) => {
      document.documentElement.lang = htmlLang(lang);
    },
  );
  createEffect(
    () => prefs.theme,
    (theme) => {
      document.documentElement.dataset.theme = theme;
    },
  );
  createEffect(
    () => prefs.size,
    (size) => {
      document.documentElement.dataset.size = size;
    },
  );
}
