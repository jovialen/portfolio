import { describe, expect, it } from 'vitest';
import { activeSection, fitNavItems, shouldUseHamburger } from './navLayout';

describe('fitNavItems', () => {
  const widths = [60, 70, 50, 80, 60, 90]; // 410 + 5 gaps of 14 = 480
  const base = { widths, gap: 14, moreWidth: 50 };

  it('shows every item when they all fit', () => {
    expect(fitNavItems({ ...base, available: 480 })).toBe(6);
    expect(fitNavItems({ ...base, available: 1000 })).toBe(6);
  });

  it('tolerates sub-pixel rounding at the exact fit', () => {
    expect(fitNavItems({ ...base, available: 479.6 })).toBe(6);
  });

  it('keeps room for the more trigger when items overflow', () => {
    // 60 + 14 + 70 = 144 used; + 14 + 50 more = 208.
    expect(fitNavItems({ ...base, available: 208 })).toBe(2);
    expect(fitNavItems({ ...base, available: 207 })).toBe(1);
  });

  it('can fit nothing', () => {
    expect(fitNavItems({ ...base, available: 40 })).toBe(0);
  });

  it('handles an empty nav', () => {
    expect(fitNavItems({ ...base, widths: [], available: 0 })).toBe(0);
  });
});

describe('shouldUseHamburger', () => {
  it('needs few inline items and a narrow viewport', () => {
    expect(shouldUseHamburger(2, 6, 400)).toBe(true);
    expect(shouldUseHamburger(2, 6, 900)).toBe(false);
    expect(shouldUseHamburger(3, 6, 400)).toBe(false);
  });

  it('never applies when everything fits', () => {
    expect(shouldUseHamburger(2, 2, 400)).toBe(false);
  });
});

describe('activeSection', () => {
  const sections = [
    { id: 'journey', top: 600 },
    { id: 'projects', top: 1400 },
    { id: 'skills', top: 2000 },
    { id: 'references', top: 2600 },
  ];
  const base = { sections, offset: 90, viewportHeight: 800, documentHeight: 3000 };

  it('is "about" near the top', () => {
    expect(activeSection({ ...base, scrollY: 0 })).toBe('about');
    expect(activeSection({ ...base, scrollY: 39 })).toBe('about');
  });

  it('falls back to the first section before any is reached', () => {
    expect(activeSection({ ...base, scrollY: 100 })).toBe('journey');
  });

  it('picks the last section whose top passed the offset line', () => {
    expect(activeSection({ ...base, scrollY: 510 })).toBe('journey');
    expect(activeSection({ ...base, scrollY: 1309 })).toBe('journey');
    expect(activeSection({ ...base, scrollY: 1310 })).toBe('projects');
    expect(activeSection({ ...base, scrollY: 1950 })).toBe('skills');
  });

  it('activates the last section at the bottom of the page', () => {
    // 2200 + 800 = 3000: bottom reached, although references' top (2600)
    // is still below the line (2290).
    expect(activeSection({ ...base, scrollY: 2200 })).toBe('references');
  });

  it('is "about" when there are no sections', () => {
    expect(activeSection({ ...base, sections: [], scrollY: 500 })).toBe('about');
  });
});
