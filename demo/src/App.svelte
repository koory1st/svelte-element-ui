<script lang="ts">
  import SeuContainer from 'pkg/container'
  import SeuButton from 'pkg/button'
  import SeuRadio from 'pkg/radio'
  export let name: string
  let value
</script>

<SeuContainer>
  value:
  {value}
  <SeuRadio bind:value label="1">1</SeuRadio>
  <SeuRadio bind:value label="2">2</SeuRadio>
  <SeuButton>111</SeuButton>
</SeuContainer>
