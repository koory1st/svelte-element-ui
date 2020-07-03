<script>
  export let direction;
  let isVertical = false;
  $: if (direction === 'vertical') {
    isVertical = true;
  } else if (direction === 'horizontal') {
    isVertical = false;
  }
</script>

<style>
  .seu-container {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    min-width: 0;
  }

  .seu-container.is-vertical {
    flex-direction: column;
  }
</style>

<section class="seu-container {isVertical ? 'is-vertical' : ''}">
  <slot />
</section>
