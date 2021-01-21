<script type="ts">
  import SeuCheckboxGroup from '../../../../packages/checkbox-group/SeuCheckboxGroup.svelte'
  let group
  let changedValue
</script>

<div>
  test component
  <span>changedValue:{changedValue}</span>
  <span>group:{group}</span>
  <SeuCheckboxGroup
    options={[
      { label: 'Shanghai', value: 1 },
      { label: 'Beijing', value: 2 },
      { label: 'Guangzhou', value: 3 },
      { label: 'Shenzhen', value: 4 },
    ]}
    bind:group
    on:change={event => {
      changedValue = event.detail
    }}
  />
</div>
