<script type="ts">
  import SeuRadioGroup from '../../../src/radio/SeuRadioGroup.svelte'
  let value = null
</script>

<div>
  test component
  <span> value: {value} </span>
  <SeuRadioGroup
    bind:value
    options={[{ label: 'a', value: true }, { label: 'b', value: false }]} />
</div>
<button on:click={() => (value = true)}>button01</button>
<button on:click={() => (value = false)}>button02</button>
