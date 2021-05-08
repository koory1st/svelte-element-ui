<script lang="ts">
  import { SeuCheckbox } from 'svelte-element-ui'
  let checked1 = false
  let checked2 = true
</script>

<div>
  <SeuCheckbox bind:value={checked1} disabled>Option</SeuCheckbox>
  <SeuCheckbox bind:value={checked2} disabled>Option</SeuCheckbox>
</div>
