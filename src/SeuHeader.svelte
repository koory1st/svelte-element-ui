<script>
  export let height = 60;
</script>

<style>
  .seu-header {
    padding: 0 20px;
    box-sizing: border-box;
    flex-shrink: 0;
  }
</style>

<header class="seu-header" style="height:{height}px">
  <slot />
</header>
