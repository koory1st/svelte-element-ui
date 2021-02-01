<script lang="ts">
  import { SeuContainer, SeuButton, SeuRadio } from '@/index.ts'
  export let name: string
  let value
</script>

<SeuContainer>
  value:
  {value}
  <SeuRadio bind:value label="1">1</SeuRadio>
  <SeuRadio bind:value label="2">2</SeuRadio>
  <SeuButton loading>111</SeuButton>
</SeuContainer>
