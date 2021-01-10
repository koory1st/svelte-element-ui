<script type="ts">
  import SeuRadio from '../SeuRadio.svelte'
  import SeuRadioButton from './SeuRadioButton.svelte'
  import { classArray2Str } from '../util/StringUtil'
  export let value: string | number
  export let radios: Array<{ label: string; value: string | number }> = []
  export let border: boolean = false
  export let size: string
  export let disabled: boolean = false
  export let type: string

  let classList = ['seu-radio-group']
</script>

<div class={classArray2Str(classList)}>
  {#each radios as radio}
    {#if type === 'button'}
      <SeuRadioButton bind:value label={radio.value} {disabled} {border} {size} isGroup on:change>
        {radio.label || radio.value}
      </SeuRadioButton>
    {:else}
      <SeuRadio bind:value label={radio.value} {disabled} {border} {size} isGroup on:change>
        {radio.label || radio.value}
      </SeuRadio>
    {/if}
  {/each}
</div>
