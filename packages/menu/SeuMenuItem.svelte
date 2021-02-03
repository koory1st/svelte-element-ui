<script type="ts">
  import { getContext, createEventDispatcher, onMount } from 'svelte'
  import type { Writable } from 'svelte/store'
  import { array2string as a2s, array2StyleString as a2st } from 'array2string'
  import type { Menu } from './obj/Menu'
  import { MenuItem } from './obj/MenuItem'
  import type { Submenu } from './obj/Submenu'
  const dispatch = createEventDispatcher()

  export let disabled: boolean
  export let index: string

  let rootMenuStore: Writable<Menu> = getContext('seu_menu_root_store')
  let rootProps = $rootMenuStore.props

  let parent: Menu | Submenu = getContext('seu_menu_current')
  let rootSelectFunc: (item: MenuItem) => void = getContext('seu_menu_root_select_func')

  let self: MenuItem = new MenuItem({ index, disabled }, parent, $rootMenuStore)

  parent.addItem(self)

  $: classString = a2s(['seu-menu-item', ['is-disabled', disabled], ['is-active', $rootMenuStore.isActiveItem(self)]])

  function clickHandler() {
    rootMenuStore.update(menu => menu.setActive(self))
    rootSelectFunc(self)
    dispatch('select', self)
  }

  $: backgroundColor = rootProps.backgroundColor
  function mouseEnterHandler() {
    if (rootProps.mode === 'horizontal' && !rootProps.backgroundColor) {
      return
    }
    backgroundColor = $rootMenuStore.hoverBackground
  }
  function mouseLeaveHandler() {
    if (rootProps.mode === 'horizontal' && !rootProps.backgroundColor) {
      return
    }
    backgroundColor = rootProps.backgroundColor
  }

  $: isActive = $rootMenuStore.isActiveItem(self)
  $: isNested = parent !== $rootMenuStore
  $: color = isActive ? rootProps.activeTextColor : rootProps.textColor
  let borderBottomColor: string
  $: if (rootProps.mode === 'horizontal' && !isNested) {
    borderBottomColor = isActive ? rootProps.activeTextColor : 'transparent'
  }

  $: style = a2st([
    ['color', color],
    ['background-color', backgroundColor],
    ['border-bottom-color', borderBottomColor],
  ])
</script>

<li
  class={classString}
  {style}
  on:click={clickHandler}
  on:mouseenter={mouseEnterHandler}
  on:mouseleave={mouseLeaveHandler}
>
  <slot />
</li>
