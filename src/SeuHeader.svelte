<script type="ts">
  import { styleStr2Array, styleArray2Str, classStr2Array, classArray2Str } from './util/StringUtil'

  export let height = '60px'
  $: styleList = [...styleStr2Array($$props['style']), `height:${height}`]
  let classList = ['seu-header', ...classStr2Array($$props['class'])]
</script>

<header class={classArray2Str(classList)} style={styleArray2Str(styleList)}>
  <slot />
</header>
