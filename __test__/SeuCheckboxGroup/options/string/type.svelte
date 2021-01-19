<script type="ts">
  import SeuCheckboxGroup from '../../../../packages/checkboxGroup/SeuCheckboxGroup.svelte'
  let group
</script>

<div>
  test component
  <span>{group}</span>
  <SeuCheckboxGroup options={['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']} bind:group />
  <SeuCheckboxGroup type="button" options={['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']} bind:group />
</div>
