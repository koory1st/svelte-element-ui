<script type="ts">
  import SeuCheckboxGroup from '../../../../packages/checkboxGroup/SeuCheckboxGroup.svelte'
  let group
</script>

<div>
  test component
  <span>{group}</span>
  <SeuCheckboxGroup options={['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']} bind:group />
</div>

<button on:click={() => (group = ['Shanghai'])}>buttonShanghai</button>
<button on:click={() => (group = ['Beijing'])}>buttonBeijing</button>
<button on:click={() => (group = ['Guangzhou'])}>buttonGuangzhou</button>
<button on:click={() => (group = ['Shenzhen'])}>buttonShenzhen</button>
<button on:click={() => (group = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'])}>buttonAll</button>
<button on:click={() => (group = [])}>buttonEmpty</button>
