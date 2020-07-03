<script>
  import SeuContainer from '../SeuContainer.svelte';
  import SeuHeader from '../SeuHeader.svelte';
  import SeuMain from '../SeuMain.svelte';
  import SeuFooter from '../SeuFooter.svelte';
  import SeuAside from '../SeuAside.svelte';
</script>

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
