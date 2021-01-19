<script type="ts">
  import { setContext } from 'svelte'
  import { styleArray2Str, getClass } from '../util/StringUtil'
  export let gutter = 0
  export let type = ''
  export let justify = 'start'
  export let align = 'top'

  setContext('seuRowGutter', gutter)

  $: classString = getClass([
    'seu-row',
    [`is-justify-${justify}`, justify && justify !== 'start'],
    [`is-align-${align}`, align && align !== 'top'],
    ['seu-row--flex', type === 'flex'],
  ])

  let styleList = []
  $: if (gutter) {
    const value = `-${gutter / 2}px`
    styleList.push(`margin-left:${value}`)
    styleList.push(`margin-right:${value}`)
  }
</script>

<div class={classString} style={styleArray2Str(styleList)}>
  <slot {gutter} />
</div>
