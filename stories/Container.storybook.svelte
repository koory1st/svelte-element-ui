<style>
  :global(.seu-header) {
    text-align: center;
  }

  :global(.seu-header) {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
  }
  :global(.seu-main) {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  :global(.seu-footer) {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
    text-align: center;
  }
  :global(.seu-aside) {
    color: #333;
    background-color: #d3dce6;
    text-align: center;
    line-height: 200px;
  }
</style>

<script>
  import { SeuContainer, SeuHeader, SeuMain, SeuFooter, SeuAside } from '../dist/bundle'
  export let containerDirection
  export let headerHeight
</script>

<h2>Container Direction. Try It with Knobs below</h2>
<SeuContainer direction={containerDirection}>
  <SeuMain>Main1</SeuMain>
  <SeuMain>Main2</SeuMain>
</SeuContainer>

<h2>Header height. Try It with Knobs below</h2>
<SeuContainer direction="vertical">
  <SeuHeader height={headerHeight}>Header</SeuHeader>
  <SeuContainer>
    <SeuAside width="200px">Aside</SeuAside>
    <SeuContainer direction="vertical">
      <SeuMain>Main</SeuMain>
      <SeuFooter>Footer</SeuFooter>
    </SeuContainer>
  </SeuContainer>
</SeuContainer>
<h2>Samples</h2>
<SeuContainer direction="vertical">
  <SeuHeader>Header</SeuHeader>
  <SeuMain>Main</SeuMain>
</SeuContainer>

<SeuContainer direction="vertical">
  <SeuHeader>Header</SeuHeader>
  <SeuMain>Main</SeuMain>
  <SeuFooter>Footer</SeuFooter>
</SeuContainer>

<SeuContainer>
  <SeuAside width="200px">Aside</SeuAside>
  <SeuMain>Main</SeuMain>
</SeuContainer>

<SeuContainer direction="vertical">
  <SeuHeader>Header</SeuHeader>
  <SeuContainer>
    <SeuAside width="200px">Aside</SeuAside>
    <SeuMain>Main</SeuMain>
  </SeuContainer>
</SeuContainer>

<SeuContainer direction="vertical">
  <SeuHeader>Header</SeuHeader>
  <SeuContainer>
    <SeuAside width="200px">Aside</SeuAside>
    <SeuContainer direction="vertical">
      <SeuMain>Main</SeuMain>
      <SeuFooter>Footer</SeuFooter>
    </SeuContainer>
  </SeuContainer>
</SeuContainer>

<SeuContainer>
  <SeuAside width="200px">Aside</SeuAside>
  <SeuContainer direction="vertical">
    <SeuHeader>Header</SeuHeader>
    <SeuMain>Main</SeuMain>
  </SeuContainer>
</SeuContainer>

<SeuContainer>
  <SeuAside width="200px">Aside</SeuAside>
  <SeuContainer direction="vertical">
    <SeuHeader>Header</SeuHeader>
    <SeuMain>Main</SeuMain>
    <SeuFooter>Footer</SeuFooter>
  </SeuContainer>
</SeuContainer>
