import { SeuPropValidateError } from './ErrorUtil'
import { mixColor } from './ColorUtil'

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
  private items: Array<MenuItem> = []
  activeItem: MenuItem
  openedMenusIndex: Array<string> = []

  get hoverBackground() {
    return this.props.backgroundColor ? mixColor(this.props.backgroundColor, 0.2) : null
  }

  public setActive(item: MenuItem): Menu {
    this.activeItem = item
    return this
  }

  public addItem(item: MenuItem): void {
    this.isDuplicate(item)
    this.items.push(item)

    // set default active
    this.setDefaultActive(item)
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

  private isDuplicate(item: MenuItem): void {
    if (!item.props.index) {
      return
    }
    if (this.items.map(i => i.props.index).includes(item.props.index)) {
      throw new SeuPropValidateError('menu item index is duplicated: ' + item.props.index)
    }
  }
}

export class MenuItemProps {
  index?: string
  route?: object
  disabled?: boolean = false
}

export class MenuItem {
  props: MenuItemProps
  private parent: Menu

  public constructor(props: MenuItemProps, activeFlg: boolean = false) {
    this.props = props
  }

  public setParent(parent: Menu) {
    this.parent = parent
  }
}

// export enum EnumMode {
//   horizontal = 'horizontal',
//   vertical = 'vertical',
// }

// export enum EnumMenuTrigger {
//   hover = 'hover',
//   click = 'click',
// }
