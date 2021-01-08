<script type="ts">
  import SeuLink from '../../src/link/SeuLink.svelte'
  let text = 'test07-1'
  function handleClick(e) {
    text = 'link clicked'
  }
</script>

<div>
  test component
  <span>{text}</span>
  <SeuLink on:click={handleClick}>seu link 07</SeuLink>
</div>
