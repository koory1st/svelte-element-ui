import type { SvelteComponentTyped } from 'svelte'
import {
  IChangeEvent,
  IValueProp,
  IResizeProp,
  IDisabledProp,
  ISizeProp,
  IReadonlyProp,
  ITypeProp,
  IAutocompleteProp,
  IAutosizeProp,
  IValidateEventProp,
  ISuffixIconProp,
  IprefixIconProp,
  IinputLabelProp,
  IclearableProp,
  IshowPasswordProp,
  IshowWordLimitProp,
  ItabindexProp,
  ImaxlengthProp,
  IplaceholderProp,
} from './Types'

interface IProps
  extends IValueProp,
    ISizeProp,
    IResizeProp,
    IDisabledProp,
    IReadonlyProp,
    ITypeProp,
    IAutocompleteProp,
    IAutosizeProp,
    IValidateEventProp,
    ISuffixIconProp,
    IprefixIconProp,
    IinputLabelProp,
    IclearableProp,
    IshowPasswordProp,
    IshowWordLimitProp,
    ItabindexProp,
    ImaxlengthProp,
    IplaceholderProp {}

interface Ievent extends IChangeEvent {}

export class SeuInput extends SvelteComponentTyped<IProps, Ievent> {}
