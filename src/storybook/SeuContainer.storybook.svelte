<script>
  import SeuContainer from '../SeuContainer.svelte';
  import SeuHeader from '../SeuHeader.svelte';
  import SeuMain from '../SeuMain.svelte';
</script>

<SeuContainer {...$$props}>
  <SeuHeader>header</SeuHeader>
  <SeuMain>main</SeuMain>
</SeuContainer>
