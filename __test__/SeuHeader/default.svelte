<script type="ts">
  import SeuContainer from '../../packages/container/SeuContainer.svelte'
  import SeuHeader from '../../packages/header/SeuHeader.svelte'
</script>

<div>
  test component
  <SeuContainer>
    <SeuHeader>seu header 01</SeuHeader>
  </SeuContainer>
  <SeuContainer>
    <SeuHeader height="10px">seu header 02</SeuHeader>
  </SeuContainer>
</div>
