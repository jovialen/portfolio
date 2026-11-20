import { Heading } from '../components/primitives';
import BackLink from '../components/BackLink';
import { t } from '../content/strings';

// Placeholder: filled in by #10.
export default function TranscriptPage() {
  return (
    <>
      <Heading level={1} size="lg" mono>
        {t().transcript.title}
      </Heading>
      <BackLink />
    </>
  );
}
