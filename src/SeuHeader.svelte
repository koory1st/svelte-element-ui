<script>
  export let height = '60px';
</script>

<style>
  .seu-header {
    box-sizing: border-box;
    padding: 0 20px;
    flex-shrink: 0;
  }
</style>

<header class="seu-header" style="height:{height}">
  <slot />
</header>
