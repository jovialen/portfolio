import { createEffect, createMemo, createSignal, For, onSettled, Show } from 'solid-js';
import { useLocation } from '@solidjs/router';
import { t } from '../content/strings';
import { locale, prefs } from '../preferences';
import {
  ABOUT_ID,
  activeSection,
  fitNavItems,
  shouldUseHamburger,
} from './nav/navLayout';
import { closePopover, openPopover, togglePopover } from './nav/popover';
import { NAV_SECTIONS, type SectionId } from './nav/sections';
import SettingsPanel, { SETTINGS_BUTTON_ID, SETTINGS_PANEL_ID } from './SettingsPanel';
import styles from './TopBar.module.css';


const NAV_GAP = 14;
/** How far below the viewport top a section counts as reached (bar + margin). */
const SPY_OFFSET = 90;
const MORE_MENU_ID = 'nav-more-menu';

/** The "file" each view pretends to be, shown next to the home dot. */
function fileNameFor(pathname: string): string {
  if (pathname === '/projects') return 'projects.md';
  if (pathname.startsWith('/projects/')) {
    return `projects/${decodeURIComponent(pathname.slice('/projects/'.length))}.md`;
  }
  if (pathname === '/transcript') return 'transcript.md';
  return 'nicolai-frigaard.md';
}

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
}

/** Scroll to a section and move focus there, so keyboard users continue from it. */
function goToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: scrollBehavior(), block: 'start' });
  if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
  el.focus({ preventScroll: true });
}

export default function TopBar() {
  const location = useLocation();
  const isCv = createMemo(() => location.pathname === '/');
  const fileName = createMemo(() => fileNameFor(location.pathname));

  const [activeId, setActiveId] = createSignal<string>(ABOUT_ID);
  const [fitting, setFitting] = createSignal<number>(NAV_SECTIONS.length);
  const [viewportWidth, setViewportWidth] = createSignal(Number.POSITIVE_INFINITY);

  const hamburger = createMemo(() =>
    shouldUseHamburger(fitting(), NAV_SECTIONS.length, viewportWidth()),
  );
  const inlineCount = createMemo(() => (hamburger() ? 0 : fitting()));
  const inlineItems = createMemo(() => NAV_SECTIONS.slice(0, inlineCount()));
  const overflowItems = createMemo(() => NAV_SECTIONS.slice(inlineCount()));
  const overflowActive = createMemo(() =>
    overflowItems().some((id) => id === activeId()),
  );
  const moreOpen = createMemo(() => openPopover() === 'more');

  let wrapEl!: HTMLDivElement;
  let ghostEl!: HTMLDivElement;
  let moreGhostEl!: HTMLSpanElement;
  let moreButtonEl: HTMLButtonElement | undefined;

  // --- measuring (priority-plus) -------------------------------------------

  let measureFrame = 0;
  function measure() {
    const widths = [...ghostEl.querySelectorAll<HTMLElement>('[data-ghost-item]')].map(
      (el) => el.getBoundingClientRect().width,
    );
    const fit = fitNavItems({
      widths,
      gap: NAV_GAP,
      moreWidth: moreGhostEl.getBoundingClientRect().width,
      available: wrapEl.clientWidth,
    });
    setFitting(fit);
    setViewportWidth(window.innerWidth);
    if (fit === NAV_SECTIONS.length && openPopover() === 'more') closePopover();
  }
  function scheduleMeasure() {
    cancelAnimationFrame(measureFrame);
    measureFrame = requestAnimationFrame(measure);
  }

  // --- scrollspy -----------------------------------------------------------

  let spyFrame = 0;
  function spy() {
    if (location.pathname !== '/') return;
    const sections = NAV_SECTIONS.flatMap((id) => {
      const el = document.getElementById(id);
      return el ? [{ id, top: el.getBoundingClientRect().top + window.scrollY }] : [];
    });
    setActiveId(
      activeSection({
        sections,
        scrollY: window.scrollY,
        offset: SPY_OFFSET,
        viewportHeight: window.innerHeight,
        documentHeight: document.documentElement.scrollHeight,
      }),
    );
  }
  function scheduleSpy() {
    cancelAnimationFrame(spyFrame);
    spyFrame = requestAnimationFrame(spy);
  }

  // Label widths change with the language and the text size (the wrapper's
  // own width may not change, so the ResizeObserver can't be relied on).
  // Sections exist only on the CV.
  createEffect(
    () => `${locale()}|${prefs.size}`,
    () => scheduleMeasure(),
  );
  createEffect(
    () => location.pathname,
    () => scheduleSpy(),
  );

  onSettled(() => {
    const onResize = () => {
      scheduleMeasure();
      scheduleSpy();
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape' || openPopover() !== 'more') return;
      const focusWasInside = wrapEl.contains(document.activeElement);
      closePopover();
      if (focusWasInside) moreButtonEl?.focus();
    };
    const onPointerDown = (e: PointerEvent) => {
      if (openPopover() === 'more' && !wrapEl.contains(e.target as Node)) closePopover();
    };
    // Keyboard counterpart of the outside click: tabbing out of the nav closes the menu.
    const onFocusOut = (e: FocusEvent) => {
      const next = e.relatedTarget as Node | null;
      if (openPopover() === 'more' && next && !wrapEl.contains(next)) closePopover();
    };

    const resizeObserver = new ResizeObserver(scheduleMeasure);
    resizeObserver.observe(wrapEl);
    window.addEventListener('scroll', scheduleSpy, { passive: true });
    window.addEventListener('resize', onResize);
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    wrapEl.addEventListener('focusout', onFocusOut);
    // Web fonts change label widths without resizing the wrapper. Listening
    // for loadingdone is free, whereas reading document.fonts.ready forces a
    // full style recalc inside this scope (~30ms; dev: HOT_SCOPE_TIME). Fonts
    // that finished before mount are covered by the initial measure below.
    document.fonts?.addEventListener('loadingdone', scheduleMeasure);
    scheduleMeasure();
    scheduleSpy();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('scroll', scheduleSpy);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      wrapEl.removeEventListener('focusout', onFocusOut);
      document.fonts?.removeEventListener('loadingdone', scheduleMeasure);
      cancelAnimationFrame(measureFrame);
      cancelAnimationFrame(spyFrame);
    };
  });

  // --- handlers --------------------------------------------------------------

  function onHomeClick(e: MouseEvent) {
    closePopover();
    if (location.pathname !== '/') return; // let the router navigate home
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: scrollBehavior() });
  }

  function onSectionClick(e: MouseEvent, id: SectionId) {
    e.preventDefault();
    closePopover();
    goToSection(id);
  }

  return (
    <header class={styles.bar} data-print-hide>
      <div class={styles.inner}>
        <a
          href="/"
          class={[styles.home, { [styles.homeActive]: isCv() && activeId() === ABOUT_ID }]}
          onClick={onHomeClick}
        >
          <span class={styles.dot} aria-hidden="true" />
          <span class={styles.fileName}>{fileName()}</span>
        </a>

        <div ref={wrapEl} class={styles.navWrap}>
          <Show
            when={isCv()}
            fallback={
              <a href="/" class={styles.backLink} onClick={() => closePopover()}>
                {t().detail.back}
              </a>
            }
          >
            <nav aria-label={t().navLabel} class={styles.nav}>
              <ul class={styles.navList}>
                <For each={inlineItems()}>
                  {(id) => (
                    <li>
                      <a
                        href={`#${id}`}
                        class={styles.navLink}
                        // Set explicitly (also when false) so the router,
                        // which treats /#x as the current page, leaves it alone.
                        aria-current={activeId() === id ? 'true' : 'false'}
                        onClick={(e) => onSectionClick(e, id)}
                      >
                        {t().nav[id]}
                      </a>
                    </li>
                  )}
                </For>
              </ul>

              <Show when={overflowItems().length > 0}>
                <div class={styles.more}>
                  <button
                    ref={(el) => (moreButtonEl = el)}
                    type="button"
                    class={[
                      hamburger() ? styles.iconButton : styles.moreButton,
                      { [styles.moreActive]: !hamburger() && overflowActive() },
                    ]}
                    aria-expanded={moreOpen() ? 'true' : 'false'}
                    aria-controls={MORE_MENU_ID}
                    aria-label={hamburger() ? t().navLabel : undefined}
                    onClick={() => togglePopover('more')}
                  >
                    <Show
                      when={hamburger()}
                      fallback={
                        <>
                          {t().nav.more}
                          <span class={styles.caret} aria-hidden="true">
                            ▼
                          </span>
                        </>
                      }
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        aria-hidden="true"
                      >
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                      </svg>
                    </Show>
                  </button>

                  <ul id={MORE_MENU_ID} class={styles.menu} hidden={!moreOpen()}>
                    <For each={overflowItems()}>
                      {(id) => (
                        <li>
                          <a
                            href={`#${id}`}
                            class={styles.menuLink}
                            aria-current={activeId() === id ? 'true' : 'false'}
                            onClick={(e) => onSectionClick(e, id)}
                          >
                            {t().nav[id]}
                          </a>
                        </li>
                      )}
                    </For>
                  </ul>
                </div>
              </Show>
            </nav>
          </Show>

          {/* Invisible copy of every item, measured to decide what fits inline. */}
          <div ref={ghostEl} class={styles.ghost} aria-hidden="true">
            <For each={NAV_SECTIONS}>
              {(id) => (
                <span data-ghost-item class={styles.ghostItem}>
                  {t().nav[id]}
                </span>
              )}
            </For>
            <span ref={moreGhostEl} class={styles.ghostItem}>
              {t().nav.more} <span class={styles.caret}>▼</span>
            </span>
          </div>
        </div>

        <button
          id={SETTINGS_BUTTON_ID}
          type="button"
          class={styles.iconButton}
          aria-controls={openPopover() === 'settings' ? SETTINGS_PANEL_ID : undefined}
          aria-label={t().settings.title}
          title={t().settings.title}
          aria-haspopup="dialog"
          aria-expanded={openPopover() === 'settings' ? 'true' : 'false'}
          onClick={() => togglePopover('settings')}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </button>

        <Show when={openPopover() === 'settings'}>
          <SettingsPanel />
        </Show>
      </div>
    </header>
  );
}
