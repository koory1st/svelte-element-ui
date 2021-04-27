<script lang="ts">
  import { array2string as a2s } from 'array2string'
  import {
    getDisabled,
    getInnerCheckedValue,
    getValueByInnerChecked,
    validateCheckedValue,
    getGroupByInnerChecked,
    getInnerCheckedByValue,
  } from '../util/CheckboxUtil'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  import { getContext } from 'svelte'
  export let group: Array<string | number | boolean> = []
  export let value: boolean | string | number = false
  export let label: string | number | boolean | null | undefined
  export let disabled: boolean = false
  export let name: string
  export let size: string
  export let checkedValue: string | number | boolean | null | undefined
  export let uncheckedValue: string | number | boolean | null | undefined

  validateCheckedValue(checkedValue, uncheckedValue)

  const isGroup: boolean = getContext('checkboxGroup_flg')
  const changeEvent: Function = getContext('checkboxGroup_changeEvent')
  const checkboxGroupMax: string | number | null = getContext('checkboxGroup_max')
  const checkboxGroupMin: string | number | null = getContext('checkboxGroup_min')

  let isFocus = false

  // innerCheckedValue, get by props
  $: innerCheckedValue = getInnerCheckedValue(isGroup, checkedValue, label)
  // fired by value and group props changed
  $: innerChecked = getInnerCheckedByValue(isGroup, value, group, innerCheckedValue)
  $: isDisabled = getDisabled(disabled, isGroup, group, checkboxGroupMax, checkboxGroupMin, innerChecked)

  $: classString = a2s([
    'seu-checkbox-button',
    [`seu-checkbox-button--${size}`, Boolean(size)],
    [`is-checked`, innerChecked],
    [`is-disabled`, isDisabled],
    [`is-focus`, isFocus],
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

<label role="checkbox" class={classString} aria-disabled={isDisabled} on:keydown={handleKeydown}>
  <input
    class="seu-checkbox-button__original"
    type="checkbox"
    bind:checked={innerChecked}
    {name}
    disabled={isDisabled}
    on:focus={() => (isFocus = true)}
    on:blur={() => (isFocus = false)}
    on:change={handleChange}
  />
  <span class="seu-checkbox-button__inner">
    {#if $$slots.default}
      <slot />
    {:else}{label}{/if}
  </span>
</label>
