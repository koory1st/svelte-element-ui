<script type="ts">
  import SeuCheckbox from './SeuCheckbox.svelte'
  import { styleStr2Array, styleArray2Str, classStr2Array, classArray2Str } from './util/StringUtil'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  export let options: Array<string | { label: string; value: string | number }> = []
  export let group = []
  export let border: boolean = false
  export let size: string
  export let disabled: boolean = false

  let classList = ['seu-checkbox-group', ...classStr2Array($$props['class'])]
  let styleList = styleStr2Array($$props['style'])

  let checkboxPropList = []

  for (let index = 0; index < options.length; index++) {
    const checkboxProp: { label?: string; checked?: boolean } = {}
    const option = options[index]

    if (typeof option === 'string') {
      checkboxProp.label = option
      checkboxProp.checked = group.includes(option)
      checkboxPropList.push(checkboxProp)
      console.log('checkboxPropList', checkboxPropList)
      continue
    }

    if (option instanceof Object) {
      if ('label' in option === false && 'value' in option === false) {
        continue
      }
      let optionLabel = option.label || '' + option.value
      let optionValue = option.value || option.label

      checkboxProp.label = optionLabel
      checkboxProp.checked = group.includes(optionValue)
      checkboxPropList.push(checkboxProp)
    }
  }

  function handleChange() {
    dispatch('change', group)
  }
</script>

<div class={classArray2Str(classList)} style={styleArray2Str(styleList)}>
  {#each checkboxPropList as prop}
    <SeuCheckbox bind:group value={prop.checked} label={prop.label} {border} {size} {disabled} on:change={handleChange}>
      {prop.label}
    </SeuCheckbox>
  {/each}
  <slot />
</div>
