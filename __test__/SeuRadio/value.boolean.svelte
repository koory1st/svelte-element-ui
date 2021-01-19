<script type="ts">
  import SeuRadio from '../../packages/radio/SeuRadio.svelte'
  let value = false
</script>

<div>
  test component
  <SeuRadio bind:value label={true}>label2</SeuRadio>
</div>
<button on:click={() => (value = !value)}>button02</button>
