import { SeuPropValidateError } from '../../util/ErrorUtil'
import { mixColor } from '../../util/ColorUtil'
import { MenuItem } from './MenuItem'
import type { Submenu } from './Submenu'

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

  private setDefaultActive(item: MenuItem): void {
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

  public openMenu(submenu: Submenu): void {
    if (this.openedMenus.includes(submenu)) {
      return
    }

    if (this.props.uniqueOpened) {
      this.openedMenus = this.openedMenus.filter(menu => {
        return submenu.parents.includes(menu)
      })
      return
    }

    this.openedMenus.push(submenu)
  }

  public closeMenu(submenu: Submenu): void {
    if (submenu.isHovered) {
      return
    }

    // if children is hovered, then do nothing
    if (submenu.children.find(v => v.isHovered)) {
      return
    }

    const i = this.openedMenus.indexOf(submenu)
    if (i !== -1) {
      this.openedMenus.splice(i, 1)
    }

    // and try to close other opened menu
    this.openedMenus.forEach(v => this.closeMenu(v))
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
