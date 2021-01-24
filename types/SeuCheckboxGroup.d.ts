import type { SvelteComponentTyped } from 'svelte'
export class SeuCheckboxGroup extends SvelteComponentTyped<
  {
    options?: Array<string | { label: string; value: string | number | boolean; disabled?: boolean }>
    group?: Array<string | number | boolean>
    border?: boolean
    size?: string
    disabled?: boolean
    type?: string
  },
  { change?: UIEvent },
  { default?: { aSlot: string } }
> {}
