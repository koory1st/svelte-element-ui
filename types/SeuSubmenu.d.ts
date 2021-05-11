import type { SvelteComponentTyped } from 'svelte'

import {
  IIndexProp,
  IShowTimeoutProp,
  IHideTimeoutProp,
  IPopperClassProp,
  IDisabledProp,
  IPopperAppendToBodyProp,
} from './Types'

interface IProps
  extends IIndexProp,
    IShowTimeoutProp,
    IHideTimeoutProp,
    IPopperClassProp,
    IDisabledProp,
    IPopperAppendToBodyProp {}

export class SeuSubmenu extends SvelteComponentTyped<IProps> {}
