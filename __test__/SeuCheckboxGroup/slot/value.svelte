<script type="ts">
  import SeuCheckboxGroup from '../../../src/checkbox/SeuCheckboxGroup.svelte'
  import SeuCheckbox from '../../../src/checkbox/SeuCheckbox.svelte'
  let group
</script>

<div>
  test component
  <span>slot</span>
  <span>group: {group}</span>
  <SeuCheckboxGroup bind:group>
    <SeuCheckbox label="Shanghai" />
    <SeuCheckbox label="Beijing" />
    <SeuCheckbox label="Guangzhou" />
    <SeuCheckbox label="Shenzhen" />
  </SeuCheckboxGroup>
</div>

<button on:click={() => (group = ['Shanghai'])}>buttonShanghai</button>
<button on:click={() => (group = ['Beijing'])}>buttonBeijing</button>
<button on:click={() => (group = ['Guangzhou'])}>buttonGuangzhou</button>
<button on:click={() => (group = ['Shenzhen'])}>buttonShenzhen</button>
<button on:click={() => (group = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'])}>buttonAll</button>
<button on:click={() => (group = [])}>buttonEmpty</button>
