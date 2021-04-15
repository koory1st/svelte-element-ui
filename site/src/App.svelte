<script lang="ts">
  import { SeuContainer, SeuHeader, SeuAside, SeuMain, SeuFooter } from 'svelte-element-ui'
  import 'svelte-element-ui/dist/style.css'
  import Menu from './lib/Menu.svelte'
  import RouterView from './lib/RouterView.svelte'
</script>

<SeuContainer direction="vertical">
  <SeuHeader>svelte-element-ui</SeuHeader>
  <SeuContainer>
    <SeuAside>
      <Menu />
    </SeuAside>
    <SeuMain>
      <RouterView />
    </SeuMain>
  </SeuContainer>
</SeuContainer>
