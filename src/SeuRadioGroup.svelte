<script type="ts">
  import SeuRadio from './SeuRadio.svelte'
  import { styleStr2Array, styleArray2Str, classStr2Array, classArray2Str } from './util/StringUtil'
  import { setContext } from 'svelte'
  export let value: string | number
  export let radios: Array<{ label: string; value: string | number }> = []
  export let size: string
  export let fill: string
  export let textColor: string
  export let disabled: Boolean

  let classList = ['seu-radio-group', ...classStr2Array($$props['class'])]

  let styleList = styleStr2Array($$props['style'])
  setContext('$seuGroup', { value, disabled, size })
</script>

<div class={classArray2Str(classList)} style={styleArray2Str(styleList)}>
  {#each radios as radio}
    <SeuRadio bind:value label={radio.value}>{radio.label || radio.value}</SeuRadio>
  {/each}
</div>
