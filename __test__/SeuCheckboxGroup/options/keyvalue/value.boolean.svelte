<script type="ts">
  import SeuCheckboxGroup from '../../../../src/checkbox/SeuCheckboxGroup.svelte'
  let group
</script>

<div>
  test component
  <span>{group}</span>
  <SeuCheckboxGroup
    options={[{ label: 'Shanghai', value: false }, { label: 'Beijing', value: true }]}
    bind:group />
</div>

<button on:click={() => (group = [false])}>buttonShanghai</button>
<button on:click={() => (group = [true])}>buttonBeijing</button>
<button on:click={() => (group = [false, true])}>buttonAll</button>
<button on:click={() => (group = [])}>buttonEmpty</button>
