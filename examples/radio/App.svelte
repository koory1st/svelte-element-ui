<script lang="ts">
  import { SeuRadioButton, SeuRadioGroup } from '../../src'
  let radio1 = 'New York'
</script>

<div>
  <SeuRadioGroup type="button" bind:value={radio1} options={['New York', 'Washington', 'Los Angeles', 'Chicago']} />
</div>
<div style="margin-top: 20px">
  <SeuRadioGroup v-model="radio2" size="medium">
    <SeuRadioButton label="New York" />
    <SeuRadioButton label="Washington" />
    <SeuRadioButton label="Los Angeles" />
    <SeuRadioButton label="Chicago" />
  </SeuRadioGroup>
</div>
<div style="margin-top: 20px">
  <SeuRadioGroup v-model="radio3" size="small">
    <SeuRadioButton label="New York" />
    <SeuRadioButton label="Washington" disabled />
    <SeuRadioButton label="Los Angeles" />
    <SeuRadioButton label="Chicago" />
  </SeuRadioGroup>
</div>
<div style="margin-top: 20px">
  <SeuRadioGroup v-model="radio4" disabled size="mini">
    <SeuRadioButton label="New York" />
    <SeuRadioButton label="Washington" />
    <SeuRadioButton label="Los Angeles" />
    <SeuRadioButton label="Chicago" />
  </SeuRadioGroup>
</div>
