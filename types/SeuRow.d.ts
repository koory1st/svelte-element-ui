import type { SvelteComponentTyped } from 'svelte'
import { IChangeEvent, IGutterProp, ITypeProp, IJustifyProp, IAlignProp } from './Types'

interface IProps extends IGutterProp, ITypeProp, IJustifyProp, IAlignProp {}

export class SeuRow extends SvelteComponentTyped<IProps> {}
