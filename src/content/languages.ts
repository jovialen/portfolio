import type { Localized } from '../i18n/locale';

export interface SpokenLanguage {
  name: Localized<string>;
  /** 1–4, drawn as filled dots out of `LANGUAGE_LEVEL_MAX`. */
  level: 1 | 2 | 3 | 4;
  /** The level in words; this is what screen readers get. */
  levelLabel: Localized<string>;
}

export const LANGUAGE_LEVEL_MAX = 4;

export const languages: SpokenLanguage[] = [
  {
    name: { en: 'Norwegian', no: 'Norsk', nn: 'Norsk' },
    level: 4,
    levelLabel: { en: 'native', no: 'morsmål', nn: 'morsmål' },
  },
  {
    name: { en: 'English', no: 'Engelsk', nn: 'Engelsk' },
    level: 3,
    levelLabel: { en: 'fluent', no: 'flytende', nn: 'flytande' },
  },
  {
    name: { en: 'Spanish', no: 'Spansk', nn: 'Spansk' },
    level: 1,
    levelLabel: { en: 'basic', no: 'grunnleggende', nn: 'grunnleggjande' },
  },
  {
    name: { en: 'French', no: 'Fransk', nn: 'Fransk' },
    level: 1,
    levelLabel: { en: 'basic', no: 'grunnleggende', nn: 'grunnleggjande' },
  },
];
