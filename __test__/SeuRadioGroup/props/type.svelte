<script type="ts">
  import SeuRadioGroup from '../../../packages/radioGroup/SeuRadioGroup.svelte'
</script>

<div>
  test component
  <SeuRadioGroup
    type="button"
    options={[
      { label: 'a', value: '1' },
      { label: 'b', value: '2' },
      { label: 'c', value: '3' },
    ]}
  />
</div>
