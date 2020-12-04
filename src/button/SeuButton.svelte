<script type="ts">
  export let type = 'default'
  export let size = ''
  export let icon = ''
  export let nativeType = 'button'
  export let disabled = false
  export let loading = false
  export let plain = false
  export let round = false
  export let circle = false

  let classList = ['seu-button']

  if (disabled) {
    classList.push('is-disabled')
  }

  if (plain) {
    classList.push('is-plain')
  }

  classList.push(`seu-button--${type || 'default'}`)

  if (round) {
    classList.push('is-round')
  }

  if (circle) {
    classList.push('is-circle')
  }

  if (size) {
    classList.push(`seu-button--${size}`)
  }

  if (loading) {
    classList.push('is-loading')
  }
</script>

<button class={classList.join(' ')} type={nativeType} disabled={disabled || loading} on:click>
  {#if loading}<i class="seu-icon-loading" />{/if}

  {#if icon && !loading}<i class={icon} />{/if}
  {#if $$slots.default}
    <span>
      <slot />
    </span>
  {/if}
</button>
