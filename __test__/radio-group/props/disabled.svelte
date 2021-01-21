<script type="ts">
  import SeuRadioGroup from '../../../packages/radio-group/SeuRadioGroup.svelte'
</script>

<div>
  test component
  <SeuRadioGroup
    options={[
      { label: 'a', value: '1' },
      { label: 'b', value: '2', disabled: true },
      { label: 'c', value: '3' },
    ]}
  />
  <SeuRadioGroup
    disabled
    options={[
      { label: 'a', value: '1' },
      { label: 'b', value: '2' },
      { label: 'c', value: '3' },
    ]}
  />
  <SeuRadioGroup
    disabled
    options={[
      { label: 'a', value: '1' },
      { label: 'b', value: '2', disabled: true },
      { label: 'c', value: '3' },
    ]}
  />
</div>
