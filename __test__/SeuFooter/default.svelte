<script type="ts">
  import SeuContainer from '../../src/container/SeuContainer.svelte'
  import SeuFooter from '../../src/footer/SeuFooter.svelte'
</script>

<div>
  test component
  <SeuContainer>
    <SeuFooter>seu footer 01</SeuFooter>
  </SeuContainer>
  <SeuContainer>
    <SeuFooter height="10px">seu footer 02</SeuFooter>
  </SeuContainer>
</div>
