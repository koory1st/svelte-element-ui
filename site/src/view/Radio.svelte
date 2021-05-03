<script type="ts">
  import BasicUsage from './radio/BasicUsage.svelte'
  import BasicUsageCode from './radio/BasicUsage.code?raw'
  import Disabled from './radio/Disabled.svelte'
  import DisabledCode from './radio/Disabled.code?raw'
  import RadioButtonGroup from './radio/RadioButtonGroup.svelte'
  import RadioButtonGroupCode from './radio/RadioButtonGroup.code?raw'
  import ButtonStyle from './radio/ButtonStyle.svelte'
  import ButtonStyleCode from './radio/ButtonStyle.code?raw'
  import WithBorder from './radio/WithBorder.svelte'
  import WithBorderCode from './radio/WithBorder.code?raw'
</script>

<h2>Radio</h2>
<p>Single selection among multiple options.</p>

<h3>Basic usage</h3>
<p>Radio should not have too many options. Otherwise, use the Select component instead.</p>
<BasicUsage />
<p>
  Creating a radio component is easy, you just need to bind a variable to Radio's value. It equals to the value of label
  of the chosen radio. The type of label is String, Number or Boolean.
</p>
<pre>{ BasicUsageCode }</pre>

<h3>Disabled</h3>
<p>disabled attribute is used to disable the radio.</p>
<Disabled />
<p>You just need to add the disabled attribute.</p>
<pre>{ DisabledCode }</pre>

<h3>Radio button group</h3>
<p>Suitable for choosing from some mutually exclusive options.</p>
<RadioButtonGroup />
<pre>{ RadioButtonGroupCode }</pre>

<h3>Button style</h3>
<p>Radio with button styles.</p>
<ButtonStyle />
<pre>{ ButtonStyleCode }</pre>

<h3>With borders</h3>
<WithBorder />
<pre>{ WithBorderCode }</pre>
