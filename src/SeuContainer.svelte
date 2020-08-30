<script type="ts">
  export let direction = 'horizontal'

  let classList = ['seu-container', $$props['class']]
  let style: string

  $: {
    if (direction === 'vertical') {
      style = `--direction:column`
    } else if (direction === 'horizontal') {
      style = `--direction:row`
    }
  }
</script>

<section class={classList.join(' ')} {style}>
  <slot />
</section>
