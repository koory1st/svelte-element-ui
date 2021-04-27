<script type="ts">
  import { SeuRow, SeuCol } from "svelte-element-ui";
</script>
<div class="column-spacing">
  <SeuRow gutter={20}>
    <SeuCol span={6}><div class="grid-content bg-purple"></div></SeuCol>
    <SeuCol span={6}><div class="grid-content bg-purple"></div></SeuCol>
    <SeuCol span={6}><div class="grid-content bg-purple"></div></SeuCol>
    <SeuCol span={6}><div class="grid-content bg-purple"></div></SeuCol>
  </SeuRow>
</div>

<style lang="scss">
  :global(.column-spacing .seu-row) {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  :global(.column-spacing .seu-col) {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>