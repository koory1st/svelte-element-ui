<script type="ts">
  import { styleStr2Array, styleArray2Str, classStr2Array, classArray2Str } from './util/StringUtil'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  export let group
  export let value
  export let label = value
  export let disabled: boolean = false
  export let name: string
  export let size: string
  export let checkedValue
  export let uncheckedValue

  let checked

  let isFocus = false

  let classList = ['seu-checkbox-button', ...classStr2Array($$props['class'])]

  let styleList = styleStr2Array($$props['style'])

  if (size) {
    classList.push(`seu-checkbox-button--${size}`)
  }

  $: isDisabled = disabled ? disabled : null

  $: {
    if (group) updateChekbox(group)
  }
  $: updateGroup(checked)

  $: if (
    (checkedValue !== null && checkedValue !== undefined) ||
    (uncheckedValue !== null && uncheckedValue != undefined)
  ) {
    checked = checkedValue === value
  } else {
    checked = value
  }

  function updateChekbox(group) {
    value = group.indexOf(label) >= 0
  }

  function updateGroup(checked) {
    if (!group) {
      return
    }
    const index = group.indexOf(label)
    if (checked) {
      if (index < 0) {
        group.push(label)
        group = group
      }
    } else {
      if (index >= 0) {
        group.splice(index, 1)
        group = group
      }
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.code !== 'Space') {
      return
    }

    event.stopPropagation()
    event.preventDefault()
  }

  function handleChange({ target }) {
    if (
      (checkedValue !== null && checkedValue !== undefined) ||
      (uncheckedValue !== null && uncheckedValue != undefined)
    ) {
      value = target.checked ? checkedValue : uncheckedValue
    } else {
      value = target.checked
    }
    checked = target.checked
    dispatch('change', value)
  }
</script>

<label
  role="checkbox"
  class={classArray2Str(classList)}
  class:is-checked={checked}
  class:is-disabled={isDisabled}
  class:is-focus={isFocus}
  aria-disabled={isDisabled}
  style={styleArray2Str(styleList)}
  on:keydown={handleKeydown}>
  <input
    class="seu-checkbox-button__original"
    type="checkbox"
    bind:checked
    value={label}
    {name}
    disabled={isDisabled}
    on:focus={() => (isFocus = true)}
    on:blur={() => (isFocus = false)}
    on:change={handleChange} />
  <span class="seu-checkbox-button__inner">
    {#if $$slots.default}
      <slot />
    {:else}{label}{/if}
  </span>
</label>
