import { BulletList, Callout, Heading } from '../components/primitives';
import BackLink from '../components/BackLink';
import { allProjects } from '../content/projects';
import { t } from '../content/strings';

// Placeholder list: the project cards land in #8.
export default function AllProjectsPage() {
  return (
    <>
      <Heading level={1} size="lg" mono>
        {t().allProjectsTitle}
      </Heading>
      <Callout>
        <p>{t().allProjectsIntro}</p>
      </Callout>
      <BulletList items={allProjects.map((p) => <a href={`/projects/${p.id}`}>{p.name}</a>)} />
      <BackLink />
    </>
  );
}
