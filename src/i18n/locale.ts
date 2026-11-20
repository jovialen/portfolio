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

// The current locale and `tr()` live in ../preferences, which loads and
// persists the visitor's choice.
