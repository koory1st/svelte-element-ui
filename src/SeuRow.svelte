<script>
  import { styled, css, themeGet } from 'svelte-styled-system';
  import { setContext } from 'svelte';
  export let gutter;
  export let type;
  export let justify = 'start';
  export let align = 'top';
  let style;
  let classJustify = justify !== 'start' ? `is-justify-${justify}` : false;
  let classAlign = align !== 'top' ? `is-align-${align}` : false;

  setContext('$_seu_row_gutter', gutter);
  let styles = '';
  $: {
    style = {};
    if (gutter) {
      style.marginLeft = `-${gutter / 2}px`;
      style.marginRight = style.marginLeft;
    }
  }
  $: classString = getClassString`$$props`;

  function getClassString() {
    let rt = '';
    rt += 'position: relative;';
    rt += 'box-sizing: border-box;';
    rt += type ? 'display: flex;' : '';
    rt += getMarginLeftRight();

    return css(rt);
  }

  function getMarginLeftRight() {
    let rt = '';
    if (!gutter) {
      return '';
    }

    rt += `margin-left: -${gutter / 2}px;`;
    rt += `margin-right: -${gutter / 2}px;`;
    return rt;
  }
</script>

<div class={classString} alignItems="center">
  <slot {gutter} />
</div>
