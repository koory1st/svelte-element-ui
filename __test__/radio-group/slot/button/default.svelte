<script type="ts">
  import SeuRadioGroup from '../../../../packages/radio-group/SeuRadioGroup.svelte'
  import SeuRadioButton from '../../../../packages/radio-button/SeuRadioButton.svelte'
  let value
</script>

<div>
  test component
  <SeuRadioGroup>
    <SeuRadioButton bind:value label={'1'}>label1</SeuRadioButton>
    <SeuRadioButton bind:value label={'2'}>label2</SeuRadioButton>
    <SeuRadioButton bind:value label={'3'}>label3</SeuRadioButton>
  </SeuRadioGroup>
</div>
