<script type="ts">
  import SeuRadioGroup from '../../../../packages/radio-group/SeuRadioGroup.svelte'
  import SeuRadio from '../../../../packages/radio/SeuRadio.svelte'
  let value
</script>

<div>
  test component
  <span> value: {value} </span>
  <SeuRadioGroup>
    <SeuRadio bind:value label={true}>label1</SeuRadio>
    <SeuRadio bind:value label={false}>label2</SeuRadio>
  </SeuRadioGroup>
</div>
<button on:click={() => (value = true)}>button01</button>
<button on:click={() => (value = false)}>button02</button>
