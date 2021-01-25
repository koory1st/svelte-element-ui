import type { SvelteComponentTyped } from 'svelte'
import {
  IChangeEvent,
  IGroupProp,
  IValueProp,
  ILabelProp,
  IDisabledProp,
  INameProp,
  ISizeProp,
  ICheckedValueProp,
  IUnCheckedValueProp,
} from './Types'

interface IProps
  extends IGroupProp,
    IValueProp,
    ILabelProp,
    IDisabledProp,
    INameProp,
    ISizeProp,
    ICheckedValueProp,
    IUnCheckedValueProp {}

export class SeuCheckboxButton extends SvelteComponentTyped<IProps, IChangeEvent> {}
