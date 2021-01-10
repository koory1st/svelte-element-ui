<script type="ts">
  import SeuRadio from '../../src/radio/SeuRadio.svelte'
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
  <SeuRadio bind:value label="1" on:change={changeHandler}>label4</SeuRadio>
</div>
