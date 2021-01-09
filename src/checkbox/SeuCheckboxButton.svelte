<script type="ts">
  import { classArray2Str } from '../util/StringUtil'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  import { getContext } from 'svelte'
  export let group: Array<string | number> = []
  export let value: boolean | string | number = false
  export let label: string | number | boolean | null | undefined
  export let disabled: boolean = false
  export let name: string
  export let size: string
  export let checkedValue: string | number
  export let uncheckedValue: string | number

  const checkboxGroupFlg: boolean = getContext('checkboxGroup_flg')
  const changeEvent: Function = getContext('checkboxGroup_changeEvent')

  let groupLabel: string | number = ''
  // label is only valid in group
  $: if (checkboxGroupFlg) {
    groupLabel = checkedValue || String(label)
  }

  let innerChecked: boolean

  let isFocus = false

  let classList = ['seu-checkbox-button']

  if (size) {
    classList.push(`seu-checkbox-button--${size}`)
  }

  $: checkboxGroupFlg && updateChekbox(group)
  $: checkboxGroupFlg && updateGroup(innerChecked)

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
    value = group.indexOf(groupLabel) >= 0
  }

  function updateGroup(innerChecked: boolean) {
    if (!group) {
      return
    }

    const index = group.indexOf(groupLabel)

    // this checkbox is checked and the label is not in the group
    // push in the group
    if (innerChecked && index < 0) {
      group.push(groupLabel)
      group = group
      return
    }

    // this checkbox is unchecked and the label is in the group
    // remove from the group
    if (!innerChecked && index >= 0) {
      group.splice(index, 1)
      group = group
      return
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

    // if in group, fire the group event
    if (checkboxGroupFlg) {
      changeEvent(group)
    }
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
    value={groupLabel}
    {name}
    {disabled}
    on:focus={() => (isFocus = true)}
    on:blur={() => (isFocus = false)}
    on:change={handleChange} />
  <span class="seu-checkbox-button__inner">
    {#if $$slots.default}
      <slot />
    {:else}{label}{/if}
  </span>
</label>
