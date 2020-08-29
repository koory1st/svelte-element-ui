<script type="ts">
  import { setContext } from 'svelte'
  export let gutter = 0
  export let type: string
  export let justify = 'start'
  export let align = 'top'

  let classList = ['seu-row', $$props['class']]
  let styleList = []

  $: {
    if (justify && justify !== 'start') {
      styleList.push(`--justify:${justify === 'end' ? 'flex-end' : justify}`)
    }

    if (align === 'middle') {
      styleList.push(`--align:center`)
    } else if (align === 'bottom') {
      styleList.push(`--align:flex-end`)
    }

    if (type === 'flex') {
      classList.push('seu-row--flex')
    }
  }

  console.log('$$props :', $$props)

  setContext('$_seu_row_gutter', gutter)
</script>

<div class={classList.join(' ')} style={styleList.length ? styleList.join(';') : null}>
  <slot {gutter} />
</div>
