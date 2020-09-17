<script type="ts">
  import { styleStr2Array, styleArray2Str, classStr2Array, classArray2Str } from './util/StringUtil'

  let classList = ['seu-aside', ...classStr2Array($$props['class'])]

  export let width = '300px'
  $: styleList = [...styleStr2Array($$props['style']), `width:${width}`]
</script>

<aside class={classArray2Str(classList)} style={styleArray2Str(styleList)}>
  <slot />
</aside>
