<script type="ts">
  import SeuCheckbox from './SeuCheckbox.svelte'
  import { styleStr2Array, styleArray2Str, classStr2Array, classArray2Str } from './util/StringUtil'
  export let value: Array<string | number> = []
  export let options: Array<string | { label: string; value: string | number }> = []
  export let group = []

  let classList = ['seu-checkbox-group', ...classStr2Array($$props['class'])]
  let styleList = styleStr2Array($$props['style'])

  let checkboxPropList = []
  console.log('checkboxPropList', checkboxPropList)

  for (let index = 0; index < options.length; index++) {
    const checkboxProp: { label?: string; checked?: boolean } = {}
    const option = options[index]

    if (typeof option === 'string') {
      checkboxProp.label = option
      checkboxProp.checked = value.includes(option)
      checkboxPropList.push(checkboxProp)
      continue
    }

    if (option instanceof Object) {
      if ('label' in option === false && 'value' in option === false) {
        continue
      }
      let optionLabel = option.label || '' + option.value
      let optionValue = option.value || option.label

      checkboxProp.label = optionLabel
      checkboxProp.checked = value.includes(optionValue)
      checkboxPropList.push(checkboxProp)
    }
  }

  function handleChange({ detail }, label) {
    if (detail) {
      if (detail in value) {
        return
      }
      value.push(detail)
    } else {
      value = value.filter(v => v !== detail)
    }
    console.log('value :', value)
  }
</script>

<div class={classArray2Str(classList)} style={styleArray2Str(styleList)}>
  {#each checkboxPropList as prop}
    <SeuCheckbox
      bind:group
      checked={prop.checked}
      value={prop.label}
      on:change={event => handleChange(event, prop.label)}>
      {prop.label}
    </SeuCheckbox>
  {/each}
  <slot />
</div>
