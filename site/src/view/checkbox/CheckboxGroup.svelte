<script lang="ts">
  import { SeuCheckboxGroup } from 'svelte-element-ui'
  let checkList = ['selected and disabled', 'Option A']
</script>

<div>
  <SeuCheckboxGroup
    bind:group={checkList}
    options={[
      { label: 'Option A', value: 'Option A' },
      { label: 'Option B', value: 'Option B' },
      { label: 'Option C', value: 'Option C' },
      { label: 'disabled', value: 'disabled', disabled: true },
      { label: 'selected and disabled', value: 'selected and disabled', disabled: true },
    ]}
  />
</div>
