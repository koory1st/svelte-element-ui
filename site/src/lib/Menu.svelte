<script lang="ts">
  import { SeuLink } from 'svelte-element-ui'
  import routes from './router'
</script>

{#each routes as route}
  <nav>
    <SeuLink href={`#/${route.key}`}>{route.displayName}</SeuLink>
  </nav>
{/each}
