<script type="ts">
  import SeuRadioGroup from '../../../packages/radio-group/SeuRadioGroup.svelte'
</script>

<div>
  test component
  <SeuRadioGroup size="medium" options={[{ label: 'a', value: '1' }]} />
  <SeuRadioGroup size="small" options={[{ label: 'a', value: '1' }]} />
  <SeuRadioGroup size="mini" options={[{ label: 'a', value: '1' }]} />
  <SeuRadioGroup border size="medium" options={[{ label: 'a', value: '1' }]} />
  <SeuRadioGroup border size="small" options={[{ label: 'a', value: '1' }]} />
  <SeuRadioGroup border size="mini" options={[{ label: 'a', value: '1' }]} />
  <SeuRadioGroup type="button" size="medium" options={[{ label: 'a', value: '1' }]} />
  <SeuRadioGroup type="button" size="small" options={[{ label: 'a', value: '1' }]} />
  <SeuRadioGroup type="button" border size="mini" options={[{ label: 'a', value: '1' }]} />
</div>
