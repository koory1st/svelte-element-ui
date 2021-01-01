<script type="ts">
  import SeuCheckbox from '../../src/checkbox/SeuCheckbox.svelte'
  let value
</script>

<div>
  SeuCheckbox.05
  <div id="value">{value}</div>
  <SeuCheckbox checkedValue="yes" uncheckedValue="no" bind:value>label5</SeuCheckbox>
</div>

<button id="buttonYes" on:click={() => (value = 'yes')}>button-yes</button>
<button id="buttonNo" on:click={() => (value = 'no')}>button-no</button>
