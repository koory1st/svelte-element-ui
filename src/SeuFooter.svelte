<script>
  export let height = '60px';
</script>

<style>
  .seu-footer {
    padding: 0 20px;
    flex-shrink: 0;
    box-sizing: border-box;
  }
</style>

<footer class="seu-footer" style="height:{height}">
  <slot />
</footer>
