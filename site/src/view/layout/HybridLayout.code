<script lang="ts">
  import { SeuRow, SeuCol } from 'svelte-element-ui'
</script>

<div class="hybrid-layout">
  <SeuRow gutter={20}>
    <SeuCol span={16}><div class="grid-content bg-purple" /></SeuCol>
    <SeuCol span={8}><div class="grid-content bg-purple" /></SeuCol>
  </SeuRow>
  <SeuRow gutter={20}>
    <SeuCol span={8}><div class="grid-content bg-purple" /></SeuCol>
    <SeuCol span={8}><div class="grid-content bg-purple" /></SeuCol>
    <SeuCol span={4}><div class="grid-content bg-purple" /></SeuCol>
    <SeuCol span={4}><div class="grid-content bg-purple" /></SeuCol>
  </SeuRow>
  <SeuRow gutter={20}>
    <SeuCol span={4}><div class="grid-content bg-purple" /></SeuCol>
    <SeuCol span={16}><div class="grid-content bg-purple" /></SeuCol>
    <SeuCol span={4}><div class="grid-content bg-purple" /></SeuCol>
  </SeuRow>
</div>

<style lang="scss">
  :global(.hybrid-layout .seu-row) {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  :global(.hybrid-layout .seu-col) {
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
