<script lang="ts">
  import { SeuButton, SeuRow } from 'svelte-element-ui'
</script>

<div class="size">
  <SeuRow>
    <SeuButton>Default</SeuButton>
    <SeuButton size="medium">Medium</SeuButton>
    <SeuButton size="small">Small</SeuButton>
    <SeuButton size="mini">Mini</SeuButton>
  </SeuRow>
  <SeuRow>
    <SeuButton round>Default</SeuButton>
    <SeuButton size="medium" round>Medium</SeuButton>
    <SeuButton size="small" round>Small</SeuButton>
    <SeuButton size="mini" round>Mini</SeuButton>
  </SeuRow>
</div>

<style lang="scss">
  :global(.size .seu-row) {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
