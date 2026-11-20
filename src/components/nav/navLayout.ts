/*
 * Pure layout logic for the top bar, kept free of the DOM so it can be unit
 * tested. TopBar measures the DOM and feeds the numbers in.
 */

export interface FitInput {
  /** Rendered width of each nav item, in display order. */
  widths: readonly number[];
  /** Gap between items. */
  gap: number;
  /** Width of the "more ▾" trigger. */
  moreWidth: number;
  /** Width available for the nav. */
  available: number;
}

/**
 * Priority-plus: how many items fit inline. If not all of them fit, room is
 * kept for the "more" trigger after the last inline item.
 */
export function fitNavItems({ widths, gap, moreWidth, available }: FitInput): number {
  const total = widths.reduce((sum, w, i) => sum + w + (i > 0 ? gap : 0), 0);
  // Half a pixel of slack absorbs sub-pixel rounding in measured widths.
  if (total <= available + 0.5) return widths.length;

  let used = 0;
  let count = 0;
  for (const [i, w] of widths.entries()) {
    const add = w + (i > 0 ? gap : 0);
    if (used + add + gap + moreWidth > available) break;
    used += add;
    count++;
  }
  return count;
}

/** Below this many inline items on a narrow screen, collapse into a hamburger. */
export const HAMBURGER_MIN_INLINE = 3;
/** Widest viewport that may use the hamburger. */
export const HAMBURGER_MAX_VIEWPORT = 680;

export function shouldUseHamburger(fitting: number, total: number, viewportWidth: number): boolean {
  return (
    fitting < total && fitting < HAMBURGER_MIN_INLINE && viewportWidth <= HAMBURGER_MAX_VIEWPORT
  );
}

export interface SpyInput {
  /** Section ids with their document-relative top offsets, in page order. */
  sections: readonly { id: string; top: number }[];
  scrollY: number;
  /** Distance below the viewport top at which a section counts as reached. */
  offset: number;
  viewportHeight: number;
  documentHeight: number;
}

/** Scroll distance under which the page counts as "at the top" (the about/home item). */
export const TOP_THRESHOLD = 40;
export const ABOUT_ID = 'about';

/**
 * The section currently being read: the last one whose top has passed the
 * line `offset` px below the viewport top. Near the top of the page it's
 * "about". At the very bottom it's the last section, which may be too short
 * to ever reach the line.
 */
export function activeSection({
  sections,
  scrollY,
  offset,
  viewportHeight,
  documentHeight,
}: SpyInput): string {
  if (scrollY < TOP_THRESHOLD || sections.length === 0) return ABOUT_ID;

  const atBottom = scrollY + viewportHeight >= documentHeight - 2;
  if (atBottom) return sections[sections.length - 1].id;

  const line = scrollY + offset;
  let active = sections[0].id;
  for (const s of sections) {
    if (s.top <= line) active = s.id;
  }
  return active;
}
