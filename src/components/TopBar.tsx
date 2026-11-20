import { createMemo } from 'solid-js';
import { useLocation } from '@solidjs/router';
import styles from './TopBar.module.css';

/** The "file" each view pretends to be, shown next to the home dot. */
function fileNameFor(pathname: string): string {
  if (pathname === '/projects') return 'projects.md';
  if (pathname.startsWith('/projects/')) {
    return `projects/${decodeURIComponent(pathname.slice('/projects/'.length))}.md`;
  }
  if (pathname === '/transcript') return 'transcript.md';
  return 'nicolai-frigaard.md';
}

// Skeleton of the sticky top bar. Section nav, overflow menu and the settings
// button land in #4 / #5.
export default function TopBar() {
  const location = useLocation();
  const fileName = createMemo(() => fileNameFor(location.pathname));

  return (
    <header class={styles.bar} data-print-hide>
      <div class={styles.inner}>
        <a href="/" class={styles.home}>
          <span class={styles.dot} aria-hidden="true" />
          <span class={styles.fileName}>{fileName()}</span>
        </a>
      </div>
    </header>
  );
}
