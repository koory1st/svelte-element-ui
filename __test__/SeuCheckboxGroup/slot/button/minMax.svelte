<script type="ts">
  import SeuCheckboxGroup from '../../../../src/checkbox/SeuCheckboxGroup.svelte'
  import SeuCheckboxButton from '../../../../src/checkbox/SeuCheckboxButton.svelte'
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
