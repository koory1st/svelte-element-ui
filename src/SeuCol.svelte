<script>
  import { css } from 'svelte-styled-system';
  import { getContext } from 'svelte';

  export let span = 24;
  export let offset;
  export let pull;
  export let push;
  const gutter = getContext('$_seu_row_gutter');
  export let xs;
  export let sm;
  export let md;
  export let lg;
  export let xl;

  $: classString = getClassString`$$props`;

  function getClassString() {
    let rt = '';
    rt += 'float: left;';
    rt += 'box-sizing: border-box;';

    rt += getPaddingLeftRight();
    rt += getWidth();
    rt += offset ? `margin-left: ${(offset / 24) * 100}%;` : '';

    return css(rt);
  }

  function getWidth() {
    if (span === 0) {
      return 'display: none;';
    }
    return `width: ${(span / 24) * 100}%;`;
  }

  function getPaddingLeftRight() {
    let rt = '';
    if (!gutter) {
      return rt;
    }

    rt += `padding-left: ${gutter / 2}px;`;
    rt += `padding-right: ${gutter / 2}px;`;

    return rt;
  }
</script>

<div class="seu-col {classString}">
  <slot />
</div>
