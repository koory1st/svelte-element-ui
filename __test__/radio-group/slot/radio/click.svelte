<script type="ts">
  import SeuRadioGroup from '../../../../packages/radio-group/SeuRadioGroup.svelte'
  import SeuRadio from '../../../../packages/radio/SeuRadio.svelte'
  let value
</script>

<div>
  test component
  <span> value: {value} </span>
  <SeuRadioGroup>
    <SeuRadio bind:value label={'1'}>label1</SeuRadio>
    <SeuRadio bind:value label={'2'}>label2</SeuRadio>
    <SeuRadio bind:value label={'3'}>label3</SeuRadio>
  </SeuRadioGroup>
</div>
