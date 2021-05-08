<script lang="ts">
  import { SeuCheckbox, SeuCheckboxGroup } from 'svelte-element-ui'
  let checked1 = true
  let checked2 = false
  let checked3 = false
  let checked4 = true
  let checkboxGroup1
  let checkboxGroup2
</script>

<div>
  <SeuCheckbox bind:value={checked1} border>Option1</SeuCheckbox>
  <SeuCheckbox bind:value={checked2} border>Option2</SeuCheckbox>
</div>

<div style="margin-top: 20px">
  <SeuCheckbox bind:value={checked3} border size="medium">Option1</SeuCheckbox>
  <SeuCheckbox bind:value={checked4} border size="medium">Option2</SeuCheckbox>
</div>

<div style="margin-top: 20px">
  <SeuCheckboxGroup>
    <SeuCheckbox bind:group={checkboxGroup1} label="Option1" border size="small" />
    <SeuCheckbox bind:group={checkboxGroup1} label="Option2" border size="small" />
  </SeuCheckboxGroup>
</div>

<div style="margin-top: 20px">
  <SeuCheckboxGroup bind:group={checkboxGroup2} options={['Option1', 'Option2']} border size="mini" disabled />
</div>
