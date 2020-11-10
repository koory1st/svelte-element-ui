<script type="ts">
  import { styleStr2Array, styleArray2Str, classStr2Array, classArray2Str } from './util/StringUtil'
  /**
   * layout direction for child elements
   * Accepted Values: horizontal / vertical
   * default: horizontal
   */
  export let direction = 'horizontal'

  let classList = ['seu-container', ...classStr2Array($$props['class'])]
  let styleList = styleStr2Array($$props['style'])

  if (direction === 'vertical') {
    classList.push(`is-vertical`)
  }
</script>

<section class={classArray2Str(classList)} style={styleArray2Str(styleList)}>
  <slot />
</section>
