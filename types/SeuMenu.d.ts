import type { SvelteComponentTyped } from 'svelte'

import {
  IModeProp,
  IDefaultActiveProp,
  IDefaultOpenedsProp,
  IUniqueOpenedProp,
  IMenuTriggerProp,
  ICollapseProp,
  IBackgroundColorProp,
  ITextColorProp,
  IActiveTextColorProp,
  ICollapseTransitionProp,
  IPopperZIndexProp,
} from './Types'

export class SeuMain extends SvelteComponentTyped<
  IModeProp,
  IDefaultActiveProp,
  IDefaultOpenedsProp,
  IUniqueOpenedProp,
  IMenuTriggerProp,
  ICollapseProp,
  IBackgroundColorProp,
  ITextColorProp,
  IActiveTextColorProp,
  ICollapseTransitionProp,
  IPopperZIndexProp
> {}
