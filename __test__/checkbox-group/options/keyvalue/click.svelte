<script type="ts">
  import SeuCheckboxGroup from '../../../../packages/checkbox-group/SeuCheckboxGroup.svelte'
  let group
</script>

<div>
  test component
  <span>{group}</span>
  <SeuCheckboxGroup
    options={[
      { label: 'Shanghai', value: 1 },
      { label: 'Beijing', value: 2 },
      { label: 'Guangzhou', value: 3 },
      { label: 'Shenzhen', value: 4 },
    ]}
    bind:group
  />
</div>
