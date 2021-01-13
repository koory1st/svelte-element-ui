<script type="ts">
  import SeuRadioGroup from '../../../../src/radio/SeuRadioGroup.svelte'
  import SeuRadioButton from '../../../../src/radio/SeuRadioButton.svelte'
  let value
  let changeValue
  function changeHandler({ detail }) {
    changeValue = detail
  }
</script>

<div>
  test component
  <span>changeValue: {changeValue}</span>
  <SeuRadioGroup on:change={changeHandler}>
    <SeuRadioButton bind:value label={'1'}>label1</SeuRadioButton>
    <SeuRadioButton bind:value label={'2'}>label2</SeuRadioButton>
    <SeuRadioButton bind:value label={'3'}>label3</SeuRadioButton>
  </SeuRadioGroup>
</div>
