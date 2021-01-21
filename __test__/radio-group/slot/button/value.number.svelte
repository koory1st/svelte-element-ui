<script type="ts">
  import SeuRadioGroup from '../../../../packages/radio-group/SeuRadioGroup.svelte'
  import SeuRadioButton from '../../../../packages/radio-button/SeuRadioButton.svelte'
  let value
</script>

<div>
  test component
  <span> value: {value} </span>
  <SeuRadioGroup>
    <SeuRadioButton bind:value label={1}>label1</SeuRadioButton>
    <SeuRadioButton bind:value label={2}>label2</SeuRadioButton>
    <SeuRadioButton bind:value label={3}>label3</SeuRadioButton>
  </SeuRadioGroup>
</div>
<button on:click={() => (value = 1)}>button01</button>
<button on:click={() => (value = 2)}>button02</button>
<button on:click={() => (value = 3)}>button03</button>
