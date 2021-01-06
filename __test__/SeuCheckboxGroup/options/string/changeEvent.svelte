<script type="ts">
  import SeuCheckboxGroup from '../../../../src/checkbox/SeuCheckboxGroup.svelte'
  let group
  let changedValue
</script>

<div>
  test component
  <span>changedValue:{changedValue}</span>
  <span>group:{group}</span>
  <SeuCheckboxGroup
    options={['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']}
    bind:group
    on:change={event => {
      changedValue = event.detail
    }} />
</div>
