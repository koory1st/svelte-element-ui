<script lang="ts">
  import router from './router'
  let component

  function handleHashChange({ target }) {
    component = router.find(v => v.key === target.location.hash.slice(2)).component
  }

  function handleLoad() {
    window.location.hash
    component = router.find(v => v.key === window.location.hash.slice(2)).component
  }
</script>

<svelte:window on:hashchange={handleHashChange} on:load={handleLoad} />

<svelte:component this={component} />
