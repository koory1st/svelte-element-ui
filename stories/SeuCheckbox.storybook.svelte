<script>
  import { SeuCheckbox } from '../dist/bundle'
  export let value = false
  export let label1
  export let label2
  export let border
  export let size = ''
  export let name = ''
  export let disabled = null
  export let groupValue = '1'
  export let groupDisabled = false
</script>

<h2>Try It with Knobs below</h2>
<h3>checkbox value: {value}</h3>
<div>
  <SeuCheckbox bind:value label={label1} {border} {size} {name} {disabled}>Option A</SeuCheckbox>
  <SeuCheckbox bind:value label={label1} {border} {size} {name} {disabled}>Option A</SeuCheckbox>
</div>
