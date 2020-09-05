<script type="ts">
  import { styleStr2Array, styleArray2Str, classStr2Array, classArray2Str } from './util/StringUtil'

  let classList = ['seu-header', ...classStr2Array($$props['class'])]

  export let height = '60px'
  $: styleList = [`--height:${height}`, ...styleStr2Array($$props['style'])]
</script>

<header class={classArray2Str(classList)} style={styleArray2Str(styleList)}>
  <slot />
</header>
