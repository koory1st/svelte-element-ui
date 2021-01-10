<script type="ts">
  import SeuRadioButton from '../../src/radio/SeuRadioButton.svelte'
  let value
  let changedValue

  function changeHandler({ detail }) {
    changedValue = `label:${detail.label}, value:${detail.value}`
  }
</script>

<div>
  test component
  <span>changedValue:{changedValue}</span>
  <div id="value">{value}</div>
  <SeuRadioButton bind:value label="1" on:change={changeHandler}>label4</SeuRadioButton>
</div>
