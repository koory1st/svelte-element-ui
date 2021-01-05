<script type="ts">
  import SeuCheckbox from './SeuCheckbox.svelte'
  import { setContext } from 'svelte'
  import { classArray2Str } from '../util/StringUtil'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  export let options: Array<string | { label: string; value: string | number }> = []
  export let group = []
  export let border: boolean = false
  export let size: string
  export let disabled: boolean = false

  let classList = ['seu-checkbox-group']

  let checkboxPropList = []

  for (let index = 0; index < options.length; index++) {
    const checkboxProp: { label?: string; checked?: boolean; checkedValue?: string | number } = {}
    const option = options[index]

    if (typeof option === 'string') {
      checkboxProp.label = option
      checkboxProp.checked = group.includes(option)
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
      checkboxPropList.push(checkboxProp)
    }
  }

  function handleChange() {
    dispatch('change', group)
  }
</script>

<div class={classArray2Str(classList)}>
  {#each checkboxPropList as prop}
    <SeuCheckbox
      bind:group
      checkedValue={prop.checkedValue}
      label={prop.label}
      {border}
      {size}
      {disabled}
      on:change={handleChange}>
      {prop.label}
    </SeuCheckbox>
  {/each}
  <slot />
</div>
