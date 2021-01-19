<script lang="ts">
  import SeuContainer from '@/container/SeuContainer'
  import SeuButton from '@/button/SeuButton'
  import SeuRadio from '@/radio/SeuRadio'
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
