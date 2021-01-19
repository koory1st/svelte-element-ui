<script type="ts">
  import SeuRadioGroup from '../../../packages/radioGroup/SeuRadioGroup.svelte'
  let value
</script>

<div>
  test component
  <span> value: {value} </span>
  <SeuRadioGroup
    bind:value
    options={[
      { label: 'a', value: '1' },
      { label: 'b', value: '2' },
      { label: 'c', value: '3' },
    ]}
  />
</div>
<button on:click={() => (value = '1')}>button01</button>
<button on:click={() => (value = '2')}>button02</button>
<button on:click={() => (value = '3')}>button03</button>
