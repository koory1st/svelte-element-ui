<script type="ts">
  import { getClass } from '../util/StringUtil'
  /**
   * layout direction for child elements
   * Accepted Values: horizontal / vertical
   * default: horizontal
   */
  export let direction = 'horizontal'
  $: classString = getClass(['seu-container', ['is-vertical', direction === 'vertical']])
</script>

<section class={classString}>
  <slot />
</section>
