import { Callout, Heading } from '../components/primitives';
import BackLink from '../components/BackLink';
import { t } from '../content/strings';

export default function NotFoundPage() {
  return (
    <>
      <Heading level={1} size="lg" mono>
        {t().notFound.title}
      </Heading>
      <Callout>
        <p>{t().notFound.body}</p>
      </Callout>
      <BackLink />
    </>
  );
}
