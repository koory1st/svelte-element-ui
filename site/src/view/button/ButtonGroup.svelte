<script lang="ts">
  import { SeuButton, SeuButtonGroup } from 'svelte-element-ui'
</script>

<div class="button-group">
  <SeuButtonGroup>
    <SeuButton type="primary" icon="seu-icon-arrow-left">Previous Page</SeuButton>
    <SeuButton type="primary">Next Page<i class="seu-icon-arrow-right seu-icon-right" /></SeuButton>
  </SeuButtonGroup>
  <SeuButtonGroup>
    <SeuButton type="primary" icon="seu-icon-edit" />
    <SeuButton type="primary" icon="seu-icon-share" />
    <SeuButton type="primary" icon="seu-icon-delete" />
  </SeuButtonGroup>
</div>
