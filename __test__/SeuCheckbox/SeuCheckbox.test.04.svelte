<script type="ts">
  import SeuCheckbox from '../../src/checkbox/SeuCheckbox.svelte'
  let value = false
</script>

<div>
  SeuCheckbox04
  <div id="value">{value}</div>
  <SeuCheckbox bind:value>label4</SeuCheckbox>
</div>
