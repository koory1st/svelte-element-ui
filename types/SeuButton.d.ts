import type { SvelteComponentTyped } from 'svelte'
export class SeuButton extends SvelteComponentTyped<
  {
    type?: string
    size?: string
    icon?: string
    nativeType?: string
    disabled?: boolean
    loading?: boolean
    plain?: boolean
    round?: boolean
    circle?: boolean
  },
  { click?: MouseEvent },
  { default?: { aSlot: string } }
> {}
