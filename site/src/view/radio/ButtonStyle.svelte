<script lang="ts">
  import { SeuRadioButton, SeuRadioGroup } from 'svelte-element-ui'
  let radio1 = 'New York'
  let radio2 = 'New York'
  let radio3 = 'New York'
  let radio4 = 'New York'
</script>

<div>
  <SeuRadioGroup type="button" bind:value={radio1} options={['New York', 'Washington', 'Los Angeles', 'Chicago']} />
</div>
<div style="margin-top: 20px">
  <SeuRadioGroup
    type="button"
    size="medium"
    bind:value={radio2}
    options={['New York', 'Washington', 'Los Angeles', 'Chicago']}
  />
</div>
<div style="margin-top: 20px">
  <SeuRadioGroup
    type="button"
    size="small"
    bind:value={radio2}
    options={['New York', 'Washington', 'Los Angeles', 'Chicago']}
  />
</div>
<div style="margin-top: 20px">
  <SeuRadioGroup
    type="button"
    disabled
    size="mini"
    bind:value={radio2}
    options={['New York', 'Washington', 'Los Angeles', 'Chicago']}
  />
</div>
