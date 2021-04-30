<script type="ts">
  import BasicUsage from './button/BasicUsage.svelte'
  import BasicUsageCode from './button/BasicUsage.code?raw'
  import DisabledButton from './button/DisabledButton.svelte'
  import DisabledButtonCode from './button/DisabledButton.code?raw'
  import TextButton from './button/TextButton.svelte'
  import TextButtonCode from './button/TextButton.code?raw'
  import IconButton from './button/IconButton.svelte'
  import IconButtonCode from './button/IconButton.code?raw'
  import ButtonGroup from './button/ButtonGroup.svelte'
  import ButtonGroupCode from './button/ButtonGroup.code?raw'
  import LoadingButton from './button/LoadingButton.svelte'
  import LoadingButtonCode from './button/LoadingButton.code?raw'
  import SizeButton from './button/SizeButton.svelte'
  import SizeButtonCode from './button/SizeButton.code?raw'
</script>

<h2>Button</h2>
<p>Commonly used button.</p>

<h3>Basic usage</h3>
<BasicUsage />
<p>Use type, plain, round and circle to define Button's style.</p>
<pre>{BasicUsageCode}</pre>

<h3>Disabled Button</h3>
<p>The disabled attribute determines if the button is disabled.</p>
<DisabledButton />
<p>Use disabled attribute to determine whether a button is disabled. It accepts a Boolean value.</p>
<pre>{DisabledButtonCode}</pre>

<h3>Text Button</h3>
<p>Buttons without border and background.</p>
<TextButton />
<pre>{TextButtonCode}</pre>

<h3>Icon Button</h3>
<p>Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.</p>
<IconButton />
<p>
  Use the icon attribute to add icon. You can find the icon list in Element icon component. Adding icons to the right
  side of the text is achievable with an i tag. Custom icons can be used as well.
</p>
<pre>{IconButtonCode}</pre>

<h3>Button Group</h3>
<p>Displayed as a button group, can be used to group a series of similar operations.</p>
<ButtonGroup />
<p>Use tag el-button-group to group your buttons.</p>
<pre>{ButtonGroupCode}</pre>

<h3>Loading Button</h3>
<p>Click the button to load data, then the button displays a loading state.</p>
<LoadingButton />
<p>Set loading attribute to true to display loading state.</p>
<pre>{LoadingButtonCode}</pre>

<h3>Sizes</h3>
<p>
  Besides default size, Button component provides three additional sizes for you to choose among different scenarios.
</p>
<SizeButton />
<p>Use attribute size to set additional sizes with medium, small or mini.</p>
<pre>{SizeButtonCode}</pre>
