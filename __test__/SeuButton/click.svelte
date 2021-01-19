<script>
  import SeuButton from '../../packages/button/SeuButton.svelte'
  let text = 'test10-1'
  function handleClick(e) {
    text = 'button clicked'
  }
</script>

<div>
  test component
  <span>{text}</span>
  <SeuButton on:click={handleClick}>Test Button 10</SeuButton>
</div>
