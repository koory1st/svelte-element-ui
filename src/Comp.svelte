<script type="ts">
  export let name: String

  let buttonText = 'Button'

  function handleClick() {
    buttonText = 'Button Clicked'
  }
</script>

<h1>Hello {name}!</h1>

<button on:click={handleClick}>{buttonText}</button>
