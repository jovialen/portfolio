import { For } from 'solid-js';
import { BulletList, Callout, Heading } from '../components/primitives';
import { NAV_SECTIONS } from '../components/nav/sections';
import { NAME, identity, summary } from '../content/cv';
import { t } from '../content/strings';
import { tr } from '../preferences';
import styles from './CvPage.module.css';

/** Issue that fills in each section, shown in its placeholder. */
const SECTION_ISSUE = {
  journey: 7,
  projects: 8,
  skills: 9,
  languages: 9,
  contact: 9,
  references: 9,
} as const;

// Placeholder: the CV sections land in #6 (hero), #7 (history), #8 (projects)
// and #9 (skills, languages, contact, references, footer). The empty sections
// give the top-bar nav and scrollspy real targets until then.
export default function CvPage() {
  return (
    <>
      <header id="about">
        <Heading level={1}>{NAME}</Heading>
        <p>{tr(identity)}</p>
        <Callout>
          <p>{tr(summary)}</p>
        </Callout>
        <BulletList
          items={[
            <a href="/projects">{t().allProjectsTitle}</a>,
            <a href="/transcript">{t().transcript.title}</a>,
          ]}
        />
      </header>
      <For each={NAV_SECTIONS}>
        {(id) => (
          <section id={id} class={styles.placeholder}>
            <Heading level={2}>{t().headings[id]}</Heading>
            <Callout>
              <p>
                <a href={`https://github.com/jovialen/portfolio/issues/${SECTION_ISSUE[id]}`}>
                  #{SECTION_ISSUE[id]}
                </a>
              </p>
            </Callout>
          </section>
        )}
      </For>
    </>
  );
}
