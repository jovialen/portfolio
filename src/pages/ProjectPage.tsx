import { useParams } from '@solidjs/router';
import { Heading } from '../components/primitives';
import BackLink from '../components/BackLink';

// Placeholder: filled in by #8.
export default function ProjectPage() {
  const params = useParams<{ id: string }>();
  return (
    <>
      <Heading level={1} size="lg" mono>
        {params.id}
      </Heading>
      <BackLink />
    </>
  );
}
