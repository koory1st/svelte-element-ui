<script type="ts">
  export let height = '60px'
  let classList = ['seu-header', $$props['class']]
  $: style = `--height:${height}`
</script>

<header class={classList.join(' ')} {style}>
  <slot />
</header>
