<style type="text/scss">
  @import 'mixins/mixins';
  @import 'common/var';

  @include b(main) {
    // IE11 supports the <main> element partially https://caniuse.com/#search=main
    display: block;
    flex: 1;
    flex-basis: auto;
    overflow: auto;
    box-sizing: border-box;
    padding: $--main-padding;
  }
</style>

<main class="seu-main">
  <slot />
</main>
