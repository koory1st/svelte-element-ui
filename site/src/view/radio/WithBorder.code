<script lang="ts">
  import { SeuRadio, SeuRadioGroup } from 'svelte-element-ui'
  let radio1 = '1'
  let radio2 = '1'
  let radio3 = '1'
  let radio4 = '1'
</script>

<div>
  <SeuRadio bind:value={radio1} label="1" border>Option A</SeuRadio>
  <SeuRadio bind:value={radio1} label="2" border>Option B</SeuRadio>
</div>

<div style="margin-top: 20px">
  <SeuRadio bind:value={radio2} label="1" border size="medium">Option A</SeuRadio>
  <SeuRadio bind:value={radio2} label="2" border size="medium">Option B</SeuRadio>
</div>

<div style="margin-top: 20px">
  <SeuRadioGroup
    bind:value={radio3}
    options={[
      { value: '1', label: 'Option A' },
      { value: '2', label: 'Option B' },
    ]}
    size="small"
    border
  />
</div>

<div style="margin-top: 20px">
  <SeuRadioGroup
    bind:value={radio4}
    options={[
      { value: '1', label: 'Option A' },
      { value: '2', label: 'Option B' },
    ]}
    size="mini"
    border
    disabled
  />
</div>
