<script type="ts">
  import SeuCheckbox from '../../src/checkbox/SeuCheckbox.svelte'
  let value
</script>

<div>
  test component
  <div id="value">{value}</div>
  <SeuCheckbox checkedValue={1} uncheckedValue={0} bind:value>label5</SeuCheckbox>
</div>

<button id="buttonYes" on:click={() => (value = 1)}>button-yes</button>
<button id="buttonNo" on:click={() => (value = 0)}>button-no</button>
