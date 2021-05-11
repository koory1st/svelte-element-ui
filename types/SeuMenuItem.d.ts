import type { SvelteComponentTyped } from 'svelte'

import { IDisabledProp, IIndexProp } from './Types'

interface IProps extends IDisabledProp, IIndexProp {}

export class SeuMenuItem extends SvelteComponentTyped<IProps> {}
