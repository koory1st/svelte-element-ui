import type { SvelteComponentTyped } from 'svelte'
import {
  IChangeEvent,
  IValueProp,
  IOptionsProp,
  IBorderProp,
  ISizeProp,
  IDisabledProp,
  ITypeProp,
  INameProp,
} from './Types'

interface IProps extends IValueProp, IOptionsProp, IBorderProp, ISizeProp, IDisabledProp, ITypeProp, INameProp {}

export class SeuRadioGroup extends SvelteComponentTyped<IProps, IChangeEvent> {}
