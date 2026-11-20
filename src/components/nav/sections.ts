/** CV sections in the top-bar nav, in page order. Each is a section id on `/`. */
export const NAV_SECTIONS = [
  'journey',
  'projects',
  'skills',
  'languages',
  'contact',
  'references',
] as const;

export type SectionId = (typeof NAV_SECTIONS)[number];
