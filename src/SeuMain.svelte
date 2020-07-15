<script>
  import { css } from 'svelte-styled-system';
  $: classString = getClassString`$$props`;
  function getClassString() {
    let rt = '';
    rt += `
      display: block;
      flex: 1;
      flex-basis: auto;
      overflow: auto;
      box-sizing: border-box;
      padding: 20px;`;
    return css(rt);
  }
</script>

<main class="seu-main {classString}">
  <slot />
</main>
