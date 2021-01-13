<script type="ts">
  import SeuCheckboxGroup from '../../../../src/checkbox/SeuCheckboxGroup.svelte'
</script>

<div>
  test component
  <SeuCheckboxGroup
    size="medium"
    options={[{ label: 'Shanghai', value: 1 }, { label: 'Beijing', value: 2 }, { label: 'Guangzhou', value: 3 }]} />
  <SeuCheckboxGroup
    border
    size="medium"
    options={[{ label: 'Shanghai', value: 1 }, { label: 'Beijing', value: 2 }, { label: 'Guangzhou', value: 3 }]} />
  <SeuCheckboxGroup
    border
    size="small"
    options={[{ label: 'Shanghai', value: 1 }, { label: 'Beijing', value: 2 }, { label: 'Guangzhou', value: 3 }]} />
  <SeuCheckboxGroup
    border
    size="mini"
    options={[{ label: 'Shanghai', value: 1 }, { label: 'Beijing', value: 2 }, { label: 'Guangzhou', value: 3 }]} />
</div>
