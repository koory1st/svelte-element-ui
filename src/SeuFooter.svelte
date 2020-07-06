<script>
  export let height = '60px'
</script>

<style type="text/scss">
  @import 'mixins/mixins';
  @import 'common/var';

  @include b(footer) {
    padding: $--footer-padding;
    box-sizing: border-box;
    flex-shrink: 0;
  }
</style>

<footer class="seu-footer" style="height:{height}">
  <slot />
</footer>
