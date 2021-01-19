<script type="ts">
  import { getContext } from 'svelte'
  import { styleArray2Str, getClass } from '../util/StringUtil'

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

  $: classString = getClass([
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

  let styleList = []

  $: if (gutter) {
    const value = `${gutter / 2}px`
    styleList.push(`padding-left:${value}`)
    styleList.push(`padding-right:${value}`)
  }
</script>

<div class={classString} style={styleArray2Str(styleList)}>
  <slot />
</div>
