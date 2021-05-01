<script type="ts">
  import Basic from './link/Basic.svelte'
  import BasicCode from './link/Basic.code?raw'
  import Disabled from './link/Disabled.svelte'
  import DisabledCode from './link/Disabled.code?raw'
  import Underline from './link/Underline.svelte'
  import UnderlineCode from './link/Underline.code?raw'
  import Icon from './link/Icon.svelte'
  import IconCode from './link/Icon.code?raw'
</script>

<h2>Link</h2>
<p>Text hyperlink</p>

<h3>Basic</h3>
<p>Basic text link</p>
<Basic />
<pre>{ BasicCode }</pre>

<h3>Disabled</h3>
<p>Disabled state of link</p>
<Disabled />
<pre>{ DisabledCode }</pre>

<h3>Underline</h3>
<p>Underline of link</p>
<Underline />
<pre>{ UnderlineCode }</pre>

<h3>Icon</h3>
<p>Link with icon</p>
<Icon />
<pre>{ IconCode }</pre>
