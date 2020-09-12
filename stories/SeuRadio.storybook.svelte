<script>
  import { SeuRadio } from '../dist/bundle'
  export let radio
  export let radio2 = '2'
</script>

<h2>Try It with Knobs below</h2>
selected value: {radio}
<div>
  <SeuRadio bind:value={radio} label="1">Option A</SeuRadio>
  <SeuRadio bind:value={radio} label="2">Option B</SeuRadio>
</div>

<h2>Disabled</h2>
disabled attribute is used to disable the radio.
<div>
  <SeuRadio disabled bind:value={radio2} label="1">Option A</SeuRadio>
  <SeuRadio disabled bind:value={radio2} label="2">Option B</SeuRadio>
</div>
