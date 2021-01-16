<script type="ts">
  import { getClass } from '../util/StringUtil'
  export let type = 'default'
  export let size = ''
  export let icon = ''
  export let nativeType = 'button'
  export let disabled = false
  export let loading = false
  export let plain = false
  export let round = false
  export let circle = false

  $: classString = getClass([
    'seu-button',
    `seu-button--${type || 'default'}`,
    [`is-disabled`, disabled],
    [`is-plain`, plain],
    [`is-round`, round],
    [`is-circle`, circle],
    [`seu-button--${size}`, Boolean(size)],
    ['is-loading', loading],
  ])
</script>

<button class={classString} type={nativeType} disabled={disabled || loading} on:click>
  {#if loading}<i class="seu-icon-loading" />{/if}
  {#if icon && !loading}<i class={icon} />{/if}
  {#if $$slots.default}
    <span>
      <slot />
    </span>
  {/if}
</button>
