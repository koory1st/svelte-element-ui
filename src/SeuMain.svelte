<script type="ts">
  import { styleStr2Array, styleArray2Str, classStr2Array, classArray2Str } from './util/StringUtil'

  let classList = ['seu-main', ...classStr2Array($$props['class'])]

  let styleList = styleStr2Array($$props['style'])
</script>

<main class={classArray2Str(classList)} style={styleArray2Str(styleList)}>
  <slot />
</main>
