<script lang="ts">
  import { SeuRadio, SeuRadioGroup } from 'svelte-element-ui'
  let radio1
  let radio2
</script>

<div>
  <SeuRadioGroup>
    <SeuRadio bind:value={radio1} label="3">Option A</SeuRadio>
    <SeuRadio bind:value={radio1} label="6">Option B</SeuRadio>
    <SeuRadio bind:value={radio1} label="9">Option C</SeuRadio>
  </SeuRadioGroup>
</div>

<div>
  <SeuRadioGroup
    bind:value={radio2}
    options={[
      { value: '3', label: 'Option A' },
      { value: '6', label: 'Option B' },
      { value: '9', label: 'Option C' },
    ]}
  />
</div>
