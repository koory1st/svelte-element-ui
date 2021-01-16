<script type="ts">
  import SeuRadio from '../../src/radio/SeuRadio.svelte'
  let value = false
</script>

<div>
  test component
  <div id="value">{value}</div>
  <SeuRadio bind:value label="1">label1</SeuRadio>
  <SeuRadio bind:value label="2">label2</SeuRadio>
</div>
