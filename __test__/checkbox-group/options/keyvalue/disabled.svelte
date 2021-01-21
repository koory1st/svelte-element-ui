<script type="ts">
  import SeuCheckboxGroup from '../../../../packages/checkbox-group/SeuCheckboxGroup.svelte'
</script>

<div>
  test component
  <SeuCheckboxGroup
    options={[
      { label: 'Shanghai', value: 1, disabled: true },
      { label: 'Beijing', value: 2 },
      { label: 'Guangzhou', value: 3 },
    ]}
  />
  <SeuCheckboxGroup
    disabled
    options={[
      { label: 'Shanghai', value: 1 },
      { label: 'Beijing', value: 2 },
      { label: 'Guangzhou', value: 3 },
    ]}
  />
  <SeuCheckboxGroup
    disabled
    options={[
      { label: 'Shanghai', value: 1, disabled: true },
      { label: 'Beijing', value: 2 },
      { label: 'Guangzhou', value: 3 },
    ]}
  />
</div>
