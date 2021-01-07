<script type="ts">
  import SeuCheckbox from '../../src/checkbox/SeuCheckbox.svelte'
  let value = false
  let changedValue
</script>

<div>
  test component
  <span>changedValue:{changedValue}</span>
  <div id="value">{value}</div>
  <SeuCheckbox bind:value on:change={event => (changedValue = event.detail)}>label4</SeuCheckbox>
</div>
