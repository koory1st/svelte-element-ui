<script type="ts">
  import SeuCheckbox from './SeuCheckbox.svelte'
  import SeuCheckboxButton from './SeuCheckboxButton.svelte'
  import { setContext } from 'svelte'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  export let options: Array<string | { label: string; value: string | number | boolean; disabled?: boolean }> = []
  export let group = []
  export let border: boolean = false
  export let size: string
  export let disabled: boolean = false
  export let type: string
  /**
   * max and min props are only avalible in creation
   */
  export let max: string | number | null = null
  export let min: string | number | null = null

  setContext('checkboxGroup_flg', true)
  setContext('checkboxGroup_changeEvent', changeEventForChild)
  setContext('checkboxGroup_max', max)
  setContext('checkboxGroup_min', min)

  let checkboxPropList = []

  for (let index = 0; index < options.length; index++) {
    const checkboxProp: {
      label?: string
      checked?: boolean
      checkedValue?: string | number | boolean
      disabled?: boolean
    } = {}
    const option = options[index]

    if (typeof option === 'string') {
      checkboxProp.label = option
      checkboxPropList.push(checkboxProp)
      continue
    }

    if (option instanceof Object) {
      if ('label' in option === false && 'value' in option === false) {
        continue
      }
      let optionLabel = option.label || String(option.value)
      let optionValue = String(option.value) || option.label

      checkboxProp.label = optionLabel
      checkboxProp.checkedValue = optionValue
      checkboxProp.disabled = option.disabled
      checkboxPropList.push(checkboxProp)
    }
  }

  function changeEventForChild(groupFromChild: Array<string | number>) {
    group = groupFromChild
    dispatch('change', groupFromChild)
  }
</script>

<div class="seu-checkbox-group">
  {#each checkboxPropList as prop}
    {#if type === 'button'}
      <SeuCheckboxButton
        bind:group
        checkedValue={prop.checkedValue}
        label={prop.label}
        {size}
        disabled={disabled || prop.disabled}
      >
        {prop.label}
      </SeuCheckboxButton>
    {:else}
      <SeuCheckbox
        bind:group
        checkedValue={prop.checkedValue}
        label={prop.label}
        {border}
        {size}
        disabled={disabled || prop.disabled}
      >
        {prop.label}
      </SeuCheckbox>
    {/if}
  {/each}
  <slot />
</div>
