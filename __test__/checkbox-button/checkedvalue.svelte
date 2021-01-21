<script type="ts">
  import SeuCheckboxButton from '../../packages/checkbox-button/SeuCheckboxButton.svelte'
  let value
</script>

<div>
  test component
  <div id="value">{value}</div>
  <SeuCheckboxButton checkedValue="yes" uncheckedValue="no" bind:value>label5</SeuCheckboxButton>
</div>

<button id="buttonYes" on:click={() => (value = 'yes')}>button-yes</button>
<button id="buttonNo" on:click={() => (value = 'no')}>button-no</button>
