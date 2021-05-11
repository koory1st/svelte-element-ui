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

interface IProps
  extends IModeProp,
    IDefaultActiveProp,
    IDefaultOpenedsProp,
    IUniqueOpenedProp,
    IMenuTriggerProp,
    ICollapseProp,
    IBackgroundColorProp,
    ITextColorProp,
    IActiveTextColorProp,
    ICollapseTransitionProp,
    IPopperZIndexProp {}

export class SeuMenu extends SvelteComponentTyped<IProps> {}
