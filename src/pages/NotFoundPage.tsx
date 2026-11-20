import { Callout, Heading } from '../components/primitives';
import BackLink from '../components/BackLink';

export default function NotFoundPage() {
  return (
    <>
      <Heading level={1} size="lg" mono>
        404
      </Heading>
      <Callout>
        <p>No such file. The page you were looking for doesn’t exist.</p>
      </Callout>
      <BackLink />
    </>
  );
}
