<script type="ts">
  import SeuCheckbox from '../../src/checkbox/SeuCheckbox.svelte'
  let disabled = false
</script>

<div>
  test component
  <SeuCheckbox {disabled}>label3</SeuCheckbox>
</div>
<button on:click={() => (disabled = !disabled)}>button03</button>
