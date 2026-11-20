import { createSignal } from 'solid-js';

/*
 * Which top-bar popover is open. One signal for both, so opening the section
 * menu closes settings and vice versa. Write only from event handlers.
 */
export type PopoverId = 'more' | 'settings';

const [openPopover, setOpenPopover] = createSignal<PopoverId | null>(null);
export { openPopover };

export function togglePopover(id: PopoverId) {
  setOpenPopover((current) => (current === id ? null : id));
}

export function closePopover() {
  setOpenPopover(null);
}
