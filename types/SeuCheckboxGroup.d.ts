import type { SvelteComponentTyped } from 'svelte'
import { IChangeEvent, IOptionsProp, IGroupProp, IBorderProp, ISizeProp, IDisabledProp, ITypeProp, IMaxProp, IMinProp } from './Types'

interface IProps extends IOptionsProp, IGroupProp, IBorderProp, ISizeProp, IDisabledProp, ITypeProp, IMaxProp, IMinProp {}

export class SeuCheckboxGroup extends SvelteComponentTyped<IProps, IChangeEvent> {}
