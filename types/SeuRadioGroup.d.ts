import type { SvelteComponentTyped } from 'svelte'
export class SeuRadioGroup extends SvelteComponentTyped<
  {
    value?: boolean | string | number
    options?: Array<string | { label: string; value: string | number | boolean; disabled?: boolean }>
    border?: boolean
    size?: string
    disabled?: boolean
    type?: string
    name?: string
  },
  { change?: UIEvent },
  { default?: { aSlot: string } }
> {}
