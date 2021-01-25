import type { SvelteComponentTyped } from 'svelte'
import { ISpanProp, IOffsetProp, IPullProp, IPushProp, IXsProp, ISmProp, IMdProp, ILgProp, IXlProp } from './Types'

interface IProps extends ISpanProp, IOffsetProp, IPullProp, IPushProp, IXsProp, ISmProp, IMdProp, ILgProp, IXlProp {}

export class SeuCol extends SvelteComponentTyped<IProps> {}
