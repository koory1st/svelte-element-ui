<script lang="ts">
  import { SeuRow, SeuCol } from 'svelte-element-ui'
</script>

<h2>Layout</h2>
<p>Quickly and easily create layouts with the basic 24-column.</p>

<h3>Basic layout</h3>
<p>Create basic grid layout using columns.</p>
<div class="basic-layout">
  <SeuRow>
    <SeuCol span="24"><div class="grid-content bg-purple-dark" /></SeuCol>
  </SeuRow>
  <SeuRow>
    <SeuCol span="12"><div class="grid-content bg-purple" /></SeuCol>
    <SeuCol span="12"><div class="grid-content bg-purple-light" /></SeuCol>
  </SeuRow>
  <SeuRow>
    <SeuCol span="8"><div class="grid-content bg-purple" /></SeuCol>
    <SeuCol span="8"><div class="grid-content bg-purple-light" /></SeuCol>
    <SeuCol span="8"><div class="grid-content bg-purple" /></SeuCol>
  </SeuRow>

  <SeuRow>
    <SeuCol span="6"><div class="grid-content bg-purple" /></SeuCol>
    <SeuCol span="6"><div class="grid-content bg-purple-light" /></SeuCol>
    <SeuCol span="6"><div class="grid-content bg-purple" /></SeuCol>
    <SeuCol span="6"><div class="grid-content bg-purple-light" /></SeuCol>
  </SeuRow>
  <SeuRow>
    <SeuCol span="4"><div class="grid-content bg-purple" /></SeuCol>
    <SeuCol span="4"><div class="grid-content bg-purple-light" /></SeuCol>
    <SeuCol span="4"><div class="grid-content bg-purple" /></SeuCol>
    <SeuCol span="4"><div class="grid-content bg-purple-light" /></SeuCol>
    <SeuCol span="4"><div class="grid-content bg-purple" /></SeuCol>
    <SeuCol span="4"><div class="grid-content bg-purple-light" /></SeuCol>
  </SeuRow>
</div>

<style lang="scss">
  :global(.basic-layout .seu-row) {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  :global(.basic-layout .seu-col) {
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
