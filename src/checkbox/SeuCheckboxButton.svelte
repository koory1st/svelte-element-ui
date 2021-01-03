<script type="ts">
  import { classArray2Str } from '../util/StringUtil'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  export let group: Array<string | number>
  export let value: boolean | string | number = false
  export let label: string | number | boolean | null | undefined
  export let disabled: boolean = false
  export let name: string
  export let size: string
  export let checkedValue: string | number
  export let uncheckedValue: string | number

  let componentLabel: string = ''
  // label is only valid in group
  $: if (group && label) {
    if (typeof label === 'string') {
      componentLabel = label
    } else if (typeof label === 'number' || typeof label === 'boolean') {
      componentLabel = String(label)
    }
  }

  let innerChecked: boolean

  let isFocus = false

  let classList = ['seu-checkbox-button']

  if (size) {
    classList.push(`seu-checkbox-button--${size}`)
  }

  $: {
    if (group) updateChekbox(group)
  }
  $: updateGroup(innerChecked)

  $: getInnerChecked(value, checkedValue)

  function getInnerChecked(value: boolean | string | number, checkedValue: string | number) {
    if (typeof value === 'boolean') {
      innerChecked = value
      return
    }

    if (checkedValue === null || checkedValue === undefined) {
      return
    }

    innerChecked = checkedValue === value
  }

  function updateChekbox(group: Array<string | number>) {
    value = group.indexOf(componentLabel) >= 0
  }

  function updateGroup(checked: boolean) {
    if (!group) {
      return
    }
    const index = group.indexOf(componentLabel)
    if (checked) {
      if (index < 0) {
        group.push(componentLabel)
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

    // value = isDisabled ? value : label
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
    innerChecked = target.checked
    dispatch('change', value)
  }
</script>

<label
  role="checkbox"
  class={classArray2Str(classList)}
  class:is-checked={innerChecked}
  class:is-disabled={disabled}
  class:is-focus={isFocus}
  aria-disabled={disabled}
  on:keydown={handleKeydown}>
  <input
    class="seu-checkbox-button__original"
    type="checkbox"
    bind:checked={innerChecked}
    value={componentLabel}
    {name}
    {disabled}
    on:focus={() => (isFocus = true)}
    on:blur={() => (isFocus = false)}
    on:change={handleChange} />
  <span class="seu-checkbox-button__inner">
    {#if $$slots.default}
      <slot />
    {:else}{componentLabel}{/if}
  </span>
</label>
