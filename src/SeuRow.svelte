<script>
  export let gutter
  export let type
  export let justify = 'start'
  export let align = 'top'
  let style
  let classJustify = justify !== 'start' ? `is-justify-${justify}` : false
  let classAlign = align !== 'top' ? `is-align-${align}` : false
  let classType = type === 'flex' ? 'el-row--flex' : false

  $: {
    style = {}
    if (gutter) {
      style.marginLeft = `-${gutter / 2}px`
      style.marginRight = style.marginLeft
    }
  }
</script>

<style type="text/scss">
  @import 'common/var';
  @import 'mixins/mixins';
  @import 'mixins/utils';
  @include b(row) {
    position: relative;
    box-sizing: border-box;
    @include utils-clearfix;

    @include m(flex) {
      display: flex;
      &:before,
      &:after {
        display: none;
      }

      @include when(justify-center) {
        justify-content: center;
      }
      @include when(justify-end) {
        justify-content: flex-end;
      }
      @include when(justify-space-between) {
        justify-content: space-between;
      }
      @include when(justify-space-around) {
        justify-content: space-around;
      }

      @include when(align-middle) {
        align-items: center;
      }
      @include when(align-bottom) {
        align-items: flex-end;
      }
    }
  }
</style>

<div
  class="seu-row"
  class:classJustify
  class:classAlign
  class:classType
  style="marginLeft:{style.marginLeft} marginRight:{style.marginRight}">
  <slot />
</div>
