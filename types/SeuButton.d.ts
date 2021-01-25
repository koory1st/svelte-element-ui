import type { SvelteComponentTyped } from 'svelte'
import {
  IClickEvent,
  ITypeProp,
  ISizeProp,
  IIconProp,
  INativeTypeProp,
  IDisabledProp,
  ILoadingProp,
  IPlainProp,
  IRoundProp,
  ICircleProp,
} from './Types'

interface IProps
  extends ITypeProp,
    ISizeProp,
    IIconProp,
    INativeTypeProp,
    IDisabledProp,
    ILoadingProp,
    IPlainProp,
    IRoundProp,
    ICircleProp {}

export class SeuButton extends SvelteComponentTyped<IProps, IClickEvent> {}
