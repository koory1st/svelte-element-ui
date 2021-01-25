import type { SvelteComponentTyped } from 'svelte'
import { IChangeEvent, IOptionsProp, IGroupProp, IBorderProp, ISizeProp, IDisabledProp, ITypeProp } from './Types'

interface IProps extends IOptionsProp, IGroupProp, IBorderProp, ISizeProp, IDisabledProp, ITypeProp {}

export class SeuCheckboxGroup extends SvelteComponentTyped<IProps, IChangeEvent> {}
