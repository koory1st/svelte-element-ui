<script type="ts">
  import SeuRadio from '../radio/SeuRadio.svelte'
  import SeuRadioButton from '../radioButton/SeuRadioButton.svelte'
  import { setContext, createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  export let value: string | number
  export let options: Array<string | { label: string; value: string | number | boolean; disabled?: boolean }> = []
  export let border: boolean = false
  export let size: string
  export let disabled: boolean = false
  export let type: string
  export let name: string

  setContext('radioGroup_flg', true)
  setContext('radioGroup_changeEvent', changeEventForChild)
  setContext('radioGroup_name', name)

  let propList = []

  for (let index = 0; index < options.length; index++) {
    const prop: { label?: string; checked?: boolean; value?: string | number | boolean; disabled?: boolean } = {}
    const option = options[index]

    if (typeof option === 'string') {
      prop.label = option
      propList.push(prop)
      continue
    }

    if (option instanceof Object) {
      if ('label' in option === false && 'value' in option === false) {
        continue
      }
      let optionLabel = option.label || String(option.value)
      let optionValue = String(option.value) || option.label

      prop.label = optionLabel
      prop.value = optionValue
      prop.disabled = option.disabled
      propList.push(prop)
    }
  }

  function changeEventForChild(valueFromChild: Array<string | number>) {
    dispatch('change', valueFromChild)
  }
</script>

<div class="seu-radio-group">
  {#each propList as radio}
    {#if type === 'button'}
      <SeuRadioButton bind:value label={radio.value} disabled={disabled || radio.disabled} {size} on:change>
        {radio.label || radio.value}
      </SeuRadioButton>
    {:else}
      <SeuRadio bind:value label={radio.value} disabled={disabled || radio.disabled} {border} {size} on:change>
        {radio.label || radio.value}
      </SeuRadio>
    {/if}
  {/each}
  <slot />
</div>
