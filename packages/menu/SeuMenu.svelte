<script lang="ts">
  import a2s from '../util/array2string/Array2String'
  import a2st from '../util/array2string/Array2StyleString'
  import { setContext, createEventDispatcher } from 'svelte'
  import { writable } from 'svelte/store'
  import { Menu } from './obj/Menu'
  import type { MenuItem } from './obj/MenuItem'
  import type { Submenu } from './obj/Submenu'
  import transition from './transition'
  const dispatch = createEventDispatcher()

  export let mode: string = 'vertical'
  export let defaultActive: string = ''
  export let defaultOpeneds: Array<string>
  export let uniqueOpened: boolean
  export let router: boolean
  export let menuTrigger: string = 'hover'
  export let collapse: boolean
  export let backgroundColor: string
  export let textColor: string
  export let activeTextColor: string
  export let collapseTransition: boolean = true
  export let popperZIndex: number = 1000

  const menuStore = writable(
    new Menu({
      mode,
      collapse,
      backgroundColor,
      textColor,
      activeTextColor,
      defaultActive,
      defaultOpeneds,
      uniqueOpened,
      menuTrigger,
      router,
      collapseTransition,
      popperZIndex,
    }),
  )

  $: $menuStore.props = {
    mode,
    collapse,
    backgroundColor,
    textColor,
    activeTextColor,
    defaultActive,
    defaultOpeneds,
    uniqueOpened,
    menuTrigger,
    router,
    collapseTransition,
    popperZIndex,
  }
  setContext('seu_menu_root_store', menuStore)
  setContext('seu_menu_current', $menuStore)

  setContext('seu_menu_root_select_func', (item: MenuItem): void => {
    dispatch('select', item)
  })

  setContext('seu_menu_root_submenu_func', (submenu: Submenu, type: string): void => {
    dispatch(type, {
      key: submenu.props.index,
      keyPath: [...submenu.parents.map(v => v.props.index), submenu.props.index],
    })
  })
  $: if (collapse) {
    $menuStore.openedMenus = []
  }

  $: style = a2st([['background-color', backgroundColor, backgroundColor]])
  let classString = a2s(['seu-menu', ['seu-menu--horizontal', mode === 'horizontal'], $$props.class])
</script>

<ul
  use:transition={{
    open: !collapse,
    beforeEnter: el => el.classList.add('horizontal-collapse-transition'),
    doEnter: el => el.classList.remove('seu-menu--collapse'),
    afterEnter: el => el.classList.remove('horizontal-collapse-transition'),
    beforeLeave: el => el.classList.add('horizontal-collapse-transition'),
    doLeave: el => {
      el.classList.add('seu-menu--collapse')
    },
  }}
  role="menubar"
  class={classString}
  {style}
>
  <slot />
</ul>
