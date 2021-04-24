<script lang="ts">
  import a2s from '../util/array2string/Array2String'
  import { createEventDispatcher, tick } from 'svelte'
  import { isKorean } from '../util/shared'
  import merge from '../util/merge'
  export let value: string | number
  export let size: string
  export let resize: string
  export let form: string
  export let disabled: boolean
  export let readonly: boolean
  export let type: string = 'text'
  export let autosize: boolean | {} = false
  export let autocomplete: string = 'off'
  export let validateEvent: boolean = true
  export let suffixIcon: string
  export let prefixIcon: string
  export let label: string
  export let clearable: boolean = false
  export let showPassword: boolean = false
  export let showWordLimit: boolean = false
  export let tabindex: number
  const dispatch = createEventDispatcher()

  let textareaCalcStyle: {}
  let hovering: boolean = false
  let focused: boolean = false
  let passwordVisible: boolean = false
  // TODO:
  let elFormItem
  // TODO:
  let elForm

  let elTextInput: HTMLInputElement
  let elPasswordInput: HTMLInputElement

  $: inputDisabled = disabled // TODO:
  $: showClear = clearable && !inputDisabled && !readonly && (focused || hovering)
  $: isWordLimitVisible =
    showWordLimit &&
    $$slots['maxlength'] &&
    (type === 'text' || type === 'textarea') &&
    !inputDisabled &&
    !readonly &&
    !showPassword
  $: validateState = elFormItem ? elFormItem.validateState : ''
  $: needStatusIcon = elForm ? elForm.statusIcon : false
  $: suffixVisible =
    $$slots['suffix'] ||
    suffixIcon ||
    showClear ||
    showPassword ||
    isWordLimitVisible ||
    (validateState && needStatusIcon)
  $: showPwdVisible = showPassword && !inputDisabled && !readonly && focused

  $: inputExceed = isWordLimitVisible && textLength > upperLimit

  $: classString = a2s([
    type === 'textarea' ? 'seu-textarea' : 'seu-input',
    ['is-disabled', disabled],
    ['is-exceed', inputExceed],
    ['seu-input-group', $$slots.prepend || $$slots.append],
    ['seu-input-group--append', $$slots.append],
    ['seu-input-group--prepend', $$slots.prepend],
    ['seu-input--prefix', Boolean($$slots.prefix || prefixIcon)],
    ['seu-input--suffix', clearable || showPassword || Boolean(suffixIcon) || Boolean($$slots['suffix'])],
  ])

  $: suffixIconClass = a2s(['seu-input__icon', suffixIcon])

  let validateIcon: string
  $: {
    validateIcon = {
      validating: 'seu-icon-loading',
      success: 'seu-icon-circle-check',
      error: 'seu-icon-circle-close',
    }[validateState]
  }
  $: validateIconClass = a2s(['seu-input__icon', 'seu-input__validateIcon', validateIcon])

  $: textLength = getTextLength(value)

  $: prefixIconClass = a2s(['seu-input__icon', prefixIcon])

  function getTextLength(input: string | number) {
    if (typeof input === 'number') {
      return String(input).length
    }

    return (input || '').length
  }

  $: upperLimit = $$props['maxlength']

  $: realType = showPassword ? (passwordVisible ? 'text' : 'password') : type

  $: textareaStyle = merge({}, textareaCalcStyle, { resize })
  function clear() {
    value = ''
    dispatch('input', '')
    dispatch('change', '')
    dispatch('clear')
  }

  function handlePasswordVisible() {
    passwordVisible = !passwordVisible

    tick().then(() => {
      if (passwordVisible) {
        elTextInput.focus()
        console.log('🚀 ~ file: SeuInput.svelte ~ line 113 ~ tick ~ elTextInput', elTextInput)
        return
      }
      elPasswordInput.focus()
      console.log('🚀 ~ file: SeuInput.svelte ~ line 117 ~ tick ~ elPasswordInput', elPasswordInput)
    })
  }
  function handleFocus(event: FocusEvent) {
    focused = true
    dispatch('focus', event)
  }
  function handleBlur(event: FocusEvent) {
    focused = false
    dispatch('blur', event)
    if (validateEvent) {
      // dispatch('ElFormItem', 'el.form.blur', [value]) // TODO:
    }
  }
  function handleChange(event: Event) {
    dispatch('change', (event.target as HTMLTextAreaElement).value)
  }
</script>

<div class={classString} on:mouseenter={() => (hovering = true)} on:mouseleave={() => (hovering = false)}>
  <!-- 前置元素 -->
  {#if $$slots.prepend}
    <div class="seu-input-group__prepend">
      <slot name="prepend" />
    </div>
  {/if}
  {#if realType === 'password'}
    <input
      bind:this={elPasswordInput}
      class="seu-input__inner"
      {tabindex}
      type="password"
      disabled={inputDisabled}
      {readonly}
      bind:value
      {...$$props}
      aria-label={label}
      on:focus={handleFocus}
      on:blur={handleBlur}
      on:change={handleChange}
    />
  {:else if realType === 'text'}
    <input
      bind:this={elTextInput}
      class="seu-input__inner"
      {tabindex}
      type="text"
      disabled={inputDisabled}
      {readonly}
      {...$$props}
      aria-label={label}
      bind:value
      on:focus={handleFocus}
      on:blur={handleBlur}
      on:change={handleChange}
    />
  {/if}
  <!-- 前置内容 -->
  {#if $$slots.prefix || prefixIcon}
    <span class="seu-input__prefix">
      <slot name="prefix" />
      {#if prefixIcon}
        <i class={prefixIconClass} />
      {/if}
    </span>
  {/if}
  <!-- 后置内容 -->
  {#if suffixVisible}
    <span class="seu-input__suffix">
      <span class="seu-input__suffix-inner">
        {#if !showClear || !showPwdVisible || !isWordLimitVisible}
          <slot name="suffix" />
          <i class={suffixIconClass} v-if="suffixIcon" />
        {/if}
        {#if showClear}
          <i
            v-if="showClear"
            class="seu-input__icon seu-icon-circle-close seu-input__clear"
            on:mousedown={e => e.preventDefault()}
            on:click={clear}
          />
        {/if}
        {#if showPwdVisible}
          <i
            class="seu-input__icon seu-icon-view seu-input__clear"
            on:mousedown={e => e.preventDefault()}
            on:click={handlePasswordVisible}
          />
        {/if}
        {#if isWordLimitVisible}
          <span class="seu-input__count">
            <span class="seu-input__count-inner">
              {textLength}/{upperLimit}
            </span>
          </span>
        {/if}
      </span>
      {#if validateState}
        <i class={validateIconClass} />
      {/if}
    </span>
  {/if}
  {#if $$slots.append}
    <div class="seu-input-group__append">
      <slot name="append" />
    </div>
  {/if}
  {#if realType === 'textarea'}
    <textarea
      {tabindex}
      class="seu-textarea__inner"
      bind:value
      {...$$props}
      disabled={inputDisabled}
      {readonly}
      {autocomplete}
      style={textareaStyle}
      aria-label={label}
      on:focus={handleFocus}
      on:blur={handleBlur}
      on:change={handleChange}
    />
  {/if}
</div>
