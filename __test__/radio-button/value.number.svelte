<script type="ts">
  import SeuRadioButton from '../../packages/radio-button/SeuRadioButton.svelte'
  let value = 0
</script>

<div>
  test component
  <SeuRadioButton bind:value label={1}>label2</SeuRadioButton>
</div>
<button on:click={() => (value = value === 1 ? 0 : 1)}>button02</button>
