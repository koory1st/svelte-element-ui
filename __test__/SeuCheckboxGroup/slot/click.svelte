<script type="ts">
  import SeuCheckboxGroup from '../../../src/checkbox/SeuCheckboxGroup.svelte'
  import SeuCheckbox from '../../../src/checkbox/SeuCheckbox.svelte'
  let group
</script>

<div>
  test component
  <span>slot</span>
  <span>group: {group}</span>
  <SeuCheckboxGroup>
    <SeuCheckbox bind:group label="Shanghai" />
    <SeuCheckbox bind:group label="Beijing" />
    <SeuCheckbox bind:group label="Guangzhou" />
    <SeuCheckbox bind:group label="Shenzhen" />
  </SeuCheckboxGroup>
</div>
