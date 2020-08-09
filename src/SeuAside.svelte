<script>
  import { css } from 'SvelteStyledSystem';
  export let width = '300px';
  $: classString = getClassString`$$props`;
  function getClassString() {
    return css(`width:${width};`);
  }
</script>

<aside class="seu-aside {classString}">
  <slot />
</aside>
