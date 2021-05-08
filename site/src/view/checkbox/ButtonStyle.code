<script lang="ts">
  import { SeuCheckboxGroup, SeuCheckboxButton } from 'svelte-element-ui'
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
  let checkboxGroup1 = ['Shanghai']
  let checkboxGroup2 = ['Shanghai']
  let checkboxGroup3 = ['Shanghai']
  let checkboxGroup4 = ['Shanghai']
</script>

<div>
  <SeuCheckboxGroup bind:group={checkboxGroup1} options={cityOptions} type="button" />
</div>

<div style="margin-top: 20px">
  <SeuCheckboxGroup bind:group={checkboxGroup2} options={cityOptions} type="button" size="medium" />
</div>

<div style="margin-top: 20px">
  <SeuCheckboxGroup>
    {#each cityOptions as city}
      <SeuCheckboxButton bind:group={checkboxGroup3} label={city} size="small" disabled={city === 'Beijing'} />
    {/each}
  </SeuCheckboxGroup>
</div>

<div style="margin-top: 20px">
  <SeuCheckboxGroup bind:group={checkboxGroup4} options={cityOptions} type="button" size="mini" disabled />
</div>
