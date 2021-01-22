import type { SvelteComponentTyped } from 'svelte'
export class SeuCheckbox extends SvelteComponentTyped<{
  group?: Array<string | number | boolean>
  value?: boolean | string | number
  label?: string | number | boolean
  indeterminate?: boolean
  disabled?: boolean
  name?: string
  border?: boolean
  size?: string
  checkedValue?: string | number | boolean
  uncheckedValue?: string | number | boolean
}> {}
