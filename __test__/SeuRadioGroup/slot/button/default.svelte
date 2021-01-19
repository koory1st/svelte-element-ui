<script type="ts">
  import SeuRadioGroup from '../../../../packages/radioGroup/SeuRadioGroup.svelte'
  import SeuRadioButton from '../../../../packages/radioButton/SeuRadioButton.svelte'
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
