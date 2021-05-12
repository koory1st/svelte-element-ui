<script lang="ts">
  import a2s from '../util/array2string/Array2String'
  import { createEventDispatcher, tick } from 'svelte'
  import { isKorean } from '../util/shared'
  import { onMount } from 'svelte'
  import merge from '../util/merge'
  import calcTextareaHeight from './calcTextareaHeight'
  import { string as object2StyleString } from 'to-style'
  export let value: string | number
  export let size: string
  export let resize: string
  export let form: string
  export let disabled: boolean
  export let readonly: boolean
  export let type: string = 'text'
  export let autosize: boolean | { minRows?: number; maxRows?: number } = false
  export let autocomplete: string = 'off'
  export let validateEvent: boolean = true
  export let suffixIcon: string
  export let prefixIcon: string
  export let label: string
  export let clearable: boolean = false
  export let showPassword: boolean = false
  export let showWordLimit: boolean = false
  export let tabindex: number
  export let maxlength: number
  export let placeholder: string
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
  let elTextAreaInput: HTMLTextAreaElement

  onMount(() => {})

  function getInput() {
    if (realType === 'password') {
      return elPasswordInput
    }

    if (realType === 'textarea') {
      return elTextAreaInput
    }
    return elTextInput
  }

  let isComposing: boolean = false

  $: inputSize = size
  $: inputDisabled = disabled // TODO:
  $: showClear = clearable && !inputDisabled && !readonly && value && (focused || hovering)
  $: isWordLimitVisible =
    showWordLimit &&
    maxlength &&
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
    [`seu-input--${inputSize}`, inputSize],
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

  $: upperLimit = maxlength

  $: realType = showPassword ? (passwordVisible ? 'text' : 'password') : type

  function clear() {
    value = ''
    getInput().value = ''
    dispatch('input', '')
    dispatch('change', '')
    dispatch('clear')
  }

  function handlePasswordVisible() {
    passwordVisible = !passwordVisible

    tick().then(() => {
      if (passwordVisible) {
        elTextInput.focus()
        return
      }
      elPasswordInput.focus()
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
  //#region composition
  function handleCompositionStart() {
    isComposing = true
  }
  function handleCompositionUpdate(event) {
    const text = event.target.value
    const lastCharacter = text[text.length - 1] || ''
    isComposing = !isKorean(lastCharacter)
  }
  function handleCompositionEnd(event) {
    if (isComposing) {
      isComposing = false
      handleInput(event)
    }
  }
  function handleInput(event) {
    if (isComposing) return

    dispatch('input', event.target.value)
    value = event.target.value
    getInput().value = String(value)
  }
  //#endregion

  //#region resize
  function resizeTextarea() {
    if (type !== 'textarea' || !elTextAreaInput) return
    if (!autosize) {
      textareaCalcStyle = {
        minHeight: calcTextareaHeight(elTextAreaInput).minHeight,
      }
      return
    }
    const minRows = autosize instanceof Object ? autosize.minRows : 1
    const maxRows = autosize instanceof Object ? autosize.maxRows : null

    textareaCalcStyle = calcTextareaHeight(elTextAreaInput, minRows, maxRows)
  }
  $: valueChangedEvent(value)

  $: textareaStyle = object2StyleString(merge({}, textareaCalcStyle, { resize: resize }))

  function valueChangedEvent(value: string | number) {
    tick().then(resizeTextarea)
  }
  //#endregion
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
      {placeholder}
      {maxlength}
      aria-label={label}
      on:focus={handleFocus}
      on:blur={handleBlur}
      on:change={handleChange}
      on:input={handleInput}
      on:compositionstart={handleCompositionStart}
      on:compositionupdate={handleCompositionUpdate}
      on:compositionend={handleCompositionEnd}
    />
  {:else if realType === 'text'}
    <input
      bind:this={elTextInput}
      class="seu-input__inner"
      {tabindex}
      type="text"
      disabled={inputDisabled}
      {readonly}
      {maxlength}
      {placeholder}
      aria-label={label}
      on:focus={handleFocus}
      on:blur={handleBlur}
      on:change={handleChange}
      on:input={handleInput}
      on:compositionstart={handleCompositionStart}
      on:compositionupdate={handleCompositionUpdate}
      on:compositionend={handleCompositionEnd}
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
      bind:this={elTextAreaInput}
      disabled={inputDisabled}
      {readonly}
      {maxlength}
      {placeholder}
      {autocomplete}
      style={textareaStyle}
      aria-label={label}
      on:focus={handleFocus}
      on:blur={handleBlur}
      on:change={handleChange}
      on:input={handleInput}
      on:compositionstart={handleCompositionStart}
      on:compositionupdate={handleCompositionUpdate}
      on:compositionend={handleCompositionEnd}
    />
  {/if}
</div>
