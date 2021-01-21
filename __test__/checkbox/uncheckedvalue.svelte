<script type="ts">
  import SeuCheckbox from '../../packages/checkbox/SeuCheckbox.svelte'
  let value
</script>

<div>
  test component
  <div id="value">{value}</div>
  <SeuCheckbox checkedValue="yes" bind:value>label5</SeuCheckbox>
</div>

<button id="buttonYes" on:click={() => (value = 'yes')}>button-yes</button>
<button id="buttonNo" on:click={() => (value = 'no')}>button-no</button>
