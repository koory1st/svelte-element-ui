<script type="ts">
  import SeuRadioGroup from '../../../packages/radio-group/SeuRadioGroup.svelte'
</script>

<div>
  test component
  <SeuRadioGroup
    border
    options={[
      { label: 'a', value: '1' },
      { label: 'b', value: '2' },
      { label: 'c', value: '3' },
    ]}
  />
</div>
