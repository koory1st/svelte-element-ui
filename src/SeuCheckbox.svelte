<script type="ts">
  import { styleStr2Array, styleArray2Str, classStr2Array, classArray2Str } from './util/StringUtil'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  export let value: boolean
  export let label: string | number
  export let indeterminate: boolean = false
  export let disabled: boolean = false
  export let checked: boolean = false
  export let name: string
  export let id: string
  export let controls: string
  export let border: boolean = false
  export let size: string

  // just for group
  export let isGroup: boolean = false

  let isFocus = false

  let classList = ['seu-checkbox', ...classStr2Array($$props['class'])]

  let styleList = styleStr2Array($$props['style'])

  if (border && size) {
    classList.push(`seu-checkbox--${size}`)
  }

  $: isDisabled = disabled ? disabled : null

  $: tabindex = isDisabled || (isGroup && value) ? -1 : 0

  function handleKeydown(event: KeyboardEvent) {
    if (event.code !== 'Space') {
      return
    }

    // value = isDisabled ? value : label
    event.stopPropagation()
    event.preventDefault()
  }

  function handleChange({ target }) {
    console.log('handleChange -> target', target.checked)
    value = target.checked
    dispatch('change', value)
  }
</script>

<label
  role="checkbox"
  class={classArray2Str(classList)}
  class:is-checked={value}
  class:is-disabled={isDisabled}
  class:is-focus={isFocus}
  class:is-bordered={border}
  {tabindex}
  aria-disabled={isDisabled}
  style={styleArray2Str(styleList)}
  on:keydown={handleKeydown}>
  <input
    class="seu-checkbox__original"
    type="checkbox"
    bind:checked={value}
    aria-hidden="true"
    {name}
    disabled={isDisabled}
    tabindex="-1"
    on:focus={() => (isFocus = true)}
    on:blur={() => (isFocus = false)}
    on:change={handleChange} />
  <span class="seu-checkbox__input" class:is-checked={value} class:is-disabled={isDisabled}>
    <span class="seu-checkbox__inner" />
  </span>
  <span class="seu-checkbox__label" on:keydown|stopPropagation>
    <slot />
  </span>
</label>
