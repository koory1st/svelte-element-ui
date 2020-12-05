<script>
  import SeuButton from '../../src/button/SeuButton.svelte'
  let text = 'test10-1'
  function handleClick(e) {
    text = 'button clicked'
  }
</script>

<span>{text}</span>
<SeuButton on:click={handleClick}>Test Button 09</SeuButton>
