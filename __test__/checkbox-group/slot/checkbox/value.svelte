<script type="ts">
  import SeuCheckboxGroup from '../../../../packages/checkbox-group/SeuCheckboxGroup.svelte'
  import SeuCheckbox from '../../../../packages/checkbox/SeuCheckbox.svelte'
  let group
</script>

<div>
  test component
  <span>slot</span>
  <span>group: {group}</span>
  <SeuCheckboxGroup>
    <SeuCheckbox bind:group label="Shanghai" />
    <SeuCheckbox bind:group label="Beijing" />
    <SeuCheckbox bind:group label="Guangzhou" />
    <SeuCheckbox bind:group label="Shenzhen" />
  </SeuCheckboxGroup>
</div>

<button on:click={() => (group = ['Shanghai'])}>buttonShanghai</button>
<button on:click={() => (group = ['Beijing'])}>buttonBeijing</button>
<button on:click={() => (group = ['Guangzhou'])}>buttonGuangzhou</button>
<button on:click={() => (group = ['Shenzhen'])}>buttonShenzhen</button>
<button on:click={() => (group = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'])}>buttonAll</button>
<button on:click={() => (group = [])}>buttonEmpty</button>
