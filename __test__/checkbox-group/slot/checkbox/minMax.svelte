<script type="ts">
  import SeuCheckboxGroup from '../../../../packages/checkbox-group/SeuCheckboxGroup.svelte'
  import SeuCheckbox from '../../../../packages/checkbox/SeuCheckbox.svelte'
  let group
</script>

<div>
  test component
  <span>{group}</span>
  <SeuCheckboxGroup min={1} max="3">
    <SeuCheckbox bind:group label="Shanghai" />
    <SeuCheckbox bind:group label="Beijing" />
    <SeuCheckbox bind:group label="Guangzhou" />
    <SeuCheckbox bind:group label="Shenzhen" />
  </SeuCheckboxGroup>
</div>
