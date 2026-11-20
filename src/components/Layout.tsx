import type { ParentProps } from 'solid-js';
import TopBar from './TopBar';
import styles from './Layout.module.css';

export default function Layout(props: ParentProps) {
  return (
    <div class={styles.root}>
      <TopBar />
      <main class={styles.main}>{props.children}</main>
    </div>
  );
}
