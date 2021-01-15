<script type="ts">
  import SeuCheckboxGroup from '../../../../src/checkbox/SeuCheckboxGroup.svelte'
  let group
</script>

<div>
  test component
  <span>{group}</span>
  <SeuCheckboxGroup options={['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']} bind:group />
  <SeuCheckboxGroup type="button" options={['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']} bind:group />
</div>
