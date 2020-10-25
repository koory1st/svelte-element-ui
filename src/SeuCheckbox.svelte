<script type="ts">
  import { styleStr2Array, styleArray2Str, classStr2Array, classArray2Str } from './util/StringUtil'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  export let group
  export let value
  export let indeterminate: boolean = false
  export let disabled: boolean = false
  export let checked: boolean
  export let name: string
  export let border: boolean = false
  export let size: string

  let isFocus = false

  let classList = ['seu-checkbox', ...classStr2Array($$props['class'])]

  let styleList = styleStr2Array($$props['style'])

  if (border && size) {
    classList.push(`seu-checkbox--${size}`)
  }

  $: isDisabled = disabled ? disabled : null
  $: tabindex = indeterminate ? 0 : null
  $: role = indeterminate ? 'checkbox' : null
  $: ariaChecked = indeterminate ? 'mixed' : null

  $: {
    if (group) updateChekbox(group)
  }
  $: updateGroup(checked)

  function updateChekbox(group) {
    checked = group.indexOf(value) >= 0
  }

  function updateGroup(checked) {
    if (!group) {
      return
    }
    const index = group.indexOf(value)
    if (checked) {
      if (index < 0) {
        group.push(value)
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
    checked = target.checked
    dispatch('change', checked)
  }
</script>

<label
  role="checkbox"
  class={classArray2Str(classList)}
  class:is-checked={checked}
  class:is-disabled={isDisabled}
  class:is-indeterminate={indeterminate}
  class:is-focus={isFocus}
  class:is-bordered={border}
  aria-controls={indeterminate}
  aria-disabled={isDisabled}
  style={styleArray2Str(styleList)}
  on:keydown={handleKeydown}>
  <input
    class="seu-checkbox__original"
    type="checkbox"
    bind:checked
    {value}
    aria-hidden={indeterminate ? 'true' : 'false'}
    {name}
    disabled={isDisabled}
    on:focus={() => (isFocus = true)}
    on:blur={() => (isFocus = false)}
    on:change={handleChange} />
  <span
    class="seu-checkbox__input"
    class:is-checked={checked}
    class:is-disabled={isDisabled}
    class:is-indeterminate={indeterminate}
    {role}
    {tabindex}
    aria-checked={ariaChecked}>
    <span class="seu-checkbox__inner" />
  </span>
  <span class="seu-checkbox__label" on:keydown|stopPropagation>
    {#if $$slots.default}
      <slot />
    {:else}{value}{/if}
  </span>
</label>
