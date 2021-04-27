<script lang="ts">
  import { SeuRow, SeuCol } from '../../src/index'
</script>

<div class="alignment">
  <SeuRow type="flex" class="row-bg">
    <SeuCol span={6}><div class="grid-content bg-purple" /></SeuCol>
    <SeuCol span={6}><div class="grid-content bg-purple-light" /></SeuCol>
    <SeuCol span={6}><div class="grid-content bg-purple" /></SeuCol>
  </SeuRow>
</div>

<style lang="scss">
  :global(.alignment .seu-row) {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  :global(.alignment .seu-col) {
    border-radius: 4px;
  }
  :global(.alignment .row-bg) {
    padding: 10px 0;
    background-color: #f9fafc;
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
</style>
