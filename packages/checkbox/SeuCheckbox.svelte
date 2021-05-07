<script lang="ts">
  import { boolNull } from '../util/BooleanUtil'
  import a2s from '../util/array2string/Array2String'
  import { createEventDispatcher } from 'svelte'
  import { getContext } from 'svelte'
  import {
    getDisabled,
    getInnerCheckedValue,
    getValueByInnerChecked,
    validateCheckedValue,
    getGroupByInnerChecked,
    getInnerCheckedByValue,
  } from '../util/CheckboxUtil'
  export let group: Array<string | number | boolean> = []
  export let value: boolean | string | number = false
  export let label: string | number | boolean | null | undefined
  export let indeterminate: boolean = null
  export let disabled: boolean = false
  export let name: string
  export let border: boolean = false
  export let size: string
  export let checkedValue: string | number | boolean | null | undefined
  export let uncheckedValue: string | number | boolean | null | undefined
  const dispatch = createEventDispatcher()

  validateCheckedValue(checkedValue, uncheckedValue)

  const isGroup: boolean = getContext('checkboxGroup_flg')
  const changeEvent: Function = getContext('checkboxGroup_changeEvent')
  const checkboxGroupMax: string | number | null = getContext('checkboxGroup_max')
  const checkboxGroupMin: string | number | null = getContext('checkboxGroup_min')

  let isFocus = false

  $: tabindex = indeterminate ? 0 : null
  $: role = indeterminate ? 'checkbox' : null
  $: ariaChecked = indeterminate ? 'mixed' : null

  // innerCheckedValue, get by props
  $: innerCheckedValue = getInnerCheckedValue(isGroup, checkedValue, label)
  // fired by value and group props changed
  $: innerChecked = getInnerCheckedByValue(isGroup, value, group, innerCheckedValue)
  $: isDisabled = getDisabled(disabled, isGroup, group, checkboxGroupMax, checkboxGroupMin, innerChecked)

  $: classString = a2s([
    'seu-checkbox',
    [`seu-checkbox--${size}`, size && border],
    [`is-checked`, innerChecked],
    [`is-disabled`, isDisabled],
    [`is-indeterminate`, indeterminate],
    [`is-bordered`, border],
  ])

  function handleKeydown(event: KeyboardEvent) {
    if (event.code !== 'Space') {
      return
    }

    if (isDisabled) {
      return
    }

    event.stopPropagation()
    event.preventDefault()

    if (isGroup) {
      value = value !== innerCheckedValue ? innerCheckedValue : null
    }
  }

  function handleChange({ target }) {
    innerChecked = target.checked
    value = getValueByInnerChecked(innerChecked, innerCheckedValue, uncheckedValue)
    group = getGroupByInnerChecked(isGroup, innerChecked, group, innerCheckedValue)
    dispatch('change', value)

    // if in group, fire the group event
    if (isGroup) {
      changeEvent(group)
    }
  }
</script>

<label
  role="checkbox"
  class={classString}
  aria-controls={boolNull(indeterminate)}
  aria-disabled={boolNull(isDisabled)}
  on:keydown={handleKeydown}
>
  <input
    class="seu-checkbox__original"
    type="checkbox"
    checked={innerChecked}
    aria-hidden={indeterminate ? 'true' : 'false'}
    {name}
    disabled={isDisabled}
    on:focus={() => (isFocus = true)}
    on:blur={() => (isFocus = false)}
    on:change={handleChange}
  />
  <span
    class="seu-checkbox__input"
    class:is-checked={innerChecked}
    class:is-disabled={isDisabled}
    class:is-indeterminate={indeterminate}
    class:is-focus={isFocus}
    {role}
    {tabindex}
    aria-checked={ariaChecked}
  >
    <span class="seu-checkbox__inner" />
  </span>
  <span class="seu-checkbox__label" on:keydown|stopPropagation>
    {#if $$slots.default}
      <slot />
    {:else}{label}{/if}
  </span>
</label>
