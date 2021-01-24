import type { SvelteComponentTyped } from 'svelte'
export class SeuCol extends SvelteComponentTyped<
  {
    span?: number
    offset?: number
    pull?: number
    push?: number
    xs?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
  },
  {},
  { default?: { aSlot: string } }
> {}
