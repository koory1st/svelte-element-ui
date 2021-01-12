<script type="ts">
  import { classArray2Str } from '../util/StringUtil'
  import { createEventDispatcher } from 'svelte'
  import { getContext } from 'svelte'
  const dispatch = createEventDispatcher()
  export let value: boolean | string | number = false
  export let label: string | number | boolean | null | undefined = ''
  export let disabled: boolean = false
  export let name: string
  export let border: boolean = false
  export let size: string

  // just for group
  const radioGroupFlg: boolean = getContext('radioGroup_flg')
  const changeEvent: Function = getContext('radioGroup_changeEvent')

  let isFocus = false

  let classList = ['seu-radio']

  if (border && size) {
    classList.push(`seu-radio--${size}`)
  }

  $: isChecked = value === label ? true : null
  $: isDisabled = disabled ? disabled : null

  $: tabindex = isDisabled || (radioGroupFlg && value !== label) ? -1 : 0

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

    // if in group, fire the group event
    if (radioGroupFlg) {
      changeEvent(value)
    }
  }
</script>

<label
  role="radio"
  class={classArray2Str(classList)}
  class:is-checked={isChecked}
  class:is-disabled={isDisabled}
  class:is-focus={isFocus}
  class:is-bordered={border}
  {tabindex}
  aria-disabled={isDisabled}
  aria-checked={isChecked}
  on:keydown={handleKeydown}>
  <input
    class="seu-radio__original"
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
  <span class="seu-radio__input" class:is-checked={isChecked} class:is-disabled={isDisabled}>
    <span class="seu-radio__inner" />
  </span>
  <span class="seu-radio__label" on:keydown|stopPropagation>
    {#if $$slots.default}
      <slot />
    {:else}{label}{/if}
  </span>
</label>
