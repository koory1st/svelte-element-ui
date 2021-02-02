import type { Menu } from './Menu'
import type { Submenu } from './Submenu'
import { addParent } from './MenuUtil'

export class MenuItemProps {
  index?: string
  route?: object
  disabled?: boolean = false
}

export class MenuItem {
  props: MenuItemProps
  parents: Submenu[] = []
  root: Menu

  public constructor(props: MenuItemProps, parent: Menu | Submenu, root: Menu) {
    this.props = props
    this.root = root
    addParent(this, parent)
  }
}
