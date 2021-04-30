<script lang="ts">
  import { SeuButton, SeuRow } from 'svelte-element-ui'
</script>

<div class="basic-usage">
  <SeuRow>
    <SeuButton>Default</SeuButton>
    <SeuButton type="primary">Primary</SeuButton>
    <SeuButton type="success">Success</SeuButton>
    <SeuButton type="info">Info</SeuButton>
    <SeuButton type="warning">Warning</SeuButton>
    <SeuButton type="danger">Danger</SeuButton>
  </SeuRow>

  <SeuRow>
    <SeuButton plain>Plain</SeuButton>
    <SeuButton type="primary" plain>Primary</SeuButton>
    <SeuButton type="success" plain>Success</SeuButton>
    <SeuButton type="info" plain>Info</SeuButton>
    <SeuButton type="warning" plain>Warning</SeuButton>
    <SeuButton type="danger" plain>Danger</SeuButton>
  </SeuRow>

  <SeuRow>
    <SeuButton round>Round</SeuButton>
    <SeuButton type="primary" round>Primary</SeuButton>
    <SeuButton type="success" round>Success</SeuButton>
    <SeuButton type="info" round>Info</SeuButton>
    <SeuButton type="warning" round>Warning</SeuButton>
    <SeuButton type="danger" round>Danger</SeuButton>
  </SeuRow>

  <SeuRow>
    <SeuButton icon="seu-icon-search" circle />
    <SeuButton type="primary" icon="seu-icon-edit" circle />
    <SeuButton type="success" icon="seu-icon-check" circle />
    <SeuButton type="info" icon="seu-icon-message" circle />
    <SeuButton type="warning" icon="seu-icon-star-off" circle />
    <SeuButton type="danger" icon="seu-icon-delete" circle />
  </SeuRow>
</div>

<style lang="scss">
  :global(.basic-usage .seu-row) {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
