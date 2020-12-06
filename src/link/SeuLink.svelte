<script type="ts">
  import { classArray2Str } from '../util/StringUtil'
  import { createEventDispatcher } from 'svelte'
  export let type = 'default'
  export let underline = true
  export let disabled = false
  export let href = ''
  export let icon = ''

  let classList = ['seu-link']

  $: if (!type) {
    type = 'default'
  }
  $: classList.push(`seu-link--${type}`)
  $: disabled && classList.push(`is-disabled`)
  $: underline && !disabled && classList.push(`is-underline`)

  const dispatch = createEventDispatcher()
  function handleClick(event: Event) {
    if (disabled || href) {
      return
    }
    dispatch('click', event)
  }
</script>

<a
  class={classArray2Str(classList)}
  href={disabled ? null : href ? href : null}
  {...$$restProps}
  on:click={handleClick}>
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
