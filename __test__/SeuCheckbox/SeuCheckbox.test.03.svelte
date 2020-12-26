<script type="ts">
  import SeuCheckbox from '../../src/checkbox/SeuCheckbox.svelte'
  let disabled = false
</script>

<div>
  SeuCheckbox03
  <SeuCheckbox {disabled}>label3</SeuCheckbox>
</div>
<button on:click={() => (disabled = true)}>button03</button>
