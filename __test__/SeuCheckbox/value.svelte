<script type="ts">
  import SeuCheckbox from '../../src/checkbox/SeuCheckbox.svelte'
  let value = false
</script>

<div>
  test component
  <SeuCheckbox bind:value>label2</SeuCheckbox>
</div>
<button on:click={() => (value = !value)}>button02</button>
