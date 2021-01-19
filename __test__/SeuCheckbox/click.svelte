<script type="ts">
  import SeuCheckbox from '../../packages/checkbox/SeuCheckbox.svelte'
  let value = false
</script>

<div>
  test component
  <div id="value">{value}</div>
  <SeuCheckbox bind:value>label4</SeuCheckbox>
</div>
