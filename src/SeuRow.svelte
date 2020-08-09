<script>
  import { css } from 'SvelteStyledSystem';
  import { setContext } from 'svelte';
  export let gutter;
  export let type;
  export let justify = 'start';
  export let align = 'top';
  let classJustify = justify !== 'start' ? `is-justify-${justify}` : false;
  let classAlign = align !== 'top' ? `is-align-${align}` : false;

  setContext('$_seu_row_gutter', gutter);

  $: classString = getClassString`$$props`;

  function getClassString() {
    let rt = '';
    rt += 'position: relative;';
    rt += 'box-sizing: border-box;';
    rt += `&::before, &::after {
      display: table;
      content: "";
    }
    &::after {
      clear: both;
    }`;
    rt += type ? 'display: flex;' : '';
    rt += getJustifyContent();
    rt += getMarginLeftRight();

    return css(rt);
  }

  function getJustifyContent() {
    if (!justify || justify === 'start') {
      return '';
    }

    if (justify === 'end') {
      return 'justify-content: flex-end;';
    }

    return `justify-content: ${justify};`;
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

<div class="seu-row {classString}" alignItems="center">
  <slot {gutter} />
</div>
