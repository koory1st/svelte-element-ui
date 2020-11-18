<script type="ts">
  import SeuContainer from '../../src/SeuContainer.svelte'
  import SeuHeader from '../../src/SeuHeader.svelte'
  export let height
</script>

<SeuContainer>
  <SeuHeader class="abc" style="color:red;font-size:14px" {height}>seu header</SeuHeader>
</SeuContainer>
