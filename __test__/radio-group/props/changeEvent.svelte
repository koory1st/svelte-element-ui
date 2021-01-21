<script type="ts">
  import SeuRadioGroup from '../../../packages/radio-group/SeuRadioGroup.svelte'
  let changeValue
  function changeHandler({ detail }) {
    changeValue = detail
  }
</script>

<div>
  test component
  <span>changeValue: {changeValue}</span>
  <SeuRadioGroup
    options={[
      { label: 'a', value: '1' },
      { label: 'b', value: '2' },
      { label: 'c', value: '3' },
    ]}
    on:change={changeHandler}
  />
</div>
