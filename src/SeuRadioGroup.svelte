<script type="ts">
  import SeuRadio from './SeuRadio.svelte'
  import { styleStr2Array, styleArray2Str, classStr2Array, classArray2Str } from './util/StringUtil'
  export let value: string | number
  export let radios: Array<{ label: string; value: string | number }> = []
  export let size: string
  export let disabled: boolean = false

  let classList = ['seu-radio-group', ...classStr2Array($$props['class'])]

  let styleList = styleStr2Array($$props['style'])
</script>

<div class={classArray2Str(classList)} style={styleArray2Str(styleList)}>
  {#each radios as radio}
    <SeuRadio bind:value {disabled} label={radio.value}>{radio.label || radio.value}</SeuRadio>
  {/each}
</div>
