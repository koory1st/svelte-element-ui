<script type="ts">
  import SeuCheckboxGroup from '../../../../packages/checkbox-group/SeuCheckboxGroup.svelte'
  import SeuCheckboxButton from '../../../../packages/checkbox-button/SeuCheckboxButton.svelte'
  let group
</script>

<div>
  test component
  <span>{group}</span>
  <SeuCheckboxGroup min={1} max="3">
    <SeuCheckboxButton bind:group label="Shanghai" />
    <SeuCheckboxButton bind:group label="Beijing" />
    <SeuCheckboxButton bind:group label="Guangzhou" />
    <SeuCheckboxButton bind:group label="Shenzhen" />
  </SeuCheckboxGroup>
</div>
