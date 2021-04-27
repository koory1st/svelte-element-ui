<script lang="ts">
  import { getContext } from 'svelte'
  import { array2string as a2s, array2StyleString as a2st } from 'array2string'

  export let span = 24
  export let offset = 0
  export let pull = 0
  export let push = 0
  export let xs = 0
  export let sm = 0
  export let md = 0
  export let lg = 0
  export let xl = 0

  let gutter: number = getContext('seuRowGutter')

  $: classString = a2s([
    'seu-col',
    [`seu-col-${span}`, Boolean(span)],
    [`seu-col-offset-${offset}`, Boolean(offset)],
    [`seu-col-pull-${pull}`, Boolean(pull)],
    [`seu-col-push-${push}`, Boolean(push)],
    [`seu-col-xs-${xs}`, Boolean(xs)],
    [`seu-col-sm-${sm}`, Boolean(sm)],
    [`seu-col-md-${md}`, Boolean(md)],
    [`seu-col-lg-${lg}`, Boolean(lg)],
    [`seu-col-xl-${xl}`, Boolean(xl)],
  ])

  $: style = a2st([
    ['padding-left', gutter / 2, Boolean(gutter)],
    ['padding-right', gutter / 2, Boolean(gutter)],
  ])
</script>

<div class={classString} {style}>
  <slot />
</div>
