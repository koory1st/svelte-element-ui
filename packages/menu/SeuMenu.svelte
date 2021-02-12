<script type="ts">
  import { array2string as a2s, array2StyleString as a2st } from 'array2string'
  import { setContext, createEventDispatcher } from 'svelte'
  import { writable } from 'svelte/store'
  import { Menu } from './obj/Menu'
  import type { MenuItem } from './obj/MenuItem'
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
  setContext('seu_menu_root_store', menuStore)
  setContext('seu_menu_current', $menuStore)

  setContext('seu_menu_root_select_func', (item: MenuItem): void => {
    dispatch('select', item)
  })

  $: style = a2st([['background-color', backgroundColor, backgroundColor]])
  $: classString = a2s(['seu-menu', ['seu-menu--horizontal', mode === 'horizontal'], ['seu-menu--collapse', collapse]])
</script>

<ul class={classString} {style}><slot /></ul>
