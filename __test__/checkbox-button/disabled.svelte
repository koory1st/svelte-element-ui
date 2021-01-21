<script type="ts">
  import SeuCheckboxButton from '../../packages/checkbox-button/SeuCheckboxButton.svelte'
  let disabled = false
</script>

<div>
  test component
  <SeuCheckboxButton {disabled}>label3</SeuCheckboxButton>
</div>
<button on:click={() => (disabled = !disabled)}>button03</button>
