<script type="ts">
  import SeuContainer from '../../src/container/SeuContainer.svelte'
  import SeuAside from '../../src/aside/SeuAside.svelte'
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
