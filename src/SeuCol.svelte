<script type="ts">
  import { css, styled } from 'SvelteStyledSystem'
  import { getContext } from 'svelte'
  import { theme } from './theme.js'

  export let span = 24
  export let offset
  export let pull
  export let push
  const gutter = getContext('$_seu_row_gutter')
  export let xs
  export let sm
  export let md
  export let lg
  export let xl

  let classList = ['seu-col']
  let styleList = []

  $: {
    classList.push(`seu-col-${span}`)
    xs && classList.push(`seu-col-xs-${xs}`)
    sm && classList.push(`seu-col-sm-${sm}`)
    md && classList.push(`seu-col-md-${md}`)
    lg && classList.push(`seu-col-lg-${lg}`)
    xl && classList.push(`seu-col-xl-${xl}`)
  }

  console.log('$$props :', $$props)
</script>

<div class={classList.join(' ')}>
  <slot />
</div>
