<script lang="ts">
  import Basic from './layout/Basic.svelte'
  import BasicCode from './layout/Basic.code?raw'
  import ColumnSpacing from './layout/ColumnSpacing.svelte'
  import ColumnSpacingCode from './layout/ColumnSpacing.code?raw'
  import HybridLayout from './layout/HybridLayout.svelte'
  import HybridLayoutCode from './layout/HybridLayout.code?raw'
  import Alignment from './layout/Alignment.svelte'
  import AlignmentCode from './layout/Alignment.code?raw'
  import ResponsiveLayout from './layout/ResponsiveLayout.svelte'
</script>

<h2>Layout</h2>
<p>Quickly and easily create layouts with the basic 24-column.</p>

<h3>Basic layout</h3>
<p>Create basic grid layout using columns.</p>
<Basic />

<p>With row and col, we can easily manipulate the layout using the span attribute.</p>
<pre>{BasicCode}</pre>

<h3>Column spacing</h3>
<p>Column spacing is supported.</p>
<ColumnSpacing/>
<p>Row provides gutter attribute to specify spacings between columns, and its default value is 0.</p>
<pre>{ColumnSpacingCode}</pre>

<h3>Hybrid layout</h3>
<p>Form a more complex hybrid layout by combining the basic 1/24 columns.</p>
<HybridLayout/>
<pre>{HybridLayoutCode}</pre>

<h3>Alignment</h3>
<p>Use the flex layout to make flexible alignment of columns.</p>
<Alignment/>
<p>You can enable flex layout by setting type attribute to 'flex', and define the layout of child elements by setting justify attribute with start, center, end, space-between or space-around.</p>
<pre>{AlignmentCode}</pre>

<h3>Responsive Layout</h3>
<p>Taking example by Bootstrap's responsive design, five breakpoints are preset: xs, sm, md, lg and xl.</p>
<ResponsiveLayout/>
<pre>{AlignmentCode}</pre>

<h3>Row Attributes</h3>
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
      <td>gutter</td>
      <td>grid spacing</td>
      <td>number</td>
      <td>—</td>
      <td>0</td>
    </tr>
    <tr>
      <td>type</td>
      <td>layout mode, you can use flex, works in modern browsers</td>
      <td>string</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>justify</td>
      <td>horizontal alignment of flex layout</td>
      <td>string</td>
      <td>start/end/center/space-around/space-between</td>
      <td>start</td>
    </tr>
    <tr>
      <td>align</td>
      <td>vertical alignment of flex layout</td>
      <td>string</td>
      <td>top/middle/bottom</td>
      <td>top</td>
    </tr>
  </table>
</div>

<h2>Col Attributes</h2>
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
      <td>span</td>
      <td>number of column the grid spans</td>
      <td>number</td>
      <td>—</td>
      <td>24</td>
    </tr>
    <tr>
      <td>offset</td>
      <td>number of spacing on the left side of the grid</td>
      <td>number</td>
      <td>—</td>
      <td>0</td>
    </tr>
    <tr>
      <td>push</td>
      <td>number of columns that grid moves to the right</td>
      <td>number</td>
      <td>—</td>
      <td>0</td>
    </tr>
    <tr>
      <td>pull</td>
      <td>number of columns that grid moves to the left</td>
      <td>number</td>
      <td>—</td>
      <td>0</td>
    </tr>
    <tr>
      <td>xs</td>
      <td>&lt;768px Responsive columns or column props object</td>
      <td>number</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>sm</td>
      <td>≥768px Responsive columns or column props object</td>
      <td>number</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>md</td>
      <td>≥992px Responsive columns or column props object</td>
      <td>number</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>lg</td>
      <td>≥1200px Responsive columns or column props object</td>
      <td>number</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>xl</td>
      <td>≥1920px Responsive columns or column props object</td>
      <td>number</td>
      <td>—</td>
      <td>—</td>
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