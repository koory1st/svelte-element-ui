<script type="ts">
  import SeuRadioGroup from '../../../packages/radioGroup/SeuRadioGroup.svelte'
  let value
</script>

<div>
  test component
  <span> value: {value} </span>
  <SeuRadioGroup
    bind:value
    options={[
      { label: 'a', value: 1 },
      { label: 'b', value: 2 },
      { label: 'c', value: 3 },
    ]}
  />
</div>
