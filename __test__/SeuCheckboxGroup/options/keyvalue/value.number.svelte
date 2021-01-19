<script type="ts">
  import SeuCheckboxGroup from '../../../../packages/checkboxGroup/SeuCheckboxGroup.svelte'
  let group
</script>

<div>
  test component
  <span>{group}</span>
  <SeuCheckboxGroup
    options={[
      { label: 'Shanghai', value: 1 },
      { label: 'Beijing', value: 2 },
      { label: 'Guangzhou', value: 3 },
    ]}
    bind:group
  />
</div>

<button on:click={() => (group = [1])}>buttonShanghai</button>
<button on:click={() => (group = [2])}>buttonBeijing</button>
<button on:click={() => (group = [3])}>buttonGuangzhou</button>
<button on:click={() => (group = [1, 2, 3])}>buttonAll</button>
<button on:click={() => (group = [])}>buttonEmpty</button>
