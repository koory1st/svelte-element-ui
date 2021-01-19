<script type="ts">
  import SeuContainer from '../../packages/container/SeuContainer.svelte'
  import SeuAside from '../../packages/aside/SeuAside.svelte'
</script>

<div>
  test component
  <SeuContainer>
    <SeuAside>seu aside</SeuAside>
  </SeuContainer>

  <SeuContainer>
    <SeuAside width="10px">seu aside</SeuAside>
  </SeuContainer>
</div>
