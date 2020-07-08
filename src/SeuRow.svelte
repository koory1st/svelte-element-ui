<script>
  import { styled, css, themeGet } from 'svelte-styled-system';
  export let gutter;
  export let type;
  export let justify = 'start';
  export let align = 'top';
  let style;
  let classJustify = justify !== 'start' ? `is-justify-${justify}` : false;
  let classAlign = align !== 'top' ? `is-align-${align}` : false;
  let classType = type === 'flex' ? 'seu-row--flex' : false;

  let styles = '';
  $: {
    style = {};
    if (gutter) {
      style.marginLeft = `-${gutter / 2}px`;
      style.marginRight = style.marginLeft;
    }
  }
  styles = css`
    background-color: red;
  `;
</script>

<div
  class="seu-row {styles}"
  class:classJustify
  class:classAlign
  class:classType
  style="marginLeft:{style.marginLeft} marginRight:{style.marginRight}">
  <slot />
</div>
