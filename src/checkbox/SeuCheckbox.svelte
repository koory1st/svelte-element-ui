<script type="ts">
  import { getClass } from '../util/StringUtil'
  import { createEventDispatcher } from 'svelte'
  import { getContext } from 'svelte'
  const dispatch = createEventDispatcher()
  export let group: Array<string | number> = []
  export let value: boolean | string | number = false
  export let label: string | number | boolean | null | undefined
  export let indeterminate: boolean = false
  export let disabled: boolean = false
  export let name: string
  export let border: boolean = false
  export let size: string
  export let checkedValue: string | number
  export let uncheckedValue: string | number

  const checkboxGroupFlg: boolean = getContext('checkboxGroup_flg')
  const changeEvent: Function = getContext('checkboxGroup_changeEvent')
  const checkboxGroupMax: string | number | null = getContext('checkboxGroup_max')
  const checkboxGroupMin: string | number | null = getContext('checkboxGroup_min')

  let groupLabel: string | number = ''
  // label is only valid in group
  $: if (checkboxGroupFlg) {
    groupLabel = checkedValue || String(label)
  }

  let innerChecked: boolean

  let isFocus = false

  let isDisabled: boolean

  $: tabindex = indeterminate ? 0 : null
  $: role = indeterminate ? 'checkbox' : null
  $: ariaChecked = indeterminate ? 'mixed' : null
  $: checkboxGroupFlg && updateChekbox(group)
  $: checkboxGroupFlg && updateGroup(innerChecked)
  $: isDisabled = getDisabled(disabled, checkboxGroupFlg, group, checkboxGroupMax, checkboxGroupMin)

  $: getInnerChecked(value, checkedValue)

  $: classString = getClass([
    'seu-checkbox',
    [`seu-checkbox--${size}`, size && border],
    [`is-checked`, innerChecked],
    [`is-disabled`, isDisabled],
    [`is-indeterminate`, indeterminate],
    [`is-focus`, isFocus],
    [`is-bordered`, border],
  ])

  /**
   * getDisabled
   *
   * only used in group mode
   *
   * @param disabledProp
   * @param groupFlg
   * @param group
   * @param max
   * @param min
   */
  function getDisabled(
    disabledProp: boolean,
    groupFlg: boolean,
    group: Array<string | number>,
    maxInput: string | number | null,
    minInput: string | number | null,
  ): boolean {
    if (!groupFlg) {
      return disabledProp
    }

    const max = Number(maxInput)
    const min = Number(minInput)

    if (max && group.length >= max && !innerChecked) {
      return true
    }

    if (min && group.length <= min && innerChecked) {
      return true
    }
    return disabledProp
  }

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
  class={classString}
  aria-controls={indeterminate}
  aria-disabled={isDisabled}
  on:keydown={handleKeydown}>
  <input
    class="seu-checkbox__original"
    type="checkbox"
    bind:checked={innerChecked}
    value={groupLabel}
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
    {role}
    {tabindex}
    aria-checked={ariaChecked}>
    <span class="seu-checkbox__inner" />
  </span>
  <span class="seu-checkbox__label" on:keydown|stopPropagation>
    {#if $$slots.default}
      <slot />
    {:else}{label}{/if}
  </span>
</label>
