<script type="ts">
  import SeuRadioGroup from '../../../../packages/radioGroup/SeuRadioGroup.svelte'
  import SeuRadio from '../../../../packages/radio/SeuRadio.svelte'
  let value
</script>

<div>
  test component
  <span> value: {value} </span>
  <SeuRadioGroup>
    <SeuRadio bind:value label={1}>label1</SeuRadio>
    <SeuRadio bind:value label={2}>label2</SeuRadio>
    <SeuRadio bind:value label={3}>label3</SeuRadio>
  </SeuRadioGroup>
</div>
<button on:click={() => (value = 1)}>button01</button>
<button on:click={() => (value = 2)}>button02</button>
<button on:click={() => (value = 3)}>button03</button>
