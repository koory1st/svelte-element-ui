<script>
  import { css } from 'SvelteStyledSystem';
  export let direction;
  $: classString = getClassString`$$props`;
  function getClassString() {
    let rt = '';
    rt += 'box-sizing: border-box;';
    rt += 'display: flex;';
    if (direction === 'vertical') {
      rt += 'flex-direction: column;';
    } else if (direction === 'horizontal') {
      rt += 'flex-direction: row;';
    }
    rt += 'flex: 1;';
    rt += 'flex-basis: auto;';
    rt += 'min-width: 0;';
    return css(rt);
  }
</script>

<section class="seu-container {classString}">
  <slot />
</section>
