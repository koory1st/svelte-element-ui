<script>
  import { SeuCheckbox } from '../dist/bundle'
  export let value = false
  export let border
  export let size = ''
  export let name = ''
  export let disabled = null

  let disabledValue1 = true
  let disabledValue2 = false
</script>

<h1>Checkbox</h1>
<p>A group of options for multiple choices.</p>

<h2>Try It with Knobs below</h2>
<h3>checkbox value: {value}</h3>
<div>
  <SeuCheckbox bind:value {border} {size} {name} {disabled}>Option A</SeuCheckbox>
</div>

<h2>Basic usage</h2>
<p>Checkbox can be used alone to switch between two states.</p>
<SeuCheckbox bind:value>Option A</SeuCheckbox>

<h2>Disabled State</h2>
<p>Disabled state for checkbox.</p>

<SeuCheckbox bind:value={disabledValue1} disabled={true}>Option A</SeuCheckbox>

<SeuCheckbox bind:value={disabledValue2} disabled={true}>Option A</SeuCheckbox>
