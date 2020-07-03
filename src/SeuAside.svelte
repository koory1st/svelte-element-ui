<script>
  export let width = '300px';
</script>

<style>
  .seu-aside {
    box-sizing: border-box;
    overflow: auto;
    flex-shrink: 0;
  }
</style>

<aside class="seu-aside" style="width:{width}">
  <slot />
</aside>
