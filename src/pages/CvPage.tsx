import { BulletList, Callout, Heading } from '../components/primitives';
import { NAME, identity, summary } from '../content/cv';
import { t } from '../content/strings';
import { tr } from '../preferences';

// Placeholder: the CV sections land in #6 (hero), #7 (history), #8 (projects)
// and #9 (skills, languages, contact, references, footer).
export default function CvPage() {
  return (
    <>
      <Heading level={1} id="about">
        {NAME}
      </Heading>
      <p>{tr(identity)}</p>
      <Callout>
        <p>{tr(summary)}</p>
      </Callout>
      <section>
        <Heading level={2}>Pages</Heading>
        <BulletList
          items={[
            <a href="/projects">{t().allProjectsTitle}</a>,
            <a href="/transcript">{t().transcript.title}</a>,
          ]}
        />
      </section>
    </>
  );
}
