<style>
  :global(.seu-row) {
    margin-bottom: 20px;
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
  .seu-col {
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
  :global(.height-100) {
    height: 100px;
  }
</style>

<script>
  import { SeuRow, SeuCol } from '../dist/bundle'
  export let colSpan
  export let rowGutter
  export let rowType
  export let rowJustify
  export let rowAlign
</script>

<h1>Layout</h1>
<p>Quickly and easily create layouts with the basic 24-column.</p>

<h2>Try It with Knobs below</h2>

<SeuRow class="height-100" gutter={rowGutter} type={rowType} justify={rowJustify} align={rowAlign}>
  <SeuCol span={colSpan}>
    <div class="grid-content bg-purple-dark" />
  </SeuCol>
  <SeuCol span={colSpan}>
    <div class="grid-content bg-purple-dark" />
  </SeuCol>
</SeuRow>

<h2>Basic layout</h2>
<p>Create basic grid layout using columns.</p>
<SeuRow>
  <SeuCol span="24">
    <div class="grid-content bg-purple-dark" />
  </SeuCol>
</SeuRow>
<SeuRow>
  <SeuCol span="12">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="12">
    <div class="grid-content bg-purple-light" />
  </SeuCol>
</SeuRow>
<SeuRow>
  <SeuCol span="8">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="8">
    <div class="grid-content bg-purple-light" />
  </SeuCol>
  <SeuCol span="8">
    <div class="grid-content bg-purple" />
  </SeuCol>
</SeuRow>
<SeuRow>
  <SeuCol span="6">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="6">
    <div class="grid-content bg-purple-light" />
  </SeuCol>
  <SeuCol span="6">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="6">
    <div class="grid-content bg-purple-light" />
  </SeuCol>
</SeuRow>
<SeuRow>
  <SeuCol span="4">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="4">
    <div class="grid-content bg-purple-light" />
  </SeuCol>
  <SeuCol span="4">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="4">
    <div class="grid-content bg-purple-light" />
  </SeuCol>
  <SeuCol span="4">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="4">
    <div class="grid-content bg-purple-light" />
  </SeuCol>
</SeuRow>

<h2>Column spacing</h2>
<SeuRow gutter="20">
  <SeuCol span="6">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="6">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="6">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="6">
    <div class="grid-content bg-purple" />
  </SeuCol>
</SeuRow>

<h2>Hybrid layout</h2>
<SeuRow gutter="20">
  <SeuCol span="16">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="8">
    <div class="grid-content bg-purple" />
  </SeuCol>
</SeuRow>
<SeuRow gutter="20">
  <SeuCol span="8">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="8">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="4">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="4">
    <div class="grid-content bg-purple" />
  </SeuCol>
</SeuRow>
<SeuRow gutter="20">
  <SeuCol span="4">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="16">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="4">
    <div class="grid-content bg-purple" />
  </SeuCol>
</SeuRow>

<h2>Column offset</h2>
<SeuRow gutter="20">
  <SeuCol span="6">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="6" offset="6">
    <div class="grid-content bg-purple" />
  </SeuCol>
</SeuRow>
<SeuRow gutter="20">
  <SeuCol span="6" offset="6">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="6" offset="6">
    <div class="grid-content bg-purple" />
  </SeuCol>
</SeuRow>
<SeuRow gutter="20">
  <SeuCol span="12" offset="6">
    <div class="grid-content bg-purple" />
  </SeuCol>
</SeuRow>

<h2>Alignment</h2>
<SeuRow type="flex" class="row-bg">
  <SeuCol span="6">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="6">
    <div class="grid-content bg-purple-light" />
  </SeuCol>
  <SeuCol span="6">
    <div class="grid-content bg-purple" />
  </SeuCol>
</SeuRow>
<SeuRow type="flex" class="row-bg" justify="center">
  <SeuCol span="6">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="6">
    <div class="grid-content bg-purple-light" />
  </SeuCol>
  <SeuCol span="6">
    <div class="grid-content bg-purple" />
  </SeuCol>
</SeuRow>
<SeuRow type="flex" class="row-bg" justify="end">
  <SeuCol span="6">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="6">
    <div class="grid-content bg-purple-light" />
  </SeuCol>
  <SeuCol span="6">
    <div class="grid-content bg-purple" />
  </SeuCol>
</SeuRow>
<SeuRow type="flex" class="row-bg" justify="space-between">
  <SeuCol span="6">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="6">
    <div class="grid-content bg-purple-light" />
  </SeuCol>
  <SeuCol span="6">
    <div class="grid-content bg-purple" />
  </SeuCol>
</SeuRow>
<SeuRow type="flex" class="row-bg" justify="space-around">
  <SeuCol span="6">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="6">
    <div class="grid-content bg-purple-light" />
  </SeuCol>
  <SeuCol span="6">
    <div class="grid-content bg-purple" />
  </SeuCol>
</SeuRow>

<h2>Responsive Layout</h2>
<SeuRow gutter="10">
  <SeuCol xs="8" sm="6" md="4" lg="3" xl="1">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol xs="4" sm="6" md="8" lg="9" xl="11">
    <div class="grid-content bg-purple-light" />
  </SeuCol>
  <SeuCol xs="4" sm="6" md="8" lg="9" xl="11">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol xs="8" sm="6" md="4" lg="3" xl="1">
    <div class="grid-content bg-purple-light" />
  </SeuCol>
</SeuRow>
