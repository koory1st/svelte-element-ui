<script>
  import { SeuRadio } from '../dist/bundle'
  export let value
  export let label1
  export let label2
  export let border
  export let size = ''
  export let name = ''
  export let disabled = null
  export let textColor = null
  export let fill = null
  export let radio2 = '2'
</script>

<h2>Try It with Knobs below</h2>
selected value: {value}
<div>
  <SeuRadio bind:value label={label1} {border} {size} {name} {disabled}>Option A</SeuRadio>
  <SeuRadio bind:value label={label2} {border} {size} {name} {disabled}>Option B</SeuRadio>
</div>

<h2>Disabled</h2>
disabled attribute is used to disable the radio.
<div>
  <SeuRadio disabled bind:value={radio2} label="1">Option A</SeuRadio>
  <SeuRadio disabled bind:value={radio2} label="2">Option B</SeuRadio>
</div>
