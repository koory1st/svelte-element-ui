## What is svelte-element-ui?

svelte-element-ui is a element-ui component library base on Svelte.

## Install

1. Install from npm.

```bash
npm install svelte-element-ui
```

2. import the css in svelte file.

```html
<script lang="ts">
  import "svelte-element-ui/lib/seu.css";
  import { SeuAside, SeuButton } from "svelte-element-ui";
</script>

<SeuAside />
<SeuButton>123</SeuButton>
```

To enable the style effective, [rollup-plugin-css-only](https://www.npmjs.com/package/rollup-plugin-css-only) is needed to add in the **rollup.config.js** as a plugin.

```js
import css from 'rollup-plugin-css-only';

export default {
  ...
  plugins: [
    ...
      css({ output: 'bundle.css' }),
    ...
  ]
  ...
}
```




## Development
### Running Tests

```bash
npm run test
```

## License

[MIT](LICENSE)