<script type="ts">
  import { styleStr2Array, styleArray2Str, classStr2Array, classArray2Str } from './util/StringUtil'
  export let value: string | number
  export let label: string | number
  export let disabled = false
  export let name: string
  export let border = false
  export let size: string
  let isFocus = false

  let classList = ['seu-radio', ...classStr2Array($$props['class'])]

  let styleList = styleStr2Array($$props['style'])

  if (size) {
    classList.push(`seu-radio--${size}`)
  }

  $: isChecked = value === label ? true : null
  $: isDisabled = disabled ? disabled : null

  function handleKeydown(event: KeyboardEvent) {
    if (event.code !== 'Space') {
      return
    }

    value = isDisabled ? value : label
    event.stopPropagation()
    event.preventDefault()
  }
</script>

<label
  role="radio"
  class={classArray2Str(classList)}
  class:is-checked={isChecked}
  class:is-disabled={isDisabled}
  class:is-focus={isFocus}
  class:is-bordered={border}
  tabindex="0"
  aria-disabled={isDisabled}
  aria-checked={isChecked}
  style={styleArray2Str(styleList)}
  on:keydown={handleKeydown}>
  <span class="seu-radio__input"> <span class="seu-radio__inner" /> </span>
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
    on:blur={() => (isFocus = false)} />
  <span class="seu-radio__label" on:keydown|stopPropagation>
    <slot />
  </span>
</label>
