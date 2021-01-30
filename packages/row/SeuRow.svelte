<script type="ts">
  import { setContext } from 'svelte'
  import { array2string as a2s, array2StyleString as a2st } from 'array2string'
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
  ])

  $: style = a2st([
    ['margin-left', -gutter / 2, Boolean(gutter)],
    ['margin-right', -gutter / 2, Boolean(gutter)],
  ])
</script>

<div class={classString} {style}>
  <slot {gutter} />
</div>
