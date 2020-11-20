<script type="ts">
  import SeuContainer from '../../src/SeuContainer.svelte'
  import SeuFooter from '../../src/SeuFooter.svelte'
  export let height
</script>

<SeuContainer>
  <SeuFooter class="abc" style="color:red;font-size:14px" {height}>seu footer</SeuFooter>
</SeuContainer>
