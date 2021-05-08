<script lang="ts">
  import { SeuCheckboxGroup } from 'svelte-element-ui'
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
  let checkedCities = ['Shanghai', 'Beijing']
</script>

<div>
  <SeuCheckboxGroup bind:group={checkedCities} options={cityOptions} min={1} max={3} />
</div>
