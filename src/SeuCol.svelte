<script type="ts">
  import { styleStr2Array, styleArray2Str, classStr2Array, classArray2Str } from './util/StringUtil'
  import { getContext } from 'svelte'

  export let span = 24
  export let offset = 0
  export let pull = 0
  export let push = 0
  let gutter: number = getContext('$_seu_row_gutter')
  export let xs = 0
  export let sm = 0
  export let md = 0
  export let lg = 0
  export let xl = 0

  let classList = ['seu-col', ...classStr2Array($$props['class'])]
  let styleList = styleStr2Array($$props['style'])

  classList.push(`seu-col-${span}`)
  offset && classList.push(`seu-col-offset-${offset}`)
  pull && classList.push(`seu-col-pull-${pull}`)
  push && classList.push(`seu-col-push-${push}`)
  xs && classList.push(`seu-col-xs-${xs}`)
  sm && classList.push(`seu-col-sm-${sm}`)
  md && classList.push(`seu-col-md-${md}`)
  lg && classList.push(`seu-col-lg-${lg}`)
  xl && classList.push(`seu-col-xl-${xl}`)

  if (gutter) {
    const value = `${gutter / 2}px`
    styleList.push(`padding-left:${value}`)
    styleList.push(`padding-right:${value}`)
  }
</script>

<div class={classArray2Str(classList)} style={styleArray2Str(styleList)}>
  <slot />
</div>
