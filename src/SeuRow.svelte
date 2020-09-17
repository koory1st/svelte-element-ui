<script type="ts">
  import { styleStr2Array, styleArray2Str, classStr2Array, classArray2Str } from './util/StringUtil'
  import { setContext } from 'svelte'
  export let gutter = 0
  export let type: string
  export let justify = 'start'
  export let align = 'top'

  let classList = ['seu-row', ...classStr2Array($$props['class'])]
  let styleList = styleStr2Array($$props['style'])

  $: {
    if (justify && justify !== 'start') {
      classList.push(`is-justify-${justify}`)
    }

    if (align && align !== 'top') {
      classList.push(`is-align-${align}`)
    }

    if (type === 'flex') {
      classList.push('seu-row--flex')
    }

    if (gutter) {
      const value = `-${gutter / 2}px`
      styleList.push(`margin-left:${value}`)
      styleList.push(`margin-right:${value}`)
    }
  }

  setContext('$_seu_row_gutter', gutter)
</script>

<div class={classArray2Str(classList)} style={styleArray2Str(styleList)}>
  <slot {gutter} />
</div>
