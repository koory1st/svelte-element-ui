import type { SvelteComponentTyped } from 'svelte'
export class SeuRow extends SvelteComponentTyped<
  {
    gutter?: number
    type?: string
    justify?: string
    align?: string
  },
  {},
  { default?: { aSlot: string } }
> {}
