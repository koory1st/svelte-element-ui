<script type="ts">
  import { getContext, setContext, createEventDispatcher } from 'svelte'
  import type { Writable } from 'svelte/store'
  import { array2string as a2s, array2StyleString as a2st } from 'array2string'
  import { ActualMenuTrigger as ActualMenuTriggerType, Menu } from './obj/Menu'
  import { Submenu, MenuDirectionType } from './obj/Submenu'
  import collapse from 'svelte-collapse'
  import Portal from 'svelte-portal'
  import { createPopperActions } from '../util/SveltePopperJs'
  import { getPadding } from './obj/MenuUtil'

  export let index: string
  export let showTimeout: number = 300
  export let hideTimeout: number = 300
  export let popperClass: string
  export let disabled: boolean
  export let popperAppendToBody: boolean = false

  let timeout: number

  let rootMenuStore: Writable<Menu> = getContext('seu_menu_root_store')
  let parent: Menu | Submenu = getContext('seu_menu_current')
  let rootSelectFunc: (submenu: Submenu, type: string) => void = getContext('seu_menu_root_submenu_func')
  let rootProps = $rootMenuStore.props
  let isOpened = false
  $: {
    isOpened = $rootMenuStore.openedMenus.includes(self)
  }

  let self: Submenu = new Submenu(
    { index, disabled, showTimeout, popperClass, popperAppendToBody },
    parent,
    $rootMenuStore,
  )
  setContext('seu_menu_current', self)

  // parent.addItem(self)
  $rootMenuStore = $rootMenuStore

  $: isActive = $rootMenuStore.activeItem && $rootMenuStore.activeItem.parents.includes(self)

  let divTextColor: string
  let borderBottomColor: string
  $: if (rootProps.mode !== 'horizontal') {
    divTextColor = rootProps.textColor
    borderBottomColor = isActive ? rootProps.activeTextColor : 'transparent'
  } else {
    divTextColor = isActive ? rootProps.activeTextColor : rootProps.textColor
  }

  $: backgroundColor = rootProps.backgroundColor
  /**
   * title and menu part mouse enter
   * @param event
   * @param showTimeout
   */
  function handleMouseEnter(event: MouseEvent | FocusEvent, showTimeout = this.showTimeout) {
    // set the mouse enter background
    setMouseEnterBackground(event)

    // if the trigger type is click, then stop
    if ($rootMenuStore.actualMenuTrigger === ActualMenuTriggerType.click) {
      return
    }

    // if the trigger type is hover, try to open the menu
    tryOpenMenu(showTimeout)
  }

  function handleMouseLeave() {
    // set the mouse leave background
    setMouseLeaveBackground()

    if ($rootMenuStore.actualMenuTrigger === ActualMenuTriggerType.click) {
      return
    }

    tryCloseMenu(hideTimeout)
  }

  function setMouseEnterBackground(event: MouseEvent | FocusEvent) {
    /** set the mouse enter background start */
    if (!('ActiveXObject' in window) && event.type === 'focus' && !event.relatedTarget) {
      return
    }
    if (rootProps.mode === 'horizontal' && !rootProps.backgroundColor) {
      return
    }
    backgroundColor = $rootMenuStore.hoverBackground
  }

  function setMouseLeaveBackground() {
    if (rootProps.mode === 'horizontal' && !rootProps.backgroundColor) {
      return
    }
    backgroundColor = rootProps.backgroundColor
  }

  function tryOpenMenu(showTimeout: number) {
    self.isHovered = true

    clearTimeout(timeout)
    timeout = setTimeout(() => {
      const result = $rootMenuStore.openMenu(self)
      $rootMenuStore = $rootMenuStore

      // if success opened the submenu
      if (result) {
        rootSelectFunc(self, 'open')
      }
    }, showTimeout)
  }

  function tryCloseMenu(hideTimeout: number) {
    self.isHovered = false

    clearTimeout(timeout)
    timeout = setTimeout(() => {
      const result = $rootMenuStore.closeMenu(self)
      $rootMenuStore = $rootMenuStore

      // if success closed the submenu
      if (result) {
        rootSelectFunc(self, 'close')
      }
    }, hideTimeout)
  }

  $: currentPlacement = rootProps.mode === 'horizontal' && self.isFirstLevel ? 'bottom-start' : 'right-start'

  $: liClass = a2s(['seu-submenu', ['is-active', isActive], ['is-opened', isOpened], ['is-disabled', disabled]])

  $: submenuTitleIcon = self.direction === MenuDirectionType.vertical ? 'seu-icon-arrow-down' : 'seu-icon-arrow-right'

  $: iconClass = a2s(['seu-submenu__icon-arrow', submenuTitleIcon])
  $: popupDivClass = a2s([`seu-menu--${rootProps.mode}`, popperClass])
  $: popupUlClass = a2s(['seu-menu seu-menu--popup', `seu-menu--popup-${currentPlacement}`])

  let divBackgroundColor: string = $rootMenuStore.props.backgroundColor
  $: divStyle = a2st([
    ['color', divTextColor],
    ['background-color', divBackgroundColor],
    ['padding-left', getPadding(parent)],
  ])
  $: styleBackgroundColor = a2st([['background-color', $rootMenuStore.props.backgroundColor]])

  let divPopper = a2st([['z-index', $rootMenuStore.props.popperZIndex]])

  function handleClick() {
    if (!self.isOpened) {
      tryOpenMenu(0)
      return
    }
    tryCloseMenu(0)
  }
  function handleTitleMouseenter() {
    if ($rootMenuStore.props.mode === 'horizontal' && !$rootMenuStore.props.backgroundColor) {
      return
    }
    divBackgroundColor = $rootMenuStore.hoverBackground
  }
  function handleTitleMouseleave() {
    if ($rootMenuStore.props.mode === 'horizontal' && !$rootMenuStore.props.backgroundColor) {
      return
    }
    divBackgroundColor = $rootMenuStore.props.backgroundColor
  }

  let popperRef: (
    node: HTMLElement,
  ) => {
    destroy: () => void
  }

  let popperContent: (
    node: HTMLElement,
    initOptions?: any,
  ) => {
    update: (newOptions: any) => void
    destroy: () => void
  }
  let popperOptions: { modifiers: {}[] }

  $: if ($rootMenuStore.isMenuPopup) {
    const popperActions = createPopperActions({
      placement:
        rootProps.mode === 'horizontal' && self.direction === MenuDirectionType.vertical
          ? 'bottom-start'
          : 'right-start',
    })
    popperRef = popperActions.referenceAction
    popperContent = popperActions.contentAction
    popperOptions = {
      modifiers: [
        {
          name: 'flip',
          options: {
            fallbackPlacements: [
              rootProps.mode === 'horizontal' && self.direction === MenuDirectionType.vertical
                ? 'top-start'
                : 'right-end',
            ],
          },
        },
      ],
    }
  }
</script>

<li
  class={liClass}
  role="menuitem"
  aria-haspopup="true"
  aria-expanded={isOpened}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={() => handleMouseLeave()}
  on:focus={handleMouseEnter}
>
  {#if $rootMenuStore.isMenuPopup}
    <div
      use:popperRef
      class="seu-submenu__title"
      style={divStyle}
      on:click={handleClick}
      on:mouseenter={handleTitleMouseenter}
      on:mouseleave={handleTitleMouseleave}
    >
      <slot name="title" />
      <i class={iconClass} />
    </div>
    <Portal target="body">
      <div use:popperContent={popperOptions} style={divPopper}>
        <div
          use:collapse={{ open: isOpened }}
          class={popupDivClass}
          on:mouseenter={$event => handleMouseEnter($event, 100)}
          on:mouseleave={handleMouseLeave}
          on:focus={$event => handleMouseEnter($event, 100)}
        >
          <ul role="menu" class={popupUlClass} style={styleBackgroundColor}>
            <slot />
          </ul>
        </div>
      </div>
    </Portal>
  {:else}
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
    <ul use:collapse={{ open: isOpened }} role="menu" class="seu-menu seu-menu--inline" style={styleBackgroundColor}>
      <slot />
    </ul>
  {/if}
</li>
