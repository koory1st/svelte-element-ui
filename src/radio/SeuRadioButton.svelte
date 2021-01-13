<script type="ts">
  import { classArray2Str } from '../util/StringUtil'
  import { createEventDispatcher } from 'svelte'
  import { getContext } from 'svelte'
  const dispatch = createEventDispatcher()
  export let value: boolean | string | number = false
  export let label: string | number | boolean | null | undefined = ''
  export let disabled: boolean = false
  export let name: string
  export let size: string

  // just for group
  const radioGroupFlg: boolean = getContext('radioGroup_flg')
  const changeEvent: Function = getContext('radioGroup_changeEvent')

  let isFocus = false

  let classList = ['seu-radio-button']

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
    value = label
    dispatch('change', value)

    // if in group, fire the group event
    if (radioGroupFlg) {
      changeEvent(value)
    }
  }
</script>

<label
  role="radio"
  class={classArray2Str(classList)}
  {tabindex}
  aria-disabled={isDisabled}
  aria-checked={isChecked}
  on:keydown={handleKeydown}>
  <input
    class="seu-radio-button__orig-radio"
    type="radio"
    value={String(label)}
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
