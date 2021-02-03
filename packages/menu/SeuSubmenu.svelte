<script type="ts">
  import { getContext, setContext, createEventDispatcher, onMount } from 'svelte'
  import type { Writable } from 'svelte/store'
  import { array2string as a2s, array2StyleString as a2st } from 'array2string'
  import type { Menu } from './obj/Menu'
  import { Submenu } from './obj/Submenu'
  import collapse from 'svelte-collapse'
  import Portal from 'svelte-portal'

  export let index: string
  export let showTimeout: number = 300
  export let hideTimeout: number = 300
  export let popperClass: string
  export let disabled: boolean
  export let popperAppendToBody: boolean = false

  let timeout: number

  let rootMenuStore: Writable<Menu> = getContext('seu_menu_root_store')
  let parent: Menu | Submenu = getContext('seu_menu_current')
  let rootProps = $rootMenuStore.props

  let self: Submenu = new Submenu(
    { index, disabled, showTimeout, popperClass, popperAppendToBody },
    parent,
    $rootMenuStore,
  )
  setContext('seu_menu_current', self)

  parent.addItem(self)

  let divTextColor: string
  let borderBottomColor: string
  $: if (rootProps.mode !== 'horizontal') {
    divTextColor = rootProps.textColor
    borderBottomColor = self.isActive ? rootProps.activeTextColor : 'transparent'
  } else {
    divTextColor = self.isActive ? rootProps.activeTextColor : rootProps.textColor
  }

  $: backgroundColor = rootProps.backgroundColor
  function handleMouseenter(event, showTimeout = this.showTimeout) {
    if (!('ActiveXObject' in window) && event.type === 'focus' && !event.relatedTarget) {
      return
    }
    if (rootProps.mode === 'horizontal' && !rootProps.backgroundColor) {
      return
    }
    backgroundColor = $rootMenuStore.hoverBackground

    clearTimeout(timeout)
    timeout = setTimeout(() => {
      $rootMenuStore.openMenu(self)
      self = self
    }, showTimeout)
  }
  function handleMouseleave(deepDispatch = false) {
    if (rootProps.mode === 'horizontal' && !rootProps.backgroundColor) {
      return
    }
    backgroundColor = rootProps.backgroundColor

    clearTimeout(timeout)
    timeout = setTimeout(() => {
      $rootMenuStore.closeMenu(self)
      self = self
    }, showTimeout)
  }

  let isFirstLevel: boolean
  $: currentPlacement = rootProps.mode === 'horizontal' && isFirstLevel ? 'bottom-start' : 'right-start'

  $: liClass = a2s([
    'seu-submenu',
    ['is-active', self.isActive],
    ['is-opened', self.isOpened],
    ['is-disabled', disabled],
  ])

  const submenuTitleIcon =
    ($rootMenuStore.props.mode === 'horizontal' && isFirstLevel) ||
    ($rootMenuStore.props.mode === 'vertical' && !$rootMenuStore.props.collapse)
      ? 'seu-icon-arrow-down'
      : 'seu-icon-arrow-right'

  $: iconClass = a2s(['seu-submenu__icon-arrow', submenuTitleIcon])
  $: popupDivClass = a2s([`seu-menu--${rootProps.mode}`, popperClass])
  $: popupUlClass = a2s(['seu-menu seu-menu--popup', `seu-menu--popup-${currentPlacement}`])

  $: divStyle = a2st([
    ['color', divTextColor],
    ['background-color', backgroundColor],
  ])
  $: styleBackgroundColor = a2st([['background-color', $rootMenuStore.props.backgroundColor]])

  function handleClick() {}
  function handleTitleMouseenter() {}
  function handleTitleMouseleave() {}
</script>

<li
  class={liClass}
  role="menuitem"
  aria-haspopup="true"
  aria-expanded={self.isOpened}
  on:mouseenter={handleMouseenter}
  on:mouseleave={() => handleMouseleave()}
  on:focus={handleMouseenter}
>
  <div
    class="seu-submenu__title"
    style={divStyle}
    on:click={handleClick}
    on:mouseenter={handleTitleMouseenter}
    on:mouseleave={handleTitleMouseleave}
  >
    <slot name="title" />
    <i class={iconClass} />
  </div>
  {#if $rootMenuStore.isMenuPopup}
    <Portal target="body">
      <div
        use:collapse={{ open: self.isOpened }}
        class={popupDivClass}
        on:mouseenter={$event => handleMouseenter($event, 100)}
        on:mouseleave={() => handleMouseleave(true)}
        on:focus={$event => handleMouseenter($event, 100)}
      >
        <ul role="menu" class={popupUlClass} style={styleBackgroundColor}>
          <slot />
        </ul>
      </div>
    </Portal>
  {:else}
    <ul role="menu" class="seu-menu seu-menu--inline" style={styleBackgroundColor}>
      <slot />
    </ul>
  {/if}
</li>
