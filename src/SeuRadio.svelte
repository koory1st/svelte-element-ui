<script type="ts">
  import { styleStr2Array, styleArray2Str, classStr2Array, classArray2Str } from './util/StringUtil'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  export let value: string | number
  export let label: string | number
  export let disabled: boolean = false
  export let name: string
  export let border: boolean = false
  export let size: string

  // just for group
  export let isGroup: boolean = false

  let isFocus = false

  let classList = ['seu-radio', ...classStr2Array($$props['class'])]

  let styleList = styleStr2Array($$props['style'])

  if (border && size) {
    classList.push(`seu-radio--${size}`)
  }

  $: isChecked = value === label ? true : null
  $: isDisabled = disabled ? disabled : null

  $: tabindex = isDisabled || (isGroup && value !== label) ? -1 : 0

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
  style={styleArray2Str(styleList)}
  on:keydown={handleKeydown}>
  <input
    class="seu-radio__original"
    type="radio"
    value={label}
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
    <slot />
  </span>
</label>
