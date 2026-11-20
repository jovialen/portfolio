import type { ParentProps } from 'solid-js';
import { For } from 'solid-js';
import { Dynamic, type JSX } from '@solidjs/web';
import styles from './primitives.module.css';

/*
 * Small building blocks the design repeats everywhere: markdown-style
 * headings, the `>` callout, `-` bullet rows and tag chips. The markers are
 * decoration and are hidden from assistive tech.
 */

type HeadingProps = ParentProps<{
  level: 1 | 2 | 3;
  /** Heading size; defaults to the level's size on the CV page. */
  size?: 'xl' | 'lg' | 'md' | 'sm';
  /** Monospace heading text (project and transcript pages). */
  mono?: boolean;
  id?: string;
  class?: string;
}>;

const defaultSize = { 1: 'xl', 2: 'lg', 3: 'sm' } as const;

export function Heading(props: HeadingProps) {
  return (
    <Dynamic
      component={`h${props.level}`}
      id={props.id}
      class={[
        styles.heading,
        styles[props.size ?? defaultSize[props.level]],
        { [styles.mono]: props.mono },
        props.class,
      ]}
    >
      <span class={styles.headingMarker} aria-hidden="true">
        {'#'.repeat(props.level)}
      </span>
      {props.children}
    </Dynamic>
  );
}

/** Quote-like block with an accent rule and a `>` prompt marker. */
export function Callout(props: ParentProps<{ class?: string }>) {
  return (
    <div class={[styles.callout, props.class]}>
      <span class={styles.marker} aria-hidden="true">
        &gt;
      </span>
      <div class={styles.calloutBody}>{props.children}</div>
    </div>
  );
}

/** A list rendered as `-` rows. */
export function BulletList(props: { items: readonly JSX.Element[]; class?: string }) {
  return (
    <ul class={[styles.bullets, props.class]}>
      <For each={props.items}>
        {(item) => (
          <li class={styles.bullet}>
            <span class={styles.marker} aria-hidden="true">
              -
            </span>
            <span>{item}</span>
          </li>
        )}
      </For>
    </ul>
  );
}

/** Mono chip used for project tags. */
export function Tag(props: ParentProps) {
  return <span class={styles.tag}>{props.children}</span>;
}

/** Row of tags. */
export function TagList(props: { tags: readonly string[] }) {
  return (
    <ul class={styles.tags}>
      <For each={props.tags}>
        {(tag) => (
          <li>
            <Tag>{tag}</Tag>
          </li>
        )}
      </For>
    </ul>
  );
}
