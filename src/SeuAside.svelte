<script>
  export let width = '300px'
</script>

<style type="text/scss">
  @import 'mixins/mixins';

  @include b(aside) {
    overflow: auto;
    box-sizing: border-box;
    flex-shrink: 0;
  }
</style>

<aside class="seu-aside" style="width:{width}">
  <slot />
</aside>
