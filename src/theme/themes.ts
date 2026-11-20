/*
 * Theme metadata for the settings panel. The colours themselves live in
 * src/styles/themes.css under [data-theme="<id>"]: a swatch renders a theme by
 * putting `data-theme` on its own element, so nothing is duplicated here.
 */

export type ThemeGroup = 'signature' | 'editor' | 'light';

export interface Theme {
  id: string;
  name: string;
  group: ThemeGroup;
}

export const THEMES = [
  { id: 'midnight', name: 'Midnight', group: 'signature' },
  { id: 'forest', name: 'Forest', group: 'signature' },
  { id: 'ocean', name: 'Ocean', group: 'signature' },
  { id: 'bourbon', name: 'Bourbon', group: 'signature' },

  { id: 'dracula', name: 'Dracula', group: 'editor' },
  { id: 'nord', name: 'Nord', group: 'editor' },
  { id: 'gruvbox', name: 'Gruvbox', group: 'editor' },
  { id: 'soldark', name: 'Solarized', group: 'editor' },
  { id: 'tokyo', name: 'Tokyo', group: 'editor' },
  { id: 'rosepine', name: 'Rosé Pine', group: 'editor' },
  { id: 'catppucc', name: 'Catppuccin', group: 'editor' },
  { id: 'monokai', name: 'Monokai', group: 'editor' },

  { id: 'paper', name: 'Paper', group: 'light' },
  { id: 'sollight', name: 'Solarized', group: 'light' },
  { id: 'ghlight', name: 'GitHub', group: 'light' },
] as const satisfies readonly Theme[];

export type ThemeId = (typeof THEMES)[number]['id'];

export const DEFAULT_THEME: ThemeId = 'midnight';
export const THEME_GROUPS: readonly ThemeGroup[] = ['signature', 'editor', 'light'];
export const THEME_IDS: readonly string[] = THEMES.map((t) => t.id);

export function isThemeId(value: unknown): value is ThemeId {
  return typeof value === 'string' && THEME_IDS.includes(value);
}

/** Text sizes; the scale factors are in global.css under [data-size]. */
export const TEXT_SIZES = ['small', 'medium', 'large'] as const;
export type TextSize = (typeof TEXT_SIZES)[number];
export const DEFAULT_TEXT_SIZE: TextSize = 'medium';

export function isTextSize(value: unknown): value is TextSize {
  return typeof value === 'string' && (TEXT_SIZES as readonly string[]).includes(value);
}
