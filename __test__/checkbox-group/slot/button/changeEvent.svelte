<script type="ts">
  import SeuCheckboxGroup from '../../../../packages/checkbox-group/SeuCheckboxGroup.svelte'
  import SeuCheckboxButton from '../../../../packages/checkbox-button/SeuCheckboxButton.svelte'
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
    <SeuCheckboxButton bind:group checkedValue="1">Shanghai</SeuCheckboxButton>
    <SeuCheckboxButton bind:group checkedValue="2">Beijing</SeuCheckboxButton>
    <SeuCheckboxButton bind:group checkedValue="3">Guangzhou</SeuCheckboxButton>
    <SeuCheckboxButton bind:group checkedValue="4">Shenzhen</SeuCheckboxButton>
  </SeuCheckboxGroup>
</div>
