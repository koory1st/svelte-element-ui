<script type="ts">
  export let type = 'default'
  export let size: string
  export let icon = ''
  export let nativeType = 'button'
  export let disabled: boolean
  export let loading: boolean
  export let plain: boolean
  export let round: boolean
  export let circle: boolean

  let classList = ['seu-button']

  $: {
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
  }
</script>

<button class={classList.join(' ')} type={nativeType} disabled={disabled || loading} on:click>
  {#if loading}
    <i class="seu-icon-loading" />
  {/if}

  {#if icon && !loading}
    <i class={icon} />
  {/if}
  <span>
    <slot />
  </span>
</button>
