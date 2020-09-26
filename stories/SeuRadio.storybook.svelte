<script>
  import { SeuRadio, SeuRadioGroup } from '../dist/bundle'
  export let value
  export let label1
  export let label2
  export let border
  export let size = ''
  export let name = ''
  export let disabled = null
  export let radio2 = '2'
  export let groupValue = '1'
  let groupRadioSetting = [
    { label: 'Option A', value: '1' },
    { label: 'Option B', value: '2' },
    { label: 'Option C', value: '3' },
  ]
  export let groupDisabled = false
</script>

<h2>Try It with Knobs below</h2>
<h3>selected value: {value}</h3>
<div>
  <SeuRadio bind:value label={label1} {border} {size} {name} {disabled}>Option A</SeuRadio>
  <SeuRadio bind:value label={label2} {border} {size} {name} {disabled}>Option B</SeuRadio>
</div>

<h3>group value : {groupValue}</h3>
<SeuRadioGroup bind:value={groupValue} radios={groupRadioSetting} disabled={groupDisabled} {border} {size} on:change />
