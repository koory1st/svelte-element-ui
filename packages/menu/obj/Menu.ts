import { SeuPropValidateError } from '../../util/ErrorUtil'
import { mixColor } from '../../util/ColorUtil'
import { MenuItem } from './MenuItem'
import type { Submenu } from './Submenu'

export enum ActualMenuTrigger {
  hover,
  click,
}

export class MenuProps {
  mode?: string = 'vertical'
  collapse?: boolean = false
  backgroundColor?: string = '#ffffff'
  textColor?: string = '#303133'
  activeTextColor?: string = '#409EFF'
  defaultActive?: string
  defaultOpeneds?: Array<string>
  uniqueOpened?: boolean = false
  menuTrigger?: string = 'hover'
  router?: boolean = false
  collapseTransition?: boolean = true
  popperZIndex?: number = 1000
}

export class Menu {
  public constructor(props: MenuProps) {
    this.props = props
  }
  props: MenuProps
  private items: Array<MenuItem | Submenu> = []
  allSubmenus: Submenu[] = []

  activeItem: MenuItem
  openedMenus: Submenu[] = []

  get actualMenuTrigger(): ActualMenuTrigger {
    // vertical and not collapse: only click trigger
    if (this.props.mode !== 'horizontal') {
      if (!this.props.collapse) {
        return ActualMenuTrigger.click
      }
      return ActualMenuTrigger.hover
    }

    // horizontal: set by the trigger props
    if (this.props.menuTrigger === 'hover') {
      return ActualMenuTrigger.hover
    }

    return ActualMenuTrigger.click
  }

  get hoverBackground(): string {
    return this.props.backgroundColor ? mixColor(this.props.backgroundColor, 0.2) : null
  }

  get isMenuPopup(): boolean {
    return this.props.mode === 'horizontal' || (this.props.mode === 'vertical' && this.props.collapse)
  }

  public setActive(item: MenuItem): Menu {
    this.activeItem = item
    return this
  }

  public addItem(item: MenuItem | Submenu): void {
    this.checkDuplicate(item)
    this.items.push(item)

    if (item instanceof MenuItem) {
      // set default active
      this.setDefaultActive(item)
    }
  }

  public setDefaultActive(item: MenuItem): void {
    if (!this.props.defaultActive) {
      return
    }

    // already set active, return
    if (this.activeItem) {
      return
    }

    if (this.props.defaultActive === item.props.index) {
      this.activeItem = item
    }
  }
  /**
   * check item is the active one
   * @param item
   */
  public isActiveItem(item: MenuItem): boolean {
    if (!item || !this.activeItem) {
      return false
    }
    return this.activeItem === item
  }

  /**
   * try open menu
   * return true if success opened the submenu
   * return false if failed opened the submenu
   * @param submenu
   */
  public openMenu(submenu: Submenu): boolean {
    if (this.openedMenus.includes(submenu)) {
      return false
    }

    if (this.props.uniqueOpened) {
      this.openedMenus = this.openedMenus.filter(menu => {
        return submenu.parents.includes(menu)
      })
      return false
    }

    this.openedMenus.push(submenu)
    return true
  }

  /**
   * try close menu
   * return true if success closed the submenu
   * return false if failed closed the submenu
   * @param submenu
   */
  public closeMenu(submenu: Submenu): boolean {
    if (submenu.isHovered) {
      return false
    }

    // if trigger is hover and children is hovered, then do nothing
    if (this.actualMenuTrigger === ActualMenuTrigger.hover && submenu.children.find(v => v.isHovered)) {
      return false
    }

    const i = this.openedMenus.indexOf(submenu)
    if (i !== -1) {
      this.openedMenus.splice(i, 1)
    }

    // and try to close other opened menu
    this.openedMenus.forEach(v => this.closeMenu(v))
    return true
  }

  private checkDuplicate(item: MenuItem | Submenu): void {
    if (!item.props.index) {
      return
    }
    if (this.items.map(i => i.props.index).includes(item.props.index)) {
      throw new SeuPropValidateError('menu item index is duplicated: ' + item.props.index)
    }
  }
}
