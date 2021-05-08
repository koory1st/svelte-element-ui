<script lang="ts">
  import { SeuCheckboxGroup } from '../../src/index'
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
  let checkboxGroup1 = ['Shanghai']
  let checkboxGroup2 = ['Shanghai']
  let checkboxGroup3 = ['Shanghai']
  let checkboxGroup4 = ['Shanghai']
</script>

<div>
  {checkboxGroup1}
  <SeuCheckboxGroup bind:group={checkboxGroup1} options={cityOptions} type="button" />
</div>
