/*
 * localStorage keys for visitor preferences. Kept free of side effects so the
 * document shell (Document.tsx) can build its pre-paint script from them
 * without pulling in the runtime store.
 */
export const STORAGE_KEYS = {
  lang: 'portfolio.lang',
  theme: 'portfolio.theme',
  size: 'portfolio.size',
} as const;
