<script type="ts">
  import { styleStr2Array, styleArray2Str, classStr2Array, classArray2Str } from '../util/StringUtil'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  export let group
  export let value: boolean = false
  export let label: string | number | boolean | null | undefined
  export let indeterminate: boolean = false
  export let disabled: boolean = false
  export let name: string
  export let border: boolean = false
  export let size: string
  export let checkedValue
  export let uncheckedValue

  let componentLabel: string = ''
  // label is only valid in group
  $: if (group && label) {
    if (typeof label === 'string') {
      componentLabel = label
    } else if (typeof label === 'number' || typeof label === 'boolean') {
      componentLabel = String(label)
    }
  }

  let checked

  let isFocus = false

  let classList = ['seu-checkbox', ...classStr2Array($$props['class'])]

  let styleList = styleStr2Array($$props['style'])

  if (border && size) {
    classList.push(`seu-checkbox--${size}`)
  }

  $: tabindex = indeterminate ? 0 : null
  $: role = indeterminate ? 'checkbox' : null
  $: ariaChecked = indeterminate ? 'mixed' : null

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
    value = group.indexOf(componentLabel) >= 0
  }

  function updateGroup(checked) {
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
    checked = target.checked
    dispatch('change', value)
  }
</script>

<label
  role="checkbox"
  class={classArray2Str(classList)}
  class:is-checked={checked}
  class:is-disabled={disabled}
  class:is-indeterminate={indeterminate}
  class:is-focus={isFocus}
  class:is-bordered={border}
  aria-controls={indeterminate}
  aria-disabled={disabled}
  style={styleArray2Str(styleList)}
  on:keydown={handleKeydown}>
  <input
    class="seu-checkbox__original"
    type="checkbox"
    bind:checked
    value={componentLabel}
    aria-hidden={indeterminate ? 'true' : 'false'}
    {name}
    {disabled}
    on:focus={() => (isFocus = true)}
    on:blur={() => (isFocus = false)}
    on:change={handleChange} />
  <span
    class="seu-checkbox__input"
    class:is-checked={checked}
    class:is-disabled={disabled}
    class:is-indeterminate={indeterminate}
    {role}
    {tabindex}
    aria-checked={ariaChecked}>
    <span class="seu-checkbox__inner" />
  </span>
  <span class="seu-checkbox__label" on:keydown|stopPropagation>
    {#if $$slots.default}
      <slot />
    {:else}{componentLabel}{/if}
  </span>
</label>
