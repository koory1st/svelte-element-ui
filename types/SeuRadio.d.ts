import type { SvelteComponentTyped } from 'svelte'
import { IChangeEvent, IValueProp, ILabelProp, IDisabledProp, INameProp, IBorderProp, ISizeProp } from './Types'

interface IProps extends IValueProp, ILabelProp, IDisabledProp, INameProp, IBorderProp, ISizeProp {}

export class SeuRadio extends SvelteComponentTyped<IProps, IChangeEvent> {}
