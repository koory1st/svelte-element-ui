<script type="ts">
  import SeuRadioButton from '../../packages/radio-button/SeuRadioButton.svelte'
  let value = false
</script>

<div>
  test component
  <SeuRadioButton bind:value label={true}>label2</SeuRadioButton>
</div>
<button on:click={() => (value = !value)}>button02</button>
