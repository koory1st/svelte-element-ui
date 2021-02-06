import type { Menu } from './Menu'
import type { MenuItem } from './MenuItem'
import { SeuPropValidateError } from '../../util/ErrorUtil'
import { addParent } from './MenuUtil'

export enum MenuDirectionType {
  horizontal,
  vertical,
}

export class SubmenuProps {
  index?: string
  disabled?: boolean
  showTimeout?: number
  hideTimeout?: number
  popperClass?: string
  popperAppendToBody?: boolean
}

export class Submenu {
  props: SubmenuProps
  parents: Submenu[]
  root: Menu
  private items: (MenuItem | Submenu)[] = []
  get isOpened(): boolean {
    return this.root.openedMenus.includes(this)
  }

  get isActive(): boolean {
    if (!this.root.activeItem) {
      return false
    }

    return this.items.includes(this.root.activeItem)
  }

  get direction(): MenuDirectionType {
    // menu is horizontal, and the first submenu is vertical
    if (!this.parents || this.parents.length === 0) {
      if (this.root.props.mode === 'horizontal') {
        return MenuDirectionType.vertical
      }
    }

    // all others submenu is horizontal
    return MenuDirectionType.horizontal
  }

  get isFirstLevel(): boolean {
    if (this.parents && this.parents.length > 0) {
      return false
    }
    return true
  }

  public constructor(props: SubmenuProps, parent: Menu | Submenu, root: Menu) {
    this.props = props
    this.root = root
    addParent(this, parent)
  }

  public addItem(item: MenuItem | Submenu): void {
    this.isDuplicate(item)
    this.items.push(item)
  }

  private isDuplicate(item: MenuItem | Submenu): void {
    if (!item.props.index) {
      return
    }
    if (this.items.map(i => i.props.index).includes(item.props.index)) {
      throw new SeuPropValidateError('menu item index is duplicated: ' + item.props.index)
    }
  }
}
