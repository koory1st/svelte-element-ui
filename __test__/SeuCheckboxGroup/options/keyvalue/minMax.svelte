<script type="ts">
  import SeuCheckboxGroup from '../../../../src/checkbox/SeuCheckboxGroup.svelte'
  let group
</script>

<div>
  test component
  <span>{group}</span>
  <SeuCheckboxGroup
    min={1}
    max="3"
    options={[
      { label: 'Shanghai', value: 1 },
      { label: 'Beijing', value: 2 },
      { label: 'Guangzhou', value: 3 },
      { label: 'Shenzhen', value: 4 },
    ]}
    bind:group
  />
</div>
