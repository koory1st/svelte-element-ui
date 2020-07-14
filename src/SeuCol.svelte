<script>
  import { css, styled } from 'svelte-styled-system';
  import { getContext } from 'svelte';
  import { theme } from './theme.js';

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

  let scales = [xs, sm, md, lg, xl];

  let width = (span / 24) * 100;
  $: themeInner = {
    ...$theme,
    width: {
      xs: `${xs ? (+xs / 24) * 100 : width}%`,
      sm: `${sm ? (+xs / 24) * 100 : width}%`,
      md: `${md ? (+md / 24) * 100 : width}%`,
      lg: `${lg ? (+lg / 24) * 100 : width}%`,
      xl: `${xl ? (+xl / 24) * 100 : width}%`,
    },
  };

  console.log($$props);

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

    let rt = '';
    rt += `width: ${width}%;`;
    return rt;
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

<div class="seu-col {classString}" use:styled={[{ width: ['width.xs', 'width.sm', null, 'width.lg'] }, themeInner]}>
  <slot />
</div>
