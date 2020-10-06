<script>
  import { SeuCheckbox } from '../dist/bundle'
  export let value1 = false
  export let value2 = false
  export let label1
  export let label2
  export let border
  export let size = ''
  export let name = ''
  export let disabled = null
  export let groupValue = '1'
  let groupRadioSetting = [
    { label: 'Option A', value: '1' },
    { label: 'Option B', value: '2' },
    { label: 'Option C', value: '3' },
  ]
  export let groupDisabled = false
</script>

<h2>Try It with Knobs below</h2>
<h3>checkbox value: {value1}</h3>
<div>
  <SeuCheckbox bind:value={value1} label={label1} {border} {size} {name} {disabled}>Option A</SeuCheckbox>
</div>
