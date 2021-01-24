import type { SvelteComponentTyped } from 'svelte'
export class SeuRadio extends SvelteComponentTyped<
  {
    value?: boolean | string | number
    label?: string | number | boolean
    disabled?: boolean
    name?: string
    border?: boolean
    size?: string
  },
  { change?: UIEvent },
  { default?: { aSlot: string } }
> {}
