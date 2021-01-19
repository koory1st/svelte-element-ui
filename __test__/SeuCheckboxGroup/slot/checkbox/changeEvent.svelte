<script type="ts">
  import SeuCheckboxGroup from '../../../../packages/checkboxGroup/SeuCheckboxGroup.svelte'
  import SeuCheckbox from '../../../../packages/checkbox/SeuCheckbox.svelte'
  let group
  let changedValue

  function changeHandler(e) {
    changedValue = e.detail
  }
</script>

<div>
  test component
  <span>slot</span>
  <span>group: {group}</span>
  <span>changedValue: {changedValue}</span>
  <SeuCheckboxGroup on:change={changeHandler}>
    <SeuCheckbox bind:group checkedValue="1">Shanghai</SeuCheckbox>
    <SeuCheckbox bind:group checkedValue="2">Beijing</SeuCheckbox>
    <SeuCheckbox bind:group checkedValue="3">Guangzhou</SeuCheckbox>
    <SeuCheckbox bind:group checkedValue="4">Shenzhen</SeuCheckbox>
  </SeuCheckboxGroup>
</div>
