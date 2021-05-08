<script lang="ts">
  import { SeuCheckbox, SeuCheckboxGroup } from 'svelte-element-ui'
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

  let checkAll = false
  let checkedCities = ['Shanghai', 'Beijing']
  let isIndeterminate = true

  function handleCheckAllChange(e) {
    checkedCities = e.detail ? cityOptions : []
    isIndeterminate = false
  }

  function handleCheckedCitiesChange(e) {
    let checkedCount = e.detail.length
    checkAll = checkedCount === cityOptions.length
    isIndeterminate = checkedCount > 0 && checkedCount < cityOptions.length
  }
</script>

<div>
  <SeuCheckbox indeterminate={isIndeterminate} bind:value={checkAll} on:change={handleCheckAllChange}>
    Check all
  </SeuCheckbox>
  <SeuCheckboxGroup bind:group={checkedCities} options={cityOptions} on:change={handleCheckedCitiesChange} />
</div>
