<script type="ts">
  import BasicUsage from './checkbox/BasicUsage.svelte'
  import BasicUsageCode from './checkbox/BasicUsage.code?raw'
  import DisabledState from './checkbox/DisabledState.svelte'
  import DisabledStateCode from './checkbox/DisabledState.code?raw'
  import CheckboxGroup from './checkbox/CheckboxGroup.svelte'
  import CheckboxGroupCode from './checkbox/CheckboxGroup.code?raw'
  import Indeterminate from './checkbox/Indeterminate.svelte'
  import IndeterminateCode from './checkbox/Indeterminate.code?raw'
  import MinMax from './checkbox/MinMax.svelte'
  import MinMaxCode from './checkbox/MinMax.code?raw'
  import ButtonStyle from './checkbox/ButtonStyle.svelte'
  import ButtonStyleCode from './checkbox/ButtonStyle.code?raw'
  import WithBorders from './checkbox/WithBorders.svelte'
  import WithBordersCode from './checkbox/WithBorders.code?raw'
</script>

<h2>Checkbox</h2>
<p>A group of options for multiple choices.</p>

<h3>Basic usage</h3>
<p>Checkbox can be used alone to switch between two states.</p>
<BasicUsage />
<pre>{BasicUsageCode}</pre>

<h3>Disabled State</h3>
<p>Disabled state for checkbox.</p>
<DisabledState />
<pre>{DisabledStateCode}</pre>

<h3>Checkbox group</h3>
<p>
  It is used for multiple checkboxes which are bound in one group, and indicates whether one option is selected by
  checking if it is checked.
</p>
<CheckboxGroup />
<pre>{CheckboxGroupCode}</pre>

<h3>Indeterminate</h3>
<p>The indeterminate property can help you to achieve a 'check all' effect.</p>
<Indeterminate />
<pre>{IndeterminateCode}</pre>

<h3>Minimum / Maximum items checked</h3>
<p>The min and max properties can help you to limit the number of checked items.</p>
<MinMax />
<pre>{MinMaxCode}</pre>

<h3>Button style</h3>
<p>Checkbox with button styles.</p>
<ButtonStyle />
<pre>{ButtonStyleCode}</pre>

<h3>With borders</h3>
<WithBorders />
<pre>{WithBordersCode}</pre>
