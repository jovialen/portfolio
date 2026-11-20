import { BulletList, Callout, Heading } from '../components/primitives';

// Placeholder: the CV sections land in #6 (hero), #7 (history), #8 (projects)
// and #9 (skills, languages, contact, references, footer).
export default function CvPage() {
  return (
    <>
      <Heading level={1} id="about">
        Nicolai Frigaard
      </Heading>
      <Callout>
        <p>Portfolio under construction.</p>
      </Callout>
      <section>
        <Heading level={2}>Pages</Heading>
        <BulletList
          items={[
            <a href="/projects">all projects</a>,
            <a href="/projects/xadrez">projects/xadrez</a>,
            <a href="/transcript">transcript</a>,
          ]}
        />
      </section>
    </>
  );
}
