<script type="ts">
  export let height = '60px'
  let classList = ['seu-footer', $$props['class']]
  $: style = `--height:${height}`
</script>

<footer class={classList.join(' ')} {style}>
  <slot />
</footer>
