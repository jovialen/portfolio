import { For, onSettled } from 'solid-js';
import { t } from '../content/strings';
import { htmlLang, LOCALES, type Locale } from '../i18n/locale';
import { prefs, setLanguage, setTextSize, setTheme } from '../preferences';
import { THEME_GROUPS, THEMES, TEXT_SIZES, type TextSize } from '../theme/themes';
import { closePopover } from './nav/popover';
import styles from './SettingsPanel.module.css';

export const SETTINGS_BUTTON_ID = 'settings-button';
export const SETTINGS_PANEL_ID = 'settings-panel';
const TITLE_ID = 'settings-title';

/** Each language named in itself, so a visitor can find their own. */
const LANGUAGE_NAMES: Record<Locale, string> = { en: 'English', no: 'Bokmål', nn: 'Nynorsk' };

/** Preview glyph sizes. Fixed px, so the preview shows the relative difference. */
const GLYPH_PX: Record<TextSize, number> = { small: 13, medium: 16, large: 20 };

/** Theme names used in more than one group ("Solarized"), which need the group to tell apart. */
const AMBIGUOUS_NAMES = new Set(
  THEMES.map((th) => th.name).filter((name, i, all) => all.indexOf(name) !== i),
);

function trigger(): HTMLElement | null {
  return document.getElementById(SETTINGS_BUTTON_ID);
}

/**
 * Non-modal settings popover under the gear button. Rendered by TopBar while
 * open. Focus moves into it on open; Escape and the close button return focus
 * to the gear; clicking or tabbing outside closes it.
 */
export default function SettingsPanel() {
  let panelEl!: HTMLDivElement;

  const isOutside = (node: Node | null) =>
    !!node && !panelEl.contains(node) && !trigger()?.contains(node);

  function closeAndRefocus() {
    closePopover();
    trigger()?.focus();
  }

  onSettled(() => {
    // Focus on the next frame: focusing a just-inserted element forces a
    // synchronous style/layout pass (15 themed swatches), which would
    // otherwise run inside this reactive scope (dev: HOT_SCOPE_TIME).
    const focusFrame = requestAnimationFrame(() => panelEl.focus({ preventScroll: true }));

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      const focusWasInside = panelEl.contains(document.activeElement);
      closePopover();
      if (focusWasInside) trigger()?.focus();
    };
    const onPointerDown = (e: PointerEvent) => {
      if (isOutside(e.target as Node)) closePopover();
    };
    const onFocusOut = (e: FocusEvent) => {
      if (isOutside(e.relatedTarget as Node | null)) closePopover();
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    panelEl.addEventListener('focusout', onFocusOut);
    return () => {
      cancelAnimationFrame(focusFrame);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      panelEl.removeEventListener('focusout', onFocusOut);
    };
  });

  return (
    <div
      ref={panelEl}
      id={SETTINGS_PANEL_ID}
      class={styles.panel}
      role="dialog"
      aria-labelledby={TITLE_ID}
      tabindex="-1"
    >
      <div class={styles.header}>
        <h2 id={TITLE_ID} class={styles.title}>
          <span class={styles.marker} aria-hidden="true">
            ##
          </span>{' '}
          {t().settings.title}
        </h2>
        <button
          type="button"
          class={styles.close}
          aria-label={t().settings.close}
          title={t().settings.close}
          onClick={closeAndRefocus}
        >
          <span aria-hidden="true">✕</span>
        </button>
      </div>

      <section class={styles.section} aria-labelledby="settings-language">
        <h3 id="settings-language" class={styles.label}>
          {t().settings.language}
        </h3>
        <div class={styles.segments}>
          <For each={LOCALES}>
            {(id) => (
              <button
                type="button"
                class={styles.segment}
                lang={htmlLang(id)}
                aria-pressed={prefs.lang === id ? 'true' : 'false'}
                onClick={() => setLanguage(id)}
              >
                {LANGUAGE_NAMES[id]}
              </button>
            )}
          </For>
        </div>
      </section>

      <section class={styles.section} aria-labelledby="settings-size">
        <h3 id="settings-size" class={styles.label}>
          {t().settings.textSize}
        </h3>
        <div class={styles.segments}>
          <For each={TEXT_SIZES}>
            {(size) => (
              <button
                type="button"
                class={[styles.segment, styles.sizeSegment]}
                aria-label={t().settings.sizeNames[size]}
                aria-pressed={prefs.size === size ? 'true' : 'false'}
                onClick={() => setTextSize(size)}
              >
                <span class={styles.glyph} style={{ 'font-size': `${GLYPH_PX[size]}px` }}>
                  A
                </span>
                <span class={styles.sizeLetter}>{t().settings[size]}</span>
              </button>
            )}
          </For>
        </div>
      </section>

      <section class={styles.themeSection} aria-labelledby="settings-theme">
        <h3 id="settings-theme" class={styles.label}>
          {t().settings.theme}
        </h3>
        <div class={styles.themeScroll}>
          <For each={THEME_GROUPS}>
            {(group) => (
              <div role="group" aria-labelledby={`settings-theme-${group}`}>
                <h4 id={`settings-theme-${group}`} class={styles.groupLabel}>
                  <span class={styles.marker} aria-hidden="true">
                    -
                  </span>{' '}
                  {t().themeGroups[group]}
                </h4>
                <div class={styles.themeGrid}>
                  <For each={THEMES.filter((th) => th.group === group)}>
                    {(th) => (
                      <button
                        type="button"
                        class={styles.themeButton}
                        aria-pressed={prefs.theme === th.id ? 'true' : 'false'}
                        onClick={() => setTheme(th.id)}
                      >
                        {/* The swatch carries the theme itself, so it renders with that theme's colours. */}
                        <span class={styles.swatch} data-theme={th.id} aria-hidden="true">
                          <span class={styles.swatchDot} />
                        </span>
                        <span class={styles.themeName}>
                          {th.name}
                          {AMBIGUOUS_NAMES.has(th.name) && (
                            <span class="visually-hidden"> ({t().themeGroups[group]})</span>
                          )}
                        </span>
                      </button>
                    )}
                  </For>
                </div>
              </div>
            )}
          </For>
        </div>
      </section>
    </div>
  );
}
