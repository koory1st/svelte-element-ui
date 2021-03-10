import type { SvelteComponentTyped } from 'svelte'

import {
  IIndexProp,
  IShowTimeoutProp,
  IHideTimeoutProp,
  IPopperClassProp,
  IDisabledProp,
  IPopperAppendToBodyProp,
} from './Types'

export class SeuSubmenu extends SvelteComponentTyped<
  IIndexProp,
  IShowTimeoutProp,
  IHideTimeoutProp,
  IPopperClassProp,
  IDisabledProp,
  IPopperAppendToBodyProp
> {}
