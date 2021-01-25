import type { SvelteComponentTyped } from 'svelte'
import { IChangeEvent, ITypeProp, IUnderlineProp, IDisabledProp, IHrefProp, IIconProp } from './Types'

interface IProps extends ITypeProp, IUnderlineProp, IDisabledProp, IHrefProp, IIconProp {}

export class SeuLink extends SvelteComponentTyped<IProps, IChangeEvent> {}
