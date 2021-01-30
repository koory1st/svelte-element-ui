<script type="ts">
  import { array2string as a2s } from 'array2string'
  import { createEventDispatcher } from 'svelte'
  export let type = 'default'
  export let underline = true
  export let disabled = false
  export let href = ''
  export let icon = ''

  $: classString = a2s([
    'seu-link',
    `seu-link--${type}`,
    [`is-disabled`, disabled],
    [`is-underline`, underline && !disabled],
  ])

  const dispatch = createEventDispatcher()
  function handleClick(event: Event) {
    if (disabled || href) {
      return
    }
    dispatch('click', event)
  }
</script>

<a class={classString} href={disabled ? null : href ? href : null} on:click={handleClick}>
  {#if icon}<i class={icon} />{/if}
  {#if $$slots.default}
    <span class="seu-link--inner">
      <slot />
    </span>
  {/if}
  {#if $$slots.icon}
    <slot name="icon" />
  {/if}
</a>
