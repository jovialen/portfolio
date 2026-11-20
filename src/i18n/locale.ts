import { createSignal } from 'solid-js';

/** Site languages: English, Norwegian Bokmål, Norwegian Nynorsk. */
export const LOCALES = ['en', 'no', 'nn'] as const;
export type Locale = (typeof LOCALES)[number];

/** A value given once per locale. Leaving out a locale is a type error. */
export type Localized<T> = Record<Locale, T>;

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value);
}

/** BCP 47 tag for `<html lang>` (`no` is written as Bokmål, `nb`). */
export function htmlLang(locale: Locale): string {
  return locale === 'no' ? 'nb' : locale;
}

// Current locale. The preferences store (#3) takes ownership of this:
// loading it from localStorage and persisting changes.
const [locale, setLocale] = createSignal<Locale>('en');
export { locale, setLocale };

/**
 * Pick the current locale's value. Reactive: call it where Solid tracks
 * reads (JSX, a memo, an effect's compute), not at the top of a component.
 */
export function tr<T>(value: Localized<T>): T {
  return value[locale()];
}
