<script type="ts">
  /**
   * layout direction for child elements
   * Accepted Values: horizontal / vertical
   * default: horizontal
   */
  export let direction = 'horizontal'
</script>

<section class="seu-container" class:is-vertical={direction === 'vertical'}>
  <slot />
</section>
