import type { SvelteComponentTyped } from 'svelte'
import { IChangeEvent, IValueProp, ILabelProp, IDisabledProp, INameProp, ISizeProp } from './Types'

interface IProps extends IValueProp, ILabelProp, IDisabledProp, INameProp, ISizeProp {}

export class SeuRadioButton extends SvelteComponentTyped<IProps, IChangeEvent> {}
