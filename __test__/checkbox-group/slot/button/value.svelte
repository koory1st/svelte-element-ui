<script type="ts">
  import SeuCheckboxGroup from '../../../../packages/checkbox-group/SeuCheckboxGroup.svelte'
  import SeuCheckboxButton from '../../../../packages/checkbox-button/SeuCheckboxButton.svelte'
  let group
</script>

<div>
  test component
  <span>slot</span>
  <span>group: {group}</span>
  <SeuCheckboxGroup>
    <SeuCheckboxButton bind:group label="Shanghai" />
    <SeuCheckboxButton bind:group label="Beijing" />
    <SeuCheckboxButton bind:group label="Guangzhou" />
    <SeuCheckboxButton bind:group label="Shenzhen" />
  </SeuCheckboxGroup>
</div>

<button on:click={() => (group = ['Shanghai'])}>buttonShanghai</button>
<button on:click={() => (group = ['Beijing'])}>buttonBeijing</button>
<button on:click={() => (group = ['Guangzhou'])}>buttonGuangzhou</button>
<button on:click={() => (group = ['Shenzhen'])}>buttonShenzhen</button>
<button on:click={() => (group = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'])}>buttonAll</button>
<button on:click={() => (group = [])}>buttonEmpty</button>
