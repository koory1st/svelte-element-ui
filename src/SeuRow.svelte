<script type="ts">
  import { styleArray2Str, classArray2Str } from './util/StringUtil'
  export let gutter = 0
  export let type = ''
  export let justify = 'start'
  export let align = 'top'

  let classList = ['seu-row']
  let styleList = []

  if (justify && justify !== 'start') {
    classList.push(`is-justify-${justify}`)
  }

  if (align && align !== 'top') {
    classList.push(`is-align-${align}`)
  }

  if (type === 'flex') {
    classList.push('seu-row--flex')
  }
  $: if (gutter) {
    const value = `-${gutter / 2}px`
    styleList.push(`margin-left:${value}`)
    styleList.push(`margin-right:${value}`)
  }
</script>

<div class={classArray2Str(classList)} style={styleArray2Str(styleList)}>
  <slot {gutter} />
</div>
