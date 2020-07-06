<script>
  export let height = '60px'
</script>

<style type="text/scss">
  @import 'mixins/mixins';
  @import 'common/var';

  @include b(header) {
    padding: $--header-padding;
    box-sizing: border-box;
    flex-shrink: 0;
  }
</style>

<header class="seu-header" style="height:{height}">
  <slot />
</header>
