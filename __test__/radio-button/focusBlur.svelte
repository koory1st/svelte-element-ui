<script type="ts">
  import SeuRadioButton from '../../packages/radio-button/SeuRadioButton.svelte'
  let value = false
</script>

<div>
  test component
  <div id="value">{value}</div>
  <SeuRadioButton bind:value label="1">label1</SeuRadioButton>
  <SeuRadioButton bind:value label="2">label2</SeuRadioButton>
</div>
