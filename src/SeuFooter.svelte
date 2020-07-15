<script>
  import { css } from 'svelte-styled-system';
  export let height = '60px';
  $: classString = getClassString`$$props`;
  function getClassString() {
    return css(`height:${height};`);
  }
</script>

<footer class="seu-footer {classString}">
  <slot />
</footer>
