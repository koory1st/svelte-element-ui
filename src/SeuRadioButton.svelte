<script type="ts">
  import { styleStr2Array, styleArray2Str, classStr2Array, classArray2Str } from './util/StringUtil'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  export let value: string | number
  export let label: string | number
  export let disabled: boolean = false
  export let name: string
  export let size: string
  let isFocus = false

  let classList = ['seu-radio-button', ...classStr2Array($$props['class'])]

  let styleList = styleStr2Array($$props['style'])

  $: isChecked = value === label ? true : null
  $: isDisabled = disabled ? disabled : null
  $: tabindex = isDisabled || value !== label ? -1 : 0

  size && classList.push(`seu-radio-button--${size}`)
  value === label && classList.push(`is-active`)
  $: isDisabled && classList.push(`is-disabled`)
  $: isFocus && classList.push(`is-focus`)

  function handleKeydown(event: KeyboardEvent) {
    if (event.code !== 'Space') {
      return
    }

    value = isDisabled ? value : label
    event.stopPropagation()
    event.preventDefault()
  }

  function handleChange() {
    dispatch('change', { value, label })
  }
</script>

<label
  role="radio"
  class={classArray2Str(classList)}
  {tabindex}
  aria-disabled={isDisabled}
  aria-checked={isChecked}
  style={styleArray2Str(styleList)}
  on:keydown={handleKeydown}>
  <input
    class="seu-radio-button__orig-radio"
    type="radio"
    value={label}
    bind:group={value}
    aria-hidden="true"
    {name}
    disabled={isDisabled}
    tabindex="-1"
    on:focus={() => (isFocus = true)}
    on:blur={() => (isFocus = false)}
    on:change={handleChange} />
  <span class="seu-radio-button__inner" on:keydown|stopPropagation>
    <slot />
    {#if !$$slots.default}{label}{/if}
  </span>
</label>
