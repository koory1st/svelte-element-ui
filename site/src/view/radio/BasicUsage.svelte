<script lang="ts">
  import { SeuRadio } from 'svelte-element-ui'
  let radio = '1'
</script>

<div>
  <SeuRadio bind:value={radio} label="1">Option A</SeuRadio>
  <SeuRadio bind:value={radio} label="2">Option B</SeuRadio>
</div>
