import styles from './BackLink.module.css';

/** "← back to cv" link shown at the bottom of every sub-view. */
export default function BackLink() {
  return (
    <p class={styles.back}>
      <a href="/">← back to cv</a>
    </p>
  );
}
