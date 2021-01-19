<script type="ts">
  import SeuCheckboxGroup from '../../../../packages/checkboxGroup/SeuCheckboxGroup.svelte'
  let group
</script>

<div>
  test component
  <span>{group}</span>
  <SeuCheckboxGroup min={1} max="3" options={['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']} bind:group />
</div>
