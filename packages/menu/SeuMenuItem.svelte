<script lang="ts">
  import { getContext, createEventDispatcher, onMount } from 'svelte'
  import type { Writable } from 'svelte/store'
  import a2s from '../util/array2string/Array2String'
  import a2st from '../util/array2string/Array2StyleString'
  import type { Menu } from './obj/Menu'
  import { MenuItem } from './obj/MenuItem'
  import { Submenu } from './obj/Submenu'
  import { getPadding } from './obj/MenuUtil'
  const dispatch = createEventDispatcher()

  export let disabled: boolean
  export let index: string

  let rootMenuStore: Writable<Menu> = getContext('seu_menu_root_store')
  let rootProps = $rootMenuStore.props

  let parent: Menu | Submenu = getContext('seu_menu_current')
  let rootSelectFunc: (item: MenuItem) => void = getContext('seu_menu_root_select_func')

  let self: MenuItem = new MenuItem({ index, disabled }, parent, $rootMenuStore)

  // parent.addItem(self)

  $: classString = a2s(['seu-menu-item', ['is-disabled', disabled], ['is-active', $rootMenuStore.isActiveItem(self)]])

  function clickHandler() {
    if (self.props.disabled) {
      return
    }
    rootMenuStore.update(menu => menu.setActive(self))
    rootSelectFunc(self)
    dispatch('select', self)
  }

  $: backgroundColor = rootProps.backgroundColor
  function mouseEnterHandler() {
    if (parent instanceof Submenu) {
      // set parent submenu hovered
      parent.isHovered = true
    }

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
    ['padding-left', getPadding(parent)],
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
  <slot name="title" />
</li>
