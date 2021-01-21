<script type="ts">
  import SeuLink from '../../packages/link/SeuLink.svelte'
</script>

<div>
  test component
  <SeuLink>seu link 06-default</SeuLink>
  <SeuLink>
    <div slot="icon">seu link 06-icon</div>
  </SeuLink>
</div>
