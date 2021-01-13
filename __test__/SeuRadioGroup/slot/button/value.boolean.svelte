<script type="ts">
  import SeuRadioGroup from '../../../../src/radio/SeuRadioGroup.svelte'
  import SeuRadioButton from '../../../../src/radio/SeuRadioButton.svelte'
  let value
</script>

<div>
  test component
  <span> value: {value} </span>
  <SeuRadioGroup>
    <SeuRadioButton bind:value label={true}>label1</SeuRadioButton>
    <SeuRadioButton bind:value label={false}>label2</SeuRadioButton>
  </SeuRadioGroup>
</div>
<button on:click={() => (value = true)}>button01</button>
<button on:click={() => (value = false)}>button02</button>
