import type { SvelteComponentTyped } from 'svelte'
export class SeuLink extends SvelteComponentTyped<
  {
    type?: string
    underline?: boolean
    disabled?: boolean
    href?: string
    icon?: string
  },
  { click: UIEvent },
  { default?: { aSlot: string } }
> {}
