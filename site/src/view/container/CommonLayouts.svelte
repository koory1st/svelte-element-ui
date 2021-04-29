<script lang="ts">
  import { SeuContainer, SeuHeader, SeuAside, SeuMain, SeuFooter } from 'svelte-element-ui'
</script>

<div class="common-layouts">
  <SeuContainer direction="vertical">
    <SeuHeader>Header</SeuHeader>
    <SeuMain>Main</SeuMain>
  </SeuContainer>
-
  <SeuContainer direction="vertical">
    <SeuHeader>Header</SeuHeader>
    <SeuMain>Main</SeuMain>
    <SeuFooter>Footer</SeuFooter>
  </SeuContainer>
-
  <SeuContainer>
    <SeuAside width="200px">Aside</SeuAside>
    <SeuMain>Main</SeuMain>
  </SeuContainer>
-
  <SeuContainer direction="vertical">
    <SeuHeader>Header</SeuHeader>
    <SeuContainer>
      <SeuAside width="200px">Aside</SeuAside>
      <SeuMain>Main</SeuMain>
    </SeuContainer>
  </SeuContainer>
-
  <SeuContainer>
    <SeuAside width="200px">Aside</SeuAside>
    <SeuContainer direction="vertical">
      <SeuHeader>Header</SeuHeader>
      <SeuMain>Main</SeuMain>
    </SeuContainer>
  </SeuContainer>
-
  <SeuContainer>
    <SeuAside width="200px">Aside</SeuAside>
    <SeuContainer direction="vertical">
      <SeuHeader>Header</SeuHeader>
      <SeuMain>Main</SeuMain>
      <SeuFooter>Footer</SeuFooter>
    </SeuContainer>
  </SeuContainer>
</div>

<style lang="scss">
  :global(.common-layouts .seu-header, .common-layouts .seu-footer) {
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      line-height: 60px;
  }
  :global(.common-layouts .seu-aside) {
      background-color: #D3DCE6;
      color: #333;
      text-align: center;
      line-height: 200px;
  }

  :global(.common-layouts .seu-main) {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      line-height: 160px;
  }

  :global(body > .seu-container) {
    margin-bottom: 40px;
  }

  :global(.seu-container:nth-child(5) .seu-aside,
  .seu-container:nth-child(6) .seu-aside) {
    line-height: 260px;
  }

  :global(.seu-container:nth-child(7) .seu-aside) {
    line-height: 320px;
  }
</style>
