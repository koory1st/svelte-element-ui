<script type="ts">
  import SeuCheckboxGroup from '../../../../src/checkbox/SeuCheckboxGroup.svelte'
  import SeuCheckboxButton from '../../../../src/checkbox/SeuCheckboxButton.svelte'
  let group
</script>

<div>
  test component
  <span>slot</span>
  <span>group: {group}</span>
  <SeuCheckboxGroup>
    <SeuCheckboxButton bind:group label="Shanghai" />
    <SeuCheckboxButton bind:group label="Beijing" />
    <SeuCheckboxButton bind:group label="Guangzhou" />
    <SeuCheckboxButton bind:group label="Shenzhen" />
  </SeuCheckboxGroup>
</div>
