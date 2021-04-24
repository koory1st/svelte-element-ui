<script lang="ts">
  import { array2string as a2s } from 'array2string'
  /**
   * layout direction for child elements
   * Accepted Values: horizontal / vertical
   * default: horizontal
   */
  export let direction = 'horizontal'
  $: classString = a2s(['seu-container', ['is-vertical', direction === 'vertical']])
</script>

<section class={classString}>
  <slot />
</section>
