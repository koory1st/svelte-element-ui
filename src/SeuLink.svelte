<script type="ts">
  import { styleStr2Array, styleArray2Str, classStr2Array, classArray2Str } from './util/StringUtil'
  import { createEventDispatcher } from 'svelte'
  export let type = 'default'
  export let underline = true
  export let disabled = false
  export let href: string
  export let icon: string

  let classList = ['seu-link', ...classStr2Array($$props['class'])]

  if (!type) {
    type = 'default'
  }
  classList.push(`seu-link--${type}`)
  disabled && classList.push(`is-disabled`)
  underline && !disabled && classList.push(`is-underline`)

  let styleList = styleStr2Array($$props['style'])

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
  style={styleArray2Str(styleList)}
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
