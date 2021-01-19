<script type="ts">
  import SeuCheckboxButton from '../../packages/checkboxButton/SeuCheckboxButton.svelte'
  let value
</script>

<div>
  test component
  <div id="value">{value}</div>
  <SeuCheckboxButton checkedValue={1} uncheckedValue={0} bind:value>label5</SeuCheckboxButton>
</div>

<button id="buttonYes" on:click={() => (value = 1)}>button-yes</button>
<button id="buttonNo" on:click={() => (value = 0)}>button-no</button>
