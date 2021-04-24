<script lang="ts">
  import a2s from '../util/array2string/Array2String'
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
