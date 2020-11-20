<script type="ts">
  import { styleStr2Array, styleArray2Str, classStr2Array, classArray2Str } from './util/StringUtil'

  export let height = '60px'
  let styleList = [...styleStr2Array($$props['style']), `height:${height}`]
  let classList = ['seu-footer', ...classStr2Array($$props['class'])]
</script>

<footer class={classArray2Str(classList)} style={styleArray2Str(styleList)}>
  <slot />
</footer>
