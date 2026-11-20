import { createMemo, Show } from 'solid-js';
import { useParams } from '@solidjs/router';
import { Callout, Heading } from '../components/primitives';
import BackLink from '../components/BackLink';
import { findProject } from '../content/projects';
import { t } from '../content/strings';
import { tr } from '../i18n/locale';

// Placeholder: the full project page lands in #8.
export default function ProjectPage() {
  const params = useParams<{ id: string }>();
  const project = createMemo(() => findProject(params.id));

  return (
    <>
      <Show
        when={project()}
        fallback={
          <Callout>
            <p>{t().detail.notFound}</p>
          </Callout>
        }
      >
        {(p) => (
          <>
            <Heading level={1} size="lg" mono>
              {p().name}
            </Heading>
            <Callout>
              <p>{tr(p().text).tagline}</p>
            </Callout>
          </>
        )}
      </Show>
      <BackLink />
    </>
  );
}
