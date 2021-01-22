import type { SvelteComponentTyped } from 'svelte'
export class SeuRadioButton extends SvelteComponentTyped<{
  value?: boolean | string | number
  label?: string | number | boolean
  disabled?: boolean
  name?: string
  size?: string
}> {}
