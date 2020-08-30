<script type="ts">
  export let width = '300px'
  let classList = ['seu-aside', $$props['class']]
  $: style = `--width:${width}`
</script>

<aside class={classList.join(' ')} {style}>
  <slot />
</aside>
