<script type="ts">
  import SeuRadio from '../../packages/radio/SeuRadio.svelte'
  let value = '0'
</script>

<div>
  test component
  <SeuRadio bind:value label={'1'}>label2</SeuRadio>
</div>
<button on:click={() => (value = value === '1' ? '0' : '1')}>button02</button>
