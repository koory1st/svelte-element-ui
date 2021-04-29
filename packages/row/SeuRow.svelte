<script lang="ts">
  import { setContext } from 'svelte'
  import a2s from '../util/array2string/Array2String'
  import a2st from '../util/array2string/Array2StyleString'
  export let gutter = 0
  export let type = ''
  export let justify = 'start'
  export let align = 'top'

  setContext('seuRowGutter', gutter)

  $: classString = a2s([
    'seu-row',
    [`is-justify-${justify}`, justify && justify !== 'start'],
    [`is-align-${align}`, align && align !== 'top'],
    ['seu-row--flex', type === 'flex'],
    $$props.class,
  ])

  $: style = a2st([
    ['margin-left', -gutter / 2, Boolean(gutter)],
    ['margin-right', -gutter / 2, Boolean(gutter)],
  ])
</script>

<div class={classString} {style}>
  <slot {gutter} />
</div>
