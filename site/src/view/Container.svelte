<script lang="ts">
  import CommonLayouts from './container/CommonLayouts.svelte'
  import CommonLayoutsCode from './container/CommonLayouts.code?raw'
</script>

<h2>Container</h2>

<p>Container components for scaffolding basic structure of the page:</p>

<p>el-container: wrapper container. When nested with a el-header or el-footer, all its child elements will be vertically arranged. Otherwise horizontally.</p>

<p>el-header: container for headers.</p>

<p>el-aside: container for side sections (usually a side nav).</p>

<p>el-main: container for main sections.</p>

<p>el-footer: container for footers.</p>

<p>These components use flex for layout, so please make sure your browser supports it. Besides, el-container's direct child elements have to be one or more of the latter four components. And father element of the latter four components must be a el-container.</p>

<h3>Common layouts</h3>
<CommonLayouts/>
<pre>{CommonLayoutsCode}</pre>

<h3>Example TODO</h3>


<h3>Container Attributes</h3>
<div class="attribute">
  <table>
    <tr>
      <th>Attribute</th>
      <th>Description</th>
      <th>Type</th>
      <th>Accepted Values</th>
      <th>Default</th>
    </tr>
    <tr>
      <td>direction</td>
      <td>layout direction for child elements</td>
      <td>string</td>
      <td>horizontal / vertical</td>
      <td>vertical when nested with el-header or el-footer; horizontal otherwise</td>
    </tr>
  </table>
</div>
<h3>Header Attributes</h3>
<div class="attribute">
  <table>
    <tr>
      <th>Attribute</th>
      <th>Description</th>
      <th>Type</th>
      <th>Accepted Values</th>
      <th>Default</th>
    </tr>
    <tr>
      <td>height</td>
      <td>height of the header</td>
      <td>string</td>
      <td>—</td>
      <td>60px</td>
    </tr>
  </table>
</div>
<h3>Aside Attributes</h3>
<div class="attribute">
  <table>
    <tr>
      <th>Attribute</th>
      <th>Description</th>
      <th>Type</th>
      <th>Accepted Values</th>
      <th>Default</th>
    </tr>
    <tr>
      <td>width</td>
      <td>width of the side section</td>
      <td>string</td>
      <td>—</td>
      <td>300px</td>
    </tr>
  </table>
</div>
<h3>Footer Attributes</h3>
<div class="attribute">
  <table>
    <tr>
      <th>Attribute</th>
      <th>Description</th>
      <th>Type</th>
      <th>Accepted Values</th>
      <th>Default</th>
    </tr>
    <tr>
      <td>height</td>
      <td>height of the footer</td>
      <td>string</td>
      <td>—</td>
      <td>60px</td>
    </tr>
  </table>
</div>

<style lang="scss">
  .attribute {
    th {
      text-align: left;
    }
    td {
      width: 400px;
    }
  }
</style>