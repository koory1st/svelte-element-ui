<script lang="ts">
  import { getContext } from 'svelte'
  import { array2StyleString as a2st } from 'array2string'
  import type { Menu } from './obj/Menu'
  import type { Submenu } from './obj/Submenu'
  import { getPadding } from './obj/MenuUtil'
  export let title: string

  let parent: Menu | Submenu = getContext('seu_menu_current')
  let style = a2st([['padding-left', getPadding(parent)]])
</script>

<li class="seu-menu-item-group">
  <div class="seu-menu-item-group__title" {style}>
    {#if !$$slots.title}
      {title}
    {:else}
      <slot name="title" />
    {/if}
  </div>
  <ul>
    <slot />
  </ul>
</li>
