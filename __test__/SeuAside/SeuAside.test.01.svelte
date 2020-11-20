<script type="ts">
  import SeuContainer from '../../src/SeuContainer.svelte'
  import SeuAside from '../../src/SeuAside.svelte'
  export let width
</script>

<SeuContainer>
  <SeuAside class="abc" style="color:red;font-size:14px" {width}>seu aside</SeuAside>
</SeuContainer>
