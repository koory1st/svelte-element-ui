<script type="ts">
  import SeuRadio from '../../packages/radio/SeuRadio.svelte'
  let value
  let changedValue

  function changeHandler({ detail }) {
    changedValue = detail
  }
</script>

<div>
  test component
  <span>changedValue:{changedValue}</span>
  <div id="value">{value}</div>
  <SeuRadio bind:value label="1" on:change={changeHandler}>label4</SeuRadio>
</div>
