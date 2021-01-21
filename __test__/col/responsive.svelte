<script type="ts">
  import SeuRow from '../../packages/row/SeuRow.svelte'
  import SeuCol from '../../packages/col/SeuCol.svelte'
</script>

<div>
  test component
  <SeuRow>
    <SeuCol xs={6}>Test Col 06</SeuCol>
    <SeuCol sm={7}>Test Col 07</SeuCol>
    <SeuCol md={8}>Test Col 08</SeuCol>
    <SeuCol lg={9}>Test Col 09</SeuCol>
    <SeuCol xl={10}>Test Col 10</SeuCol>
    <SeuCol xs={6} sm={7} md={8} lg={9} xl={10}>Test Col 11</SeuCol>
  </SeuRow>
</div>
