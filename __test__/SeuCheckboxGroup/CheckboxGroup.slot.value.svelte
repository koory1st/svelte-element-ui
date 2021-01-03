<script type="ts">
  import SeuCheckboxGroup from '../../src/checkbox/SeuCheckboxGroup.svelte'
  import SeuCheckbox from '../../src/checkbox/SeuCheckbox.svelte'
  let group
</script>

<div>
  test component
  <span>slot</span>
  <span>{group}</span>
  <SeuCheckboxGroup>
    <SeuCheckbox label="Shanghai" bind:group />
    <SeuCheckbox label="Beijing" bind:group />
    <SeuCheckbox label="Guangzhou" bind:group />
    <SeuCheckbox label="Shenzhen" bind:group />
  </SeuCheckboxGroup>
</div>

<button on:click={() => (group = ['Shanghai'])}>buttonShanghai</button>
<button on:click={() => (group = ['Beijing'])}>buttonBeijing</button>
<button on:click={() => (group = ['Guangzhou'])}>buttonGuangzhou</button>
<button on:click={() => (group = ['Shenzhen'])}>buttonShenzhen</button>
<button on:click={() => (group = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'])}>buttonAll</button>
<button on:click={() => (group = [])}>buttonEmpty</button>
