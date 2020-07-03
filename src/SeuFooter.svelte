<script>
  export let height = '60px';
</script>

<style>
  .seu-footer {
    box-sizing: border-box;
    padding: 0 20px;
    flex-shrink: 0;
  }
</style>

<footer class="seu-footer" style="height:{height}">
  <slot />
</footer>
