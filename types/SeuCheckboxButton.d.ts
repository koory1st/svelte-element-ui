import type { SvelteComponentTyped } from 'svelte'
export class SeuCheckboxButton extends SvelteComponentTyped<
  {
    group?: Array<string | number | boolean>
    value?: boolean | string | number
    label?: string | number | boolean
    disabled?: boolean
    name?: string
    size?: string
    checkedValue?: string | number | boolean
    uncheckedValue?: string | number | boolean
  },
  { change?: UIEvent },
  { default?: { aSlot: string } }
> {}
