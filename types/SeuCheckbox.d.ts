import type { SvelteComponentTyped } from 'svelte'
import {
  IChangeEvent,
  IGroupProp,
  IValueProp,
  ILabelProp,
  IIndeterminateProp,
  IDisabledProp,
  INameProp,
  IBorderProp,
  ISizeProp,
  ICheckedValueProp,
  IUnCheckedValueProp,
} from './Types'

interface IProps
  extends IGroupProp,
    IValueProp,
    ILabelProp,
    IIndeterminateProp,
    IDisabledProp,
    INameProp,
    IBorderProp,
    ISizeProp,
    ICheckedValueProp,
    IUnCheckedValueProp {}

export class SeuCheckbox extends SvelteComponentTyped<IProps, IChangeEvent> {}
